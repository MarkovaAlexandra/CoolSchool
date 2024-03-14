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
  <MultTablComponent />
  <hr>
  <DivTablComponent />
  <hr>
  <PlusStolbikComponent />
  <hr>
  <MinusStolbikComponent />
  <hr>
  <MultStolbikComponent />
  <hr>
  <DivStolbikComponent />
  <hr>
  <DivStolbikNoRemainderComponent />
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
import MinusStolbikComponent from './components/MinusStolbikComponent.vue';
import AuthorizationComponent from './components/AuthorizationComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import UserStatisticComponent from './components/UserStatisticComponent.vue';
import PlusNoTransferComponent from './components/PlusNoTransferComponent.vue';
import MinusNoTransferComponent from './components/MinusNoTransferComponent.vue';
import MultTablComponent from './components/MultTablComponent.vue';
import DivTablComponent from './components/DivTablComponent.vue';
import MultStolbikComponent from './components/MultStolbikComponent.vue';
import DivStolbikComponent from './components/DivStolbikComponent.vue';
import DivStolbikNoRemainderComponent from './components/DivStolbikNoRemainderComponent.vue';

export default {
  name: 'App',
  components: {
    TaskComponent,
    Plus10Component,
    PlusStolbikComponent,
    MinusStolbikComponent,
    Minus10Component,
    AuthorizationComponent,
    FooterComponent,
    UserStatisticComponent,
    PlusNoTransferComponent,
    MinusNoTransferComponent,
    MultTablComponent,
    DivTablComponent,
    MultStolbikComponent,
    DivStolbikComponent,
    DivStolbikNoRemainderComponent,
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
