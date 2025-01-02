import './App.css'
import ProjectList from './components/ProjectList';
import Header from './components/Header'

function App() {
  return (
    <>
      <Header/>
      <main>
        <h2>Stuff I've done</h2>
        <ProjectList />
      </main>
      <footer id='footer'>
        <p>© Ville Ruokonen (2025)</p>
      </footer>
    </>
  )
}

export default App
