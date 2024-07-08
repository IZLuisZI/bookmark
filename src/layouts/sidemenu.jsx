import Logo from "../assets/images/logo-bookmark.svg";
import CloseIcon from "../assets/images/icon-close.svg";
import Button from "../components/button";
export default function SideMenu({ menuStatus, toggleMenu }) {
  return (
    <aside
      style={{ transform: menuStatus ? `translateX(0)` : `translateX(-100%)` }}
      className=" bg-blue-800 h-full w-full p-12 bg-opacity-80 fixed top-0 left-0 z-50 -translate-x-full transition-all duration-300 ease-in-out"
    >
      <div className="flex items-center justify-between">
        <img style={{ fill: `#ffffff` }} src={Logo} alt="Bookmark Logo" />
        <img src={CloseIcon} alt="Close Menu" onClick={toggleMenu} />
      </div>
      <nav className="text-center p-4 text-white text-2xl tracking-wider">
        <ul id="sideMenu">
          <li className="p-4">Features</li>
          <li className="p-4">Pricing</li>
          <li className="p-4">Contact</li>
          <div className="p-4 w-full">
            <Button buttonName="Login" outlineStatus="ring-2 ring-white" />
          </div>
        </ul>
      </nav>
    </aside>
  );
}
