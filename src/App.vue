<template>
  <AuthorizationComponent />
  <hr>
  <TaskComponent />
  <hr>
  <Plus10Component />
  <hr>
  <Minus10Component />
  <hr>
  <PlusNoTransferComponent />
  <hr>
  <MinusNoTransferComponent />
  <hr>
  <PlusStolbikComponent />
  <hr>
  <UserStatisticComponent />
  <hr>
  <FooterComponent />
</template>

<script>
import TaskComponent from './components/TasksComponent.vue'
import Minus10Component from './components/Minus10Component.vue';
import Plus10Component from './components/Plus10Component.vue';
import PlusStolbikComponent from './components/PlusStolbikComponent.vue';
import AuthorizationComponent from './components/AuthorizationComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import UserStatisticComponent from './components/UserStatisticComponent.vue';
import HelloWorld from './components/HelloWorld.vue';
import PlusNoTransferComponent from './components/PlusNoTransferComponent.vue';
import MinusNoTransferComponent from './components/MinusNoTransferComponent.vue';

export default {
  name: 'App',
  components: {
    TaskComponent,
    Plus10Component,
    PlusStolbikComponent,
    Minus10Component,
    AuthorizationComponent,
    FooterComponent,
    UserStatisticComponent,
    HelloWorld,
    PlusNoTransferComponent,
    MinusNoTransferComponent
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
