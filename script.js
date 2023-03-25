const candyForm = document.querySelector('#candy-form');
const candyTable = document.querySelector('#candy-table tbody');
const remainingQuantity = document.querySelector('#remaining-quantity');

let totalQuantity = 0;

candyForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const candyName = document.querySelector('#candy-name').value;
    const candyDesc = document.querySelector('#candy-desc').value;
    const candyPrice = document.querySelector('#candy-price').value;
    const candyQuantity = document.querySelector('#candy-quantity').value;

    const candyData = {
        name: candyName,
        description: candyDesc,
        price: candyPrice,
        quantity: candyQuantity
    };

    // Send data to backend
    fetch('https://crudcrud.com/api/4cb6bb75e7e14395aa701a4ee3b45028/candies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(candyData)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

    // Add data to table
    const candyRow = candyTable.insertRow();
    candyRow.innerHTML = `
        <td>${candyName}</td>
        <td>${candyDesc}</td>
        <td>${candyPrice}</td>
        <td>${candyQuantity}</td>
    `;
    candyForm.reset();

    // Update total quantity
    totalQuantity += parseInt(candyQuantity);
    remainingQuantity.textContent = `Total quantity remaining: ${totalQuantity}`;
});

// Get data from backend
