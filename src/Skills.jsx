import React from 'react'

const Skills = () => {
  return (
    <div>
      <h2>I used to solve rubik's cubes "competetively"</h2>
        <h4>here is a table of my best times:</h4>
        <table style={{backgroundColor:'white'}}>
          <th>event</th>
          <th>PR Single</th>
          <th>PR ao5</th>
          <th>PB Single</th>
          <th>PB ao5</th>
          <tr>
            <td><img src="https://www.puzzlemaster.ca/imagecache/products/alpha/640x640/009/009035.1611698593.png" height='25px' alt="2x2 rubik's cube" /> 2x2</td>
            <td>5.82</td>
            <td>9.81</td>
            <td>1.92</td>
            <td>3.49</td>
          </tr>
          <tr>
            <td> <img src="https://purepng.com/public/uploads/large/purepng.com-rubiks-cube3-d-combination-puzzlerubikcubeclassicclipartpuzzle-1421526591425jgi2x.png" height='25px' alt="3x3 rubik's cube" /> 3x3</td>
            <td>21.25</td>
            <td>25.31</td>
            <td>11.02</td>
            <td>16.35</td>
          </tr>
          <tr>
            <td> <img src="https://www.puzzlemaster.ca/imagecache/products/alpha/640x640/000/000499.png" height='25px' alt="4x4 rubik's cube" /> 4x4</td>
            <td>1:41:29</td>
            <td></td>
            <td>1:05:12</td>
            <td>1:25:16</td>
          </tr>
          <tr>
            <td> <img src="https://brainstudio.in/wp-content/uploads/2020/06/yuxin-5x5-1.png" height='25px' alt="" /> 5x5</td>
            <td></td>
            <td></td>
            <td>2:35:28</td>
            <td>2:58:17</td>
          </tr>
          <tr>
            <td> <img src="https://i.pinimg.com/originals/ca/65/1a/ca651a0594f30a0b9d6e59ca1d712918.png" height='25px' alt="pyraminx rubik's puzzle" /> pyraminx</td>
            <td>9:30</td>
            <td>15:39</td>
            <td>5:24</td>
            <td>12:49</td>
          </tr>
          <tr>
            <td> <img src="https://www.grubiks.com/images/puzzles/15/small.png" height='25px' alt="skewb rubik's puzzle" /> skewb</td>
            <td>18:00</td>
          </tr>
        </table>
    </div>
  )
}

export default Skills