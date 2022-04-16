import { NavLink } from "react-router-dom";

const Nav : React.FC = () => 
<nav className='is-flex is-flex-direction-row is-justify-content-space-evenly'>
    <ul className="is-flex is-flex-direction-row is-justify-content-space-evenly">
        <li>FAKELANDIA JUSTICE DEPARTMENT</li>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/misdameanour'>Misdemeanours</NavLink></li>
        <li><NavLink to='/confession'>Confesss To Us</NavLink></li>
    </ul>
</nav>

export default Nav;