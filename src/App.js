import React from 'react';
import Sidebar from './components/Sidebar';
import BottomBar from './components/BottomBar';
import Content from './components/Content';
import {
  BrowserRouter as Router
} from 'react-router-dom';




const App = () => {
  return (
    <>
      <Router>
        <div className='wrapper flex'>
          <Sidebar />
          <Content />
        </div>
        <BottomBar />
      </Router>
    </>
  );
};

export default App;