const todoInput = document.querySelector(".todo-input");
const todoUpdate = document.querySelector(".todo-update");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
let ul_list = document.getElementById('ul-list')
let btn_container = document.getElementById('todo-container')
const update = document.querySelector(".update-form");



// https://docs.directus.io/api/items.html#the-item-object
const URL = 'https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo'


function fetchAllTodos() {
  fetch(URL, {
      method: 'GET',
      headers: {
        'Authorization': 'bearer ABcEHA2kcrKY4a6ipUA3',
      }
    })
    .then(result => {
      if (!result.ok) {
        throw new Error('No luck');
      }

      return result.json();
    })
    .then(function (result) {
      console.log(result)
      outputData(result)

    })
    .catch(function (error) {
      console.error(error)
    });
}

function postNewTodo(post) {
  const body = {
    description: post,
    done: false,
  };

  fetch(URL, {
      method: 'POST',
      headers: {
        'Authorization': 'bearer ABcEHA2kcrKY4a6ipUA3',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(result => {
      if (!result.ok) {
        throw new Error('No luck');
      }

      return result.json();
    })
    .then(function (result) {
      console.log(result)
    })
    .catch(function (error) {
      console.error(error)
    });
}

function updateTodo(id, post) {
  const body = {
    description: post,
    done: true,
  };

  fetch(URL + '/' + id, {
      method: 'PATCH',
      headers: {
        'Authorization': 'bearer ABcEHA2kcrKY4a6ipUA3',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(result => {
      if (!result.ok) {
        throw new Error('No luck');
      }

      return result.json(); // JSON.parse
    })
    .then(function (result) {
      console.log(result)
    })
    .catch(function (error) {
      console.error(error)
    });
}

function deleteTodo(id) {
  fetch(URL + '/' + id, {
      method: 'DELETE',
      headers: {
        'Authorization': 'bearer ABcEHA2kcrKY4a6ipUA3',
      },
    })
    .then(result => {
      if (!result.ok) {
        throw new Error('No luck');
      }

      console.log(result);
    })
    .catch(function (error) {
      console.error(error)
    });
}
// postNewTodo();
// updateTodo(2);
// deleteTodo(3);
// fetchAllTodos();
// function btnPressed(event) {
//   let btn = event.target.matches('button')

//   if (btn === true) {
// let id = event.target.dataset.id
// console.log(id)


//     deleteTodo(id);
//     fetchAllTodos()
//   }


// }

function btnPressed(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    // e.target.parentElement.remove();
    const todo = item.parentElement;
    console.log(todo)
    update.setAttribute("id", "hide");

    todo.classList.add("hide");

    let id = e.target.dataset.id
    deleteTodo(id);
  }
  if (item.classList[0] === "edit-btn") {
    // e.target.parentElement.remove();
    update.setAttribute("id", "show");

    ul_list.classList.add("hide");

  
  }

   
}




function outputData(result) {
  console.log(result)
  todoList.innerHTML = '';
  let keys = Object.keys(result['data']).length

  let i = 0;
  while (i < keys) {

    createList(result['data'][i]['id'], result['data'][i]['description'])
    i++;
  }
}

function createList(id, task)
{
  console.log(task)
  console.log(id)
  // creating elements with id's
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const li = document.createElement("li");
  li.innerText = task;
  li.classList.add("todo-item");
  todoDiv.appendChild(li);
 

  //!trashbutton

  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  let data_id = document.createAttribute('data-id')
  data_id.value = id
  trashButton.setAttributeNode(data_id)
  todoList.appendChild(todoDiv).append(trashButton);

 //!update button
 const updateButton = document.createElement("button");

  updateButton.innerHTML = `<i class="far fa-edit"></i>`;
  updateButton.classList.add("edit-btn");
  let dataUpdate_id = document.createAttribute('data-id')
  dataUpdate_id.value = id
  updateButton.setAttributeNode(dataUpdate_id)
  todoList.appendChild(todoDiv).append(updateButton);
}


function addTodo() {
  if (todoInput.value != '') {
    postNewTodo(todoInput.value);
    todoInput.value = '';
    fetchAllTodos();
    
  } else {
    alert('ejejejejeje iets invoeren he idioot!')
  }

}

// toggle the update


function ToggleThatNav() {
    //!complete button

const completedButton = document.createElement("button");
completedButton.innerHTML = `<i class="fas fa-check"></i>`;
completedButton.classList.add("complete-btn");
update.appendChild(completedButton);

  update.classList.toggle("show");
  fetchAllTodos()

}






fetchAllTodos()
todoButton.addEventListener("click", addTodo)
ul_list.addEventListener("click", btnPressed);
ul_list.addEventListener("click",ToggleThatNav);