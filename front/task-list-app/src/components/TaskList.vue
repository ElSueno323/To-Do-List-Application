<script setup lang="ts">
import {defineProps} from 'vue';
import {deleteTask, markTask} from "@/api";

const propscollect = defineProps({
  tasks: {
    type: Array,
    required: true
  },
  deleteTask: {
    type: Function,
    required: true
  },
  markTask: {
    type: Function,
    required: true
  }
})

function getPriorityColor(priority_level: number) {
  if (priority_level > 7) {
    return 'high-priority';
  } else if (priority_level > 4) {
    return 'medium-priority';
  }
  return 'low-priority';
}
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
      </tr>
      </thead>
      <tbody>
      <tr v-for="task in propscollect.tasks" :key="task">
        <td>{{ task.id }}</td>
        <td>{{ task.name }}</td>
        <td>{{ task.description }}</td>
        <td :class="getPriorityColor(task.priority_level)">
          {{ task.priority_level }}
        </td>
        <td>
          <button v-if="task.status === 'pending'"
                  class="btn btn-outline-info btn-sm"
          @click="propscollect.markTask(task.id)">
            {{ task.status }}
          </button>
          <button v-else class="btn btn-secondary btn-sm" disabled>
            {{ task.status }}
          </button>
        </td>
        <td>{{ task.due_time }}</td>
        <td>
          <button class="btn btn-outline-danger btn-sm" @click="propscollect.deleteTask(task.id)">
            x
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

.high-priority {
  color: red;
}

.medium-priority {
  color: orange;
}

.low-priority {
  color: green;
}
</style>