import React from 'react'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null]
    }
  }

  render() {
    return (
      <div>
        <div>
          This is the board
        </div>
        <div>
          Row 1
        </div>
        <div>
          Row 2
        </div>
        <div>
          Row 3
        </div>
      </div>
    )
  }
}

export default Board