import { useState,useEffect } from "react";
import '../../App.css'
function Registration() {
    var [name, setname]=useState("");
    var [email, setemail]=useState("");
    var [phon, setphon]=useState("");
    var [add1, setadd1]=useState("");
    var [add2, setadd2]=useState("");

    var handelclear = () => {
        setname("")
        setemail("")
        setphon("")
        setadd1("")
        setadd2("")
    }
    return (
     <>
      
      {/* <div className="mb-3">
  <label for="exampleFormControlInput1" className=""="form-label">Email address</label>
  <input type="email" className=""="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div> */}


     <div className='text'>
     Student Registration Form
     <div className="margin">
     <div>Enter Student Name <input type='text' value={name} name="i1" onChange={(e) => setname(e.target.value)}></input></div>
     <div>Enter Student Email <input type='text' value={email} onChange={(e) => setemail(e.target.value)}></input></div>
     <div>Enter Student Phon-number<input type='number'value={phon} onChange={(e) => setphon(e.target.value)}></input></div>
     <div>Enter Student Address1 <input type='text'value={add1} onChange={(e) => setadd1(e.target.value)}></input></div>
     <div>Enter Student Address2 <input type='text'value={add2} onChange={(e) => setadd2(e.target.value)}></input></div>
     <button style={{ backgroundColor: "blue" }}>submit</button>
     <button style={{ backgroundColor: "blue" }} onClick={() => { handelclear(); }}>clear</button>

     </div>
     </div>
     </>
    )
}
export default Registration;