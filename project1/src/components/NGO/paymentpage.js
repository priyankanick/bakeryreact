import React from 'react'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import Carddetails from './carddetails'
export default function Paymentpage() {
  var[nextPage,setNextPage]=useState(false)
  function pay(){
    console.log("pay")
    setNextPage(true)
    return(<>
    <div>payment</div>
    </>)
  }
  return (
    <>
    { nextPage?<Carddetails/>:<>
    <div className="container my-3">
    <h1>Payment Methods</h1> 
    </div>
    <div>
      <span>Credit card</span><input type='radio' name='payment'/> 
    </div>
    <div><span>Dabit card</span><input type='radio' name='payment'/> </div>
      
     <div><span>UPI</span><input type='radio' name='payment'/></div> 
   <Button onClick={()=>pay()}>payment</Button>
    </>
 }
  </>
  )
}
