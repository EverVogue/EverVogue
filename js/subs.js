
  const scriptURL = 'https://script.google.com/macros/s/AKfycbw8fkgwizuHHkZg_7hJWJqk343qH9x98sEAIY262sQHEDDojjO8yNCwJ28kd4tO0Smv/exec'
  const form = document.forms['submit-to-google-sheet']
  const mg = document.getElementById("mg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        mg.innerHTML = "Thankyou for subscribing"
        setTimeout(function()
        {
            mg.innerHTML = ""
        },1500)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })