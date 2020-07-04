import React from 'react';

const CharacterCard = ({record}) => {
  return (
    <div className='card'>
    <div className='card-inner'>
      <div className='card-front'>
        <img src={record.img} alt='' />
      </div>
      <div className='card-back'>
        <h1>{record.name}</h1>
        <ul>
          <li>
            <strong>Actor Name:</strong> {record.portrayed}
          </li>
          <li>
            <strong>Nickname:</strong> {record.nickname}
          </li>
          <li>
            <strong>Birthday:</strong> {record.birthday}
          </li>
          <li>
            <strong>Status:</strong> {record.status}
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
}

export default CharacterCard;
