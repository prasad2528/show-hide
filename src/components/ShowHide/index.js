import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstname: false, isLastname: false}

  getFirstname = () => {
    this.setState(prevState => ({isFirstname: !prevState.isFirstname}))
  }

  getLastname = () => {
    this.setState(prevState => ({isLastname: !prevState.isLastname}))
  }

  render() {
    const {isFirstname, isLastname} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="container">
          <div className="btn-container">
            <buttton
              type="button"
              className="button"
              onClick={this.getFirstname}
            >
              Show/Hide Firstname
            </buttton>
            {isFirstname && <p className="name">Joe</p>}
          </div>
          <div className="btn-container">
            <buttton
              type="button"
              className="button"
              onClick={this.getLastname}
            >
              Show/Hide Lastname
            </buttton>
            {isLastname && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
