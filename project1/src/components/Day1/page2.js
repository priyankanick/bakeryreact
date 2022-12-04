import { useEffect, useState } from 'react';
import '../../App.css'
import logo from '../../logo.svg';

const axios = require('axios').default;

function Api_call()
{
    var [details,setDetails]=useState({})
    var [loder,setloder]=useState(true)
    useEffect(()=>{
        fetchdata()
    },[])
    async function fetchdata(){
        setloder(true)
       var response=await axios.get('https://randomuser.me/api/')
      
        setDetails(response.data.results[0])
        console.log(response.data.results[0])
        setloder(false)
    }
return(
    <>
    <div className='Loader' style={{display:loder?'block':'none'}}><img className="App-logo" src={logo}></img></div>
    <img className="img" src={Object.keys(details).length==0?"":details.picture.large}/>
    <div className="text">
    <div>Name :{Object.keys(details).length==0?"":details.name.first}</div>
    <div>Email :{Object.keys(details).length==0?"":details.email}</div>
    <div>Gender :{Object.keys(details).length==0?"":details.gender}</div>
    <div>Date of birth :{Object.keys(details).length==0?"":details.dob.date}</div>
    <button onClick={fetchdata}>next</button>
    </div>
    </>
)
}
export default Api_call;