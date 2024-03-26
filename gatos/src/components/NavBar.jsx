import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">

        <Link to="/"><button>HomeCat</button></Link>
        <Link to="/shop"><button>Shop</button></Link>
      
    </nav>
  );
};

export default Navbar;
