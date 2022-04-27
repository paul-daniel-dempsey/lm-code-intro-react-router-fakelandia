import ErrorMessage from "./errormessage";

export interface DetailProps { 
	detail: string;
	onChangeDetail: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const Detail : React.FC<DetailProps> = ({detail,onChangeDetail}) => {
    
    return(
    <div>
        <textarea className="confession-textarea" 
                    id="cfDetail" 
                    data-testid='detail' 
                    value={detail} 
                    onChange={(e) => {onChangeDetail(e);
                }} />
        <ErrorMessage errorMessage={''}/>   
    </div>);
}

export default Detail;