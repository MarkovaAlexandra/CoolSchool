<template>
  <TaskComponent />
  <FooterComponent />
</template>

<script>

import TaskComponent from './components/TasksComponent.vue'
import FooterComponent from './components/FooterComponent.vue';


export default {
  name: 'App',
  components: {
    TaskComponent,
    FooterComponent,
  }
}
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
