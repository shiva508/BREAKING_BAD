import React from 'react';
import breakingbadlogo from '../../images/logo.png';
import UploadImageGrid from '../imageprocessor/UploadImageGrid';
const Header = () => {
  return (
    <header className='center'>
      <img src={breakingbadlogo} alt='Breaking Bad'/>
      <UploadImageGrid></UploadImageGrid>
    </header>
  );
}

export default Header;
