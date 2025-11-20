import ProjectList from './components/ProjectList';
import Header from './components/Header'
import SkillsetDisplay from './components/SkillsetDisplay';
import Footer from './components/Footer';
import ShippedProductList from './components/ShippedProductList';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <SkillsetDisplay />
      <main>
        <h2>About me</h2>
        <div className="blurb">
          <p>Hey! My name is Ville. I'm a programmer and game developer with a passion for realtime interactions, from multiplayer shooters to procedural worlds.</p>
          <p>I try to learn something new every day -- you'll usually find me tinkering with a new mechanic or technology, just for the fun of it.</p>
        </div>
        <ShippedProductList />
        
        <ProjectList />
      </main>
      <Footer />
    </>
  )
}

export default App
