import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/app-react">react</Link>
              </li>
              <li>
                <Link to="/app-vue">vue</Link>
              </li>
            </ul>
          </nav>
          <div id="container">

          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
