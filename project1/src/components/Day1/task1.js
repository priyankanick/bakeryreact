import React from 'react'
import { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
function Task1() {
  var [show, setshow] = useState(false);
  var [name, setname] = useState("");
  var [email, setemail] = useState("");
  var [error, seterror] = useState({})
  var [submit, setsubmit] = useState(false);
  var [arr, setarr] = useState([])
  var[edit, setedit]=useState(false);
  var[edit_index,setEditIndex]=useState();
  
  const handleClose = () => {
    handleclear();
    setshow(false);}
  const handleShow = () => {
    setsubmit(false);
    handleclear();
    setshow(true);
  }

  var handleSave = () => {
    if(validation()){
      setshow(false);
      setsubmit(true);
      if(edit){
        console.log("in side edit");
        setedit(false);
        let temp_arr=arr;
        temp_arr[edit_index]={name:name,email:email}
      }else{
        setarr([...arr,{name:name,email:email}]);
      }
    }
   
  }
  var handelchange = (e, i) => {
    console.log(e.target.name)
    if (i == 'i1') {
      setname(e.target.value)
    }
    else
      setemail(e.target.value)

  }
var deletetask=(i)=>{
  console.log("ffffffffff")
  setarr(current =>
    current.filter((item,index)=> {
      if(index!=i){
      return item;
      }
      
    }))
console.log(i);
}
var update=(i) =>{
  setshow(true);
  setedit(true);
  setEditIndex(i)
  //handelchange();
  setname(arr[i].name)
  setemail(arr[i].email)
  }

  var handleclear = () => {
    setname("")
    setemail("")
  }
  var validation = () => {

    if (name == "" && email == "") {
      seterror({
        "name": 'Full Name must be 5 characters long!',
        "email": 'email not valid!'
      })
      return false;
    }
    else {
      if (name.length < 5) {
        console.log("name.length=>", name.length);
        seterror({ "name": 'Full Name must be 5 characters long!' })
        return false;
      } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        seterror({ "email": 'email not valid!' })
        return false;

      } else {
        seterror({})
        setshow(true)
        return true;
      }
    }

  }

  return (
    <>


      <Button variant="primary" onClick={handleShow}>
        start
      </Button>
<div>
  {
  //JSON.stringify(arr)
    arr.map((item,index)=>{return(
      <div key={index} className="mt-2" style={{background:"yellow"}}>
      <div>{item.name}</div>
      <div>{item.email}</div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <Button variant="danger" onClick={()=>deletetask(index)}>
        delete
      </Button>
      <Button variant="btn btn-success" onClick={()=>{update(index)}}>
        update
      </Button>
      </div>
      </div>)})
      }
</div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{edit?"Update user":"Add user"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="name" name="name" value={name} onChange={(e) => handelchange(e, 'i1')}
                placeholder="name"
                autoFocus
              />
              <p style={{ color: 'red' }}>{error.hasOwnProperty("name") ? error.name : ""}</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email" name='email' value={email} onChange={(e) => handelchange(e, 'i2')}
                placeholder="name@example.com"
                autoFocus
              />
              <p style={{ color: 'red' }}>{error.hasOwnProperty("email") ? error.email : ""}</p>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { handleClose(); }}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { handleSave() }}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>




  );
}
export default Task1