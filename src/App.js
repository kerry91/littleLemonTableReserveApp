import './css/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <header>
        <Header/>
        <Nav/>
      </header>
      <main>
      <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/about" element={<Main />}></Route>
      <Route path="/menu" element={<Main />}></Route>
      <Route path="/reservations" element={<Main />}></Route>
      <Route path="/order-onlline" element={<Main />}></Route>
      <Route path="/login" element={<Main />}></Route>
      </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
