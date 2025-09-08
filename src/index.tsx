import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductDetailsPage } from './pages/product-details-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DefaultPage } from './components/DefaultPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DefaultPage />}>
        <Route index element={<App />} />
      </Route>
      <Route path="/product-details-page/:id" element={<ProductDetailsPage />} />
    </Routes>
  </BrowserRouter>
);
