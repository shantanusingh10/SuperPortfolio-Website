import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/java_springboot_ems.PNG'
import IMG2 from '../../assets/react recipe book.PNG'
import IMG3 from '../../assets/fb_clone.PNG'
import IMG4 from '../../assets/me.png'
import IMG5 from '../../assets/me.png'
import IMG6 from '../../assets/me.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Employee Management System',
    github: 'https://github.com/shantanusingh10/EmployeeManagementSystem-backend',
    demo: 'https://employee-management-system-fe.herokuapp.com/'

  },
  {
    id: 2,
    image: IMG3,
    title: 'Facebook clone',
    github: 'https://github.com/shantanusingh10/facebook-clone-backend',
    demo: 'https://fb-clone-fe.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG4,
    title: 'project3',
    github: 'github.com',
    demo: 'linktodemo.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'project4',
    github: 'github.com',
    demo: 'linktodemo.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Recipe Book',
    github: 'https://github.com/shantanusingh10/reactRecipeBox',
    demo: 'https://react-recipebox.surge.sh/'
  }
]

const Portfolio = () => {
  return (
    <section id ="portfolio">
      <h5>My Recent Work</h5>
      <h2> Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title ,github, demo }) => {
              return (
                <article key = {id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img className = "portfolio__image" src = {image} alt={title}/>
          </div>

            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            
            </div>
        </article>
              )
          })
        }

        
        
      </div>
    </section>
  )
}

export default Portfolio