// import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import MyRoutes from './myRoutes/MyRoutes';
import Footer from './components/footer/Footer';
import { Provider } from 'react-redux';
import store from './Redux/store';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';

function App() {
  return (
<>
  <BrowserRouter>
     <Provider store={store}>
      <Header/>
      <MusicPlayer/>
       <MyRoutes/>
      <Footer/>
      </Provider>
   </BrowserRouter>
</>
  );
}



export default App;