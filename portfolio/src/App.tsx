import './App.css'
import ProjectList from './components/ProjectList';
import Header from './components/Header'
import SkillsetDisplay from './components/SkillsetDisplay';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="blurb">
          <p>Hey! My name is Ville. I'm a programmer and game developer with a passion for interactive systems, from multiplayer shooters to procedural worlds.</p>
          <p>I'm always open to new experiences and I try to learn something new every day -- you'll usually find me tinkering with a new mechanic or technology, just for the fun of it.</p>
          <p>Get in touch and let's do something cool together!</p>
        </div>
        <h2>Skills</h2>
        <SkillsetDisplay />
        <h2>Projects</h2>
        <ProjectList />
      </main>
      <Footer />
    </>
  )
}

export default App
