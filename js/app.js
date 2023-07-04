document.getElementById('addTaskBtn').addEventListener('click', function() {
  var taskInput = document.getElementById('taskInput');
  var todoList = document.getElementById('todoList');

  if (taskInput.value !== ''){
    var newTask = document.createElement('li');
    newTask.textContent = taskInput.value;
    newTask.classList.add('taskItem');

    var doingBtn = document.createElement('button');
    doingBtn.textContent = 'Doing';
    doingBtn.addEventListener('click', function () {
      todoList.removeChild(newTask);
      doingBtn.remove();//Remove 'Doing' button when moved to 'Doing' list
      document.getElementById('doingList').appendChild(newTask);
    });

    var doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.addEventListener('click', function () {
      if (newTask.parentNode.id == 'todoList'){
        todoList.removeChild(newTask);
      }else if (newTask.parentNode.id == 'doingList'){
      document.getElementById('doneList').appendChild(newTask);
      }
    doingBtn.remove();
    doneBtn.remove();
    document.getElementById('doneList').appendChild(newTask);
   });

    newTask.appendChild(doingBtn);
    newTask.appendChild(doneBtn);
    todoList.appendChild(newTask);

    taskInput.value = '';
  }
});