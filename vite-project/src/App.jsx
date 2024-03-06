import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/header';
import Footer from './components/footer';


function App() {
  return (
    <>
    <Header />
    <main className='mx-3'>
      <Outlet />
    </main>
    <Footer />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </>
  );
}

export default App;

