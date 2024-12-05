<script setup lang="ts">
  import {defineProps} from 'vue';
  import {ref} from "vue";

  const propscollect= defineProps({
    createTask: {
      type: Function,
      required: true
    }
  })

  const newtask= ref({
    name:'',
    description:'',
    priority_level:1,
    status:'pending',
    due_time:'',
  })

</script>

<template>

  <div class="container">
    <form @submit.prevent="createTask(newtask)">
      <div class="form-group">
        <label for="taskName">Task Name</label>
        <input
            type="text"
            class="form-control"
            id="taskName"
            v-model="newtask.name"
            required
        />
      </div>
      <div class="form-group">
        <label for="taskDescription">Description</label>
        <textarea
            class="form-control"
            id="taskDescription"
            v-model="newtask.description"
            required
        ></textarea>
      </div>

      <div class="form-group">
        <label for="taskPriority">Priority Level</label>
        <input
            type="number"
            class="form-control"
            id="taskPriority"
            v-model.number="newtask.priority_level"
            min="1"
            max="10"
            required
        />
      </div>

      <div class="form-group">
        <label for="taskStatus">Task Status</label>
        <select
            class="form-control"
            id="taskStatus"
            v-model="newtask.status"
            required
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div class="form-group">
        <label for="taskDueTime">Due Time</label>
        <input
            type="datetime-local"
            class="form-control"
            id="taskDueTime"
            v-model="newtask.due_time"
            required
        />
      </div>

      <button type="submit" class="btn btn-primary mt-3">Create Task</button>
    </form>
  </div>
</template>

<style scoped>

</style>