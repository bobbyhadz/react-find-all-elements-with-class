import './App.css';

import {useEffect} from 'react';

const App = () => {
  useEffect(() => {
    const allWithClass = Array.from(
      document.getElementsByClassName('example'),
    );
    console.log(allWithClass);
  }, []);

  return (
    <div>
      <div>
        <h2 className="example">Alice</h2>
        <h2 className="example">Bob</h2>
        <h2 className="example">Carl</h2>
      </div>
    </div>
  );
};

export default App;
