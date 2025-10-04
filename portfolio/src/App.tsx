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
        <h2>My skills</h2>
        <SkillsetDisplay />
        <h2>Stuff I've done</h2>
        <ProjectList />
            </main>
      <Footer />
    </>
  )
}

export default App
