import React from 'react';

import Form1 from './Form1';
import BadForm from './bad-code/Form2';
import '../App.css';

const FormDemo  = () => {
  return (
    <div>
      <h1>Forms</h1>
      <p>Example where non-semantic HTML makes it harder on all users</p>
      <article className='side-by-side'>
        <Form1 />
        <BadForm />
      </article>
    </div>
  )
}

export default FormDemo;