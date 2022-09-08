//<script>
/* eslint-disable */
import axios from "axios";
import { reactive, computed, readonly } from "vue";
import router from "@/router";
const BASE = process.env.BASE_URL.split(".")[1]==="https://present"? "https://present.pythonanywhere.com/": "http://127.0.0.1:8000"
//const config = { headers: { 'Authorization' :  `Bearer ${state.user.access_token}` }}

	const state = reactive(
	{
		data : JSON.parse(localStorage.getItem("user")),
		loggedIn: localStorage.getItem("loggedin"),
	}
	);
	const $errors=reactive({});

	const updateStore = function(b){
		state.data = b
	};
	const refreshToken = async function(refresh_token) {
		try {
			const res = await axios.post(`${BASE}/v1/api/auth/token/refresh/`, { refresh_token });
			const resp = res.data
		} catch(errors) {
			return "error"
		}
	};
	const verifyToken = async function(access_token) {
		try {
			const res = await axios.post(`${BASE}/v1/api/auth/token/verify/`, { access_token });
			const resp = res.data.code
			if (resp==="token_not_valid") {
				return "expired"
			}
			return "active"
		} catch(errors) {
			return "error"
		}
	};
	const resetPassword = async function(email) {
		try {
			const res = await axios.post(`${BASE}/v1/api/auth/password/reset/`, { email });
			const resp = res.data
			alert("Password reset successful")
			router.push("/account/confirm_password")
		} catch(errors) {
				alert(errors);
				$errors.code = errors.response.status;
				$errors.message= "Username or password error"
		}
	};
	const login = async function(email, password) {
		try {
			const res = await axios.post(`${BASE}/v1/api/auth/login/`, { email, password });
			const resp = res.data
			localStorage.setItem("user", JSON.stringify(resp));
			//updateStore(resp);
			localStorage.setItem("loggedin", true),
			alert("loggedin")
			//router.push("/")
			location.href="/"
		} catch(errors) {
				$errors.code = errors.response.status;
				$errors.message= "Username or password error"
		}
	};

	const logout = async function(){
		try {
			const res = await axios.post(`${BASE}/v1/api/auth/logout/`)
			const resp = res.data
			localStorage.removeItem("user");
			localStorage.removeItem("loggedin");
			//alert("loggedout")
			//router.push("/account/login")
			location.href="/";
		} catch(errors) {
				return "errors"
		}
		localStorage.removeItem("user");

	};

	const register = async function(kw){
		try {
			const res = await axios.post(`${BASE}/v1/api/auth/signup/`, kw )
			alert(res.data);
		} catch(errors){
			alert( JSON.stringify(errors.response));
		}
	};

	const isAuthenticated = computed(() => Boolean(state.data));
	
	const auth = computed(() => state.data);


	const authRequired = function() {
		if (! isAuthenticated) {
			$router.push(`${BASE}/account/login`)
		}
	};
console.log(JSON.stringify(state.data))
 export default { state,
	 //: readonly(state),
	 			 resetPassword,
				 login, 
				 register,
				 isAuthenticated,
				 authRequired,
	 			 logout,
	 			 auth,
	 			 $errors: readonly($errors),
	 			 BASE,
				}

