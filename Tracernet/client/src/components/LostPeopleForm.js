import React, { useState } from 'react';
import './LostPeopleForm.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const LostPeopleForm = () => {
  const navigate = useNavigate();
  const [lostData, setLostData] = useState({
    name: "",
    age: '',
    gender: '',
    description: '',
    location: '',
    contact: '',
  });
  const [image, setImage] = useState(null);
  const [isFoundData, setIsFoundData] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('testImage', image);
    formData.append('name', lostData.name);
    formData.append('age', lostData.age);
    formData.append('gender', lostData.gender);
    formData.append('description', lostData.description);
    formData.append('location', lostData.location);
    formData.append('contact', lostData.contact);
  
    try {
      let res; // Declare the variable outside the conditional
  
      if (isFoundData) {
        res = await axios.post('https://tracenet.onrender.com/upload', formData)
        .then((res)=>  navigate('/Cases'));
      } else {
        const formData2 = new FormData(); // Create a new FormData for the other request
        formData2.append('testImage', image);
        formData2.append('name', lostData.name);
        formData2.append('age', lostData.age);
        formData2.append('gender', lostData.gender);
        formData2.append('description', lostData.description);
        formData2.append('location', lostData.location);
        formData2.append('contact', lostData.contact);
  
        res = await axios.post('https://tracenet.onrender.com/Found', formData2)
        .then((res)=>  navigate('/FoundL'));
      }
  
     
      // Handle success
      console.log('Upload successful:', res.data);
    } catch (error) {
      // Handle error
      console.error('Error uploading image:', error);
    }
  };
  

  const handleFormChange = (e) => {
    setLostData({
      ...lostData,
      [e.target.name]: e.target.value
    });
    console.log(lostData);
  };

  const handleToggle = () => {
    setIsFoundData(!isFoundData);
  };

  return (
    <div className="lostpage-container">
      <div className="lost-contain">
        <div className="form-container">
          <form className="lost-people-form" onSubmit={handleSubmit}>
            <h2>{isFoundData ? 'Report Found Person' : 'Report Lost Person'}</h2>
            <div className="form-field">
              <input
                type="text"
                id="name"
                name='name'
                placeholder="Enter name"
                onChange={handleFormChange}
              />
            </div>
            <div className="form-field">
              <input
                type="number"
                id="age"
                name='age'
                placeholder="Enter age"
                onChange={handleFormChange}
              />
            </div>
            <div className="form-field">
              <select
                id="gender"
                name='gender'
                onChange={handleFormChange}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-field">
              <input
                type="text"
                id="location"
                name='location'
                placeholder="Enter location"
                onChange={handleFormChange}
              />
            </div>
            <div className="form-field">
              <textarea
                id="description"
                placeholder="Enter description"
                name='description'
                onChange={handleFormChange}
              ></textarea>
            </div>
            <div className="form-field">
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          <div className="toggle-container">
            <button className={`toggle-button ${isFoundData ? 'active' : ''}`} onClick={handleToggle}>
              Lost Data
            </button>
            <button className={`toggle-button ${isFoundData ? '' : 'active'}`} onClick={handleToggle}>
              Found Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LostPeopleForm;
