// import logo from './logo.svg';
import './App.css';
import {Container,} from 'react-bootstrap';
import Header from './layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Report from './Report/Report';

function App() {
  return (
    <>
      <Header />
      <Report />
    </>
  );
}

export default App;
