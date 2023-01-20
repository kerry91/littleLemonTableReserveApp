import './css/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';
import TableBooking from './components/TableBooking';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <section class="grid-container">
    <BrowserRouter>
      <header class="grid-item">
        <Header/>
        <Nav/>
      </header>
      <main class="grid-item">
      <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/about" element={<Main />}></Route>
      <Route path="/menu" element={<Main />}></Route>
      <Route path="/reservations" element={<Main />}></Route>
      <Route path="/order-onlline" element={<Main />}></Route>
      <Route path="/login" element={<Main />}></Route>
      <Route path="/reserve-table" element={<TableBooking />}></Route>
      <Route path="/form2" element={<Form2 />}></Route>
      <Route path="/form3" element={<Form3 />}></Route>
      </Routes>
      </main>
      <footer class="grid-item">
        <Footer/>
      </footer>
      </BrowserRouter>
      </section>
    </>
  );
}

export default App;
