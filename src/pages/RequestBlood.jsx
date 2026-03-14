import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

function RequestBlood() {

const [form,setForm]=useState({
patientName:"",
bloodGroup:"",
city:"",
unitsRequired:"",
contactNumber:""
});

const navigate=useNavigate();

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const handleSubmit=async(e)=>{
e.preventDefault();

try{
await API.post("/request-blood",form);
alert("Blood Request Sent Successfully");
navigate("/home");
}catch(err){
console.log(err);
}
};

return(


<div >

      <Navbar />

<div className="min-h-screen flex items-center justify-center bg-red-50">

<div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

<h1 className="text-2xl font-bold text-center text-red-600 mb-6">
Request Blood
</h1>

<form onSubmit={handleSubmit} className="space-y-4">

<input
name="patientName"
placeholder="Patient Name"
onChange={handleChange}
className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
/>

<select
name="bloodGroup"
onChange={handleChange}
className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
>
<option value="">Select Blood Group</option>
<option>A+</option>
<option>A-</option>
<option>B+</option>
<option>B-</option>
<option>AB+</option>
<option>AB-</option>
<option>O+</option>
<option>O-</option>
</select>

<input
name="city"
placeholder="City"
onChange={handleChange}
className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
/>

<input
type="number"
name="unitsRequired"
placeholder="Units Required"
onChange={handleChange}
className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
/>

<input
name="contactNumber"
placeholder="Contact Number"
onChange={handleChange}
className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
/>

<button
className="bg-red-500 hover:bg-red-600 text-white w-full py-3 rounded-lg font-semibold transition"
>
Request Blood
</button>

</form>

</div>

</div>
</div>

);

}

export default RequestBlood;