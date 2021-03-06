import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={ course } />
      <Content subheader={ part1 } exercise={ exercises1 } />
      <Content subheader={ part2 } exercise={ exercises2 } />
      <Content subheader={ part3 } exercise={ exercises3 } />
      <Total exercise={ exercises1 + exercises2 + exercises3 } />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
