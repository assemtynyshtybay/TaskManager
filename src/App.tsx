import React from 'react';
import { UserTaskList } from './components/UserTaskList'
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/Navbar';
import Shop from './pages/shop';
import Categories from './pages/categories';
function App() {
  return (
    <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/tasks" element={<UserTaskList />} />
                    <Route path="/shop" element={<Shop />} />
                </Routes>
            </div>
  );
}

export default App;
