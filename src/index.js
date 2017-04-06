import React from 'react'
import ReactDOM from 'react-dom'

const Test = React.createClass({
  render: function () {
    return (
      <div>dddddd</div>
    )
  }
})

ReactDOM.render(
  <Test />,
  document.getElementById('app')
)
