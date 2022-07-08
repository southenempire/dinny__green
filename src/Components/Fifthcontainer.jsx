import React from 'react'
import Slider from 'react-slick'
import '../styles/fifthcontainer.scss'

const Slide = () => {
  return (
    <div className="slide-page">
      <div className="slide-page-header">
        <h1>Popular Classes</h1>
        <p>
          We have built hospitals, arranged doctor appointments have the diagnose and treat <br /> yourem ipsu r aol ad meniam, quis nostrud exercitation.
        </p>
      </div>
      <div>
        <Slider {...settings}>
          {cards.map((card) => (
            <div className="coss" key={card.id}>
              <div className="card">
                <img className="avatar" src={`/images/img_${card.img}.png`} alt="" />
                <div className="first">
                  <div className="lesson">
                    <img className="les" src="/images/Vector-1.png" alt="" />
                    &nbsp; &nbsp;
                    <p className="son">35 Lessons</p>
                  </div>
                  <div className="date">
                    <img className="cal" src="/images/calender.png" alt="" />
                    &nbsp; &nbsp;
                    <p className="dat"> 28th April 2021</p>
                  </div>
                </div>
                <h3 className="car">{card.classes} </h3>
                <p>
                  For anyone validating Framer as a <br /> professional prototyping tool.
                </p>
                <button className="enro">
                  <a className="enow" href="/">
                    Enrol Now
                  </a>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="view">
        <button className="btn1">View all courses</button>
      </div>
    </div>
  )
}

export default Slide

const cards = [
  {
    id: 1,
    img: 1,
    classes: 'Creche',
  },
  {
    id: 2,
    img: 2,
    classes: 'Transition',
  },
  {
    id: 3,
    img: 3,
    classes: 'Nursery',
  },
  {
    id: 4,
    img: 4,
    classes: 'Primary',
  },
  {
    id: 5,
    img: 5,
    classes: 'Secondary',
  },
]

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 2000,

  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}
