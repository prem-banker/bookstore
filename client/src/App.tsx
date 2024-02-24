import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import Category from './components/Category';
import Home from './components/Home';


function App() {
  return (
      <Router>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Category />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>

        <AppFooter />

      </Router>
  );
}

export default App;

