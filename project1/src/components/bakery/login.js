import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
export default function Login(props) {
    var [userid, setuserid] = useState("");
    var [password, setpassword] = useState("");
    var[nextPage,setNextPage]=useState(false)
    let loginapicall =async () => {
        try{
        let data={}
        data["username"]=userid
        data["password"]=password
        let loginDetails=await axios.post('http://localhost:5000/login/',data);
        console.log("===>>",loginDetails)
        localStorage.setItem("token",loginDetails.data.token)
        setNextPage(true)
        props.handleclose()
        await current_user_api_call(loginDetails.data.token)
        }catch(err){
            alert(err)
            console.log("===============>>",err.response.data.message)
        }

    }
    var current_user_api_call=async (t)=>{
        var token={}
        token["token"]=t;//localStorage.getItem("token")
        console.log("===>",token)
        let responce=await axios({
            method: 'get',
            url: 'http://localhost:5000/current_user',
            headers: token
          
        });
        console.log("=========>>",responce)
        localStorage.setItem("user_id",responce.data.id)
        localStorage.setItem("user_name",responce.data.name)
        localStorage.setItem("email",responce.data.email)
        props.loginSuccess()
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
        <>{nextPage?null:<>
            <Modal show={props.nextPage} onHide={()=>props.handleclose()}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control size="lg" type="text" onChange={(e) => handelchange(e, 'i1')} placeholder="user id" />
            <br />
            <Form.Control type="text" onChange={(e) => handelchange(e, 'i2')} placeholder="password" />
            <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>props.handleclose()}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{loginapicall()}}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
        </>
}
</>
    )
}
