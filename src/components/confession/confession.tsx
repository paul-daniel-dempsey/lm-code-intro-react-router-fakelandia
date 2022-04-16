const Confession : React.FC = () => <section className="">
    <p>Its very diffcil;t to catch people comitting misdemeanours so we appreciate it when citizens confess to us directly.</p>
    <p>Howevere, if you're just having a hard day and need to vent then your welcome to contact us here too. Up to you!</p>
    <label htmlFor="subject">Subject</label>
    <input type="text" name="subject"></input>
    <label htmlFor="reason" >Reason for contact</label>
    <select name="reason" id="cars">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
    <button>Confess</button>
</section>;
export default Confession;