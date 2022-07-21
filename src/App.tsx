import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Clock from './Clock';
import ClockHook from './ClockHook';
import OnOff from './OnOff';

function App() {
  console.log('render App')
  const [isClockEnabled, setClockEnabled] = useState<boolean>(false);

  return (
    <div className="App">
      <label>
        <OnOff isOn={isClockEnabled} onOffChange={(data:boolean) => { console.log('OnOffChange'); setClockEnabled(data) }}/> <span>enabled</span>
      </label>
      <h1>
        {isClockEnabled ? <ClockHook/> : 'off'}
      </h1>
    </div>
  )
}

export default App
