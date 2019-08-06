import React, {useState} from 'react';
import Display from './display';
import Settings from './settings';
import Playback from './playback';


function Metronome() {
  const [scene, changeScene] = useState([{
    bpm: 120,
    accents: [1],
    beat: 4,
    measureLength: 4,
  }]);

  const [currentScene, changeCurrentScene] = useState(0);

  return (
    <div>
      <Display />
      <Playback scene={scene}/>
      <Settings 
        scene={scene} 
        currentScene={currentScene}
        changeScene={changeScene}
        changeCurrentScene={changeCurrentScene}
        />
    </div>
  )
}

export default Metronome
