import React from 'react'

function YoutubeItem(props) {
    return (
        <li>
            <img src={props.video.snippet.thumbnails.medium.url} alt='동영상' />
            <p className='title'>{props.video.snippet.title}</p>
        </li>
    )
}

function YotubeList(props) {
  return (
    <div className='yotube_list'>
        <div className="container">
            <h3>J.Fla Music</h3>
            <ul>
                {props.items.data.items.map((list, index) => (
                    <YoutubeItem key = {index} video={list} />
                    ))}
            </ul>
        </div>
    </div>
  )
}

export default YotubeList