import React, { useState } from 'react';
import './LostPeopleForm.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const LostPeopleForm = () => {
  const navigate = useNavigate()
  const [lostData , setLostData] = useState({
    name:"",
    age:'',
    gender:'',
    description:'',
    location:'',
    contact:'',
  })
  const [image,setImage]=useState(null)


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const handleSubmit = async(e)=>{
       e.preventDefault()
         
       const formData = new FormData();
       formData.append('testImage', image);
       formData.append('name', lostData.name);
       formData.append('age', lostData.age);
       formData.append('gender', lostData.gender);
       formData.append('description', lostData.description);
       formData.append('location', lostData.location);
       formData.append('contact', lostData.contact);

       try {
        const res = await axios.post('https://tracenet.onrender.com/upload', formData)
         .then((res) => navigate('/ListL'))
        // Handle success
        console.log('Upload successful:', res.data);
      } catch (error) {
        // Handle error
        console.error('Error uploading image:', error);
      }

  }
  const handleFormChange=(e)=>{
    setLostData({
      ...lostData,
      [e.target.name]:e.target.value
    })
    console.log(lostData)
  }
  return (
    <div className="lostpage-container">
      <div className="lost-contain">
        <div className="image-container">
          <img
            src="data:image/jpeg;base64,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"
            alt="Missing Person"
            className="missing-person-image"
          />
        </div>
        <div className="form-container">
          <form className="lost-people-form" onSubmit={handleSubmit}>
            <h2>Report Lost Person</h2>
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
        </div>
      </div>
    </div>
  );
};

export default LostPeopleForm;
