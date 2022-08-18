import React from 'react'
import "./RideNowForm.css"

function RideNowForm() {
  return (
    <form>
    <div className='RideNowForm_container'>
    <div className='RideNowForm'>
    <lable>PickUp Address</lable>
    <input
        type= "text"
        name="PickUpAddress"
        placeholder='Currant Address'
        style={{
            height:"30px",
            width:"30%",
            borderRadius:"10px",
            marginTop:"10px"
        }}
    />
    <input
        type= "text"
        name="PickUpAddress"
        placeholder='Currant City'
        style={{
            height:"30px",
            width:"30%",
            borderRadius:"10px",
            marginTop:"10px"
        }}
    />
    <lable style={{
        marginTop:"20px"
    }}>Drop Address</lable>
    <input
        type= "text"
        name="DropAddress"
        placeholder='Drop Address'
        style={{
            height:"30px",
            width:"30%",
            borderRadius:"10px",
            marginTop:"10px"
        }}
    />
    <input
        type= "text"
        name="DropCity"
        placeholder='Drop City'
        style={{
            height:"30px",
            width:"30%",
            borderRadius:"10px",
            marginTop:"10px"
        }}
    />
    </div>
    
    </div>
    </form>
  )
}

export default RideNowForm