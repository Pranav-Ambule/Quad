import React from 'react'
import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";


import { API_URL, useGlobalContext } from './Context';
// const { movie } = useGlobalContext();

const Movie = () => {
  const { id, score } = useParams();
  const iid = id;
  const [url, seturl] = useState("");
  // const [type, settype] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const [temp, settemp] = useState([]);
  // let name,type,language;

  const getMovies = async (url) => {
    setisLoading(true);

    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length !== 0) {
        setisLoading(false);
        let tempo = data.filter((cur) => {

          return (cur.show.id == iid)
        })
        // seturl(tempo.show.url);
        settemp(tempo);
        console.log(temp);
        // settemp(tempo.show);
      }
      else {
        console.log("Empty");

      }
    }
    catch (Error) {
      console.error(Error);
    }
  }
  useEffect(() => {
    // setTimeout(() => {

    getMovies(`${API_URL}`);

    if (temp !== undefined) {
      console.log("Data recieved", temp)

    }
    else {
      console.log("Data not recieved")

    }
    // }, 800);
  }, [])

  if (isLoading) {
    return (
      <div className='movie-section'>
        <div className='loading'>Loading...</div>
      </div>
    )
  }



  console.log("Final temp:", temp);
  // console.log("Final score:",temp.score);

  return (
    <>
      {temp.map((values) => {
        let { name, id, image, genres, rating, summary, language } = values.show;
        if (rating.average == null)
          rating.average = "Not Rated";

        let Sum = <div dangerouslySetInnerHTML={{ __html: summary }}></div>

        // JSON.parse(genres);
        console.log("Genres type:", typeof (genres));
        console.log("Genres :", genres);

        return (
          <div key={id}>
            <section className='movie-section'>
              <div className='movie-card'>

                <div className="card-content">
                  <p className="title">{name}</p>
                  <p className=""></p>
                  <div className='inline-flex'>

                    <span className="card-text">Genres : </span>
                    {genres.map((genre) => {

                      return (<>
                        <div className="card-text pd"> {genre}</div>
                      </>
                      )
                    })}
                  </div>
                  <p className="card-text">Rating : {rating.average} / 10</p>
                  <p className="card-text">Language : {language}</p>
                  <div className="card-text">Summary:{Sum}</div>
                  <div className='flex'>
                    <div id='id'>

                      <NavLink to="" className="back-btn a" onClick={() => document.getElementById("id").innerHTML = `
                  <h1><h1>
                  <div class="text-center">
			            <label id='title'>MOVIE SEAT RESERVATION</label>
		              </div>
		              <form class='form-inline selectionForm'>
                  <div class="form-group required">
                  <label for="name">Name:</label>
                  <input type="text" class="form-control" id='name' placeholder="Name" required="required"/>
                </div>
                <div class="form-group required">
                  <label for="seats">Number Of Seats:</label>
                  <input type="number" id='seats' class="form-control" placeholder="1" required="required"/>
                </div>
                
                <a class="back-btn a"href={}>select</a>
                <div class="text-center">
                  <font color="Red"><label class="error"></label></font>
                </div>
                </form>
                  `}>
                        Book Ticket
                      </NavLink>
                    </div>
                    {/* <div class="text-center">
                  <button type="button" class="back-btn a" id="submitSelection">Start Selecting</button>
                </div> */}
                    
                    <NavLink to="/" className="back-btn a">
                      Go Back
                    </NavLink>
                  </div>
                </div>
                <figure>
                  <img src={image.original} alt=""></img>
                </figure>
              </div>
            </section>
          </div>
        )
      })}
    </>
  )


}

export default Movie;

// return (
//   <>
//    <div>Movie id {iid}</div>
//   {temp.map((values)=>{
//     const {name,id,image} =values.show;
//     return(
//       <div key={id}>
//         <section className='movie-section'>
//           <div className='movie-card'>
//             <figure>
//               <img src={temp.name} alt=""></img>
//               <div>{temp.name}</div>
//               <div>{name}</div>
//             </figure>
//           </div>
//         </section>
//     {/* <div>Movie name {name} </div>
//      <div>Movie id {id} </div> */}
//       </div>
//     )
//   })}
//   </>
// )
