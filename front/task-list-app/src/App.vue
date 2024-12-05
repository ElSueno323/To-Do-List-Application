<template>
  <HeaderPage/>
  <TaskList/>
  <TaskForm/>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskList from './components/TaskList.vue';
import TaskForm from './components/TaskForm.vue';
import HeaderPage from './components/HeaderPage.vue';

export default defineComponent({
  name: 'App',
  components: {
    TaskList,
    HeaderPage,
    TaskForm,
  }
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
