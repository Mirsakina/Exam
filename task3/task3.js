axios.get('https://restcountries.com/v3.1/name/azerbaijan')
.then(function(response) {
    const country = response.data[0];
    document.getElementById('name').innerText = country.name.common;
    document.getElementById('image').src = country.flags.png;
    document.getElementById('area').innerText = country.area;
    document.getElementById('gerb').src = country.coatOfArms.png;
    document.getElementById('capital').innerText = country.capital;
})
