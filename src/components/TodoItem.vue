<template>
  <div class="flex items-center justify-between border-b border-gray-200 py-4">
    <div class="flex items-center">
      <input
        type="checkbox"
        class="form-checkbox h-5 w-5 text-indigo-600"
        v-model="isChecked"
        @change="updateTodo"
      />
      <p class="ml-2" :class="{ 'line-through': isChecked }">{{ todo.todo }}</p>
    </div>
    <button @click="deleteTodo" class="text-red-600 hover:text-red-800">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
  data() {
    return {
      isChecked: this.todo.completed,
    };
  },
  methods: {
    deleteTodo() {
      this.$emit("delete", this.todo.id);
    },
    updateTodo() {
      this.$emit("update", this.todo.id);
    },
  },
};
</script>
