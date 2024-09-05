import React from 'react'

const Dot = ({size}) => {
  return (
    <div>
    <div className={`${size} rounded-full border border-bold p-[2px]`}>
    <div className="size-full bg-bold rounded-full" />
    </div>
    </div>
  )
}

export default Dot