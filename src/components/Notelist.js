




const Notelist = ({notelist, btnclick}) => {
    


    return (

    <>  
            {notelist.map((list) => {
                return (
                  
                    <div className="listCont" key={list.id}>
                        <div className="topic"><h4>{list.topic}</h4></div>
                        <div className="content"><p>{list.content}</p></div>

                        <div className="deletebtn"><button onClick={()=>{btnclick(list.id)}}>Delete</button></div>

                    </div>
  
                )
            })}

</> 

        
    );
}

export default Notelist;