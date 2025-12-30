// Grab the form, input, and list elements
const form = document.getElementById('taskForm');
const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent reload

  const task = input.value.trim();
  if (!task) return; // skip empty

  const li = document.createElement('li');
  li.textContent = task;
  list.appendChild(li);

  input.value = ''; // clear input
});
