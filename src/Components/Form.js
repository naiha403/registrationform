import React from "react";
import { useState } from "react";

const Form = (props) => {
    const [formData, setFormData] = useState({
      fname: '',
      lname: '',
      phoneNo: '',
      email: '',
      address: '',
      program: '',
      agree: false
    });
    const { fname, lname, phoneNo, email, address, program, agree } = formData;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,[name]: value
        }));
      };

    const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      alert('Terms and Conditions are not checked!');
    } else {
      const data = {
        fname,
        lname,
        phoneNo,
        email,
        address,
        program
      };
      props.addData(data);

      setFormData({
        fname: '',
        lname: '',
        phoneNo: '',
        email: '',
        address: '',
        program: '',
        agree: false
      });
    }
  };

  return (
    <div className='form'>
      <h1>REGISTRATION FORM</h1>
      <form className='form-data' onSubmit={handleSubmit}>
        
        <input
          type='text'
          name='fname'
          id='name'
          placeholder='First Name'
          value={fname}
          onChange={handleInputChange}
        />
        <br />
      

        <input
          type='text'
          name='lname'
          id='name'
          placeholder='Last Name'
          value={lname}
          onChange={handleInputChange}
        />
        <br />

        <input
          type='phone'
          name='phoneNo'
          id='phone'
          placeholder='Phone No'
          value={phoneNo}
          onChange={handleInputChange}
        />
        <br />

        <input
          type='text'
          name='email'
          id='email'
          placeholder='Email Address'
          value={email}
          onChange={handleInputChange}
        />
        <br />

        <input
          type='text'
          name='address'
          id='address'
          placeholder='Address'
          value={address}
          onChange={handleInputChange}
        />
        <br />

        <input
          type='text'
          name='program'
          id='program'
          placeholder='Program'
          value={program}
          onChange={handleInputChange}
        />
        <br />

        <div>
          <input
            type='checkbox'
            id='agree'
            name='agree'
            checked={agree}
            onChange={() => setFormData((prevFormData) => ({ ...prevFormData, agree: !agree }))}
          />
          <label htmlFor='agree'>Do you agree with our terms and conditions.</label>
        </div>

        <br />
        <input type='submit' value='Register' className="submit"/>
      </form>
    </div>
  );
};
export default Form;