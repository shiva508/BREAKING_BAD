import React,{useState} from 'react';
import DisplayImage from './DisplayImage';
const UploadImageGrid = () => {
    const [image,setUploadedImage]=useState([]);
    const [isImageUploaded,setIsImageUploaded]=useState(false);
    const [Image,setImage]=useState([]);
    const onSelectImage=(e)=>{
    let files=e.target.files;
    let render=new FileReader()
    render.readAsDataURL(files[0])
    render.onload=(e)=>{
      if( setUploadedImage.length>0){
          console.warn('fddg ery');
      }
        setIsImageUploaded(true);
        setUploadedImage(e.target.result);
    }
}
  return (
    <div>
        <form>
        <input type='file' className='form-control' onChange={(e)=>onSelectImage(e)}></input>
        </form>
        <DisplayImage images={image} isImageUploaded={isImageUploaded}/>
    </div>
  );
}

export default UploadImageGrid;
