import Footer from './components/footer/Footer';
import RotasAdmin from './Routes/routes';
import ReactGa from 'react-ga'

function initizeAnalytics(){
  ReactGa.initialize("UA-203590218-2")
  ReactGa.pageview("/")
}


function App() {

  initizeAnalytics()

  //console.log(valor)

  return (
    <>
      <RotasAdmin />
      <Footer />
    </>
  );
}

export default App;
