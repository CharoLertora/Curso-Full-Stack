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

const add = (num1, num2, num3) => {
  console.log("Add:",num1,num2,num3)
  return num1 + num2 + num3
}

const average = (num1, num2, num3) => {
  console.log("Average:",num1,num2,num3)
  return (num1 - num3)/add(num1,num2,num3)
}

const promPositive = (num1, num2, num3) => {
  console.log("promPositive:",num1,num2,num3)
  return (num1*100)/add(num1,num2,num3)
}

const Statistics = (props) => {
  
  if (add(props.good,props.neutral,props.bad) == 0) {
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <Display value="Good: " count={props.good}/>
      <Display value="Neutral: " count={props.neutral}/>
      <Display value="Bad: " count={props.bad}/>
    
      <Display value="All: " count={add(props.good, props.neutral, props.bad)} />
      <Display value="Average: " count={average(props.good, props.neutral, props.bad)} />
      <Display value="Positive: " count={promPositive(props.good, props.neutral, props.bad) + "%"}/>
    </div>
  )
}

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
      <Statistics good={good} neutral={neutral} bad={bad}  />
      
    </div>
  )
}

export default App