import React, { Component } from "react";
import axios from 'axios'
export default class Movies extends Component {
  constructor() {
    super();
    this.state = { 
      hover : "",
      parray : [1], 
      currentpage : 1,
      movies : [],
      favorite : []
    };
  }
  
  async componentDidMount(){
    const req = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5f829cb9eb36c7179b9076fa5cc2e5b8&page=${this.state.currentpage}`)
    const data = req.data
    // console.log(data)
    this.setState({
      movies: [...data.results]
    })
  }

   ChangeMovies = async () => {
    const req = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5f829cb9eb36c7179b9076fa5cc2e5b8&page=${this.state.currentpage}`)
    const data = req.data
    // console.log(data)
    this.setState({
      movies: [...data.results]
    })
  }

  HandleRight = async () => {

    let temparr = []

    for(let i = 1; i <= this.state.parray.length + 1; i++){
      temparr.push(i)
    }
    
    await this.setState({
      parray : [...temparr],
      currentpage : this.state.currentpage + 1
    })

    this.ChangeMovies();
  }

  HandleLeft = async () => {

    if(this.state.currentpage > 1) {
    let temparr = []

    for(let i = 1; i < this.state.currentpage; i++){
      temparr.push(i)
    }
    
    await this.setState({
      parray: [...temparr],
      currentpage: this.state.currentpage - 1
    })
  }else{
    await this.setState({
      parray : [1],
      currentpage : 1
    })
  }
    this.ChangeMovies()
  }

  Handlepage = async (pageno) => {
    await this.setState({
      currentpage : pageno
    })

    this.ChangeMovies();
  }

  HandleFav = async (moviedata) => {
    let olddata = await JSON.parse(localStorage.getItem("movies-app") || '[]')
    
    if(this.state.favorite.includes(moviedata.id)){
      olddata = await olddata.filter(users => users.id !== moviedata.id)
    }else{
      olddata.push(moviedata)
    }
    await localStorage.setItem("movies-app",JSON.stringify(olddata))
    
    this.HandleFavState()
  }

  HandleFavState = async () => {
    let olddata = JSON.parse(localStorage.getItem("movies-app") || '[]')
    let temp = olddata.map((movieObj) => movieObj.id)

    this.setState({
      favorite : [...temp]
    })
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Popular</h2>
        <div className="movie-cnt">
          {this.state.movies.length === 0 ? (
            <div class="spinner-border text-primary" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            this.state.movies.map((movieObj) => {
              return (
                <div className="card movie-card" onMouseEnter={() => this.setState({ hover: movieObj.id })} onMouseLeave={() => this.setState({ hover: "" })}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                    className="card-img-top movie-img"
                    alt=""
                  />
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <h4 className="card-title movie-title">{movieObj.title}</h4>
                  </div>
                  {/* <p className="card-text movie-text">{movieObj.desc}</p> */}
                  <div className="btn-wrapper text-center">
                    {
                      this.state.hover === movieObj.id &&
                      <button className="btn btn-primary text-center" onClick={() => this.HandleFav(movieObj)}> {
                      this.state.favorite.includes(movieObj.id) ? "Remove" : "Favorite"
                      } </button>
                    }
                  </div>
                </div>
              )
            })
          )}
        </div>
        <div className="pagenavigator">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item pre-next page-link" onClick={this.HandleLeft}>Previous</li>
              {
                this.state.parray.map((value) => {
                  return <li class="page-item page-link pre-next" onClick={() => this.Handlepage(value)}>{value}</li>
                })
              }
              <li class="page-item pre-next page-link" onClick={this.HandleRight}>Next</li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}