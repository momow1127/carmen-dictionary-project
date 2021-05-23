import logo from './logo.jpg';
import './App.css';
import Dictionary from'./Dictionary';

export default function App() {
  return (
    <div className="App">
        <div className="container">
          <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" className="img-fluid" />
        Hello
        </header>
        <main>
          <Dictionary />
        </main>
        <footer classNAme="text-center"> Coded by Carmen Wong</footer>
    </div>
    </div>
  );
}
