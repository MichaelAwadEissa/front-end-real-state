// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import NavBar from '../../components/navbar/navbar';
// import MyCard from '../../components/card/cards';
// import './home.css'
// import { Link,NavLink } from 'react-router-dom';
// import Details from '../../components/details/details';
// import { useDispatch ,useSelector } from 'react-redux';
// const Home = () => {
//   const [Products, setProducts] = useState([]);

//   useEffect(() => {
//     axios
//       .get('https://api.themoviedb.org/3/movie/popular?api_key=aceb067a920ac17155823a50c94ed9d5')
//       .then((res) => {
//         setProducts(res.data.results); // Access the 'results' array from the response
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const [cart, setCart] = useState([]);

//   // const handleAddToCart = (product) => {
//   //   setCart(prevCart => [...prevCart, product]);
//   // };
  
  
// // const watchlist =useSelector(state => state.watchlist.watchlist)

// // useEffect (()=> {
// //   console.log("Watchlist",watchlist)
// // })

//   return (
//     <>
//       {/*strat search div */}
//       <div className='p-3'>
//         <div className="search p-5">
//           <h1 className='py-3'>Welcome to our movie app</h1>
//           <p>Millions of movies, TV shows and people to discover. Explore now.</p>
//           <div className="form d-flex gap-3">
//             <input type="text" placeholder='Search and explore....' className='form-control'/>
//             <button>Search</button>
//           </div>
//         </div>
//       </div>
//       {/*end search div */}  

//       <div className='d-flex justify-content-center flex-wrap gap-4 py-5' >
//         {Products.map((Product, index) => (
//           <div key={index}>
//             <NavLink className="text-decoration-none text-black" to='*'>
//             <MyCard
//               name={Product.title} // TMDB uses 'title' for movie names
//               logo={`https://image.tmdb.org/t/p/w500${Product.poster_path}`} // Use 'poster_path' for movie posters
//               url={`/details/${Product.id}`} // Corrected the path name from 'detailes' to 'details'
//               btnName="View Details"
//               width="18rem"
//               // onAddToCart={() => handleAddToCart(Product)}
//               release_date={Product.release_date}  
//                         />
//             </NavLink>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Home;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../../components/navbar/navbar';
import MyCard from '../../components/card/cards';
import './home.css';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch movies data
    axios
      .get('https://api.themoviedb.org/3/movie/popular?api_key=aceb067a920ac17155823a50c94ed9d5')
      .then((res) => {
        setProducts(res.data.results); // Access the 'results' array from the response
      })
      .catch((err) => {
        console.log(err);
      });

    // Tawk.to Chat Integration
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function(){
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/66ebe702e5982d6c7bb0af61/1i84nsob9';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();

  }, []); // Runs once on mount

  // Search functionality
  function search() {
    let valueSearch = document.getElementById("search").value;
    setProducts(Products.filter((movie) => {
      return valueSearch === movie.title || movie.overview.includes(valueSearch);
    }));
  }

  return (
    <>
      {/* Start search div */}
      <div className='p-3'>
        <div className="search p-5">
          <h1 className='py-3'>Welcome to our Real state app</h1>
          <p>Millions of properties and people to discover. Explore now.</p>
          <div className="form d-flex gap-3">
            <input id='search' type="text" placeholder='Search and explore....' className='form-control'/>
            <button onClick={search} className='btn btn-warning'>Search</button>
          </div>
        </div>
      </div>
      {/* End search div */}

      {/* Movie Cards */}
      <div className='d-flex justify-content-center flex-wrap gap-4 py-5'>
        {Products.map((Product) => (
          <div key={Product.id}>
            <NavLink className="text-decoration-none text-black" to={`/details/${Product.id}`}>
              <MyCard
                id={Product.id}
                // name={Product.title}
                // logo={`https://image.tmdb.org/t/p/w500${Product.poster_path}`}
                logo={`https://www.dreamsmarketing.pk/images/post/17155918246641da90b7068.jpg`}
                // url={`/details/${Product.id}`}
                btnName="View Details"
                width="18rem"
                // release_date={Product.release_date}
              />
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
