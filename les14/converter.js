const $from_currency = document.getElementById('convertFrom');
const $from_ammount = document.getElementById('currency__1');
const $to_currency = document.getElementById('convertTo');
const $to_ammount = document.getElementById('currency__2');
 
$from_currency.addEventListener('change', calculate);
$from_ammount.addEventListener('input', calculate);
$to_currency.addEventListener('change', calculate);
$to_ammount.addEventListener('input', calculate);
function calculate() {
	const from_currency = $from_currency.value;
	const to_currency = $to_currency.value;
	
	fetch(`https://api.exchangeratesapi.io/latest?base=${from_currency}`)
		.then(res => res.json())
		.then(res => {
		const rate = res.rates[to_currency];
		$to_ammount.value = ($from_ammount.value * rate).toFixed(2);
	})
}
 
calculate();