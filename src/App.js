
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Headers';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

function App() {


  return (

    <Router>

      <Header />

      <main className='py-3'>

        <Container>
          <Routes>

            <Route path={`${process.env.PUBLIC_URL}/`} element={<HomeScreen />} />
            <Route path={`${process.env.PUBLIC_URL}/login`} element={<LoginScreen />} />


          </Routes>

        </Container>

      </main>



    </Router>
  );
}

export default App;

