// Grab the form, input, and list elements
const form = document.getElementById('taskForm');
const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');

// Make sure elements exist before adding listener
if (form && input && list) {
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page reload

    const task = input.value.trim();
    if (!task) return; // skip empty input

    const li = document.createElement('li');
    li.textContent = task;
    list.appendChild(li);

    input.value = ''; // clear input field
  });
}
