import React, { useState } from 'react';

const Form = ({dataQuery}) => {

  const [search, setSearch] = useState({
    city: '',
    country: ''
  })

  const handleChange = e => {
      setSearch({
        ...search,
        [e.target.name]: e.target.value
      })
  }

  const getWeather = e => {
    e.preventDefault();
    dataQuery(search);
  }

  return (
    <form
      onSubmit={getWeather}
    >
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          onChange={handleChange}
        />
        <label htmlFor="city">City</label>
      </div>
      <div className="input-field col s12">
        <select onChange={handleChange} name="country">
          <option value="">Select a country</option>
          <option value="US">United States</option>
          <option value="MX">Mexico</option>
          <option value="CO">Colombia</option>
          <option value="AR">Argentina</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">Spain</option>
          <option value="PE">Peru</option>
        </select>
      </div>
      <div className="input-field col s12">
        <input
          type="submit"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
          value="Get Weather"
        />
      </div>
    </form>
  );
}

export default Form;
