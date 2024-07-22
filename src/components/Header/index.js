import './index.css'

const Header = ({functionLogout}) => {
  const onLogout = () => {
    functionLogout()
  }
  return (
    <div className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="logoNavbar"
        alt="website logo"
      />
      <ul className="containerNavItems">
        <li className="listItemNav">Home</li>
        <li className="listItemNav">Products</li>
        <li className="listItemNav">Cart</li>
        <button className="buttonLogout" type="button" onClick={onLogout}>
          Logout
        </button>
      </ul>
    </div>
  )
}

export default Header
