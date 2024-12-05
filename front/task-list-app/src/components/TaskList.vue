<script setup lang="ts">
  import {ref} from "vue";

  const tasks = ref([]);
</script>

<template>
  <div class="container">
    <table class="table table-bordered">
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Description</th>
        <th>Priority</th>
        <th>Status</th>
        <th>Due Time</th>
        <th>Buttons</th>
      </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>