import AppRouter from './routes/AppRouter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <AppRouter />
      </div>
      <Footer />
    </>
  );
}

export default App;
