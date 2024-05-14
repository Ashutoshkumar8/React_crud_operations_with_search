import { Link, Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
        
        <Link to="home"> Home </Link>
        <Link to="insert"> insert </Link>
        <Link to="display"> display </Link>
        <Link to="update"> update </Link>
        <Link to="search">search</Link>
        
        
        <hr size="8" color="blue"/>
        
        <Outlet/>
        
        <hr size="8" color="blue"/>
        www.@Mycollage.com
        
        </>
    )
}
export default Layout;
