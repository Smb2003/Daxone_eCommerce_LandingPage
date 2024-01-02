import Logo from "./Logo";
import NavItems from "./NavItems";
import NavSearch from "./NavSearch";

const Navbar = () =>{
    return(
        <div className="Navbar">
            <Logo/>
            <NavItems/>
            <NavSearch/>
        </div>
    )
};
export default Navbar;
