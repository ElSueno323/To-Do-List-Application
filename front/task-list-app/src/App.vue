<template>
  <HeaderPage/>
  <TaskList :tasks="tasks"
            :deleteTask="deleteTaskRefresh"
            :markTask="markTaskRefresh"
  />
  <TaskForm :createTask="createTaskRefresh"/>

</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';
import TaskList from './components/TaskList.vue';
import TaskForm from './components/TaskForm.vue';
import HeaderPage from './components/HeaderPage.vue';
import {getAllTasks ,createTask ,deleteTask, markTask} from "@/api";

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
    const createTaskRefresh = async (task:any) => {
      await createTask(task);
      tasks.value = await getAllTasks();
    }
    const deleteTaskRefresh = async (id:any) => {
      await deleteTask(id);
      tasks.value = await getAllTasks();
    }

    const markTaskRefresh = async (id:any) => {
      await markTask(id);
      tasks.value = await getAllTasks();
    }

    return {
      tasks,
      createTaskRefresh,
      deleteTaskRefresh,
      markTaskRefresh
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
