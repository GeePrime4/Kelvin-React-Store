import { Link, NavLink, Outlet } from "react-router-dom"
import React, { useContext } from 'react'
import { BiCart, BiLogoAmazon, BiSolidUser } from 'react-icons/bi'
import { FaCartArrowDown } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"
import "./style.css"
import { UserContext } from "./userContext"
import { useCart } from "./CartContext"
function Nav() {
  const { logout, user } = useContext(UserContext)  
  const {cart} = useCart();
  const navData = [
    { name: "Home", path: "/" },
    { name: "Electonics", path: "/electronics" },
    { name: "Jewelery", path: "/jewelery" },
    { name: "Men's Cloth", path: "/menscloth" },
    { name: "Women's Cloth", path: "/womenscloth" }
  ]
  const check = localStorage.getItem('user')
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-dark navbar-dark sticky-top'>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <BiLogoAmazon size={42} color='white' />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {navData.map(({ name, path }, i) => (
                <li className="nav-item" key={i}>
                  <NavLink className="nav-link fw-bold hover" aria-current="page" to={path}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {check && <marquee className="text-light d-inline w-25"><strong> {`Welcome ${user&& user.name} To The React Store`}</strong></marquee>}
          <div className="dropdown me-3">
            <button className="btn btn-light" data-bs-toggle="dropdown">
              <BiSolidUser />
            </button>
            <ul class="dropdown-menu border border-3 border-success p-2">
              {check ?
                <li className="border-bottom border-2 border-dark mb-2">
                  <NavLink className="nav-link fw-bold" aria-current="page" to={"/"} onClick={logout}>
                    Log Out
                  </NavLink>
                </li>
                : (
                  <>
                    <li className="border-bottom border-2 border-dark mb-2">
                      <NavLink className="nav-link fw-bold" aria-current="page" to={"./login"}>
                        Log In
                      </NavLink>
                    </li>
                    <li className="border-bottom border-2 border-dark mb-2">
                      <NavLink className="nav-link fw-bold" aria-current="page" to={"./login"}>
                        Sign Up
                      </NavLink>
                    </li></>)}
            </ul>
          </div>
          <button className="btn btn-light me-5 px-2">
            <NavLink aria-current="page" to={"./cart"} className="link">
            <FaCartShopping  size={24}/>
            {cart.length > 0 &&  <span className="badge rounded-pill bg-danger" style={{
              top:"-10px", left:"-8px", fontSize :"9px"
            }}>{cart.length}</span>}
            </NavLink>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Nav
