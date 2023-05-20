import React, { Component } from 'react'
const Genresdata = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 14: "Fantasy", 27: "Horror", 878: "Sci-Fi", 53: "Thriller", }

export default class favourite extends Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      genres: [],
      currentGenres: "All Genres",
      currentText: '',
      limit: 10,
      currentpage: 1
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

      return true
    })

    localStorage.setItem('movies-app', JSON.stringify(temp))

    this.setState({
      movies: [...temp]
    })
  }

  SortPopDesc = async () => {
    let temp = this.state.movies
    temp.sort((ObjA, ObjB) => {
      return (ObjB.popularity - ObjA.popularity)
    })
    await this.setState({
      movies: [...temp]
    })
  }

  SortPopAsc = async () => {
    let temp = this.state.movies
    temp.sort((ObjA, ObjB) => {
      return (ObjA.popularity - ObjB.popularity)
    })
    await this.setState({
      movies: [...temp]
    })
  }

  SortRatDesc = async () => {
    let temp = this.state.movies
    temp.sort((ObjA, ObjB) => {
      return (ObjB.vote_average - ObjA.vote_average)
    })
    await this.setState({
      movies: [...temp]
    })
  }

  SortRatAsc = async () => {
    let temp = this.state.movies
    temp.sort((ObjA, ObjB) => {
      return (ObjA.vote_average - ObjB.vote_average)
    })
    await this.setState({
      movies: [...temp]
    })
  }

  HandlePagination = async (page) => {
    await this.setState({
      currentpage: page
    })
  }


  render() {

    let filterarr = this.state.movies;
    if (this.state.currentText === '') {
      filterarr = this.state.movies
    } else {
      filterarr = this.state.movies.filter((movieObj) => {
        let title = movieObj.title.toLowerCase()
        return title.includes(this.state.currentText.toLowerCase())
      })
    }


    if (this.state.currentGenres !== 'All Genres') {
      filterarr = this.state.movies.filter((movieObj) => this.state.currentGenres === (Genresdata[movieObj.genre_ids[0]] === undefined ? (Genresdata[movieObj.genre_ids[1]] === undefined ? Genresdata[movieObj.genre_ids[2]] : Genresdata[movieObj.genre_ids[1]]) : Genresdata[movieObj.genre_ids[0]]))
    }


    let pages = Math.ceil(filterarr.length / this.state.limit)
    let pagearray = [];
    for (let i = 1; i <= pages; i++) {
      pagearray.push(i)
    }
    const strind = (this.state.currentpage - 1) * this.state.limit
    const endind = strind + this.state.limit
    filterarr = filterarr.slice(strind, endind)

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
                <div className='col-8'>
                  <i className="fa-solid fa-magnifying-glass search-icon"></i>
                  <input type='text' className='input-group input movie-input' placeholder='search' value={this.state.currentText} onChange={(e) => this.setState({ currentText: e.target.value })}></input>
                </div>
                <input type='number' className='col input-group input num-input' placeholder='number' value={this.state.limit} onChange={(e) => this.state.limit > 1 ? this.setState({ limit: e.target.value }) : this.setState({ limit: 1 })}></input>
              </div>
              <div className='row'>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Title</th>
                      <th scope="col">Genres</th>
                      <th scope="col">Popularity <i className="fa-sharp fa-solid fa-caret-up sort-indicator" onClick={this.SortPopDesc}></i> <i className="fa-sharp fa-solid fa-caret-down sort-indicator" onClick={this.SortPopAsc}></i> </th>
                      <th scope="col">Rating <i className="fa-sharp fa-solid fa-caret-up sort-indicator" onClick={this.SortRatDesc}></i> <i className="fa-sharp fa-solid fa-caret-down sort-indicator" onClick={this.SortRatAsc}></i> </th>
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
                              (Genresdata[movieObj.genre_ids[0]] === undefined ? (Genresdata[movieObj.genre_ids[1]] === undefined ? Genresdata[movieObj.genre_ids[2]] : Genresdata[movieObj.genre_ids[1]]) : Genresdata[movieObj.genre_ids[0]])
                            }</td>
                            <td>{movieObj.popularity}</td>
                            <td>{movieObj.vote_average}</td>
                            <td><button type="button" className='fav-btn btn-remove' onClick={() => this.DeleteFav(movieObj)}><i className="fa-solid fa-trash"></i></button></td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
              <nav aria-label="Page navigation example">
                <ul className="pagination pre-next">
                  {
                    pagearray.map((pageno) => {
                      return <li className="page-item" onClick={() => this.HandlePagination(pageno)}><div className="page-link">{pageno}</div></li>
                    })
                  }
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </>
    )
  }
}
