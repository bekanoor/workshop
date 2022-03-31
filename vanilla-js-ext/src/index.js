const createCounter = () => {
  let counter = 0

  const root = document.querySelector('.root')
  const container = document.createElement('div')
  const title = document.createElement('h2')
  const boldText = document.createElement('b')
  const text = document.createElement('p')
  const buttonDecrease = document.createElement('button')
  const buttonIncrease = document.createElement('button')

  text.textContent = 'Counter: '
  boldText.textContent = `${counter}`
  buttonDecrease.textContent = '-'
  buttonIncrease.textContent = '+'
  title.textContent = 'Counter'

  root.append(container)
  container.append(title)
  container.append(text)
  text.append(boldText)
  container.append(buttonDecrease)
  container.append(buttonIncrease)

  buttonDecrease.onclick = () => {
    boldText.textContent = `${--counter}`

    if (counter === 0) boldText.className = ''

    if (counter < 0) {
      boldText.classList.remove('green')
      boldText.classList.add('red')
    } else {
      boldText.classList.remove('red')
    }
  }

  buttonIncrease.onclick = () => {
    boldText.textContent = `${++counter}`

    if (counter === 0) boldText.className = ''

    if (counter > 0) {
      boldText.classList.remove('red')
      boldText.classList.add('green')
    } else {
      boldText.classList.remove('green')
    }
  }
}

createCounter()
