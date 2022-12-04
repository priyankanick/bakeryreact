import { useState, useEffect } from 'react';
import Registration from './reg';
// or less ideally
import { Button,Modal } from 'react-bootstrap';
import '../../App.css'
function Login() {
    var [name, setname] = useState("");
    var [email, setemail] = useState("");
    var [error, seterror] = useState({});
    var [show, setshow] = useState(false);
    var [submit, setsubmit] = useState(false);
    var handelclear = () => {
        setname("")
        setemail("")

    }
    var handelchange = (e, i) => {
        console.log(e.target.name)
        if (i == 'i1'){
            setname(e.target.value)
        }
        else
            setemail(e.target.value)

    }
    var handleClose=()=>{
        //setsubmit(true)
        setshow(false);
    }
    var handelSave=()=>{
        setshow(false);
        setsubmit(true)
    }
    var validation=()=>{
       
        if(name=="" && email==""){
            //alert('login unsuccessful')
            seterror({"name":'Full Name must be 5 characters long!',
                    "email":'email not valid!'})
        }
        else{
            if(name.length <5){
                console.log("name.length=>",name.length);
                seterror({"name":'Full Name must be 5 characters long!'})
                }else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
                {
                    seterror({"email":'email not valid!'})
                    
                }else{
                    seterror({})
                    setshow(true)
                    
                    //alert('login successful')
                }
        }
           
    }
    
    return (
        <>
           { (!submit)?<div className='text' >
                Student Login
                <div className='margin'>
                    <div> Enter student name <input type='text'required name="name" value={name} onChange={(e) => handelchange(e, 'i1')}></input>
                    <p style={{color:'red'}}>{error.hasOwnProperty("name")?error.name:""}</p></div>
                    <div> Enter student email <input type='text'name='email' value={email} onChange={(e) => handelchange(e, 'i2')}></input><p style={{color:'red'}}>{error.hasOwnProperty("email")?error.email:""}</p></div>
                    <Button as="input" type="button" value="login" onClick={() => { validation() }}/>
                </div>
            </div>
      :<Registration/>}
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={ handelSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default Login;