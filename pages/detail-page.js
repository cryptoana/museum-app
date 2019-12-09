function doesNotPassAllValidations(name, message) {
  if (!name) {
    alert('You forgot to fill in your name!')
    return true
  } else  if (!message) {
    alert('You forgot to fill in your message!')
    return true
  } 

  if (message.length > 280) {
    alert('Your comment is too long')
    return true
  }
}

function submitComment() {
  const inputField = document.getElementById('name')
  const name = inputField.value

  const textArea = document.getElementById('msg')
  const message = textArea.value

  if(doesNotPassAllValidations(name, message)) {
    return null
  }

  const comment = document.createElement('section')
  const h3 = document.createElement('h3')
  const p = document.createElement('p')

  h3.innerHTML = `${name} said:`
  p.innerHTML = message

  comment.classList.add('comment')
  comment.appendChild(h3)
  comment.appendChild(p)

  const commentSection = document.getElementById('comments')
  commentSection.appendChild(comment)

  inputField.value = null
  textArea.value = null
}