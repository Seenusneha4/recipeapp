import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
<div classNameName="container">
    <div classNameName="row">
        <div classNameName="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div classNameName="row g-3">
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">RECIPE APP</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" to="/">ADD RECIPE</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/search">SEARCH RECIPE</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/view">VIEW RECIPE</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Header