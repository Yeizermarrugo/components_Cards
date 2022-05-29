import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import message from './Json/message.json'

const arrayColors= [
  '#bdc6ad', '#8c8bf3', '#322906', '#7F46FF', '#87B49D', '#D74931', '#EA42AD',
  '#27BC55', '#5558CA', '#30817E', '#D225C6', '#839272', '#A0B3DD', '#4EB34B',
  '#381490', '#B393E7'
]

function App() {

  const catchNumberRandom = array => {
    return Math.floor(Math.random() * array.length)
  }

  const getElementRandom = array => {
    const i = catchNumberRandom(array)
    return array[i]
  }

  const [messageRandom, setMessageRandom] = useState(getElementRandom(message))
  const [colorRandom, setColorRandom] = useState(getElementRandom(arrayColors))

  const clickBtn = () => {
    setMessageRandom(getElementRandom(message))
    setColorRandom(getElementRandom(arrayColors))
  }


  const appStyle={
    backgroundColor: colorRandom
  }

  return (
    <div style={appStyle} className="App">
      <Card
      messageRandom={messageRandom}
      colorRandom= {colorRandom}
      clickBtn={clickBtn}
      />
      
    </div>
  )
}

export default App
