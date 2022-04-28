export interface ReasonProps { 
	reason: string;
	onChangeReason: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const Reason : React.FC<ReasonProps> = ({reason,onChangeReason}) => {

    return(
    <div>  
        <label htmlFor='cfReason'>Reason for contact: </label>
        <select className="confession-flex-container-filter"
                name="cfReason" 
                data-testid='reason' 
                defaultValue={""}
                onChange={(e) => {onChangeReason(e);}}>
                 <option value="" disabled>Select</option>
                 <option value="talk">I just want to talk</option>
                 <option value="rudeness">rudeness</option>
                 <option value="vegetables">vegetables</option>
                 <option value="lift">lift</option>
                 <option value="united">united</option>   
        </select>
    </div>)
}

export default Reason;
