import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import BarbuttonsClass from './composition/barButtons';
import Notifications from './composition/notifications';
import TheDate from './state/TheDate';
import Counter from './state/Counter/Counter';
import Hello from './state-drills/helloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGuess from './state-drills/RouletteGun';

const firstTooltip = (
  <Tooltip color='#126BCC' message='tooltip message'>
   ipsum
  </Tooltip>
)

const secondToolTip = (
  <Tooltip color="hotpink" message='tooltip message'>
    ipsum 2
  </Tooltip>
)

function App() {
  return (
    <main className='App'>
      <RouletteGuess />
    </main>
  )
}

export default App;
