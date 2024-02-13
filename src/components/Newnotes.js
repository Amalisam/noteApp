const Newnotes = () => {
    return ( 
        <div className="inputcontainer">
            <input type="text"  placeholder="Topic"/><br />
            <textarea name="newNotes" id="" cols="60" rows="3" placeholder="New Note"></textarea>
        </div>
     );
}
 
export default Newnotes;