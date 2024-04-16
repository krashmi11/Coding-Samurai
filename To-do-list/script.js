const form = document.getElementById('to-do-input');
const input = document.getElementById('input');
const list = document.getElementById('list');
const prioritySelect = document.getElementById('priority');

// Event listener to add task
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const task = input.value.trim();
    if (task === '') {
        alert("Please enter a task!");
        return;
    }
    const priority = prioritySelect.value;
    addTask(task, priority);
    input.value = '';
});

// Function to add task
function addTask(task, priority) {
    const item = document.createElement('li');
    const text = document.createElement('span');
    text.textContent = task;

    const prioritySpan = document.createElement('span');
    prioritySpan.textContent = priority;
    prioritySpan.classList.add('priority-' + priority.toLowerCase()); // Apply different styles based on priority

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
    item.appendChild(prioritySpan);
    item.appendChild(deleteBtn);
    item.appendChild(checkBox);
    list.appendChild(item);
}

// Function to filter tasks by status
function filterTasks(status) {
    const tasks = document.querySelectorAll('li');
    tasks.forEach(task => {
        if (status === 'completed' && task.querySelector('input[type="checkbox"]').checked) {
            task.style.display = 'block'; // Show completed tasks
        } else if (status === 'pending' && !task.querySelector('input[type="checkbox"]').checked) {
            task.style.display = 'block'; // Show pending tasks
        } else {
            task.style.display = 'none'; // Hide other tasks
        }
    });
}

// Event listener to filter tasks by status
document.getElementById('filter-completed').addEventListener('click', function() {
    filterTasks('completed');
});

document.getElementById('filter-pending').addEventListener('click', function() {
    filterTasks('pending');
});
