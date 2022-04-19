import ErrorMessage from "./errormessage";

export interface ReasonProps { 
	reason: string;
	onChangeReason: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const Reason : React.FC<ReasonProps> = ({reason,onChangeReason}) => {

    return(
    <div>  
        <label htmlFor='cfReason'>Reason: </label>
        <select name="cfReason" 
                data-testid='cfReason' 
                onChange={(e) => {onChangeReason(e);}}>
                 <option value="talk" selected>I just want to talk</option>
                 <option value="rudeness">rudeness</option>
                 <option value="vegetables">vegetables</option>
                 <option value="lift">lift</option>
                 <option value="united">united</option>   
        </select>
    </div>)
}

export default Reason;
