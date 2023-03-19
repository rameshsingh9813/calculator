 
 import React, { useState } from 'react'
 import '../styles/scalc.css'
 import { HiOutlineBackspace } from "react-icons/hi";
 
 function Calc(){
   const [expre,setExpre]=useState('0');
  
   const clear=()=>{
    setExpre('0')
   }

   const back=()=>{
    setExpre(expre.substr(0,expre.length-1))
   }

   const divide=()=>{
    setExpre(expre+'/')
   }

   const addse=( )=>{
     setExpre(expre+7)
   }
   
   const addei=()=>{
    setExpre(expre+8)
   }
   
   const addni=()=>{
    setExpre(expre+9)
   }
   const mul=()=>{
    setExpre(expre+'*')
   }

   const addfo=()=>{
    setExpre(expre+4)
   }
   
   const addfi=()=>{
    setExpre(expre+5)
   }
   
   const addsi=()=>{
    setExpre(expre+6)
   }
   
   const plus=()=>{
    setExpre(expre+'+')
   }
   
   const addon=()=>{
    setExpre(expre+1)
   }
   
   const addtw=()=>{
    setExpre(expre+2)
   }
   
   const addth=()=>{
    setExpre(expre+3)
   }
   
   const minus=()=>{
    setExpre(expre+'-')
   }
   
   const addze=()=>{
    setExpre(expre+0)
   }
   
   const point=()=>{
    setExpre(expre+'.')
   }
   const evaluate=()=>{
    if (expre[0]=='0'){
      setExpre((eval(expre.substring(1))).toString())
    }
    else{
      setExpre((eval(expre)).toString())
    }
   }

   const console=(e)=>{
    console.log(e)
   }

  return(
   <>
     <div className="container">
       <h1 className='heading'>Calculator</h1>
       <form>
       <div className="form-group">
          
         <textarea className="form-control" id="display" onChange={console} rows="3"value={expre}>{expre}</textarea>
       </div>
       </form>

       {/* this is first row */}
       <div className="container_1">
       <div className="row">
         <div className="col">
         <button type="button" className="btn btn-outline-secondary AC"id="clear" onClick={clear}>clear</button>
         </div>
         <div className="col">
         <button type="button" className="btn btn-outline-secondary" onClick={back}><HiOutlineBackspace/></button>
         </div>
         <div className="col">
         <button type="button" className="btn btn-outline-secondary"id="divide"onClick={divide}>/</button>
         </div>
       </div>
       {/* this is second row */}
       <div className="row">
         <div className="col">
         <button type="button" className="btn btn-outline-secondary"id="seven" onClick={addse}>7</button>
         </div>
         <div className="col">
         <button type="button" className="btn btn-outline-secondary"id="eight"onClick={addei}>8</button>
         </div>
         <div className="col">
         <button type="button" className="btn btn-outline-secondary"id="nine"onClick={addni}>9</button>
         </div>
         <div className="col">
         <button type="button" className="btn btn-outline-secondary left"id="multiply"onClick={mul}>*</button>
         </div>
       </div>

       {/* this is third row */}
       <div className="row">
         <div className="col">
         <button type="button" className="btn btn-outline-secondary"id="four"onClick={addfo}>4</button>
         </div>
         <div className="col">
         <button type="button" className="btn btn-outline-secondary" id="five"onClick={addfi}>5</button>
         </div>
         <div className="col">
         <button type="button" className="btn btn-outline-secondary"id="six"onClick={addsi}>6</button>
         </div>
         <div className="col">
         <button type="button" className="btn btn-outline-secondary left"id="add"onClick={plus}>+</button>
         </div>
       </div>
        {/* this is fourth row */}
        <div className="row">
         <div className="col">
         <button type="button" className="btn btn-outline-secondary"id="one"onClick={addon}>1</button>
         </div>
         <div className="col">
         <button type="button" className="btn btn-outline-secondary"id="two"onClick={addtw}>2</button>
         </div>
         <div className="col">
         <button type="button" className="btn btn-outline-secondary" id="three"onClick={addth}>3</button>
         </div>
         <div className="col">
         <button type="button" className="btn btn-outline-secondary left"id="subtract"onClick={minus}>-</button>
         </div>
       </div>
       {/* this is fifth row */}
       <div className="row">
         <div className="col">
         <button type="button" className="btn btn-outline-secondary"id="zero"onClick={addze}>0</button>
         </div>
         <div className="col">
         <button type="button" className="btn btn-outline-secondary"id="decimal"onClick={point}>.</button>
         </div>
         <div className="col">
         <button type="button" className="btn btn-outline-secondary equal" id="equals" onClick={evaluate}>=</button>
         </div>
       </div>
       </div>
       <p>Developed by Ramesh Kumar Mahato</p>
     </div>
   </>)
 }
 
 export default Calc