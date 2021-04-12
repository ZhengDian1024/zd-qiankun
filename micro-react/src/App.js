import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header() {
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
            className="App-link"
            href="/"
            rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  )
}

function About() {
  return (
      <div style={{ width: 300, height: 200, backgroundColor: '#ff0' }}>
        About
      </div>
  )
}

function App() {
  return (
    <Router className="App" basename={window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}>
      <Link to="/header">背景图</Link>
      <Link to="/about">关于</Link>
      <Switch>
        <Route path="/header">
          <Header />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
