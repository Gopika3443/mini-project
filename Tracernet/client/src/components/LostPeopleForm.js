import React, { useState } from 'react';
import "./LostPeopleForm.css";

const LostPeopleForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null); // State for storing the uploaded image

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Gender:", gender);
    console.log("Location:", location);
    console.log("Description:", description);
    console.log("Image:", image);
    // Reset form fields
    setName("");
    setAge("");
    setGender("");
    setLocation("");
    setDescription("");
    setImage(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="lostpage-container">
      <div className="lost-contain">
        <form className="lost-people-form">
          <h2>Report Lost Person</h2>
          <div className="form-field">
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-field">
            <input
              type="number"
              id="age"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-field">
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
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
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="form-field">
            <textarea
              id="description"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageUpload}
            />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LostPeopleForm;
