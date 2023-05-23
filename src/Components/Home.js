import React from 'react'
import Data from "./data"

export const  home = () => {
  return (
    <div className='mt-2'>
      <div className='container p-4' style={{
          backgroundColor:"#FEFEFE",
          borderRadius:"20px"
        }}>

        <div className='row' >
          {Data.map((element)=>{
            return(
              <div className='col-3 p-2' >
              {/* <img src="" alt="" /> */}
              <button style={{display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center", background:"transparent", border:"none",color:"#00838F", fontSize:"0.8rem"}}>
              {element.icon}
              {element.title}
              </button>
          </div>
            )
          })}
          
          
        </div>
      </div>
    </div>
  )
}
export default home
