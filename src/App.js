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
const   componentDidMount=() =>{
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
  return (
<>
  <BrowserRouter>
     <Provider store={store}>
      <Header/>
       <MyRoutes/>
      <Footer/>
      <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-12121212'
          data-ad-slot='12121212'
          data-ad-format='auto' />
      </Provider>
   </BrowserRouter>
</>
  );
}



export default App;