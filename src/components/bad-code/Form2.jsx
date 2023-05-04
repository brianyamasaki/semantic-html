import React, { useState } from 'react';

const Form2 = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

  const onSubmit = () => {
    alert(`${fname} ${lname} has submitted the form`);
  }
  
  return (
    <div>
      <h2>Non-Form Submit Your Name</h2>
      <div>
        <span>First name:</span>
        <input type="text" id="fname" name="fname" value={fname} onChange={(evt) => setFname(evt.currentTarget.value)} />
      </div>
      <div>
        <span>Last name:</span>
        <input type="text" id="lname" name="lname" value={lname} onChange={(evt) => setLname(evt.currentTarget.value)} />
      </div>
      <button onClick={onSubmit}>Submit</button>
      <p>Looks the same, but clicking on the labels doesn't select the input and user must click on the Submit button.</p>
    </div>
  )
}

export default Form2;