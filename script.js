const fetchDataBtn = document.getElementById('fetchbtn');
const dataDisplay = document.getElementById('display');
fetchDataBtn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        let info = ' ';

        data.forEach(user => {
        info += `
        <div>
            <p>Name: ${user.name}</p>
            <p>Username: ${user.username}</p>
            <p>City: ${user.address.city}</p>
            <hr>
        </div>
            `;
          });

          dataDisplay.innerHTML = info;
        })
    });

