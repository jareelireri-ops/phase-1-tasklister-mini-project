document.addEventListener('DOMContentLoaded', () => {
  // CRITICAL: Use the exact IDs from the test requirements
  const form = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page reload

    const taskText = taskInput.value.trim();
    if (!taskText) return; // ignore empty input

    // Create new task element - MUST be an li element
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    taskList.appendChild(newTask);

    // Clear the input field
    taskInput.value = '';
  });
});