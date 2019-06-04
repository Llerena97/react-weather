import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Error from './components/Error';
import Weather from './components/Weather';

function App() {

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {
    if (city === '') return;
    const queryAPI = async () => {
      const appId = '9fc95460c0498140e107ef7abafded61';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`
      const response = await fetch(url);
      const result = await response.json();
      setResult(result);
    }
    queryAPI();
  }, [city, country])

  const dataQuery = data => {
    if (data.city === '' || data.country === '') {
      setError(true)
      return;
    }
    setCity(data.city)
    setCountry(data.country)
    setError(false)
  }

  let component;
  if (error) {
    component = <Error message='Both fields are required' />
  } else if (result.cod === '404') {
    component = <Error message='City not found' />
  } else {
    component = <Weather result={result} />;
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
            <div className="col s12 m6">
              {component}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
