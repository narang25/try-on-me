import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AvatarViewer from './pages/AvatarViewer';
import ProductTryOn from './pages/ProductTryOn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewer" element={<AvatarViewer />} />
        <Route path="/tryon" element={<ProductTryOn />} />
      </Routes>
    </Router>
  );
}

export default App;
