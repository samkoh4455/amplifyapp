import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Board from './components/board.jsx'

// Components: Board, square,
// history of moves: list component, list item component

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <h1>Hello</h1>
        <Board />
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))