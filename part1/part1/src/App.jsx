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

const Body = (props) => {
  console.log(props)
  console.log(props.parts[0].name)
  console.log(props.parts[1].name)
  console.log(props.parts[2].name)
  return (
    <div>
      <p>{props.parts[0].name}</p>
      <p>{props.parts[1].name}</p>
      <p>{props.parts[2].name}</p>
    </div>
  )
}

const Footer = (props) => {
  console.log(props.parts[0].exercises)
  console.log(props.parts[1].exercises)
  console.log(props.parts[2].exercises)
  return(
    <div>
      Summary of exercises is {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </div>
  )
}

const App = () => {

const course = 'Half Stack application development'
const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },

  {
    name: 'Using props to pass data',
    exercises: 7  
  },

  {
    name: 'State of a component',
    exercises: 14
  }
]

return(
  <div>
    <Title title={course} />

    <Body parts={parts} />

    <Footer parts={parts} />
    
  </div>
)
}
export default App