import React, { Fragment } from 'react';
import { useQuery } from 'react-query'
import { getScreenshots } from '../../Api';
import logo from '../../Assets/logo.png';
import gif from '../../Assets/gif.svg';
import styles from '../../Styles/Components/GameDetail.module.css';


export default function GameCarousel({  }) {
  // const { 
  //   status, 
  //   data, 
  //   error, 
  // } = useQuery('developer', () => getScreenshots(id));

  // const getPoster = (image) => {
  //   let screenshot
  //   try {
  //     if (image) {
  //       image.match(/media\/screenshots/)
  //         ? (screenshot = image.replace('media/screenshots', 'media/crop/600/400/screenshots'))
  //         : (screenshot = image.replace('media/games', 'media/crop/600/400/games'));
  //     }
  //     return screenshot;
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };
  // console.log("SECREENSHOTS", data)
 
  return (
  //   <div id="demo" className="carousel slide" data-ride="carousel">
  //   <ul className="carousel-indicators">
  //     <li data-target="#demo" data-slide-to={0} className="active" />
  //     <li data-target="#demo" data-slide-to={1} />
  //     <li data-target="#demo" data-slide-to={2} />
  //   </ul>
  //   <div className="carousel-inner">
  //     <div className="carousel-item active">
  //       <img
  //         src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg"
  //         alt="Los Angeles"
  //         width={1100}
  //         height={500}
  //       />
  //       <div className="carousel-caption">
  //         <h3>Los Angeles</h3>
  //         <p>We had such a great time in LA!</p>
  //       </div>
  //     </div>
  //     <div className="carousel-item">
  //       <img
  //         src="https://cdn.pixabay.com/photo/2015/05/31/10/51/technology-791029_1280.jpg"
  //         alt="Chicago"
  //         width={1100}
  //         height={500}
  //       />
  //       <div className="carousel-caption">
  //         <h3>Chicago</h3>
  //         <p>Thank you, Chicago!</p>
  //       </div>
  //     </div>
  //     <div className="carousel-item">
  //       <img
  //         src="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_1280.jpg"
  //         alt="New York"
  //         width={1100}
  //         height={500}
  //       />
  //       <div className="carousel-caption">
  //         <h3>New York</h3>
  //         <p>We love the Big Apple!</p>
  //       </div>
  //     </div>
  //   </div>
  //   <a className="carousel-control-prev" href="#demo" data-slide="prev">
  //     <span className="carousel-control-prev-icon" />
  //   </a>
  //   <a className="carousel-control-next" href="#demo" data-slide="next">
  //     <span className="carousel-control-next-icon" />
  //   </a>
  // </div>
  <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_1280.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://cdn.pixabay.com/photo/2015/05/31/10/51/technology-791029_1280.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_1280.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  );
}