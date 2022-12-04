import { useEffect, useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import PaymentSucces from './paymentSucces'
import DatePicker from "react-datepicker";
import moment from 'moment'

import "react-datepicker/dist/react-datepicker.css";
export default function Carddetails() {
  var [show, setshow] = useState(false);
  var [cardnumber, setcardnumber] = useState("");
  var [date, setdate] = useState("");
  var [cvv, setcvv] = useState("");
  var [amount, setamount] = useState("");
  var [cardname, setcardname] = useState("");
  var [error, seterror] = useState({})
  var [nextPage, setNextPage] = useState(false)
  var [arr, setarr] = useState([])
  useEffect(()=>{
console.log(date)
  },[date])
  var handelchange = (e, i) => {
     if (i=='i5')
     {
      setamount(e.target.value)
     }
    else if (i == 'i1') {
      setcardnumber(e.target.value)
    }

    else if (i == 'i2') {
      setdate(e.target.value)
    }
    else if (i == 'i3') {
      setcvv(e.target.value)
    }
    else {
      setcardname(e.target.value)
    }
  }
  useEffect(()=>{
    console.log("=====>", arr )
   },[arr])
    var handleSave = () => {
      if(validation()){
      setarr([...arr,{cardnumber:cardnumber,date:moment(date).format('DD/MM/YYYY'),cvv:cvv,cardname:cardname}]);
        }
     
    }
  var handelclear = () => {
    setcardname("")
    setcardnumber("")
    setcvv("")
    setdate("")
    setamount("")
  }
  var validation = () => {

    if ( amount == "" && cardnumber == "" && date == "" && cvv == "" && cardname == "") {
      seterror({
        "amount": 'enter the paying amount',
        "cardnumber": 'enter 13 digits card number',
        "date": ' enter validation date',
        "cvv": 'enter cvv',
        "cardname": 'enter card holder name'
      })
      return false;
    }
  
    else {
      if (amount.length ==null) {
        seterror({ "amount": 'enter the paying amount' })
        return false;
      }
      if (cardnumber.length < 13) {
        seterror({ "cardnumber": 'Full Name must be 13 digits long!' })
        return false;
      }
      else if (cvv.length < 3 || cvv.length > 3) {
        seterror({ "cvv": 'cvv must be 3 digit!' })
        return false;
      }
      else if (cardname.length < 5) {
        seterror({ "cardname": 'card Name must be 5 characters long!' })
        return false;
      }
      else if (!(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(moment(date).format('DD/MM/YYYY'))      )) {
        seterror({ "date": 'date not valid!' })
        return false;

      }
      else {
        seterror({})
        setshow(true)
        setNextPage(true)
        console.log(date)
        return true;
      }
    }
  }
  return (
    <>
      {nextPage ? <PaymentSucces /> : <>
        <div className='m-5'>
        <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Paying Amount</Form.Label>
            <Form.Control value={amount} onChange={(e) => handelchange(e, 'i5')} placeholder="Enter amount" />
            <p style={{ color: 'red' }}>{error.hasOwnProperty("amount") ? error.amount : ""}</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Card number</Form.Label>
            <Form.Control value={cardnumber} onChange={(e) => handelchange(e, 'i1')} placeholder="Enter 13 digit number" />
            <p style={{ color: 'red' }}>{error.hasOwnProperty("cardnumber") ? error.cardnumber : ""}</p>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Date</Form.Label>
              {/* <Form.Control value={date} onChange={(e) => handelchange(e, 'i2')}/> */}
              <DatePicker 
              selected={date} 
              onChange={(dateEvent) =>{
                setdate(dateEvent)
                }} />
              <p style={{ color: 'red' }}>{error.hasOwnProperty("date") ? error.date : ""}</p>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>CVV</Form.Label>
              <Form.Control value={cvv} onChange={(e) => handelchange(e, 'i3')} placeholder="Enter 3 digit number"  />
              <p style={{ color: 'red' }}>{error.hasOwnProperty("cvv") ? error.cvv : ""}</p>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Name on the card</Form.Label>
            <Form.Control value={cardname} onChange={(e) => handelchange(e, 'i4')} placeholder="Enter name" />
            <p style={{ color: 'red' }}>{error.hasOwnProperty("cardname") ? error.cardname : ""}</p>
          </Form.Group>
          <Button className='ms-3' onClick={() => { { handleSave() } }}>pay </Button>
          <Button className='ms-3' onClick={() => { handelclear() }}>Cancel</Button>
        </div>
      </>
      }
    </>
  )
}
