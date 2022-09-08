//<script>
import axios from "axios";
import { reactive, ref, readonly } from "vue";
import router from "@/router";
const BASE = process.env.BASE_URL.startsWith("https://present.pythonanywhere")? process.env.BASE_URL: process.env.BASE_URL.split("/")[0]

//const config = { headers: { 'Authorization' :  `Bearer ${state.user.access_token}` }}
const clients = reactive({data: []});

const $errors=reactive({});

const getClients = async function(){
	try {
		const res = await axios.get(`${BASE}/api/students/`)
		clients.data =  res.data
		alert("students get")
	} catch(errors) {
			alert(errors.response)
	}
};
const  addClient = async function(kw) {
      try {
        	const res = await axios.post(`${BASE}/api/students/`, kw)
        	const resp = res.data
	       	alert(JSON.stringify(resp));
        	getClients();
        
      } catch(errors) {
          console.log(errors.response.data);
          $errors.message=errors.response.status;
          $errors.message=errors.response.data;
      }
    };

const  addRoll = async function(user, kw) {
      try {
        const res = await axios.post(`${BASE}/api/rolls/`, {user: user, present: kw})
        const respData = res.data
        alert(respData);
        getClients();
	router.push("/")
      } catch(errors) {
          return "errors"
      }
    };



export default { clients, getClients, addClient,  addRoll}
