
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import RachelPic from './assets/RachelPic.png'
import logo from './assets/logo.png'

export default function App() {

  return (
    <>
    
      <Navbar expand="lg" className="customNavbar" fixed="top">
      <Container>
        <Navbar.Brand href="#about"> 
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Rachel Luo Logo" 
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-evenly">
            <Nav.Link href="#workflow">Workflow</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <main className="mainContent">
        <section id="home">
            <h1 className="portfolioTitle">Hi I'm Rachel Luo</h1>
            <div className="d-flex align-items-center gap-4">
              <img
                src={RachelPic}  
                width="330"
                height="330"
                className="d-inline-block align-top"
                alt="Rachel Luo Headshot" 
              />
            
              <p>Welcome to my portfolio! Here you can find information about my projects, skills, and experience.</p> 
            </div>
        </section>
        <h2>Projects</h2>
        <ul>
            <li><a href="service.html">Project 1: Service Site</a></li>
            <li><a href="game.html">Project 2: Memory Game</a></li>
            <li><a href="ecommerce.html">Project 3: E-Commerce Site</a></li>
            <li><a href="analytics.html">Project 4: Bilingual Analytics Site</a></li>
        </ul>
        
        <h2>Skills</h2>
        <ul>
            <li>Programming Languages: Java, Python, JavaScript, HTML/CSS, TBC </li>
            <li>Frameworks: React</li>
            <li>Tools: Git, Fabric</li>
        </ul>
        
        <h2>Experience</h2>
        <p>I have experience working as a data engineer at the Department of National Defence, where I contributed to various projects and collaborated with clients.</p>
      </main>
    </>
  )
}
