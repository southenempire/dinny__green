import React from 'react'
import '../styles/last.scss'

const Last = () => {
  return (
    <div className="last__container">
      <h1>Our Instructors & Teachers</h1>
      <p>
        We have the best teachers and instructors that would be able to train your kids, making <br />
        them Creative, God fearing, Respectfull and Intelligent.{' '}
      </p>
      <div className="last__contain">
        {Instructors.map((instructor) => (
          <div className="last__col" key={instructor.id}>
            <div className="instructor sec7-card">
              <img src={`/images/img_${instructor.img}.png`} alt="" className="card-img" />
              <div className="img-lay">
                <div className="contain">
                  <a href="/" className="button">
                    Full time
                  </a>
                  <h5 className="card-title">{instructor.classes}</h5>
                  <p className="move">
                    <i class="fas fa-calendar-minus"></i>
                    &nbsp; &nbsp;28th April 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <a href="/">See all</a>
      </div>
    </div>
  )
}

export default Last

const Instructors = [
  {
    id: 1,
    img: 6,
    classes: 'Masters in Geology',
  },
  {
    id: 2,
    img: 7,
    classes: 'Doctor appointments have the diagnose',
  },
  {
    id: 3,
    img: 8,
    classes: 'Doctor appointments have the diagnose',
  },
]
