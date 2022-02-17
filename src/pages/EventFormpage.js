import { keyboard } from '@testing-library/user-event/dist/keyboard'
import React, { useState } from 'react'
import './EventFormpage.css'
const EventFormpage = () => {

  const [eventForm , setEventForm] = useState(
    {
      title:"",
      date:"",
      start:"",
      end:"",
      max:"",
      min:""
    })

    function onEventFormChange(event){
        const {value,name} = event.target
        setEventForm((prev)=>{
          return {...prev , [name]:value}
        })
    }
  return (
    <div className='event-form-container'>
      <h2 className='event-form-title'>Event Form</h2>
      <form className='event-form'>
        <div className='test'><label>Title: </label><input onChange={onEventFormChange} value={eventForm.title} name="title" placeholder='title'/></div>
        <div className='test'><label>Date: </label><input  onChange={onEventFormChange} value={eventForm.date} name="date" placeholder='date'/></div>
        <div className='test'><label>Start Time: </label><input onChange={onEventFormChange} value={eventForm.start} name="start" placeholder='start'/></div>
        <div className='test'><label>End Time: </label><input onChange={onEventFormChange} value={eventForm.end} name="end" placeholder='end'/></div>
        <div className='test'><label>Max Visitors: </label><input onChange={onEventFormChange} value={eventForm.max} name="max" placeholder='max'/></div>
        <div className='test'><label>Min Visitors: </label><input onChange={onEventFormChange} value={eventForm.min} name="min" placeholder='min'/></div>
        <button type='submit'>Submit</button>
      </form>

    </div>
  )
}

export default EventFormpage