import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import RouterConfig from './navigation/RouterConfig.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RouterConfig />
    </BrowserRouter>
  </StrictMode>,
)
