import React from 'react';
import { Button, FormControl, FormLabel, FormErrorMessage, Input, Radio,RadioGroup, Textarea, Select } from '@chakra-ui/react';
import './ContactForm.css';

const ContactForm = () => {

  return (
    <div className="lost-container">
      <form id="contact_form">
        <fieldset>
          <legend>Contact Us Today!</legend>

          <div className="form-group">
            <FormLabel>First Name</FormLabel>
            <div className="inputGroupContainer">
              <FormControl>
                <Input
                  placeholder="First Name"
                />
              </FormControl>
            </div>
          </div>

          <div className="form-group">
            <FormLabel>Last Name</FormLabel>
            <div className="inputGroupContainer">
              <FormControl>
                <Input
                  placeholder="Last Name"
                />
              </FormControl>
            </div>
          </div>

          <div className="form-group">
            <FormLabel>E-Mail</FormLabel>
            <div className="inputGroupContainer">
              <FormControl>
                <Input
                  placeholder="E-Mail Address"
                />
              </FormControl>
            </div>
          </div>

          <div className="form-group">
            <FormLabel>Phone #</FormLabel>
            <div className="inputGroupContainer">
              <FormControl>
                <Input
                  placeholder="(845)555-1212"
                />
              </FormControl>
            </div>
          </div>

          <div className="form-group">
            <FormLabel>Address</FormLabel>
            <div className="inputGroupContainer">
              <FormControl>
                <Input
                  placeholder="Address"
                />
              </FormControl>
            </div>
          </div>

          <div className="form-group">
            <FormLabel>City</FormLabel>
            <div className="inputGroupContainer">
              <FormControl>
                <Input
                  placeholder="City"
                />
              </FormControl>
            </div>
          </div>

          <div className="form-group">
            <FormLabel>State</FormLabel>
            <div className="inputGroupContainer">
              <FormControl>
                <Input
                  placeholder="State"
                />
              </FormControl>
            </div>
          </div>

          <div className="form-group">
            <FormLabel>Zip Code</FormLabel>
            <div className="inputGroupContainer">
              <FormControl>
                <Input
                  placeholder="Zip Code"
                />
              </FormControl>
            </div>
          </div>

          <div className="form-group">
            <FormLabel>Website or domain name</FormLabel>
            <div className="inputGroupContainer">
              <FormControl>
                <Input
                  placeholder="Website or domain name"
                />
              </FormControl>
            </div>
          </div>

          <div className="form-group">
            <FormLabel>Do you have hosting?</FormLabel>
            <div>
              <RadioGroup defaultValue="yes">
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </RadioGroup>
            </div>
          </div>

          <div className="form-group">
            <FormLabel>Project Description</FormLabel>
            <div className="inputGroupContainer">
              <FormControl>
                <Input
                  placeholder="Project Description"
                />
              </FormControl>
            </div>
          </div>

          <div className="alert alert-success" role="alert" id="success_message">Success <i className="glyphicon glyphicon-thumbs-up"></i> Thanks for contacting us, we will get back to you shortly.</div>

          <div className="form-group">
            <div className="col-md-4">
              <Button type="submit" colorScheme="yellow">
                Send
              </Button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ContactForm;
