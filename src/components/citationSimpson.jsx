import React from 'react';

const DisplaySimpson = ({simpson}) => {
  return (
    simpson && (
  <div className="QuoteCard">
    <img src={simpson.image} alt={simpson.character} />
    <div>
      <p>Citation : {simpson.quote}</p>
      <h3>Nom : {simpson.character}</h3>
    </div>
  </div>
  )
  
  )};
export default DisplaySimpson;