import React from 'react';

const Error = ({message}) => {
  return (
    <div className="card-panel red darkend-4 error col s12">
      {message}
    </div>
  );
}

export default Error;
