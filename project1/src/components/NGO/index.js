import { useEffect, useState } from 'react';
import '../../App.css'
import { Button } from 'react-bootstrap';
import Paymentpage from './paymentpage'
export default function Index() {

  var [show, setshow] = useState(false);
  var [error, seterror] = useState({})
  // var [submit, setsubmit] = useState(false);
  var [arr, setarr] = useState([])
  var [name, setname] = useState("");
  var[ph,setph]=useState("");
  var[address,setaddress]=useState("");
  var [email, setemail] = useState("");
  var[nextPage,setNextPage]=useState(false)
  // var [DataObject,setDataObject]=useState({});

 useEffect(()=>{
  console.log("=====>", arr )
 },[arr])
  var handleSave = () => {
    if(validation()){
    setarr([...arr,{name:name,email:email,ph:ph}]);
      }
   
  }

  var handelchange = (e, i) => {
    if (i == 'i1') {
      setph(e.target.value)
    }
   
    else if(i=='i2'){
      setaddress(e.target.value)
    }
    else if(i=='i3')
    {
      setname(e.target.value)
    }
    else
    {
      setemail(e.target.value)
    }
  }

  var validation = () => {

    if (name == "" && email == ""&& ph =="" && address=="") {
      seterror({
        "name": 'Full Name must be 5 characters long!',
        "email": ' Enter an Email id',
        "ph":'Enter your 10 digit mobile number',
        "address":'Address cant be Null'
      })
      return false;
    }
    else {
      if (name.length < 5) {
        console.log("name.length=>", name.length);
        seterror({ "name": 'Full Name must be 5 characters long!' })
        return false;
      }
      else if(address.length < 3)
      {
        seterror({"address":'address cant be Null'})
        return false;
      }
      else if(ph.length<10 || ph.length>10){
      seterror({"ph":'Phone number must be 10 digit!'})
      return false;
      }
      
       else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        seterror({ "email": 'email not valid!' })
        return false;

      } else {
        seterror({})
        setshow(true)
        setNextPage(true)
        return true;
      }
    }

  }
  return (
   <>
  { nextPage?<Paymentpage/>:<>
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <img className="img" src="https://thumbs.dreamstime.com/b/ngo-letter-technology-logo-design-white-background-creative-initials-concept-253007787.jpg"  alt="" width="50" height="50"/>
                    <span className="nav">
                      NGO

                      </span>
                </a>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact_Us</a>
        </li>
      </ul>
    </div>
  </nav>   

   <div className="container my-3">
        <h1>Fill your details</h1> 
        </div>
        <div className="row mb-3">
                
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => handelchange(e, 'i3')} placeholder="Enter Name"/>
                </div>
            </div>
            <p style={{ color: 'red' }}>{error.hasOwnProperty("name") ? error.name : ""}</p>

            <div className="row mb-3">
                
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="address" value={address} onChange={(e) => handelchange(e, 'i2')} placeholder='Enter your address' />
                </div>
            </div>
            <p style={{ color: 'red' }}>{error.hasOwnProperty("address") ? error.address : ""}</p>


            <div className="row mb-3">
                
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="ph" value={ph} onChange={(e) => handelchange(e, 'i1')}  placeholder="Enter Mobile Number"/>
                </div>
            </div>
            <p style={{ color: 'red' }}>{error.hasOwnProperty("ph") ? error.ph : ""}</p>


            <div className="row mb-3">
                
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="email" value={email} onChange={(e) => handelchange(e, 'i4')} placeholder="Enter Email Id" />
                </div>
            </div>
            <p style={{ color: 'red' }}>{error.hasOwnProperty("email") ? error.email : ""}</p>
            
            <Button variant="primary" onClick={() => { handleSave() }}>
            Save & continue
          </Button>

          </>
}
   </>
  )
}
