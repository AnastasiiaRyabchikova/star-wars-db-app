import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.render(<App />, document.getElementById('root'));


// const swapi = new SwapiService();
// swapi.gelAllPeople().then(people => people.forEach((p) => {
//   console.log(p.name)
// }));

// swapi.getPersonById(3).then(person => console.log(person.name));


// fetch('https://swapi.dev/api/people/1').then(res => res.json()).then((body) => console.log(body));