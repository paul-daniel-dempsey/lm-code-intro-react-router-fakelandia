import { NavLink } from "react-router-dom";
 
const Nav : React.FC = () => {
 
const someActiveStyleObject = {color : '#800080'};
const someOtherStyleObject = {color : '#000000'};
 
return(
<nav>
   <ul className="flex-container">
        <div className="flex-item">
            <li className="flex-item-header">FAKELANDIA</li>
            <li className="flex-item-header">JUSTICE </li>
            <li className="flex-item-header">DEPARTMENT</li>
        </div>
       <li className="flex-item"><NavLink to='/' style={({isActive}) => isActive ? someActiveStyleObject :someOtherStyleObject}>Home</NavLink></li>
       <li className="flex-item"><NavLink to='/misdemeaners' style={({isActive}) => isActive ? someActiveStyleObject :someOtherStyleObject}>Misdemeaners</NavLink></li>
       <li className="flex-item"><NavLink to='/confession' style={({isActive}) => isActive ? someActiveStyleObject :someOtherStyleObject}>Confesss To Us</NavLink></li>
   </ul>
</nav>)};
 
export default Nav;
