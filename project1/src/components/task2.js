//import  from 'react'
import { useEffect, useState } from 'react';
import '../App.css'
import logo from '../logo.svg';
const axios = require('axios').default;

//https://randomuser.me/api/?page=3&results=10&seed=abc
function Task2() 
{
    var [details,setDetails]=useState([])
    var [total,setTotal]=useState(0);
    var [limit,setLimit]=useState(5);
    var [pageNum,setPageNum]=useState();
    var [loder,setloder]=useState(true)
    useEffect(()=>{
        fetchdata(1)
    },[])
    async function fetchdata(page){
        setloder(true)
       var response=await axios.get(`https://randomuser.me/api/?page=${page}&results=${limit}&seed=abc`)
    
       setDetails(response.data.results)
       setTotal(80)
       setloder(false)
       
       
       
    }
    useEffect(()=>{
        setPageNum(parseInt(total/limit))
        console.log("===================>>>>>>>",pageNum)
       },[total])
      
  return (
    <>
    <div>

        {details.map((e,i)=>{
            return(
                
                <div>
                
                <img className="img" src={Object.keys(e).length==0?"":e.picture.large}/>
                
                <div>Name :{Object.keys(e).length==0?"":e.name.first}</div>
                <div>Email :{Object.keys(e).length==0?"":e.email}</div>
                <div>Gender :{Object.keys(e).length==0?"":e.gender}</div>
                <div>Date of birth :{Object.keys(e).length==0?"":e.dob.date}</div>
    </div>
            )
        })}
        
         {Array.from({ length: pageNum }, (_, i) =>{ return(<button key={i} onClick={()=>fetchdata(i+1)}>{i+1}</button>)})}
         <div className='Loader' style={{display:loder?'block':'none'}}><img className="App-logo" src={logo}></img></div>
    </div>
    </>
  )
}

export default Task2;