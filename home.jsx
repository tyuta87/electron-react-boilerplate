import React from "react"
import ReactDOM from "react-dom"

class ReactComponentForHome extends React.Component {
  render() {
    return (<div>Hello, React World!</div>)
  }
}

ReactDOM.render(
  <ReactComponentForHome />,
  document.querySelector("#container")
)
