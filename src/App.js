import React, { useEffect, useState } from "react";
import Header from "./Header";
import SideBare from "./SideBar";
import Categorie from "./Categorie";
import CreePost from "./PosteCreator";
import Fichier from "./Fichier"
import Vote from "./Vote";
import Statut from "./Statut"
import PosteList from "./PosteList";
import "./index.css";
import "./Style.css";
function App() {
  const [posts, setposts] = useState([]);
  const [votes, setvotes] = useState([]);
  const [notes, setnotes] = useState([]);
  const [filies, setfilies] = useState([]);
  const [Cases, setCses] = useState([]);

 

  const [input, setInput] = useState("");

  const [results, setresult] = useState([
    { id_vote: 1, id_partisipant: null, id_choix: 1 },
    { id_vote: 1, id_partisipant: null, id_choix: 1 },
    { id_vote: 1, id_partisipant: null, id_choix: 3 },
    { id_vote: 3, id_partisipant: null, id_choix: 2 },
    { id_vote: 3, id_partisipant: null, id_choix: 2 },
  ]);

  posts.sort(function (a, b) {
    var dateA = new Date(a.date),
      dateB = new Date(b.date);
    return dateA - dateB;
  });
  /* code for create Statut ----------------------------*/

  const [Statuts, setStatut] = useState([
    {id_Statut: 1,Statut: "stat1",},
    { id_Statut: 2, Statut: "stat2" },
    { id_Statut: 3, Statut: "stat3" },
    { id_Statut: 4, Statut: "stat4" },
  ]);

  const [statut, setStatu] = useState({
    id_Categorie: null,
    categorie: "",
  });
  function handleChangeStatut(e) {
    e.preventDefault();
    setStatu({ ...statut, Statut: e.target.value });
  }

  function handeCreateStatut(e) {
    setStatut([...Statuts, statut]);
  }
/* code for create Categorie ----------------------------*/
const [Categories, setCategories] = useState([
  {id_Categorie: 1,categorie: "categ1",},
  {id_Categorie: 2,categorie: "categ2",},
  {id_Categorie: 3,categorie: "categ3",},
  {id_Categorie: 4,categorie: "categ4",},
]);


const [currentCategorie, setCurrentCategorie] = useState({
  id_Statut: null,
  Statut: "",
});
  function handleChangeCategorie(e) {
    setCurrentCategorie({ ...currentCategorie, categorie: e.target.value });
  }

  function handeCreateCategorie(e) {
    setCategories([...Categories, currentCategorie]);
  }



 /* code for create vote ----------------------------*/

 const [choix, setChoix] = useState([]);

 const [currentChoix, setcurrentChoix] = useState({
   idChoice: null,
   choice: "",
   idVote: null,
 });
  const [nouveauChoix, setNouveauChoix] = useState([]);

  function changeCreerChoix(e) {
    setcurrentChoix({
      ...currentChoix,
      choice: e.target.value,
      idVote: 5,
      idChoice: nouveauChoix.length,
    });
  }

  function ClickCreerChoix() {
    setNouveauChoix([...nouveauChoix, currentChoix]);
    console.log(nouveauChoix);
  }

  function handlSupprChoix(choix) {
    setNouveauChoix(nouveauChoix.filter((choi) => choi.choice != choix.choice));
  }
  const [titreVote, setTitreVote] = useState("");
  function onChoncheTitre(e) {
    setTitreVote(e.target.value);
    console.log(titreVote);
  }
  function handleCreerVote() {
    nouveauChoix.map((choi) => {
      choix.push(choi);
      console.log(choix);
    });
    console.log(choix);
    setposts([
      ...posts,
      {
        id: posts.length + 1,
        title: "hhhh",
        id_vote: 5,
        id_dossier: 7,
        date: 555,
        type: "vote",
      },
    ]);
    console.log(posts);

    fetch("http://localhost:5052/api/Vote", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        title: titreVote,
        type: "vote",
        idCase: 1,
        choices: nouveauChoix,
      }),
    }).then((response) => {
      console.log(response);
      if (response.status == 200) {
        console.log("success");
      }
    });
  }

  return (
    <>
      <Header />

      <SideBare />
    <div id="content">
      <Categorie
        Categories={Categories}
        onChange={handleChangeCategorie}
        onClick={handeCreateCategorie}
      />

      <Fichier
        onChange={handleChangeStatut}
        onClick={handeCreateStatut}
      />

      <Statut
        Statuts={Statuts} 
      />

      <Vote
        nouveauChoix={nouveauChoix}
        onChange={changeCreerChoix}
        onClick={ClickCreerChoix}
        onSupprime={handlSupprChoix}
        onCreer={handleCreerVote}
        onChoncheTitre={onChoncheTitre}
        posts={posts}
      />

      <div className="postessimo">
        <PosteList
          posts={posts}
          setposts={setposts}
          choix={choix}
          setChoix={setChoix}
          results={results}
        />
      </div>
      <CreePost
        input={input}
        setInput={setInput}
        posts={posts}
        setposts={setposts}
      />
      </div>  
    </>
  );
}

export default App;
