import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{ width: '100%', height: '300px' }} className='d-flex justify-content-center align-items-center flex-column'>
      <div className="footer d-flex justify-content-evenly align-items-center w-100" >
        <div className="website" style={{ width: '400px' }}>
          <h4><i class="fa-solid fa-video fa-beat text-warning me-3"></i>{' '}
            Video Player</h4>
          <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente velit magnam corrupti aliquam iusto ab earum possimus amet. Distinctio cupiditate iure nisi sunt fugiat voluptas quod nostrum, nam asperiores nobis?</h6>
        </div>
        <div className="list d-flex flex-column">
          <h4>Lists</h4>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Landing Page</Link>
          <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
          <Link to={'/watch-history'} style={{ textDecoration: 'none', color: 'white' }}>Watch History</Link>
        </div>
        <div className="guide d-flex flex-column">
          <h4>Guides</h4>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>React</Link>
          <Link to={'https://react-bootstrap.netlify.app/'} style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</Link>
          <Link to={'https://bootswatch.com/'} style={{ textDecoration: 'none', color: 'white' }}>Bootswatch</Link>
        </div>
        <div className="contact mt-3">
          <h4>Contact</h4>
          <div className='d-flex'>
            
              <input type="text" className='form-control' placeholder='Enter your Contact'/>
              <button className='btn btn-warning ms-3'>Subscribe</button>
            
          </div>
          <div className="links d-flex justify-content-evenly align-items-center mt-3">
          <Link to={'www.linkedin.com/in/prajith-prakash-878112295'} style={{ textDecoration: 'none', }}><i class="fa-brands fa-instagram fa-2x"></i></Link>
          <Link to={'www.linkedin.com/in/prajith-prakash-878112295'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-twitter fa-2x"></i></Link>
          <Link to={'www.linkedin.com/in/prajith-prakash-878112295'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
          <Link to={'www.linkedin.com/in/prajith-prakash-878112295'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-facebook fa-2x"></i></Link>
          </div>
        </div>
      </div>
      <p>Copyright 2023 Video Player. Built with React</p>
    </div>
  )
}

export default Footer