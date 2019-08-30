//add event handler
function submitComment () {
    const inputField = document.getElementById("name");
    const name = inputField.value;
    const textArea = document.getElementById('msg');
    const msg = textArea.value;

//create the elements you need
    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    if(doesNotPassAllValidations(name, msg)){
        return null;
    }

//adjust the elements you created
    h3.innerHTML = `${name} said:`;
    p.innerHTML = msg;
    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);
    console.log(comment);

//display the elements on the page
    const commentSection = document.getElementById('comments');
    commentSection.appendChild(comment);

//reset form values
    inputField.value = null;
    textArea.value = null;

    console.log(name);
    console.log(msg)

    
}

function doesNotPassAllValidations(name, msg) {
    if (!name || !msg) {
        alert('You forgot to fill in your name or message!');
        return true;
    } 

    if (msg.length > 280) {
        alert('Your comment is too long!');
        return true;
    }

    console.log(msg.length);
}
