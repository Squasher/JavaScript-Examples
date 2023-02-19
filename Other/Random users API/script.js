const apiURL = 'https://randomuser.me/api/';
const content = document.querySelector('.wrapper');
const loader = document.querySelector('.preloader');
const personName = document.querySelector('.card-title');
const picture = document.querySelector('.card-img-top');
const email = document.querySelector('.email');
const birthday = document.querySelector('.birthday');
const locationAddress = document.querySelector('.location');
const number = document.querySelector('.number');
const updateBtn = document.querySelector('#updateuser');

async function updateUser() {
    const response = await fetch(apiURL);
    const data = await response.json();

    if (!data) {
        alert('Failed to fetch the api data!');
        return;
    }

    let result = data.results[0];

    personName.innerHTML = `${result.name.first} ${result.name.last}`;
    picture.src = result.picture.large;
    email.innerHTML = result.email;
    let date = new Date(result.dob.date);
    birthday.innerHTML = `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`;
    locationAddress.innerHTML = `${result.location.street.number} ${result.location.street.name}`;
    number.innerHTML = result.cell;
}

updateUser().then(function() {
    content.classList.add('d-block');
    content.classList.remove('d-none');
    loader.classList.remove('d-block');
    loader.classList.add('d-none');
});

updateuser.onclick = function() {
    updateuser.disabled = true;
    updateuser.innerHTML = '<i class="fas fa-spinner fa-spin"></i> UPDATING...';
    
    updateUser().then(function() {
        updateuser.innerHTML = 'UPDATE USER';
        updateuser.disabled = false;
    });
}