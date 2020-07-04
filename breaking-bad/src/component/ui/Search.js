import React,{useState} from 'react';

const Search = ({getQueryText}) => {
    const [text,setText]=useState('');
    const onTypeQueryText=(queryText)=>{
            setText(queryText)
            getQueryText(queryText);
    }
  return (
    <section className='search'>
        <form>
            <input 
            type='text' 
            className='form-control' 
            value={text}
            onChange={(e)=>onTypeQueryText(e.target.value)}
            placeholder='Search Character name'
            ></input>

        </form>

    </section>
  );
}

export default Search;
