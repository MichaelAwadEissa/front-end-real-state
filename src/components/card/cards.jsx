// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
// import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

// function BasicExample(props) {
//   return (
//     <Card style={{ width: props.width || '18rem' }}>
//       <Card.Img  src={props.logo} variant="top" />
//       <Card.Body>
    
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Card.Title>{props.name}</Card.Title>
//           <FontAwesomeIcon 
//             icon={props.isFavorite ? solidHeart : regularHeart} 
//             style={{ color: props.isFavorite ? 'red' : 'gray', cursor: 'pointer' }} 
//             onClick={props.onFavoriteToggle}
//           />
//         </div>
//         <div>{props.release_date}</div>
//         {props.btnName && <Button as={Link} to={props.url} variant="primary">{props.btnName}</Button>}

//         {/* <Button onClick={handleAddToCart} variant="primary">Add to Cart</Button> */}
//       </Card.Body>
//     </Card>
//   );
// }

// export default BasicExample;
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux'; 
import { addToWatchlist, removeFromWatchlist } from '../../store/actions/watchlist'; 

function BasicExample(props) {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist.watchlist);

  // Check if the current movie is in the watchlist
  const isFavorite = watchlist.some(movie => movie.id === props.id);

  const handleFavoriteToggle = (event) => {
    event.preventDefault(); // Prevents any default action associated with the click
    if (isFavorite) {
      dispatch(removeFromWatchlist(props.id));
    } else {
      dispatch(addToWatchlist({
        id: props.id,
        name: props.name,
        logo: props.logo,
        release_date: props.release_date
      }));
    }
  };

  return (
    <Card style={{ width: props.width || '18rem' }}>
      <Card.Img src={props.logo} variant="top" />
      <Card.Body>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Card.Title>{props.name}</Card.Title>
          <FontAwesomeIcon 
            icon={isFavorite ? solidHeart : regularHeart} 
            style={{ color: isFavorite ? 'red' : 'gray', cursor: 'pointer' }} 
            onClick={handleFavoriteToggle}
          />
        </div>
        <div>{props.release_date}</div>
        {/* {props.btnName && <Button as={Link} to={props.url} variant="primary">{props.btnName}</Button>} */}
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
