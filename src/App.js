import logo from './logo.jpg';
import './App.css';
import Dictionary from'./Dictionary';

export default function App() {
  return (
    <div className="App">
        <div className="container">
          <header className="App-header">
           <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer classNAme="text-center"> 
        <small>Coded by Carmen Wong</small>
        </footer>
    </div>
    </div>
  );
}
