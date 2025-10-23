import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductDetailsPage } from './pages/product-details-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DefaultPage } from './components/DefaultPage';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { CategoryPage } from './pages/category-pages';

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
        <Route path="/product-details-page/:id" element={<ProductDetailsPage />} />
        <Route path="/category-pages/:category" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
