import { Routes, Route } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import HomePage from '../../pages/HomePage/HomePage';
import ProductsPages from '../../pages/ProductsPage/ProductsPage';
import './App.css';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPages />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
