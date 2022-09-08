//<script>
import axios from "axios";
import { reactive } from "vue";
const BASE = process.env.BASE_URL.startsWith("https://present.pythonanywhere")? process.env.BASE_URL: process.env.BASE_URL.split("/")[0]

//const config = { headers: { 'Authorization' :  `Bearer ${state.user.access_token}` }}
const byGrades = reactive({data: {}});
const byGenders = reactive({data: {}});

const getAllGrade = async function(){
	try {
		const res = await axios.get(`${BASE}/api/stats/student/class/?grade=all`)
		byGrades.data =  res.data
	} catch(errors) {
			alert(errors.response)
	}
};
const  getAllGender = async function() {
      try {
        const res = await axios.get(`${BASE}/api/stats/student/class/?gender=all`)
        byGenders.data = res.data
	alert("got");
      } catch(errors) {
          alert(errors.response);
      }
    };
export default { byGrades, byGenders, getAllGender, getAllGrade }
