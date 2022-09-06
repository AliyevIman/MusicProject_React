// import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import MyRoutes from './myRoutes/MyRoutes';

function App() {
  return (
<>
<BrowserRouter>
{/* <Provider store={store}> */}
<Header/>
<MyRoutes/>
{/* </Provider> */}
</BrowserRouter>
</>
  );
}



export default App;