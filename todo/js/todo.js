function submitItem() {
    var todoItems = [];
    var todoItem = document.getElementById('item').value;
    todoItems.push(todoItem);
    for (var i =0; i < todoItems.length; i++) {
        if (document.getElementById('item').value != ""){ 
            var li = document.createElement('li');
            li.textContent = todoItems[i]
            document.getElementById('todoList').appendChild(li);
        } else {
            alert('タスクを入力してください');
        }
    }
  }