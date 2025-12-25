import React from 'react'
import ReactDOM from 'react-dom'
import {useState} from 'react/cjs/react.development'
import './index.css'
function App() {
  return (
    <div className="App">
      <TextExpander>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum optio non
        et expedita nam recusandae, laborum natus quaerat veritatis ad
        praesentium sint. Distinctio, repellat. Eaque earum sequi rerum
        asperiores odio laboriosam voluptas labore libero, voluptate, repellat
        deleniti dolore vero alias repudiandae? Nobis eius totam laboriosam
        necessitatibus assumenda delectus quos repellendus?
      </TextExpander>

      <TextExpander
        collapseNumWords={20}
        expandButtonText="SHow text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum optio non
        et expedita nam recusandae, laborum natus quaerat veritatis ad
        praesentium sint. Distinctio, repellat. Eaque earum sequi rerum
        asperiores odio laboriosam voluptas labore libero, voluptate, repellat
        deleniti dolore vero alias repudiandae? Nobis eius totam laboriosam
        necessitatibus assumenda delectus quos repellendus?
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum optio non
        et expedita nam recusandae, laborum natus quaerat veritatis ad
        praesentium sint. Distinctio, repellat. Eaque earum sequi rerum
        asperiores odio laboriosam voluptas labore libero, voluptate, repellat
        deleniti dolore vero alias repudiandae? Nobis eius totam laboriosam
        necessitatibus assumenda delectus quos repellendus?
      </TextExpander>
    </div>
  )
}

function TextExpander({
  collapseNumWords = 10,
  expandButtonText = 'show more',
  collapseButtonText = 'show less',
  buttonColor = 'blue',
  expanded = false,
  className = '',
  children,
}) {
  const [Isexpanded, setIsExpanded] = useState(expanded)
  const words = children.split(' ')
  console.log(words)
  const handleText = Isexpanded
    ? children
    : words.slice(0, collapseNumWords).join(' ') + '...'

  return (
    <div className={className}>
      <span className="box-container">
        <p>{handleText}</p>

        <button
          onClick={() => setIsExpanded((curr) => !curr)}
          style={{color: buttonColor}}
        >
          {Isexpanded ? collapseButtonText : expandButtonText}
        </button>
      </span>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
