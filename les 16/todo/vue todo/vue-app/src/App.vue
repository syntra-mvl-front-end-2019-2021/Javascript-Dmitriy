<template>
  <main>
    <header>
      <h1>Todo List</h1>
    </header>
    <form>
      <input type="text" class="todo-input" />
      <button class="todo-button" type="button">
        <i class="fas fa-plus-square"></i>
      </button>
      <div class="select">
        <select name="todos" class="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>

    <div class="todo-container">
      <ul id="ul-list" class="todo-list"></ul>
    </div>
    <form class="update-form">
      <input type="text" class="todo-update" />
      <button class="completed" id="completed-button" type="submit">
        <i class="fas fa-check complete-btn"></i>
      </button>
    </form>
  </main>
</template>

<script>
export default {
  name: "todo App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color:salmon;
  color: white;
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
}
header {
  font-size: 2rem;
}

header,
form {
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
form input,
form button {
  padding: 0.5rem;
  font-size: 2rem;
  border: none;
  background: white;
}
form button {
  color: #ff6f47;
  background: #f7fffe;
  cursor: pointer;
  transition: all 0.3s ease;
}
form button:hover {
  background: #ff6f47;
  color: white;
}
.todo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.todo-list {
  min-width: 30%;
  list-style: none;
}

.todo {
  margin: 0.5rem;
  background: white;
  font-size: 1.5rem;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 1s ease;
}
.filter-todo {
  padding: 1rem;
}
.todo li {
  flex: 1;
}

.trash-btn,
.edit-btn {
  background: #ff6f47;
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
}

.todo-item {
  padding: 0rem 0.5rem;
}

.fa-trash,
.fa-edit {
  pointer-events: none;
}

.hide {
  display: none;
}

.completed {
  text-decoration: line-through;
  opacity: 0.5;
}

/*CUSTOM SELECTOR */
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background-image: none;
}

/* Custom Select */
.select {
  margin: 1rem;
  position: relative;
  overflow: hidden;
}
select {
  color: #ff6f47;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  width: 12rem;
}
/* Arrow */
.select::after {
  content: "\25BC";
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  background: #ff6f47;
  cursor: pointer;
  pointer-events: none;
}
/* Transition */
/*
.select:hover::after {
  transform: scale(1.5);
}
*/

.update-form{
  height: 100vh;
  width: 80%;
  position: absolute;
  display: none;
  background-color: salmon;
  top: 40%;
  left: 10%;
  border-radius: 10px;
}


#show{
  display: flex;
  justify-content: center;
  align-items: center;
}

.complete-btn {
  background: rgb(255, 111, 71);
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
}
.complete-btn {
  background: rgb(11, 212, 162);
}

#hide{
  display: none;
}
</style>
