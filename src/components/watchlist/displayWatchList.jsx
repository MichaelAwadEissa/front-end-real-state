// import React from 'react';
// import { useSelector } from 'react-redux';

// const Watchlist = () => {
//   const watchlist = useSelector((state) => state.watchlist.watchlist);

//   return (
//     <div>
//       <h2>My Watchlist</h2>
//       <ul>
//         {watchlist.map((movie) => (
//           <li key={movie.id}>{movie.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Watchlist;


import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card'; // Ensure you have react-bootstrap installed

const Watchlist = () => {
  const watchlist = useSelector((state) => state.watchlist.watchlist);

  return (
    <div className='d-flex justify-content-center flex-wrap gap-4 py-5'>
      
      {watchlist.length === 0 ? (
        <p>No movies in your watchlist</p>
      ) : (
        watchlist.map((movie) => (
          <Card key={movie.id} style={{ width: '18rem' }}>
            <Card.Img src={movie.logo} variant="top" />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.release_date}</Card.Text>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default Watchlist;
