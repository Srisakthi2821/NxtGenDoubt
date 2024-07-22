import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  functionLogout = () => {
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <div className="homeContainer">
        <Header functionLogout={this.functionLogout} />
        <div className="homeDescContainer">
          <div className="firstPartHome">
            <h1 className="headingHome">Clothes That Get YOU Noticed</h1>
            <p className="paraHome">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Cloths have always been a marker of the
              era and we are in a revolution. Your fashion makes you have been
              and heared that way you are. So,celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <button type="button" className="buttonShopnow">
              Shop Now
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="homePartImg"
          />
        </div>
      </div>
    )
  }
}
export default Home
