
import './App.css'
import Container from 'react-bootstrap/Container'; 
import CustomNavbar from './components/CustomNavbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import RachelPic from './assets/RachelPic.png'
import logo from './assets/logo.png'
import Carousel from 'react-bootstrap/Carousel';
import ProjectCard from './components/ProjectCard';

export default function App() {

  return (
    <>

      <CustomNavbar />
      <main className="mainContent">
        <section id="about">
            <h1 className="portfolioTitle">Hi I'm <span className="Rachel">Rachel Luo</span></h1>
            <div className="d-flex align-items-center gap-5">
              <img
                src={RachelPic}  
                width="400"
                height="400"
                className="d-inline-block align-top"
                alt="Rachel Luo Headshot" 
              />
            
            <div className="aboutText">
              <p>Welcome to my portfolio! Here you can find information about my projects, skills, and experience.</p> 
                <h2>Skills</h2>
          <ul>
            <li>Programming Languages: Java, Python, JavaScript, HTML/CSS, TBC </li>
            <li>Frameworks: React</li>
            <li>Tools: Git, Fabric</li>
          </ul>

           <h2>Experience</h2>
        <p>I have experience working as a data engineer at the Department of National Defence, where I contributed to various projects and collaborated with clients.</p>
      
          </div>
            
            </div>
        </section>



        <section id="workflow">
          <h1 className="workflowTitle">Workflow</h1>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 carouselImage"
                src={RachelPic}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 carouselImage"
                src={RachelPic}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>

        <section id="projects">
        <h1>Projects</h1>  

  <div className="projectsContainer">

    <ProjectCard
      image={RachelPic}
      title="Service Site"
      description="A service site for a dental clinic built using React and Bootstrap."
      link="https://github.com/"
    />

    <ProjectCard
      image={RachelPic}
      title="Memory Game"
      description="A card and cat memory game built using React and Bootstrap."
      link="https://github.com/"
    />

    <ProjectCard
      image={RachelPic}
      title="E-Commerce Site"
      description="An e-commerce platform that sells pokemon figures built using React and Bootstrap."
      link="https://github.com/"
    />

    <ProjectCard
      image={RachelPic}
      title="Analytics Site"
      description="An analytics dashboard gathering weekly transaction data from the Pokemon site using React and Bootstrap."
      link="https://github.com/"
    />
    
  </div>
 
       
  </section>
        
      
        
       </main>
    </>
  )
}
