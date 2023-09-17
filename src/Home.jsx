import React from 'react'
import me from './me.jpg'

const Home = () => {
  return (
    <div>
      <h1>Hi! My name is felix.</h1>
      <img style={{float: 'left', padding: '10px', borderRadius: '50%'}} src={me} height="75px" alt="myself"/>
      <h2>Welcome to <a href="http://github.com/felixg4/reactproj1" target='blank'>my site</a>!</h2>
      <p>I'm happy to help with your code!</p>
      <div style={{display:'flex', flexDirection:'column'}}>
        <form title='Contact me!'>
          <h3>Contact me!</h3>
          <input type="text" placeholder='Name'/><br />
          <input type="email" placeholder='Email'/><br />
          <input type="checkbox" name="urgent?"/>
          <label htmlFor="urgent?"> Check if this is an urgent issue</label><br />
          <label htmlFor="screenshot">Upload a screenshot: </label>
          <input type="file" name='screenshot'/>
        </form>
      </div>
    </div>
  )
}

export default Home