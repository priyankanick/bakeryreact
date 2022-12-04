import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
export default function Cart(props) {
    var[nextPage,setNextPage]=useState(false)
    var [items,setItem]=useState([])
    useEffect(()=>{
        setItem(JSON.parse(localStorage.getItem('cart')))
    },[])
  return (
    <>{nextPage?null:<>
        <Modal show={props.cartPage} onHide={()=>props.handleclose()} > 
        <Modal.Header closeButton>
          <Modal.Title>cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      {items.map((item,index)=>{
        return(<div>{item.name}</div>)
      })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={()=>props.handleclose()}>
            Close
          </Button>
          <Button variant="primary" >
            checkout
          </Button>
        </Modal.Footer>
      </Modal>
 
      </>
}
</>
    )
}