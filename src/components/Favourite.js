import React, { Component } from 'react'
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

  setGenre = async () => {
    const temp = []
    this.state.movies.forEach((movieObj) => {
      if (!temp.includes(Genresdata[movieObj.genre_ids[0]] === undefined ? (Genresdata[movieObj.genre_ids[1]] === undefined ? Genresdata[movieObj.genre_ids[2]] : Genresdata[movieObj.genre_ids[1]]) : Genresdata[movieObj.genre_ids[0]])) {
        temp.push(Genresdata[movieObj.genre_ids[0]] === undefined ? (Genresdata[movieObj.genre_ids[1]] === undefined ? Genresdata[movieObj.genre_ids[2]] : Genresdata[movieObj.genre_ids[1]]) : Genresdata[movieObj.genre_ids[0]])
      }
    });

    temp.unshift('All Genres')

    await this.setState({
      genres: [...temp]
    })
  }

  async componentDidMount() {
    const data = JSON.parse(localStorage.getItem("movies-app"))
    await this.setState({
      movies: [...data],
    })
    this.setGenre()
  }

  HandleGenres = async (movieObj) => {
    await this.setState({
      currentGenres: movieObj
    })
  }

  DeleteFav = async (moviedata) => {

    const olddata = JSON.parse(localStorage.getItem("movies-app") || "[]")
    const temp = []

    await olddata.map((movie) => {
      if (moviedata.id !== movie.id) {
        temp.push(movie)
      }
    })

    localStorage.setItem('movies-app', JSON.stringify(temp))

    this.setState({
      movies: [...temp]
    })
  }

  render() {
    let filterarr = [];

    if (this.state.currentGenres === 'All Genres') {
      filterarr = this.state.movies
    } else {
      filterarr = this.state.movies.filter((movieObj) => this.state.currentGenres === (Genresdata[movieObj.genre_ids[0]] === undefined ? (Genresdata[movieObj.genre_ids[1]] === undefined ? Genresdata[movieObj.genre_ids[2]] : Genresdata[movieObj.genre_ids[1]]) : Genresdata[movieObj.genre_ids[0]]))
    }

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
                        <li className="list-group-item Genres-name" style={{ backgroundColor: "rgb(108, 108, 195)", color: "white" }}>{movieObj}</li> :
                        <li className="list-group-item Genres-name" onClick={() => this.HandleGenres(movieObj)}>{movieObj}</li>
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
                      filterarr.map((movieObj) => {
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
                            <td><button type="button" className='fav-btn' onClick={() => this.DeleteFav(movieObj)}>Remove</button></td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" href=" ">1</a></li>
                  <li className="page-item"><a className="page-link" href=" ">2</a></li>
                  <li className="page-item"><a className="page-link" href=" ">3</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </>
    )
  }
}
