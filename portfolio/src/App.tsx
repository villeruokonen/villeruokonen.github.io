import './App.css'
import ProjectList from './components/ProjectList';
import Header from './components/Header'
import SkillsetDisplay from './components/SkillsetDisplay';

function App() {
  return (
    <>
      <Header/>
      <SkillsetDisplay/>
      <main>
        <h2>Stuff I've done</h2>
        <ProjectList />
      </main>
    </>
  )
}

export default App
