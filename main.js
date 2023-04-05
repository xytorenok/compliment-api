const button = document.getElementById('create-compliment')
const compliment = document.getElementById('compliment')


button.addEventListener('click', (e) => {
  e.preventDefault()
  fetch('https://complimentr.com/api')
    .then(response => response.json())
    .then(json => compliment.innerHTML = json.compliment)
})
