import FormDemo from './components/FormDemo';
import Interview1 from './components/Interview1';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Semantic HTML</h1>
      <p className='description'>
        Semantic HTML means that we use HTML elements that have a specific meaning for browsers, 
        search engines and accessible readers for those with disabilities. A reasonable start to understanding HTML (version 5) created elements could be found here:&nbsp;
        <a href="https://www.freecodecamp.org/news/semantic-html5-elements/">https://www.freecodecamp.org/news/semantic-html5-elements/</a>
      </p>
      <FormDemo />
      <Interview1 />
    </div>
  );
}

export default App;
