import React, { Component } from 'react'
import axios from 'axios';
const Genresdata = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 14: "Fantasy", 27: "Horror", 878: "Sci-Fi", 53: "Thriller", }
export default class favourite extends Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      genres: [],
      currentGenres: "All Genres"
    };
  }
  async componentDidMount() {
    const req = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5f829cb9eb36c7179b9076fa5cc2e5b8&page=${this.state.currentpage}`)
    const data = req.data
    console.log(data)
    this.setState({
      movies: [...data.results]
    })
  }

  // HandleGenrs = async (genrename) => {
  //   const genremovie = []
  //   this.state.movies.forEach((movieObj) => {
  //     if(genrename === (Genresdata[movieObj.genre_ids[0]] === undefined ? (Genresdata[movieObj.genre_ids[1]] === undefined ? Genresdata[movieObj.genre_ids[2]] : Genresdata[movieObj.genre_ids[1]]) : Genresdata[movieObj.genre_ids[0]])){
  //       genremovie.push(movieObj)
  //     }
  //   })

  //   this.setState({
  //     movies: [...genremovie],
  //     currentGenres : genrename
  //   })
  // }

  render() {
    const temp = []
    this.state.movies.forEach((movieObj) => {
      if (!temp.includes(Genresdata[movieObj.genre_ids[0]] === undefined ? (Genresdata[movieObj.genre_ids[1]] === undefined ? Genresdata[movieObj.genre_ids[2]] : Genresdata[movieObj.genre_ids[1]]) : Genresdata[movieObj.genre_ids[0]])) {
        temp.push(Genresdata[movieObj.genre_ids[0]] === undefined ? (Genresdata[movieObj.genre_ids[1]] === undefined ? Genresdata[movieObj.genre_ids[2]] : Genresdata[movieObj.genre_ids[1]]) : Genresdata[movieObj.genre_ids[0]])
      }
    });

    temp.unshift("All Genres")

    this.setState({
      genres: [...temp]
    })

    return (
      <>
        <div className='main'>
          <div className='row'>
            <div className='col-2 Genres-col'>
              <ul className="list-group Genres-cnt">
                {
                  this.state.genres.map((movieObj) => {
                    return (
                      this.state.currentGenres === movieObj ?
                        <li className="list-group-item Genres-name" style={{backgroundColor: "rgb(108, 108, 195)",color: "white"}}>{movieObj}</li> :
                        (<li className="list-group-item Genres-name">{movieObj}</li>)
                    )
                  })
                }
              </ul>
            </div>
            <div className='col-10'>
              <div className='row input-cnt'>
                <input type='text' className='input-group col input' placeholder='search'></input>
                <input type='number' className='input-group col input' placeholder='number'></input>
              </div>
              <div className='row'>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Title</th>
                      <th scope="col">Genres</th>
                      <th scope="col">Popularity</th>
                      <th scope="col">Rating</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.movies.map((movieObj) => {
                        return (
                          <tr>
                            <td><img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} alt='...' style={{
                              height: "45px",
                              width: "70px"
                            }} /></td>
                            <td>{movieObj.title}</td>
                            <td>{
                              Genresdata[movieObj.genre_ids[0]] === undefined ? (Genresdata[movieObj.genre_ids[1]] === undefined ? Genresdata[movieObj.genre_ids[2]] : Genresdata[movieObj.genre_ids[1]]) : Genresdata[movieObj.genre_ids[0]]
                            }</td>
                            <td>{movieObj.popularity}</td>
                            <td>{movieObj.vote_average}</td>
                            <td><button type="button" className='fav-btn'>click</button></td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" href=" ">Previous</a></li>
                  <li className="page-item"><a className="page-link" href=" ">1</a></li>
                  <li className="page-item"><a className="page-link" href=" ">2</a></li>
                  <li className="page-item"><a className="page-link" href=" ">3</a></li>
                  <li className="page-item"><a className="page-link" href=" ">Next</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </>
    )
  }
}
