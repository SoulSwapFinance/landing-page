import { Router } from 'react-router-dom';
import history from './utils/history';
import Routes from './Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        style={{ zIndex: 10000000000 }}
      />
      <Router history={history}>
        <Routes />
      </Router>
    </>
  );
}

export default App;
