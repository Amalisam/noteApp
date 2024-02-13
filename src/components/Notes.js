
import Notelist from './Notelist';
import {useState} from 'react';


const Notes = () => {

    const [notelist,setNotelist] = useState(
        [
            {   id:1,
                topic:"topic1",
                content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatum numquam veniam cumque necessitatibus explicabo praesentium nulla aliquam placeat beatae culpa molestiae vel porro alias atque sunt ab magni? Nam, nesciunt!",
    
    
            },
            {   id:2,
                topic:"topic2",
                content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatum numquam veniam cumque necessitatibus explicabo praesentium nulla aliquam placeat beatae culpa molestiae vel porro alias atque sunt ab magni? Nam, nesciunt!",
    
            },
            {   id:3,
                topic:"topic3",
                content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatum numquam veniam cumque necessitatibus explicabo praesentium nulla aliquam placeat beatae culpa molestiae vel porro alias atque sunt ab magni? Nam, nesciunt!",
    
            }
        ]
    )
  
   const btnclick=(id)=>{
   const filNotes = notelist.filter((list)=>list.id!==id)
   console.log(filNotes)
   setNotelist(filNotes)
   }
    

    return (
        <div className="noteListContainer">
        <h2>Note List</h2>
    <Notelist notelist={notelist} btnclick={btnclick}/>
    </div>
    );
}

export default Notes;