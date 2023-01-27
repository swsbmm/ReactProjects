import { useState, Fragment } from 'react';
import MarkerList from './components/Markers/MarkerList';
import { Route, Routes } from 'react-router';
import MarkerForm from './components/Markers/MarkerForm';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <Navbar />
        <Routes>
          <Route path="/" element={<MarkerList />} />
          <Route path="/add" element={<MarkerForm />} />
        </Routes>
    </Fragment>
  );
}

export default App;
