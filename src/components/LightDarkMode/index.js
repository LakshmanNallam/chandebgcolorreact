import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {light: false}

  changetheme = () => {
    this.setState(previousState => ({light: !previousState.light}))
  }

  sendmebg = () => {
    const {light} = this.state
    return light ? 'lightsty' : 'blacksty'
  }

  senemetext = () => {
    const {light} = this.state
    return light ? 'Dark Mode' : 'Light Mode'
  }

  sendmetextcolor = () => {
    const {light} = this.state
    return light ? 'blackcoloe' : 'whitecolor'
  }

  render() {
    const bgcolor = this.sendmebg()
    const text = this.senemetext()
    const textColor = this.sendmetextcolor()
    return (
      <div className="mainDiv">
        <div className={`subdiv ${bgcolor}`}>
          <h1 className={textColor}>Click to Change Mode</h1>
          <button
            type="button"
            className="lightsty btnsty"
            onClick={this.changetheme}
          >
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
