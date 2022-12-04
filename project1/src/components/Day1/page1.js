
import { useState,useEffect } from 'react';

function Day1() {
  var [y,sety]=useState(0);
  var [x,setx]=useState(0);
  var [z,setz]=useState(0);
 var hendelClick=(i)=>{
  if(i=='+')
    setz(parseInt(y)+ parseInt(x))
    else 
    if(i=='-')
    setz(parseInt(y)- parseInt(x))
    else 
    if(i=='*')
    setz(parseInt(y)* parseInt(x))
    else 
    if(i=='/')
    setz(parseInt(y)/ parseInt(x)) 
  }
  var handelchange=(e,i)=>{
    console.log(e.target.value);
    console.log(i)
    if(i=='i1')
      sety(e.target.value)
    else
      setx(e.target.value)
      
  }
  var handelclear=()=>{
    setx(0)
    sety(0)
    setz(0)
  }
  useEffect(() => console.log(y), [y]);
  return (
    <>
    PRIYANKA
    <div>x={x}</div>
    <div>y={y}</div>
    ans={z}
    <div>
    input1<input type="number" value ={y} onChange={(e)=>handelchange(e,'i1')}/>
    input2<input type="number" value ={x} onChange={(e)=>handelchange(e,'i2')}/>
    <button onClick={()=>hendelClick('+')}>+</button>
    <button onClick={()=>hendelClick('-')}>-</button>
    <button onClick={()=>hendelClick('*')}>*</button>
    <button onClick={()=>hendelClick('/')}>/</button>
    <button onClick={()=>handelclear()}>clear</button>
    </div>
    </>

  );
}

export default Day1;
