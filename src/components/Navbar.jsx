import { Link } from "react-router-dom";
import { FaBarsStaggered, FaBook, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../contects/AuthProvider";
import { useContext, useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().then(() =>{
        alert("Sign-out Successfully!!");
    }).catch((error) =>{
        
    })
  }

  // toggle menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // navItems here
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 right-0 bg-blue-200" : ""}`}>
        <div className="flex justify-between items-center text-base gap-8">
          {/* logo */}
          <Link to="/" className="text-2xl font-bold text-blue-700 flex-items-center gap-2">
            <FaBook className="inline-block" /> Books-Store
          </Link>

          {/* nav item for large device */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link key={path} to={path} className="block text-base text-black uppercase cursor-pointer hover:text-blue-700">
                {link}
              </Link>
            ))}
          </ul>

          {/* btn for lg device */}
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <span className="text-blue-700">{user.email}</span>
                <button
                  className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  <Link to="/login" className="btn">
                    Login
                  </Link>
                </button>
                <button className="btn bg-yellow-300 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
                  <Link to="/sign-up" className="btn primary__btn">
                    Register
                  </Link>
                </button>
              </>
            )}
          </div>

          {/* menu btn for the mobile devices */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              {isMenuOpen ? <FaXmark className="h-5 w-5 text-black" /> : <FaBarsStaggered className="h-5 w-5 text-black" />}
            </button>
          </div>
        </div>

        {/* navitems for sm device */}
        <div className={`space-y-4 mt-16 py-7 bg-blue-400 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
          {navItems.map(({ link, path }) => (
            <Link key={path} to={path} className="block text-base text-white uppercase cursor-pointer">
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


















// import { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// //React Icons
// import { FaBarsStaggered, FaBook, FaXmark } from "react-icons/fa6";
// import { AuthContext } from "../contects/AuthProvider";

// const Navbar = () => {
//     const [isMenuOpen, setMenuOpen] = useState(false);
//     const [isSticky, setIsSticky] = useState(false);

//     const {user} = useContext(AuthContext);
//     console.log(user);

//     //toggle menu
//     const toggleMenu = () => {
//         setMenuOpen(!isMenuOpen);
//     }

//     useEffect(() => {
//         const handleScroll = () =>{
//             if (window.scrollY > 100) {
//                 setIsSticky(true);
//             } else {
//                 setIsSticky(false);
//             }
//         }

//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.addEventListener("scroll", handleScroll);
//         }
//     }, [])

//     //navItems here
//     const navItems = [
//         {link: "Home", path: "/"},
//         {link: "About", path: "/about"},
//         {link: "Shop", path: "/shop"},
//         {link: "Sell Your Book", path: "/admin/dashboard"},
//         {link: "Blog", path: "/blog"},
//     ]

//     return (
//         <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
//             <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 right-0 bg-blue-200" : ""}`}>
//                 <div className="flex justify-between items-center text-base gap-8">
//                     {/* logo */}
//                     <Link to="/" className="text-2xl font-bold text-blue-700 flex-items-center gap-2"><FaBook className="inline-block"/> Books-Store</Link>

//                     {/* nav item for large device */}

//                     <ul className="md:flex space-x-12 hidden">
//                         {
//                             navItems.map(({link, path}) => <Link key={path} to={path} className="block text-base text-black uppercase cursor-pointer hover:text-blue-700">{link}</Link>)
//                         }
//                     </ul>

//                     {/* btn for lg device */}
//                     {/* <div className="space-x-12 hidden lg:flex items-center">
//                         <button><FaBarsStaggered className="w-5 hover:text-blue-700"/>
//                         </button>
                        
//                     </div> */}

//                     <div className="flex items-center gap-4">
//                     <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
//                         <Link to="/login" className="btn">Login</Link>
//                     </button>
//                     <button className="btn bg-yellow-300 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
//                         <Link to="/sign-up" className="btn primary__btn">Register</Link>
//                     </button>
//                     </div>



//                     {/* menu btn for the mobile devices */}
//                     <div className="md:hidden">
//                         <button onClick={toggleMenu} className="text-black focus:outline-none">
//                             {
//                                 isMenuOpen ? <FaXmark className="h-5 w-5 text-black" /> : <FaBarsStaggered className="h-5 w-5 text-black" />
//                             }
//                         </button>
//                     </div>
//                 </div>

//                 {/* navitems for sm device */}

//                 <div className={`space-y-4 mt-16 py-7 bg-blue-400 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
//                     {
//                         navItems.map(({link, path}) => <Link key={path} to={path} className="block text-base text-white uppercase cursor-pointer">{link}</Link>)
//                     }
//                 </div>

//             </nav>
//         </header>
//     );
// };

// export default Navbar;