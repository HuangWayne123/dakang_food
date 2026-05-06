import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Safety from './pages/Safety';
import Channels from './pages/Channels';
import Solutions from './pages/Solutions';
import FAQ from './pages/FAQ';

export default function App() {
  return (
    <BrowserRouter basename="/food">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="safety" element={<Safety />} />
          <Route path="channels" element={<Channels />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
