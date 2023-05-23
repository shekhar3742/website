import React from 'react'
import work from "./../Assest/Worker.png";
import consults from "./../Assest/consult.png";
import need from "./../Assest/needs.png";
const Cart = () => {
  return (
    <>
    <div className='py-2 mt-2' style={{backgroundColor:"rgb(210 243 246)"}}>
        <h1 className='text-center fs-5 fw-bold' style={{color:"rgb(32,149,162)"}}>Services We Provide</h1>
    </div>
    <div className='mt-4'>
         
        
        <img src={work} class="rounded float-start" alt="..." width={192} height={195}/>
       
      
         <img src={consults} class="rounded float-end" alt="..." width={192} height={195} />
         
         <img src= {need}class="rounded mt-2 float-start" alt="..." width={192} height={195} />
         
         
    </div>
    </>
  )
}

export default Cart