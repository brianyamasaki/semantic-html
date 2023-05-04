import React, { useState } from 'react';

const Form1 = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

  const onSubmit = () => {
    alert(`${fname} ${lname} has submitted the form`);
  }
  
  return (
    <div>
      <h2>Submit Your Name (heading 2)</h2>
      <form onSubmit={onSubmit} >
        <div>
          <label for="fname">First name:</label>
          <input type="text" id="fname" name="fname" value={fname} onChange={(evt) => setFname(evt.currentTarget.value)} />
        </div>
        <div>
          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lname" value={lname} onChange={(evt) => setLname(evt.currentTarget.value)} />
        </div>
        <input type="submit" value="Submit" />
      </form>
      <p>This side uses the Form element and proper semantic HTML</p>
      <ul>
        <li>Clicking on the label will activate the associated input</li>
        <li>Hitting the Enter key will submit the form automatically</li>
        <li>Search Engines will understand what this code means</li>
      </ul>
    </div>
  )
}

export default Form1;