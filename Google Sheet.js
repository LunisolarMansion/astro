const scriptURL = 'https://script.google.com/macros/s/AKfycbwnN1S1YFVZAsOpegIAydqupPQI7uqbhebiormx6MYm2n6G_uID3eyjOE4ZkZZdRcd5CA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
