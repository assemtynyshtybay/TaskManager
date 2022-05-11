import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux'
import App from './App'
import { store } from './store'

import { DndProvider } from 'react-dnd'
// import { DndProvider } from 'react-dnd-multi-backend';
import { HTML5Backend } from 'react-dnd-html5-backend';

// import MultiBackend from 'react-dnd-multi-backend';
// import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </DndProvider>
)
