import { NavLink } from "react-router-dom";
 
const Nav : React.FC = () => {
 
const someActiveStyleObject = {color : '#fff'};
const someOtherStyleObject = {color : '#0000ff'};
 
return(
<nav className='is-flex is-flex-direction-row is-justify-content-space-evenly'>
   <ul className="is-flex is-flex-direction-row is-justify-content-space-evenly">
       <li>FAKELANDIA JUSTICE DEPARTMENT</li>
       <li><NavLink to='/' style={({isActive}) => isActive ? someActiveStyleObject :someOtherStyleObject}>Home</NavLink></li>
       <li><NavLink to='/misdemeaners' style={({isActive}) => isActive ? someActiveStyleObject :someOtherStyleObject}>Misdemeaners</NavLink></li>
       <li><NavLink to='/confession' style={({isActive}) => isActive ? someActiveStyleObject :someOtherStyleObject}>Confesss To Us</NavLink></li>
   </ul>
</nav>)};
 
export default Nav;
