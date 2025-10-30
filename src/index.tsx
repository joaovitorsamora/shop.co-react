import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductDetailsPage } from './pages/product-details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DefaultPage } from './components/DefaultPage';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { CategoryPage } from './pages/category';
import { CartPage } from './pages/cart';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter
      future={{
        v7_startTransition: true,
      }}
    >
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<App />} />
        </Route>
        <Route path="product-details/:id" element={<ProductDetailsPage />} />
        <Route path="category/:category" element={<CategoryPage />} />
        <Route path="cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
