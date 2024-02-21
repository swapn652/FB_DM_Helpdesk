import React from 'react'
import { LeftPane } from '../components/LeftPane';

const Messages = () => {
  return (
    <div className = "flex flex-row">
        <div className = "w-[5%]">
            <LeftPane/>
        </div>
        <div className = "w-[20%] border-2 border-black">

        </div>
        <div className = "w-[55%] border-2 border-black">

        </div>
        <div className = "w-[20%] border-2 border-black">

        </div>
    </div>
  )
}

export default Messages;
