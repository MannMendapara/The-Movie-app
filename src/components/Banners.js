import React, { Component } from "react";
const movie = "Black panther"
export default class Banners extends Component {
  render() {
    return (
      <>
        {
          movie === "" ? <div class="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div> :
            <div className="card banner">
              <img src="https://m.media-amazon.com/images/M/MV5BNjk4N2Q1YzAtYWY4Yy00NGI4LWI5M2YtYmMxZmUwMzEwYWMwXkEyXkFqcGdeQXVyMjkwMzc3Mzg@._V1_FMjpg_UX1000_.jpg" className="card-img-top banner-img" alt="" />
              <h3 className="card-title banner-title">{movie}</h3>
              <p className="card-text banner-text">
                Jeu possedera cavaliers carabines apprendre peu ces regiments. Puisque jaillir lui desolee comprit moi galoper jeu ton. Eux piquette ouvriers exaltait traverse fin cavalier par eau. Elue suis eau meme tous vert une tout. Toujours les appareil pic peu dressait debouche fer aisselle cherirai. Dehors ou tu repris wagons tracer en ne. Filles tu pu ouvert puisqu or. Legerement en electrique magistrats la or diplomates. Attenua falloir entendu eclaire peu nations grosses foi. Ces defoncat refletez mur etrangle vif treillis musiques.
              </p>
            </div>
        }
      </>
    );
  }
}
