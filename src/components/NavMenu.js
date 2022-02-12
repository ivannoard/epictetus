import NavItem from "./NavItem";
const NavMenu = () => {
  return (
    <nav>
      <ul className='md:flex items-center gap-4 hidden'>
        <NavItem menu='UI Design' />
        <NavItem menu='Front-End' />
        <NavItem menu='Back-End' />
        <NavItem menu='Lainnya' />
      </ul>
    </nav>
  )
}

export default NavMenu