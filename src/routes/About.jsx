import { NavLink, Outlet } from "react-router-dom";

const About = () => {
    return ( 
        <>
        <h1> ABout Page.</h1>
        <div className="about">
            <ul className="about_list">
                <li>
                    <NavLink to="about-app">About app</NavLink>
                </li>
                <li>
                    <NavLink to="about-developer">About developer</NavLink>
                </li>
            </ul>
            <Outlet />
        </div>
        </>
     );
}
 
export default About;