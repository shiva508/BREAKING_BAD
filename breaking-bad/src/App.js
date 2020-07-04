import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Header from './component/ui/Header';
import CharacterGrid from './component/characters/CharacterGrid';
import Search from './component/ui/Search';
import './App.css';

const App=()=> {
  const [records, setRecord] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const[queryByText,setQueryText]=useState('');
  useEffect(() => {
    const fetchRecords=async()=>{
      const response=await axios(`https://www.breakingbadapi.com/api/characters?name=${queryByText}`)
      console.log(response.data)
      setRecord(response.data);
      setIsLoading(false);
    }
    fetchRecords();
  },[queryByText]);
  return (
    <div className="container">
      <Header/>
      <Search getQueryText={(query)=>setQueryText(query)}/>
      <CharacterGrid isLoading={isLoading} records={records}/>
    </div>
  );
}

export default App;
