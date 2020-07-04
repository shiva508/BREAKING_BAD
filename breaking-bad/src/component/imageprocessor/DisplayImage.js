import React from 'react';

const DisplayImage = ({images,isImageUploaded}) => {
    console.log(isImageUploaded);
    console.log(images);
  return (
  <section>
      <img src={images}></img>
  </section>);
}

export default DisplayImage;
