import React from 'react'
import "./App.css"
import { useState } from 'react'
import {upper,lower,numbers,characters} from "./data.js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
 const [upercase, setupercase] = useState(false)
const [lowercase, setlowercase] = useState(false)
const [nums, setnums] = useState(false)
const [chars, setchars] = useState(false)
const [passlength, setpasslength] = useState(5)
const [fpass, setfpass] = useState("")

const Genpass=(e)=>{

if(upercase||lowercase||nums||chars){
let str="";
if(upercase) str+=upper;
if(lowercase) str+=lower;
if(nums) str+=numbers;
if(chars) str+=characters;
console.log(str)
let finalpass="";
for (let i = 1; i<=passlength; i++) {
  finalpass+=str.charAt(Math.floor(Math.random()*str.length))

}
setfpass(finalpass)
toast.success("Password created");


}
else{
  console.log("please select one option");
}}

const copy=()=>{
  navigator.clipboard.writeText(fpass)
  toast("Text copied");
 
}


  











  // html--------------------------------------------------------------
  return (
    <div className='pass'>
       <ToastContainer />
      <h1>Password Generetor</h1>
      <div className='box'>
        <input className='input' type="text"  value={fpass}  /><button className='btn1' onClick={copy}>copy</button>
     
        <div className='check'>
          <div className='sym'>
            <p>Include Password length</p>
            <input type="number" max={20} min={5} value={passlength} onChange={(e)=>setpasslength(e.target.value)}  /><br />
          </div>
          <div className='sym'>
            <p>Include Upper letters</p>
            <input type="checkbox" value={upercase} onChange={(e)=>setupercase(e.target.value)} /><br />
          </div>
          <div className='sym'>
            <p>Include lower letters</p>
            <input type="checkbox" value={lowercase} onChange={(e)=>setlowercase(e.target.value)} /><br />
          </div>
          <div className='sym'>
            <p>Include Numbers</p>
            <input type="checkbox" value={nums} onChange={(e)=>setnums(e.target.value)}/><br />
          </div>
          <div className='sym'>
            <p>Include Characters</p>
            <input type="checkbox" value={chars} onChange={(e)=>setchars(e.target.value)}/><br />
          </div>
        </div>
        <button className='btn2' type="submit" onClick={Genpass} >Generate Password</button>
      </div>

    </div>

  )
}

export default App





