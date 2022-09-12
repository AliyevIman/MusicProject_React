// import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import MyRoutes from './myRoutes/MyRoutes';
import Footer from './components/footer/Footer';
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
  return (
<>
  <BrowserRouter>
     <Provider store={store}>
      <Header/>
       <MyRoutes/>
      <Footer/>
      </Provider>

   </BrowserRouter>
</>
  );
}



export default App;