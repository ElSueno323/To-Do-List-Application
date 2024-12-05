<template>
  <HeaderPage/>
  <TaskList :tasks="tasks"/>
  <TaskForm :createTask="createTask"/>

</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';
import TaskList from './components/TaskList.vue';
import TaskForm from './components/TaskForm.vue';
import HeaderPage from './components/HeaderPage.vue';
import {getAllTasks ,createTask} from "@/api";

export default defineComponent({
  name: 'App',
  components: {
    TaskList,
    HeaderPage,
    TaskForm,
  },
  setup(){
    const tasks =ref([]);
    onMounted(async ()=>{
      tasks.value = await getAllTasks();
    })

    return {
      tasks,
      createTask
    };
  },

});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
