import React from 'react'
import { useState } from 'react';
export default function Loop() {
    var [arr,setArr]=useState([1,2,3,4,5]);
  return (
    
    <div>{
        arr.map((i)=>(
            <div>{i}</div>
        ))
    }</div>
  )
}
