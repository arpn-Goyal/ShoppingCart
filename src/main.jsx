import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './components/Header.jsx';
import Item from './components/Item.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/mycart",
    element: (
      <>
        <Header />
        <CheckoutPage/>
      </>
    ),
  },
])

createRoot(document.getElementById('root')).render(
<StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
