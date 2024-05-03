<template>
  <div>
    <input type="text" v-model="newTodo" placeholder="Enter a new todo" />
    <button @click="addTodo" class="px-4 py-2 bg-blue-500 text-white rounded-md mt-2">
      Add Todo
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== "") {
        this.$emit("create", this.newTodo);
        this.newTodo = "";
      }
    },
  },
};
</script>
