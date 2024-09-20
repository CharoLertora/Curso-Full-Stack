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
  return (
    <div>
      {props.content}
    </div>
  )
}

const Footer = (props) => {
  console.log(props)
  return(
    <div>
      Summary of exercises is {props.ex1 + props.ex2 + props.ex3}
    </div>
  )
}

const App = () => {
/* EJERCICIOS 1.1 Y 1.2
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>

      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />

      <Footer />
    </div>
  )
*/

const course = 'Half Stack application development'
const part1 = {
  name: 'Fundamentals of React',
  exercises: 10
}

const part2 = {
  name: 'Using props to pass data',
  exercises: 7
}

const part3 = {
  name: 'State of a component',
  exercises: 14
}

return(
  <div>
    <Title title={course} />
    <Body content={part1.name}/>
    <Body content={part2.name}/>
    <Body content={part3.name}/>

    <Footer ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises} />
  </div>
)
}
export default App