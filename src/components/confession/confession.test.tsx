import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Confession from './confession';

describe('ConfessionForm', () => {

	test('renders form element', () => {
		const { container } = render(<Confession/>);
		// eslint-disable-next-line testing-library/no-node-access
		expect(container.firstChild).toHaveClass('confession');
	});

    test('Do valid field calls enable Confess button?', () => {
        
        render(<Confession/>);

        const testReason : string = 'vegetables';
        const dropdown = screen.getByTestId('reason')
        userEvent.selectOptions(dropdown,testReason)  
        
        const testSubject : string = 'ManUtdFan';
        const inputSubj = screen.getByTestId('subject')
        userEvent.type(inputSubj,testSubject)    
        
        const testDesc : string = 'ManUtdBlahBlahBlah';
        const inputDetail = screen.getByTestId('detail')
        userEvent.type(inputDetail,testDesc)  

        expect(screen.getByTestId('confess')).not.toBeDisabled();
    });

    test('Do Invalid field calls disable Confess button?', () => {
         
        render(<Confession/>);

        const testReason : string = 'vegetables';
        const dropdown = screen.getByTestId('reason')
        userEvent.selectOptions(dropdown,testReason)  
        
        const testSubject : string = '@@';
        const inputSubj = screen.getByTestId('subject')
        userEvent.type(inputSubj,testSubject)    
        
        const testDesc : string = 'ManUtdBlahBlahBlah';
        const inputDetail = screen.getByTestId('detail')
        userEvent.type(inputDetail,testDesc)  

        //expect(screen.getByTestId('confess')).toHaveAttribute('disabled')
        expect(screen.getByTestId('confess')).toBeDisabled();
    });
});