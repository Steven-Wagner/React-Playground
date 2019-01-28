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
import Tabs from './state/Tabs';
import Accordian from './state-drills/Accordian';

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

const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  }
]

function App() {
  return (
    <main className='App'>
      <Accordian sections={sections}/>
    </main>
  )
}

export default App;
