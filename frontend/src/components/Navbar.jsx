const Navbar = ({containerStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
      <a href="#shop" className="active-link">Shop</a>
      <a href="#contact" className="">Contact</a>
    </nav>
  )
}

export default Navbar