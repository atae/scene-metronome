import React from 'react'

function Settings(props) {
  let {scene, currentScene} = props;
  let {bpm, accents, beat, measureLength} = scene[currentScene];

  console.log(props);
  return (
    <div>
      <p>{bpm}</p>
      <p>{accents}</p>
      <p>{beat}</p>
      <p>{measureLength}</p>
    </div>
  )
}

export default Settings
