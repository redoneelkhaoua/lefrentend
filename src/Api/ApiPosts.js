
function getVotes() {
       return (
          fetch('http://localhost:5052/api/Vote')
          .then((response) => response.json())
         )
        };

export function getCase() {
 return (
    fetch('http://localhost:5052/api/Case')
    .then((response) => response.json())
   )
  };

export  function getNote() {
  return (
     fetch('http://localhost:5052/api/Note')
     .then((response) => response.json())
    )
   };

   export  function getFilied() {
    return (
       fetch('http://localhost:5052/api/file')
       .then((response) => response.json())
      )
     };


export default getVotes ;