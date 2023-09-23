import React from 'react'

const Favorites = () => {
  return (
    <div>
        <h1>my absolute favorite things</h1>
        <label htmlFor='sfx'>mandatory audio/video clips</label>
        <audio id="sfx" src="https://www.soundjay.com/buttons/button-11.mp3" controls>hi</audio>
        <video src="https://v4.cdnpk.net/videvo_files/video/free/video0469/large_watermarked/_import_616e66e2e90167.37348782_FPpreview.mp4" height='300px' controls autoPlay></video>
        <h2>i also like photography</h2>
        <h4>here are a few of my favorite photos from my '22 summer vacation:</h4>
        <img src="https://live.staticflickr.com/65535/53208484355_63f0a1ec0e_b.jpg" alt='diamond head mountain' width='33%'/>
        <img src="https://live.staticflickr.com/65535/53208359524_b36191bbf3_c.jpg" alt='star trails from healeakala summit' width='33%'/>
        <img src="https://live.staticflickr.com/65535/53208278963_9fcc709ce5_c.jpg" alt='diamond head hike' width='33%'/>
    </div>
  )
}

export default Favorites