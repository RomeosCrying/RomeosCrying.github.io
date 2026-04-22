    const form= document.getElementById('customForm');
    const nameInput= document.getElementById('nameInput');
    const messageInput= document.getElementById('messageInput');
    const bgSelect= document.getElementById('bgColor');
    const greetingEl= document.getElementById('greeting');
    const messageEl= document.getElementById('message');
    const todoInput = document.getElementById('todoInput');
    const button = document.getElementById('addTodo');
    

    // Uses your event listener to trigger the functions listed below it. 
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      updateGreeting(e); // When the event listener sees the submit, this function trigers first. 
      updateParagraph(); // This function triggers second.
      changeBackgroundColor(); // This function triggers third.
    });

    // Function for updating greeting. 
    function updateGreeting(e) {       
      const name = nameInput.value.trim();
        greetingEl.textContent = name 
            ?`Hello, ${name}!` 
            :"Hello! Fill the form and click Apply";
        greetingEl.classList.toggle('default-text', !name);
    }

    // Function for updating the message paragraph.
    function updateParagraph() {
      const msg = messageInput.value.trim();
        messageEl.textContent = msg 
            ? msg 
            :"Your custom message will appear here after you submit.";
        messageEl.classList.toggle('default-text', !msg);
    }

    // Function for changing the background color
    function changeBackgroundColor() {
      document.body.style.backgroundColor = bgSelect.value;
    }
    // Event listener for the to-do list button.
   button.addEventListener('click', (e) => {
      e.preventDefault();

      addTodoItem();
    });
    // Function for adding a to-do item to the list.
   function addTodoItem() {
      const todoInput = document.getElementById('todoInput').value.trim();
      if (todoInput.trim() !== '') {
        const newLine = document.createElement('li'); // Create a new list item element.
        newLine.innerText = todoInput;
        const list = document.getElementById('todoList');
        list.appendChild(newLine);
        document.getElementById('todoInput').value = '';
      } else {
        alert('Please enter a to-do item.');
      }
   }