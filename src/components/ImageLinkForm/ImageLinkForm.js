import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
        <p className='f3'>
            {'NBA Face Detector detects faces of NBA players in pictures. Give it a try!'}
        </p>
        <div className='center'>
            {/* use tachyons tool styling for CSS */}
            <div className='form center pa4 br3 shadow-5'>
                {/* onChange() mimics what HTML does when the input changes */}
            <input placeholder="Enter image url" className='f4 pa2 w-70 center' type="text" onChange={onInputChange}/>
            <button 
                className='w-30 grow f3 link ph3 pv2 dib white bg-light-purple'
                onClick={onButtonSubmit}
                > Detect</button>
            </div>
        </div>
    </div>
  );
}

export default ImageLinkForm;