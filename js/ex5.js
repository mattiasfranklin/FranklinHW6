const createTable = () => {
  const outputDiv = document.getElementById('output');
  const table = document.createElement('table');
  
  for (let i = 1; i <= 12; i++) {
      const row = document.createElement('tr');
      const cell = document.createElement('td');
      cell.textContent = i;
      cell.style.textAlign = 'center';
      cell.style.border = 'double black';
      cell.style.padding = '0px';
      
      if (i % 4 === 0) {
          cell.classList.add('divbyfour');
      }
      
      row.appendChild(cell);
      table.appendChild(row);
  }
  
  outputDiv.appendChild(table);
};

createTable();

