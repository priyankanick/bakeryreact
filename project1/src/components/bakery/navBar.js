import React, { useEffect, useState } from 'react'
import Cart from './cart';
import Login from './login'

export default function NavBar() {
    var [nextPage,setNextPage]=useState(false);
    let [user_name,setUser_name]=useState("");
    let [token,setToken]=useState("");
    let [cartPage,setCartPage]=useState(false)
    var validation = () => {
        setNextPage(true);
        console.log("===================>>")
    }
    let cart=()=>{
      //setToken(localStorage.getItem("token"))
      
      if(token){
        setCartPage(true);
       
      }else{
        setNextPage(true);
      }
    }

    let loginSuccess=()=>{
      setToken(localStorage.getItem("token"))
      setUser_name(localStorage.getItem("user_name"))
    }
    var handleclose=()=>{
        setNextPage(false);
        setCartPage(false)

    }
    var logout=()=>{
      localStorage.clear()
      setUser_name("")
    }
    useEffect(()=>{
      setToken(localStorage.getItem("token"))
      console.log("===========>>",localStorage.getItem("token")) 
      console.log("===========>>",localStorage.getItem("user_name")) 
      if(token){
        setUser_name(localStorage.getItem("user_name"))
      }
    })
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <img className="img" src="https://cdn4.vectorstock.com/i/1000x1000/35/38/cake-shop-logo-baking-and-bakery-house-emblem-vector-19953538.jpg"  alt="" width="50" height="50"/>
                    <span className="nav">
                        Cake Delight
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
          {user_name?<div className="nav-link active" aria-current="page" onClick={() => { logout() }}>{user_name}(logout) </div>: <div className="nav-link active" aria-current="page" onClick={() => { validation() }}>login</div>}
         
        </li>
        <li className="nav-item">
          <a className="nav-link"  onClick={() => { cart() }}>Cart</a>
        </li>
      </ul>
    </div>
    {nextPage?<Login
    nextPage={nextPage}
    handleclose={handleclose}
    loginSuccess={loginSuccess}
    />:null}
{cartPage?<Cart
    cartPage={cartPage}
    handleclose={handleclose}
 />:null }

  </nav> 
  )
}
