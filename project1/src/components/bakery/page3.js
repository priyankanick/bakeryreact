import { useEffect, useState } from 'react';
import '../../App.css'
import { Button } from 'react-bootstrap';
import NavBar from './navBar';
function Page3() {
  return (
    <>
    
    <NavBar/>

  <div className="container my-3">
        <h4>PAYMENT OPTIONS</h4> 
        <h6>Cash On Delivary(Cash/Card/UPI)</h6>

          <div className="row mb-3">
                
                <div className="col-sm-10">
                   <h4>PRICE DETAILS</h4>
                 <div>Total MRP</div>
                 <div>Convenience Fee</div>
                 <div>Total Amount</div>
                </div>
            </div>
            <Button variant="primary" onClick={() => {  }}>
            CONTINUE
          </Button>
          </div>
    </>
  )
}

export default Page3