const form = document.getElementById('to-do-input');
const input = document.getElementById('input');
const list = document.getElementById('list');

// Event listener to add task
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const task = input.value.trim();
    if (task === '') {
        alert("Please enter a task!");
        return;
    }
    addTask(task);
    input.value = '';
});


// Function to add task
function addTask(task) {
    const item = document.createElement('li');
    const text = document.createElement('span');
    text.textContent = task;

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');

    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.classList.add('delete-btn');

    // Add event listener to remove item when delete button clicked
    deleteBtn.addEventListener('click', function() {
        list.removeChild(item);
    });

    checkBox.addEventListener('change', function() {
        if (this.checked) {
            text.style.textDecoration = 'line-through';
        } else {
            text.style.textDecoration = 'none';
        }
      });
    item.appendChild(text);
    item.appendChild(deleteBtn);
    item.appendChild(checkBox);
    list.appendChild(item);
}
