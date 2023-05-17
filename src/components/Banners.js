import React, { Component } from "react";
import axios from "axios";
export default class Banners extends Component {
  constructor(){
    super();
    this.state = {
      movie:""
    }
  }
  async componentDidMount(){
    const req = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5f829cb9eb36c7179b9076fa5cc2e5b8&page=${this.state.currentpage}`)
    const data = req.data

    this.setState({
      movie : data.results[0]
    })
  }
  render() {
    return (
      <>
        {
          this.state.movie.length === "" ? <div class="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div> :
          <div className="banner-cnt">
            <div className="card banner">
              <img src={`https://image.tmdb.org/t/p/original${this.state.movie.backdrop_path}`} className="card-img-top banner-img" alt="" />
              <h3 className="card-title banner-title">{this.state.movie.title}</h3>
              <p className="card-text banner-text">
                {this.state.movie.overview}  
              </p>
            </div>
            </div>
        }
      </>
    );
  }
}
