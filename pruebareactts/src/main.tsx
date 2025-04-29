import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import RouterConfig from './navigation/RouterConfig.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
