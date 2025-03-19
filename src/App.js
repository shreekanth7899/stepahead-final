import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import devops from "../src/assests/Devops Course.png"
import logo from "../src/assests/logo.png"

const courses = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    price: "$99",
    description: "Comprehensive Web Development Course",
    whatsappLink: "https://wa.me/1234567890",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    price: "$79",
    description: "Advanced ReactJS Course",
    whatsappLink: "https://wa.me/1234567890",
  },
];

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light  bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" className="logo" height="40" />
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#courses">Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Image Slider */}
      <section className="slider-container mt-5 pt-5">
        <Slider {...settings}>
          <div><img src={devops} alt="Slide 1" className="img-fluid" /></div>
          <div><img src={devops}alt="Slide 2" className="img-fluid" /></div>
        </Slider>
      </section>

      {/* Courses Section */}
      <section id="courses" className="courses-section my-5">
        <h2 className="text-center">Our Courses</h2>
        <div className="row justify-content-center">
          {courses.map((course) => (
            <div key={course.id} className="col-md-4">
              <div className="card text-center">
                <img
                  src={devops}
                  alt="Course"
                  className="card-img-top"
                  onClick={() => setSelectedCourse(course)}
                />
                <div className="card-body">
                  <p className="card-text fw-bold">{course.price}</p>
                  <a
                    href={course.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Course Popup */}
      {selectedCourse && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Course Details</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedCourse(null)}></button>
              </div>
              <div className="modal-body text-center">
                <img src={selectedCourse.image} alt="Course" className="img-fluid" />
                <p>{selectedCourse.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

    <section id="about" className="about-section text-center my-5">
      <h2 className="text-center">About Us</h2>
      {/* About Us Section */}
      <section class="vision-mission">
      
        <div class="vision">
          <p><strong>Vision:</strong> To become a leading EdTech platform that empowers individuals 
              with the knowledge and skills needed to succeed in today’s competitive job market, 
              offering innovative solutions in Cloud Computing, DevOps, Web Development, and career consultancy.
          </p>
        </div>
        
        <div class="mission">
          <p><strong>Mission:</strong> Our mission is to provide accessible, high-quality education and training to students, 
          fresh graduates, and professionals through a blend of practical internship programs, career-focused courses,
           and expert-led consultancy. We aim to nurture talent, foster innovation, and bridge the gap between education and 
           employment by offering comprehensive learning experiences, paid internships, and hands-on training designed 
           to prepare individuals for real-world challenges.</p>
        </div>
      </section>
      </section>

      <br />


      {/* Footer */}
      <footer id="contact" className="footer bg-dark text-white text-center py-3">
        <p>Contact:  +91   7899151998 | Email:   info@stepaheadxcellence.com</p>
      </footer>
    </div>
  );
}
