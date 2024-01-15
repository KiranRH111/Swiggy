import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {

    const [loginBtn, setLoginBtn] = useState(true)
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
        <div className="logo-container">
          <img className="w-24 p-4" src="https://t3.ftcdn.net/jpg/06/01/07/12/360_F_601071205_jxLMJzJKNPM1g5ciDuW32Nj8vO5ltNhn.jpg"/>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">
                <Link to={"/"}>Home</Link></li>
            <li className="px-4"><Link to={"/about"}>About Us</Link></li>
            <li className="px-4"><Link to={"/contact"}>Contact Us</Link></li>
            <li className="px-4">Cart</li>
            <button className="login-btn" onClick={()=>setLoginBtn(!loginBtn)}> {loginBtn ? "Logout" : "Login"}</button>
          </ul>
        </div>
      </div>
    )
  }


  export default Header