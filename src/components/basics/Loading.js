import React from 'react'

function Loading(props) {
  return (
    <div id='loading' className={`loading__active ${props.color}`}>
    {/* <section className={`loading__active ${props.color}`}> */}

        <div className="loading__text">
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>N</span>
          <span>G</span>
        </div>
    </div>
  )
}

export default Loading