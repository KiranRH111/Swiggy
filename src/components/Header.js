import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {

    const [loginBtn, setLoginBtn] = useState(true)
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src="https://t3.ftcdn.net/jpg/06/01/07/12/360_F_601071205_jxLMJzJKNPM1g5ciDuW32Nj8vO5ltNhn.jpg"/>
        </div>
        <div className="nav-items">
          <ul>
            <li>
                <Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About Us</Link></li>
            <li><Link to={"/contact"}>Contact Us</Link></li>
            <li>Cart</li>
            <button className="login-btn" onClick={()=>setLoginBtn(!loginBtn)}> {loginBtn ? "Logout" : "Login"}</button>
          </ul>
        </div>
      </div>
    )
  }


  export default Header