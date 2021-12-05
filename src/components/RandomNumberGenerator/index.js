// Write your code here
import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {randomNo: 0}

  generateRandomNo = () => {
    const randomo = Math.ceil(Math.random() * 100)
    this.setState({randomNo: randomo})
  }

  render() {
    const {randomNo} = this.state
    return (
      <div className="background">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button className="button" onClick={this.generateRandomNo}>
            Generate
          </button>
          <h1 className="number">{randomNo}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
