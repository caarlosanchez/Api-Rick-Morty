import './navbar.css'

const Navbar = ({brand}) => {
  return (
    <>
    <nav className='navbar'>
        <div className="logo">
            <a className="navbar-logo" href="#home">{brand}</a>
        </div>
    </nav>
      
    </>
  )
}

export default Navbar;
