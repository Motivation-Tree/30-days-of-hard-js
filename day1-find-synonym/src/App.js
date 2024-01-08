
import React, { useState} from 'react';
import './App.css';
import HeaderTitle from './Components/Header';
import Input from './Components/Input';
import SearchList from './Components/SearchList';

function App() {
  const [searchWord, SetSearchWord] = useState('');
  const [allsynonyms, SetAllsynonyms] = useState([]);
  const onChangeWord = (e)=> {
    SetSearchWord(e.target.value);
  }
  const onClearClick = ()=> {
    SetSearchWord('');
    SetAllsynonyms([]);
  }
  const onFindClick = ()=>{
    const apiUrl = `https://api.api-ninjas.com/v1/thesaurus?word=${searchWord}`;
    console.log("apicall", searchWord);
    fetch(apiUrl, {
      headers: {
        "X-Api-Key": "7fpBsDpo3iDCXgVXLqtnRg==3WitJXjGwWy7HjBJ",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.synonyms.length !== 0) {
          const first30Elements = data.synonyms.slice(0, 30);
          SetAllsynonyms(first30Elements);
        } else {
          SetAllsynonyms([]);
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        SetAllsynonyms([]);
      });
  }
  return (
    <div style={{
       display:'flex',
       flexDirection:'column',
       alignItems:'center',
       justifyContent:'center'
    }}>
    <HeaderTitle/>
    <Input searchWord ={searchWord} onChangeWord={onChangeWord} onFindClick={onFindClick} onClearClick= {onClearClick}/>
    <SearchList allsynonyms= {allsynonyms}/>
    </div>
  );
}

export default App;
