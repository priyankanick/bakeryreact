import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import Userdetails from './userdetails';
export default function Login() {
    var [userid, setuserid] = useState("");
    var [password, setpassword] = useState("");
    var[nextPage,setNextPage]=useState(false)
    let loginapicall =async () => {
        try{
        let data={}
        data["username"]=userid
        data["password"]=password
        let loginDetails=await axios.post('http://localhost:5000/login/',data);
        //console.log("===>>",loginDetails.data.token)
        localStorage.setItem("token",loginDetails.data.token)
        setNextPage(true)

        }catch(err){
            alert(err.response.data.message)
            console.log("===============>>",err.response.data.message)
        }

    }
    var handelchange = (e, i) => {
        if (i == 'i1') {
            setuserid(e.target.value)
        }
        else {
            setpassword(e.target.value)
        }
    }
    return (
        <>{ nextPage?<Userdetails/>:<>
      
            <Form.Control size="lg" type="text" onChange={(e) => handelchange(e, 'i1')} placeholder="user id" />
            <br />
            <Form.Control type="text" onChange={(e) => handelchange(e, 'i2')} placeholder="password" />
            <br />
            <Button className='ms-3' onClick={()=>{loginapicall()}}>submit</Button>

       
        </>
}
</>
    )
}
