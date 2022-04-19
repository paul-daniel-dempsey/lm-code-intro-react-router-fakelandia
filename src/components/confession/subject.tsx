import { useContext, useState } from "react";
import { UpdateDisplayButtonContext } from "./confession";
import ErrorMessage from "./errormessage";

export interface SubjectProps { 
	subject: string;
	onChangeSubject: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const Subject : React.FC<SubjectProps> = ({subject,onChangeSubject}) =>  {

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    // Consume 
    const setDisplayButton = useContext(UpdateDisplayButtonContext);

    const validate : (value : string) => boolean = (value) => {
        const origLength = value.length;
        const noSpecialChars = value.replace(/[^a-zA-Z0-9]/g, "")
        if ((noSpecialChars.length === origLength) && (origLength >= 4) && (origLength <=35)) {
            setErrorMessage('');
            return false;
        }
        else {
            setErrorMessage('ERROR - Must be between 4 and 35 characters. Numbers are allowed, but no special characters');
            return true;
        }
    }

    return(
        <div>
            <label htmlFor='cfSubject'>Subject: </label>
            <input id='cfSubject' 
                    data-testid='subject' 
                    type='text' 
                    value={subject} 
                    onChange={(e) => {
                        const error = validate(e.target.value);
                        if (setDisplayButton != null){
                            setDisplayButton(error);}
                        onChangeSubject(e);
                    }} />
            <ErrorMessage errorMessage={errorMessage}/>   
        </div>)
}
export default Subject;