import React from 'react';
function CreePost({ input , setInput ,posts,setposts }){


    const onInputChange =(e)=>{
        setInput(e.target.value);
    };
    
   const onClickSubmit =(e)=>{
         e.preventDefault();  
 
         fetch('http://localhost:5052/api/Note/',{
             method : 'post',
             headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
             },
             body :JSON.stringify({
                note:input ,
                type :"note",
                idCase:1
             })
         }).then(response=>{
             console.log(response)
             if(response.status==200){
                 console.log("success")
             }
         })
        setInput("");

   }

    return(
    <>
    <form onSubmit={onClickSubmit} >

        <input type="text" className='creeNote' 
        placeholder='Saisissez une note...' 
        onChange={onInputChange}
        value={input}
        />
        
        <div id="afficheNote">
            <button type="submit" id="logoAffiche" />
           
        </div>
    </form>
    </>
    );
}
export default CreePost ;