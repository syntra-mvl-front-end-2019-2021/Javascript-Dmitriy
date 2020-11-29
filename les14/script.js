const baseUrl = 'https://api.exchangeratesapi.io/';

const $container = document.getElementById('container');
let currArr = []
// function writeExchangeRate( rates) {
//   const $dateTag = document.createElement('p');
//   $dateTag.textContent = rates.date;

//   const $baseTag = document.createElement('h4');
//   $baseTag.textContent = rates.base;

//   const $ulTag = document.createElement('ul');
//   Object.keys(rates.rates).forEach(function (key) {
//     const $liTag = document.createElement('li');
//     $liTag.textContent = key + ': ' + rates.rates[key];
//     $ulTag.append($liTag);
//   })

//   $container.append($dateTag, $baseTag, $ulTag);
// }


function writeExchangeRate(rates) {
  const $ulTag = document.createElement('select');
  Object.keys(rates.rates).forEach(function (key) {
    const $liTag = document.createElement('option');
    $liTag.textContent = key ;
    $ulTag.append($liTag);
   currArr = Object.keys(rates.rates)
   console.log(currArr)

 })

  $container.append( $ulTag);
}

const latest = fetch(baseUrl + 'latest?base=GBP', {
  method: 'GET'
});


//  console.log(latest)

latest.then(function(response) {
  if (!response.ok) {
    throw new Error('Fetch failed');
  }

  return response.json();
}).then(function(jsonData) {
  console.log(jsonData);
  writeExchangeRate(jsonData);
}).catch(function(error) {
  console.log(error);
})




