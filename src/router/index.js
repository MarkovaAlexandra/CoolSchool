import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from '@/components/HomeComponent.vue';
import Plus10Component from '@/components/Plus10Component.vue';
import Minus10Component from '@/components/Minus10Component.vue';
import PlusNoTransferComponent from '@/components/PlusNoTransferComponent.vue';
import MinusNoTransferComponent from '@/components/MinusNoTransferComponent.vue';
import MultTablComponent from '@/components/MultTablComponent.vue'
import DivTablComponent from '@/components/DivTablComponent.vue'
import PlusStolbikComponent from '@/components/PlusStolbikComponent.vue'
import MinusStolbikComponent from '@/components/MinusStolbikComponent.vue'
import MultStolbikComponent from '@/components/MultStolbikComponent.vue'
import DivStolbikNoRemainderComponent from '@/components/DivStolbikNoRemainderComponent.vue'
import DivStolbikComponent from '@/components/DivStolbikComponent.vue'
import TasksComponent from '@/components/TasksComponent.vue'
import ConfidentionalPolicy from '@/components/ConfidentionalPolicy.vue'




const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeComponent,
    },
    {
        path: '/tasks',
        name: 'tasts',
        component: TasksComponent,
    },
    {
        path: '/plus',
        name: 'plus10',
        component: Plus10Component,
    },
    {
        path: '/minus',
        name: 'minus10',
        component: Minus10Component,
    },
    {
        path: '/plusnotransfer',
        name: 'plus-no-transfer',
        component: PlusNoTransferComponent,
    },
    {
        path: '/minusnotransfer',
        name: 'minus-no-transfer',
        component: MinusNoTransferComponent,
    },
    {
        path: '/multipltabl',
        name: 'multipl-tabl',
        component: MultTablComponent,
    },
    {
        path: '/divisiontabl',
        name: 'division-tabl',
        component: DivTablComponent,
    },
    {
        path: '/plusstolbik',
        name: 'plusstolbik',
        component: PlusStolbikComponent,
    },
    {
        path: '/minusstolbik',
        name: 'minusstolbik',
        component: MinusStolbikComponent,
    },
    {
        path: '/multstolbik',
        name: 'multstolbik',
        component: MultStolbikComponent,
    },
    {
        path: '/divstolbiknoreminder',
        name: 'divstolbiknoreminder',
        component: DivStolbikNoRemainderComponent,
    },
    {
        path: '/divstolbik',
        name: 'divstolbik',
        component: DivStolbikComponent,
    },
    {
        path: '/confidentional',
        name: 'confidentionalPolicy',
        component: ConfidentionalPolicy,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {

        return { top: 0 }
    }
})
export default router;