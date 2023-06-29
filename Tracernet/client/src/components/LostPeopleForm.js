import React, { useState } from 'react';
import './LostPeopleForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LostPeopleForm = () => {
  const navigate = useNavigate();
  const [lostData, setLostData] = useState({
    name: '',
    age: '',
    gender: '',
    description: '',
    location: '',
    contactnumber: '',
    identification: '',
  });
  const [image, setImage] = useState(null);
  const [isFoundData, setIsFoundData] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    
    setImage(file);
  };

  const handleSubmit = async (e) => {
    console.log(lostData.contactnumber)
    e.preventDefault();

    const formData = new FormData();
    formData.append('testImage', image);
    formData.append('name', lostData.name);
    formData.append('age', lostData.age);
    formData.append('gender', lostData.gender);
    formData.append('description', lostData.description);
    formData.append('location', lostData.location);
    formData.append('contactnumber', lostData.contactnumber);
    formData.append('identification', lostData.identification);

    try {
      let res; // Declare the variable outside the conditional

      if (isFoundData) {
        res = await axios.post('https://tracenet.onrender.com/upload', formData);
        navigate('/Cases');
      } else {
        const formData2 = new FormData(); // Create a new FormData for the other request
        formData2.append('testImage', image);
        formData2.append('name', lostData.name);
        formData2.append('age', lostData.age);
        formData2.append('gender', lostData.gender);
        formData2.append('description', lostData.description);
        formData2.append('location', lostData.location);
        formData2.append('contactnumber', lostData.contactnumber);
        formData2.append('identification', lostData.identification);
    

        res = await axios.post('https://tracenet.onrender.com/Found', formData2);
        navigate('/FoundL');
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
      [e.target.name]: e.target.value,
    });
    console.log(lostData);
  };

  const handleToggle = () => {
    setIsFoundData(!isFoundData);
  };

  return (
    <div className="lostpage-container">
      <div className="form-container">
        <form className="lost-people-form" onSubmit={handleSubmit}>
          <div className='form-heading'>{isFoundData ? 'Report Lost Person' : 'Report Found Person'}</div>
          <div className="form-field">
            <label htmlFor="name" >Name</label>
            <input type="text" id="name" name="name" className='form' placeholder="Enter name" onChange={handleFormChange} />

          </div>
          <div className="form-field">
            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" className='form' placeholder="Enter age" onChange={handleFormChange} />
          </div>
          <div className="form-field">
            <label htmlFor="gender">Gender</label>
            <select  className='form'  id="gender" name="gender" onChange={handleFormChange}>
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="location">Location</label>
            <input type="text" id="location"  className='form'  name="location" placeholder="Enter location" onChange={handleFormChange} />
          </div>
          <div className="form-field">
            <label htmlFor="identification">IdentiFication Mark</label>
            <input type="text"  name="identification" placeholder="identification " onChange={handleFormChange} />
          </div>
          <div className="form-field">
            <label htmlFor="identification">Contact number</label>
            <input type="text"  name="contactnumber" placeholder="contact number " onChange={handleFormChange} />
          </div>

          <div className="form-field">
            <label htmlFor="description">Description</label>
            <textarea id="description"  className='form'  placeholder="Enter description" name="description" onChange={handleFormChange}></textarea>
          </div>
          <div className="form-field">
            <label htmlFor="image">Image</label>
            <input type="file" id="image"  className='form'  accept="image/*" onChange={handleImageUpload} />
          </div>
          <div className="form-field">
            <label htmlFor="image">Complaint Reg</label>
            <input type="file" id="image"  className='form'  accept="image/*" />
          </div>
          <button  type="submit" className="submit-button">Submit</button>

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
      <div className="lostpage-image">
        <img className='img-search' src="https://i.ibb.co/SyxsVbG/search.png" alt="lost-people" border="0" />
      </div>
    </div>
  );
};

export default LostPeopleForm;
