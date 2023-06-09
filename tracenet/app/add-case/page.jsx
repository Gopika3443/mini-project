"use client";

import { useState }from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '@components/Form';
import AddLostCase from '@components/AddLostCase';

const AddCase = () => {
  const router = useRouter();
  const { data: session } = useSession();


  const [submitting, setSubmitting] = useState(false);
  const [caseData, setCaseData] = useState({
    name: '',
    age: '',
    gender: '',
    location: '',
    description: '',
    contactInfo: '',
  });

  const addCase = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try{
      const response = await fetch('/api/prompt/new',
      {
        method: 'CASE',
        body: JSON.stringify({
          name: caseData.name,
          userId: session?.user.id,
          age: caseData.age,
          gender: caseData.gender,
          location: caseData.location,
          description: caseData.description,
          contactInfo: caseData.contactInfo,

        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if(response.ok) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    
    } finally {
      setSubmitting(false);
    }


  };

  const handleFormClose = () => {
    // Handle the form close event if needed
    // For example, reset the form data
    setCaseData({
      name: '',
      age: '',
      gender: '',
      location: '',
      description: '',
      contactInfo: '',
    });
  };

  return (
    <Form 
    type="Add"
    caseData={caseData}
    setCaseData={setCaseData}
    submitting={submitting}
    handleSubmit={addCase}
    />
    
  )

  return (
    <AddLostCase
      onClose={() => {handleFormClose}}
    />
  );
  
};

export default AddCase;