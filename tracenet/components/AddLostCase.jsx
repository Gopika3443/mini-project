import { useState } from 'react';

const AddLostCase = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    location: '',
    description: '',
    contactInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any additional validation or data handling here
    // Submit the form data to the server or handle it as required
    console.log(formData);

    // Close the form after submission
    onClose();
  };

  return (
    <div>
      <h2>Add Lost Case</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="age">Age</label>
        <input
          type="text"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label htmlFor="gender">Gender</label>
        <input
          type="text"
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        />

        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="contactInfo">Contact Info (Optional)</label>
        <input
          type="text"
          id="contactInfo"
          name="contactInfo"
          value={formData.contactInfo}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddLostCase;
