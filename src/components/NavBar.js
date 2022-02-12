import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import SeachBar from "./SeachBar";

const NavBar = () => {
  return (
    <div className='container mx-auto bg-slate-400 flex items-center justify-between py-6'>
      <HamburgerMenu />
      <div className='flex items-center'>
        <Logo />
        <NavMenu />
      </div>
      <SeachBar />
    </div>
  )
}

export default NavBar