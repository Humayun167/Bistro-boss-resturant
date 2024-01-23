import { Link } from "react-router-dom";

const NavBar = () => {
    const navOption = 
    <>
     <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
         
        </li>
        <li><a>Item 3</a></li>
    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black max-w-screen-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
       {navOption}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl">BISTRO BOSS <br />Restaurant</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navOption}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default NavBar;