import React from 'react'
import './Loading.css'

const Loading = () => {
  return (
    <section className='loading-section container text-center pt-4 mt-3'>
        {/* <div className=' content'><h4>Loading... <div className="spinner-grow"></div></h4></div> */}
        {/* <div className='loader'>

        </div> */}
        <p>Please wait....</p>
        <div className="loader-wrapper"></div>
        
    </section>
    )
}

export default Loading