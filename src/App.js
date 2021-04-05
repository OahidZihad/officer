import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Info from './Components/Info/Info';

function App() {
  const [officers, setOfficers] = useState([]);
  const [ages, setAges] = useState([]);
  const [selectedOfficers, setSelectedOfficers] = useState(0);

  const handleAddOfficer = (myAge) => {
    setSelectedOfficers(selectedOfficers + 1);
    const newAge = [...ages, myAge];
    setAges(newAge);
  }

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
    .then((response) => response.json())
    .then(data => setOfficers(data.results))
    .then(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <div className="officer-list">
        <ul>
          {
            officers.map(officer => <Info handleAddOfficer={handleAddOfficer} officerInfo={officer}></Info>)
          }
        </ul>
      </div>
      <div>
        <h1 className="total-officer">Total Officers: {officers.length}</h1>
        <Cart selectedOfficers={selectedOfficers} ages={ages}></Cart>
      </div>
    </div>
  );
}

export default App;