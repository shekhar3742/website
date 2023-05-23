import React from 'react'
import List from "./List"

const Slickslide = () => {
  return (
    <>
    <div className='py-2 mt-2' style={{backgroundColor:"rgb(210 243 246)"}}>
        <h1 className='text-center fs-5 fw-bold' style={{color:"rgb(32,149,162)"}}>All Popular Service Providers</h1>
    </div>
    <div className='container'>
            <h2 className='text-center mt-3 fw-bold fs-2 text-secondary' >Construction</h2>
            <div className='container'>
                <div className='container'>
                    <div className='container'>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    <div className='wrapper'>
        
        {List.map((e) => {
            return (

            <div className='item'>
            <div style={{ backgroundColor:"gray", display:"flex", justifyContent:"center", alignItems:"center",width:90,height:95, marginTop:"1rem"}}>
        <h1 className='text-light'>{e.cardIcon}</h1>
        </div>
        <p class="card-text my-3" style={{fontSize:"0.7rem"}}> {e.cardTitle}</p>
    </div>
            )
        })}
    </div>
    </>
  )
}

export default Slickslide