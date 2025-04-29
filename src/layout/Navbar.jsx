import { Link, NavLink } from "react-router";
import useAuthContext from "../hooks/useAuthContext";

const Navbar = () => {

  const { user, logoutUser } = useAuthContext()

    return (
        <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">

    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
        <li>
        <Link to="/all-product">Products</Link> 
        </li>

      </ul>

    </div>
    <div className="flex gap-2"> 
    <Link to={'/shop'} >Shop</Link>

    </div>

  </div>
  <div className="navbar-center">
    <Link to="/" className="btn btn-ghost text-xl">SciMart</Link>
  </div>
  
  <div className="navbar-end">

    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
    </button>

    {user ? (      
    <div>
      {/* cart button  */}
    <button className="btn btn-ghost btn-circle mr-2">
      <div className="indicator">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
      viewBox="0 0 24 24" fill="none" stroke="currentColor" 
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
        <span className="badge badge-xs badge-primary indicator-item">0</span>
      </div>
    </button>

    {/* profile icon dropdown */}
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img
          alt="User avatar"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        />
        </div>    
      </div>
      <ul tabIndex={0} 
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li><a> Profile </a></li>
        <li><a>Settings</a></li>
        <li><a onClick={logoutUser}>Logout</a></li>
      </ul>

    </div>
    </div>

    ) : (
      <div className="flex gap-2">
        <Link to='/login' className="btn btn-primary">Login</Link>
        {/* <Link to='/register' className="btn btn-primary">Register</Link> */}
      </div>
    )
  }


  </div>
</div>

    );
};

export default Navbar;