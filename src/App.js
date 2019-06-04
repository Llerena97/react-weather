import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const dataQuery = data => {
    if (data.city === '' || data.country === '') {

      return;
    }
    setCity(data.city)
    setCountry(data.country)
  }

  return (
    <div className="App">
      <Header
          title="React Weather"
        />
      <div className="container-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form
                dataQuery={dataQuery}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
