
import './App.css'
import Button from 'react-bootstrap/Button'



export default function App() {

  return (
    <>
      <main className="mainContent">
        
        <h1 className="portfolioTitle">Rachel Luo Portfolio</h1>
        <p>Welcome to my portfolio! Here you can find information about my projects, skills, and experience.</p>
        <button className="btn btn-success">
          Test Button
        </button>
        <Button variant="success">
          Click Me
        </Button>
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
