import React from 'react';
import CharacterCard from './CharacterCard';
import Spinner from '../ui/Spinner';
const CharacterGrid = ({isLoading,records}) => {
  return isLoading?(<Spinner/>):(
  <section className='cards'>
      {records.map(record=>(
          <CharacterCard key={record.char_id} record={record} />
      ))}

  </section>);
}
export default CharacterGrid;
