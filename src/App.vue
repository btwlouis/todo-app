<template>
  <div class="max-w-lg mx-auto mt-8 p-2">
    <h1 class="text-3xl font-semibold mb-4">Todo List</h1>
    <AddTodo @create="createTodo" />
    <TodoList :todos="todos" @delete="deleteTodo" @update="updateTodo" />
  </div>
</template>

<script>
import axios from "axios";

import TodoList from "./components/TodoList.vue";
import AddTodo from "./components/AddTodo.vue";

export default {
  components: {
    TodoList,
    AddTodo,
  },
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    axios
      .get("https://dummyjson.com/todos")
      .then((response) => {
        this.todos = response.data.todos;
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  },
  watch: {
    todos: {
      handler() {
        this.todos.sort((a, b) => b.id - a.id);
      },
      deep: true,
    },
  },
  methods: {
    updateTodo(id) {
      const todo = this.todos.find((todo) => todo.id === id);

      if (!todo) {
        return;
      }
      axios
        .put(`https://dummyjson.com/todos/${id}`, {
          completed: !todo.completed,
        })
        .then(() => {
          todo.completed = !todo.completed;
        })
        .catch((error) => {
          console.error("Error updating todo:", error);
        });
    },
    deleteTodo(id) {
      axios
        .delete(`https://dummyjson.com/todos/${id}`)
        .then(() => {
          this.todos = this.todos.filter((todo) => todo.id !== id);
        })
        .catch((error) => {
          console.error("Error deleting todo:", error);
        });
    },
    createTodo(todo) {
      axios
        .post("https://dummyjson.com/todos/add", {
          todo: todo,
          completed: false,
          userId: 5,
        })
        .then((response) => {
          const todo = response.data;
          this.todos.push(todo);
        })
        .catch((error) => {
          console.error("Error creating todo:", error);
        });
    },
  },
};
</script>
