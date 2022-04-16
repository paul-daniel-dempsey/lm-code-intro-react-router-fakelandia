const Misdameanour : React.FC = () => <section className='content'>
    <label htmlFor="filter" ></label>
    <select name="filter" id="misdemeaneourtype">
        <option value="Filter">Filter</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
    <ul className="misdemenours">
        <li>Citizen Id</li>
        <li>Date</li>
        <li>Misdemeanour</li>
        <li>Punishment Idea</li>
    </ul>
</section>;

export default Misdameanour;