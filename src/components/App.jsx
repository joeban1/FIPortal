import React, { useState } from 'react';
import Row from './Row';
import Header from './Header';
import '../styles.css';
import Titles from './Titles';
import 'isomorphic-fetch';

function App() {
  // Declare a state variable to store the rows of inputs
  const [rows, setRows] = useState([]);
  const [totalValues, setTotalValues] = useState([]);

  // Declare a function to add a new row
  const addRow = () => {
    setRows([...rows, { units: 0, price: 0 }]);
    setTotalValues([...totalValues, 0]);
  };

  const updateRow = (index, units, price) => {
    const newRows = [...rows];
    newRows[index] = { units, price };
    setRows(newRows);
  }

  

  const updateTotalValue = (index, units, price) => {
    const newTotalValues = [...totalValues];
    newTotalValues[index] = units * price;
    setTotalValues(newTotalValues);
  };

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div>
      <Header className="title-container" />
      <div className="page-contain">
        <Titles addRow={addRow} />
      </div>
      {rows.map((row, index) => (
        <Row
          key={index}
          value1={row.units}
          value2={row.price}
          handleUnitsChange={(e) => updateRow(index, parseInt(e.target.value), row.price)}
          handlePriceChange={(e) => updateRow(index, row.units, parseInt(e.target.value))}
          updateTotalValue={(units, price) => updateTotalValue(index, units, price)}
        >
          {formatter.format(totalValues[index])}
        </Row>
      ))}
    </div>
  );
}

export default App;