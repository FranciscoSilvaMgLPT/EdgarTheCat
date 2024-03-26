import React, { useState, useEffect } from 'react';

const CatList = () => {
  const [cats, setCats] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('src/assets/cats.json');
        const data = await response.json();
        setCats(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Cats for Sale</h1>
      {cats && (
    <div>
          {Object.keys(cats).map(catId => (
            <div key={catId} className='catCards'>
              <img src={cats[catId].image} alt={cats[catId].name} />
              <p>Name: {cats[catId].name}</p>
              <p>Race: {cats[catId].race}</p>
              <p>Color: {cats[catId].color}</p>
              <p>Weight: {cats[catId].weight}</p>
              <p>Age: {cats[catId].age}</p>
              <p>Location: {cats[catId].location}</p>
              <p>Price: ${cats[catId].price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CatList;
