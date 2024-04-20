import React, { useState } from 'react';
import Header from '../components/Header';
import '../App.css';
import axios from 'axios';

function Home(props) {
  const [imageBase64, setImageBase64] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        setImageBase64(reader.result);
        props.setImageBase64(reader.result);
        sendImageToServer(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const sendImageToServer = (base64Data) => {
    axios.post('http://192.168.0.100:8000/api/openAIVision', { image: base64Data }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log('Response from server:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  // Function to open camera when the "Click To Upload" text is clicked
  const openCamera = () => {
    const inputElement = document.getElementById('uploadInput');
    if (inputElement) {
      inputElement.setAttribute('capture', 'environment');
      inputElement.click();
    }
  };

  return (
    <div className='pl-5 pr-5 pt-5'>
      <div>
        <Header />
        <h1 className="mt-14 text-5xl font-black text-center">Upload Your Image</h1>
        <div className="container flex items-center justify-center">
          <label htmlFor="uploadInput" className="mt-14 min-h-[305px] min-w-full items-center justify-center flex-col flex border-4 border-gray-300 rounded-3xl border-dashed cursor-pointer">
            {imageBase64 ? (
              <img src={imageBase64} alt="Uploaded" className="w-64" />
            ) : (
              <>
                <img className="w-10" src="./upload.png" alt="" />
                <h1 className="text-xl opacity-50" onClick={openCamera}>Click To Upload</h1>
              </>
            )}
          </label>
          <input
            type="file"
            id="uploadInput"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
