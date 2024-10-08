import { useState } from 'react'

const Display = props => <div>{props.value} {props.count}</div>

const Title = (props) => {
  console.log(props)  
  return (
  <div>
    <h1>
      {props.title}
    </h1>
  </div>
  )
}

const Subtitle = props => <div><h2>{props.value}</h2></div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  console.log("Value Good", good)
  console.log("Value Neutral", neutral)
  console.log("Value Bad", bad)
  

  return (
    <div>
      <Title title="Give your opinion" />
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
        
      <Subtitle value="Statistics" />
      <Display value="Good:" count={good}/>
      <Display value="Neutral:" count={neutral}/>
      <Display value="Bad:" count={bad}/>

      <Display value="All:" count={good + neutral + bad} />
      <Display value="Average: " count={(good - bad)/(good + neutral + bad)} />
      <Display value="Positive: " count={(good*100)/(good+neutral+bad)} />
    </div>
  )
}

export default App