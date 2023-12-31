// import '/StyleSheet/Contact.css'
// import React, { useState } from 'react';


// export const Contact: React.FC = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         telephone: '',
//       });
    
//   return (
//     <div className='contactContainer'>
//         <div className='contactContent'>

//             <div className='contactHeader'>
//                 <h1>We're Listening - Tell Us About Your Business</h1>
//                 <p>Fill out the form below</p>
//             </div>

//             <div className='formContainer'>
//                 <form>

//                     <label htmlFor='firstName'>
//                         First Name
//                         <input type='text' id='firstName' />
//                     </label>

//                     <label htmlFor='lastName'>
//                         Last Name
//                         <input type='text' id='lastName'/>
//                     </label>

//                     <label htmlFor='email'>
//                         Email
//                         <input type='email' id='email'/>
//                     </label>

//                     <label htmlFor='telephone'>
//                         Telephone
//                         <input type='tel' id='telephone'/>
//                     </label>

//                     <label htmlFor="dropdown">How should we contact you?</label>
//                     <select
//                     id="dropdown"
//                     name="selectedOption"
//                     required
//                     >
//                     <option disabled>Please select</option>
//                     <option value="option1">Email</option>
//                     <option value="option2">Phone</option>
//                     <option value="option3">LinkedIn</option>
//                     </select>

//                     <label>
//                         Which best describes your business?
//                     </label>

//                     <label>
//                         <input
//                         type="checkbox"
//                         name="isChecked"
//                         />
//                         E-Commerce
//                     </label>

//                     <label>
//                         <input
//                         type="checkbox"
//                         name="isChecked"
//                         />
//                         IT / Tech
//                     </label>

//                     <label>
//                         <input
//                         type="checkbox"
//                         name="isChecked"
//                         />
//                         Health & Wellness
//                     </label>

//                     <label>
//                         <input
//                         type="checkbox"
//                         name="isChecked"
//                         />
//                         Clothing
//                     </label>

//                     <label>
//                         <input
//                         type="checkbox"
//                         name="isChecked"
//                         />
//                         Other
//                     </label>

//                     <label>
//                         What are some details we should know?
//                     </label>

//                     <input type='text' />

//                     <button>Submit</button>
//                 </form>
//             </div>
//         </div>
//     </div>
//   );
// };

import React, { useState } from 'react';
import '/StyleSheet/Contact.css';
import { Footer } from './Footer';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  contactMethod: string;
  businessDescription: string[];
  details: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    contactMethod: '',
    businessDescription: [],
    details: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const updatedBusinessDescription = [...formData.businessDescription];
      if (checked) {
        updatedBusinessDescription.push(value);
      } else {
        const index = updatedBusinessDescription.indexOf(value);
        if (index !== -1) {
          updatedBusinessDescription.splice(index, 1);
        }
      }

      setFormData((prevData) => ({
        ...prevData,
        [name]: updatedBusinessDescription,
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Add your form submission logic here (e.g., send data to API)

    // Reset the form data
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      telephone: '',
      contactMethod: '',
      businessDescription: [],
      details: '',
    });
  };

  return (
    <div className='contactContainer'>
      <div className='contactContent'>
        <div className='contactHeader'>
          <h1>We're Listening - Tell Us About Your Business</h1>
          <p>Fill out the form below</p>
        </div>

        <div className='formContainer'>
          <form onSubmit={handleSubmit}>
            <div className='firstLastDiv'>
            <label htmlFor='firstName' className='label1Style'>
              First Name
              <input
                className='inputStyle'
                type='text'
                id='firstName'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
              />
            </label>

            <label htmlFor='lastName' className='label1Style'>
              Last Name
              <input
                className='inputStyle'
                type='text'
                id='lastName'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
              />
            </label>
            </div>

            <label htmlFor='email' className='label1Style'>
              Email
              <input
                className='inputStyle'
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label htmlFor='telephone' className='label1Style'>
              Telephone
              <input
                className='inputStyle'
                type='tel'
                id='telephone'
                name='telephone'
                value={formData.telephone}
                onChange={handleChange}
              />
            </label>

            <label htmlFor='contactMethod' className='contactLabel'>How should we contact you?</label>
            <select
              id='contactMethod'
              name='contactMethod'
              className='selectStyle'
              value={formData.contactMethod}
              onChange={handleChange}
              required
            >
              <option value='' disabled  className='optionStyle'>
                Please select
              </option>
              <option value='Email' className='optionStyle'>Email</option>
              <option value='Phone'  className='optionStyle'>Phone</option>
              <option value='LinkedIn'  className='optionStyle'>LinkedIn</option>
            </select>

            <label className='businessStyle'>Which best describes your business?</label>

            <label className='businessOption'>
              <input
                type='checkbox'
                name='businessDescription'
                value='E-Commerce'
                checked={formData.businessDescription.includes('E-Commerce')}
                onChange={handleChange}
              />
              E-Commerce
            </label>

            <label className='businessOption'>
              <input
                type='checkbox'
                name='businessDescription'
                value='IT / Tech'
                checked={formData.businessDescription.includes('IT / Tech')}
                onChange={handleChange}
              />
              IT / Tech
            </label>

            <label className='businessOption'>
              <input
                type='checkbox'
                name='businessDescription'
                value='Health & Wellness'
                checked={formData.businessDescription.includes('Health & Wellness')}
                onChange={handleChange}
              />
              Health & Wellness
            </label>

            <label className='businessOption'>
              <input
                type='checkbox'
                name='businessDescription'
                value='Clothing'
                checked={formData.businessDescription.includes('Clothing')}
                onChange={handleChange}
              />
              Clothing
            </label>

            <label className='businessOption'>
              <input
                type='checkbox'
                name='businessDescription'
                value='Other'
                checked={formData.businessDescription.includes('Other')}
                onChange={handleChange}
              />
              Other
            </label>

            <label htmlFor='details' className='detailsStyle'>What are some details we should know?</label>
            <textarea
                className='detailsText'
              id='details'
              name='details'
              value={formData.details}
              onChange={handleChange}
              required
            />

            <div className='buttonDiv'>
            <button type='submit' className='submitBtn'>Submit</button>
            </div>
          </form>

        </div>
      </div>

      <Footer />
    </div>
  );
};
