import { Misdemeanour } from "../../generate_misdemeanours"
 
export interface mdProps {
	citizenId : number,
	misdemeanour : Misdemeanour,
	date : string,
 }
 
const Misdemeaner : React.FC<mdProps> = ({citizenId,misdemeanour,date}) => {
   return (
       <article className="misdemeanour-item">
           <li className="misdemeanour-item">{citizenId}</li>
           <li className="misdemeanour-item">{misdemeanour}</li>
           <li className="misdemeanour-item">{date}</li>
       </article>   
   )
}
 
export default Misdemeaner;