
import './App.css'
import Container from 'react-bootstrap/Container'; 
import CustomNavbar from './components/CustomNavbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import RachelPic from './assets/RachelPic.png'
import hotpink from './assets/hotpink.png'
import purple from './assets/purple.jpg'
import blue from './assets/blue.png'
import coolpurple from './assets/coolpurple.png'
import logo from './assets/logo.png'
import Carousel from 'react-bootstrap/Carousel';
import deploy from './assets/deploy.jpg'
import dev from './assets/dev.jpg'
import research from './assets/research.jpg'
import testing from './assets/testing.jpg'
import typography from './assets/typography.jpg'
import wireframe from './assets/wireframe.jpg' 
import colours from './assets/colours.jpg'
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer'

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

          <Carousel className="workflowCarousel">
            <Carousel.Item>
              <img
                className="d-block w-100 carouselImage"
                src={research}
                alt="Workflow 1: Research and get inspiration"
              />
              <Carousel.Caption>
                <h3>1. Research</h3>
                <p>Look at various sources and research context to get inspiration for my own project</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 carouselImage"
                src={wireframe}
                alt="Workflow 2: Create a wireframe to get the foundation and strcuture of the project"
              />
              <Carousel.Caption>
                <h3>2. Wireframing</h3>
                <p>Create a wireframe to get the foundation and structure of the project</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 carouselImage"
                src={colours}
                alt="Workflow 3: Select the correct colour palette to create the right mood and vibe for the project"
              />
              <Carousel.Caption>
                <h3>3. Colour Selection</h3>
                <p>Select the correct colour palette to create the right mood and vibe for the project</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 carouselImage"
                src={typography}
                alt="Workflow 4: Select fonts that fit the project and are easy to read"
              />
              <Carousel.Caption>
                <h3>4. Typography</h3>
                <p>Select fonts that fit the project and are easy to read</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 carouselImage"
                src={dev}
                alt="Workflow 5: Use React, bootstrap, HTML/CSS, and JavaScript to build the project and make it interactive"
              />
              <Carousel.Caption>
                <h3>5. Development</h3>
                <p>Use React, bootstrap, HTML/CSS, and JavaScript to build the project and make it interactive</p>
              </Carousel.Caption>
            </Carousel.Item>
          

            <Carousel.Item>
              <img
                className="d-block w-100 carouselImage"
                src={testing}
                alt="Workflow 6: Test the project and make it accessible to all users"
              />
              <Carousel.Caption>
                <h3>6. Testing</h3>
                <p>Test the project, fix any issues, and incorporate accessibility features</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 carouselImage"
                src={deploy}
                alt="Workflow 7: Deploy the project and share it with the world"
              />
              <Carousel.Caption>
                <h3>7. Deployment</h3>
                <p>Deploy the project and share it with the world</p>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </section>

        <section id="projects">
        <h1>Projects</h1>  

  <div className="projectsContainer">

    <ProjectCard
      image={blue}
      title="Service Site"
      description="A service site for a dental clinic built using React and Bootstrap."
      link={"https://github.com/"}
    />

    <ProjectCard
      image={coolpurple}
      title="Memory Game"
      description="A card and cat memory game built using React and Bootstrap."
      link="https://github.com/"
    />

    <ProjectCard
      image={purple}
      title="E-Commerce Site"
      description="An e-commerce platform that sells pokemon figures built using React and Bootstrap."
      link="https://github.com/"
    />

    <ProjectCard
      image={hotpink}
      title="Analytics Site"
      description="An analytics dashboard gathering weekly transaction data from the Pokemon site using React and Bootstrap."
      link="https://github.com/"
    />
    
  </div>
 
       
  </section>
        
      
        <section id="contact" className="footer">
          <Footer />
        </section>
        
       </main>
    </>
  )
}
