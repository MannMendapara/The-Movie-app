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
                style={{
                  height:"40vh",
                  width:"20vw"
                }}
                src={movieObj.url}
                className="card-img-top movie-img"
                alt=""
              />
              <h3 className="card-title movie-title">{movieObj.name}</h3>
              {/* <p className="card-text movie-text">{movieObj.desc}</p> */}
              <div className="btn-wrapper">
              <a href=" " className="btn btn-primary"> Go somewhere </a>
              </div>
            </div>
            )
          })
        )}
        </div>
      </div>
    );
  }
}
