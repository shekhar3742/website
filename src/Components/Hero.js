import React from 'react'

const Hero = () => {
  return (


   
      
    <div><nav class="navbar " style={{height:"15vh"}}>
        
          <div className='row' style={{width:"100%"}}>
            <div  className='col-2 '>
            <button className='button-map text-light'>
            <i class="fa-solid fa-location-dot"></i>
            </button>
            </div>
            <div  className='col-6 text-light fw-bold' style={{width:"50%", border:"2px solid #fff", borderRadius:"13px"}}>
              Your Current Location
            </div>
            <div  className='col-2  ms-0'>
            <button className='notification  ms-5 text-light'>
            <i class="fa-solid fa-bell"></i>
            </button>
            </div>
            <div  className='col-2 '>
            <button className='add-cart button-map text-light'>
            <i class="fa-solid fa-cart-shopping"></i>
            </button>
            </div>
          </div>
        {/* <div class="map-container">
            
            
            
        </div> */}
        {/* </div> */}

    <div class="container">
     
      <form class="d-flex fg--search" role="search">
        < input class="form-control me-2" type="search " placeholder="Search for Products" aria-label="Search"/>
        <button className='magnifire'>
        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
        </button>
        <button className='button-mic'>

        <i class="fa-solid fa-microphone"></i>
        </button>
      </form>
    </div>
  </nav></div>



  )
}

export default Hero