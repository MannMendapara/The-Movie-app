import React, { Component } from 'react'
import axios from 'axios';

export default class favourite extends Component {

  constructor() {
    super();
    this.state = {
      movies: []
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

  render() {
    return (
      <>
        <div className='main'>
          <div className='row'>
            <div className='col-3'>
              <ul className="list-group">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
              </ul>
            </div>
            <div className='col-9'>
              <div className='row'>
                <input type='text' className='input-group col'></input>
                <input type='number' className='input-group col'></input>
              </div>
              <div className='row'>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Genres</th>
                      <th scope="col">Popularity</th>
                      <th scope="col">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.movies.map((movieObj) => {
                        return (
                          <tr>
                            <th scope="row">{movieObj.title}</th>
                            <td></td>
                            <td>{movieObj.popularity}</td>
                            <td>{movieObj.vote_average}</td>
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
