import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layout/layout';
import Home from './pages/home/home';
import Principal from './pages/principal/principal';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route path="/" Component={Home} />
        <Route path="/principal" Component={Principal}/>
        </Routes>
      </Layout>
    </Router>

  );
}
export default App;