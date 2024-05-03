<template>
  <div>
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @delete="deleteTodo"
      @update="updateTodo"
    />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoItem,
  },
  props: {
    todos: Array,
  },
  methods: {
    deleteTodo(id) {
      this.$emit("delete", id);
    },
    updateTodo(id) {
      this.$emit("update", id);
    },
  },
};
</script>
