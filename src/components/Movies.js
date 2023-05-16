import React, { Component } from "react";
let movies = [
  {
    name: "FF1",
    url: "https://images.justwatch.com/backdrop/39788434/s640",
    desc: "Jeu possedera cavaliers carabines apprendre peu ces regiments. Puisque jaillir lui desolee comprit moi galoper jeu ton. Eux piquette ouvriers exaltait traverse fin cavalier par eau. Elue suis eau meme tous vert une tout. Toujours les appareil pic peu dressait debouche fer aisselle cherirai. Dehors ou tu repris wagons tracer en ne. Filles tu pu ouvert puisqu or. Legerement en electrique magistrats la or diplomates. Attenua falloir entendu eclaire peu nations grosses foi. Ces defoncat refletez mur etrangle vif treillis musiques.",
  },
  {
    name: "Harry Potter",
    url: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/Harry-Potter-Movies-in-Order.jpg",
    desc: "Jeu possedera cavaliers carabines apprendre peu ces regiments. Puisque jaillir lui desolee comprit moi galoper jeu ton. Eux piquette ouvriers exaltait traverse fin cavalier par eau. Elue suis eau meme tous vert une tout. Toujours les appareil pic peu dressait debouche fer aisselle cherirai. Dehors ou tu repris wagons tracer en ne. Filles tu pu ouvert puisqu or. Legerement en electrique magistrats la or diplomates. Attenua falloir entendu eclaire peu nations grosses foi. Ces defoncat refletez mur etrangle vif treillis musiques.",
  },
  {
    name: "The Kerela story",
    url:" ",
    desc: " ",
  },
  {
    name: "Elephant wishper",
    url:" ",
    desc: " ",
  },
  {
    name: "The Kerela story",
    url:" ",
    desc: " ",
  },
  {
    name: "The Kerela story",
    url:" ",
    desc: " ",
  },
  {
    name: "The Kerela story",
    url:" ",
    desc: " ",
  },
  {
    name: "The Kerela story",
    url:" ",
    desc: " ",
  },
  {
    name: "The Kerela story",
    url:" ",
    desc: " ",
  },
  {
    name: "The Kerela story",
    url:" ",
    desc: " ",
  },
  {
    name: "The Kerela story",
    url:" ",
    desc: " ",
  },
  {
    name: "The Kerela story",
    url:" ",
    desc: " ",
  },
  {
    name: "The Kerela story",
    url:" ",
    desc: " ",
  },
  {
    name: "The Kerela story",
    url:" ",
    desc: " ",
  },
  {
    name: "The Kerela story",
    url:" ",
    desc: " ",
  },
  {
    name: "The Kerela story",
    url:" ",
    desc: " ",
  },
  {
    name: "The Kerela story",
    url:" ",
    desc: " ",
  },
  {
    name: "The Kerela story",
    url:" ",
    desc: " ",
  },
  {
    name: "The Kerela story",
    url:" ",
    desc: " ",
  },
  {
    name: "The Kerela story",
    url:" ",
    desc: " ",
  }
];
export default class Movies extends Component {
  render() {
    return (
      <div>
        <h3 className="text-center">Trending</h3>
        <div className="movie-cnt">
        {movies === [] ? (
          <div class="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div>
        ) : (
          movies.map((movieObj) => {
            return (
            <div className="card movie-card">
              <img
                src={movieObj.url}
                className="card-img-top movie-img"
                alt=""
              />
              <div style={{display:"flex", justifyContent:"center"}}>
              <h3 className="card-title movie-title">{movieObj.name}</h3>
              </div>
              {/* <p className="card-text movie-text">{movieObj.desc}</p> */}
              <div className="btn-wrapper text-center">
              <a href=" " className="btn btn-primary text-center"> favorite </a>
              </div>
            </div>
            )
          })
        )}
        </div>
        <div className="pagenavigator">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item"><a class="page-link" href=" ">Previous</a></li>
              <li class="page-item"><a class="page-link" href=" ">1</a></li>
              <li class="page-item"><a class="page-link" href=" ">2</a></li>
              <li class="page-item"><a class="page-link" href=" ">3</a></li>
              <li class="page-item"><a class="page-link" href=" ">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
