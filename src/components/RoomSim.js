import React, { useEffect, useState } from 'react'
import {MdOutlinePeopleAlt} from "react-icons/fa"
import './RoomSim.css'

const RoomSim = () => {
  async function getRoomSim() {
    const res = await fetch("https://ecourse.cpe.ku.ac.th/exceed04/api/front_people")
    const json = await res.json()

    return json
  }


  const [roomSim, setRoomSim] = useState(["1","1","1","1"])
  const [trackCurrent , setTrackCurrent] = useState(0)
  useEffect(() => {
    const chair = setInterval(async () => {
      const {current_people,chair_status} = await getRoomSim()

      setRoomSim(chair_status)
      setTrackCurrent(current_people)
    }, 2000);
    return(()=>{
      clearInterval(chair)
    })

  },[])

  return (
    <div className='RoomSim-container'>

        <div className="screen">Screen
        </div>

        <div className='circle-container'>
            <div className={`circle-1 ${roomSim[0]==="1"? 'not-sit' : 'sit'}` }></div>
            <div className={`circle-2 ${roomSim[1]==="1"? 'not-sit' : 'sit'}` }></div>
        </div>

        <div className='circle-container'>
            <div className={`circle-3 ${roomSim[2]==="1"? 'not-sit' : 'sit'}` }></div>
            <div className={`circle-4 ${roomSim[3]==="1"? 'not-sit' : 'sit'}` }></div>
        </div>

        <div className='people-tracking'>
          {trackCurrent}
        </div>


        <div className="door">
            <div className="door-left">
            </div>
            <div className="door-right">
            </div>
        </div>

    </div>
  )
  }
export default RoomSim