<template>
    <Head>
        <title>онлайн-тренажер по математике для начальной школы</title>
        <meta name="description"
            content="Онлайн-тренажер по математике для отработки сложения без перехода через разряд при помощи специально разработанных алгоритмов генерации математических примеров. Предназначен для учеников начальной школы, а также родителей и преподавателей. Для работы в школе и дома.">
    </Head>
    <div class="main">
        <StarsComponent />
        <button class="btn-calc" @click="start">начать</button>
        <div class="strochnie-vichisleniya">

            <div class="first">
                <p :class="{ animation: hasAnimation }">{{ first }}</p>
            </div>
            <div class="operand-strochniy">
                <p :class="{ animation: hasAnimation }">{{ operand }}</p>
            </div>
            <div class="second">
                <p :class="{ animation: hasAnimation }">{{ second }}</p>
            </div>
            <div class="equal">
                <p :class="{ animation: hasAnimation }">=</p>
            </div>
            <input id="startHere" class="userInput" :class="{ showInputBorder: hasAnimation }" @keyup.enter="check"
                type="number" v-model="userResult">

        </div>
        <div class="count"> Счёт = {{ userCount }}</div>
        <div class="message" :class="{ animation: !hasAnimation }"> {{ message }} </div>
        <div v-show="this.picture == 'right'" :class="{ animationSmile: !hasAnimation }"><img width="350" :src=right
                alt="Верно!"></div>
        <div v-show="this.picture == 'wrong'" :class="{ animationSmile: !hasAnimation }"><img width="350" :src=wrong
                alt="Неверно"></div>

    </div>
</template>

<script lang="ts" setup>
import { Head } from '@unhead/vue/components'
</script>

<script>
import StarsComponent from './StarsComponent.vue';


export default {
    data() {
        return {
            right: require('@/assets/img/2.png'),
            wrong: require('@/assets/img/1.png'),
            hasAnimation: false,
            first: null,
            max: 88,
            min: 10,
            second: null,
            secondMax: null,
            secondMin: 1,
            operand: '',
            userResult: '',
            message: '',
            userCount: 0,
            iterations: 0,
            picture: undefined,
        }
    },
    methods: {
        start() {
            const start = document.getElementById('startHere');
            start.focus();
            this.picture = undefined;
            this.hasAnimation = true;
            this.userResult = '',
                this.message = '',
                //рандомим слагаемые
                //первое от 10 до 88
                this.first = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
            //второе в десятках  max=9-десятки первого, min=1
            const tens = Math.floor(Math.random() * (9 - (Math.floor(this.first / 10))) + 1)
            //второе в единицах  max=9-единицы первого, min=0
            const units = Math.floor(Math.random() * (9 - (Math.floor(this.first % 10)) + 1))
            this.second = tens * 10 + units;
            this.result = this.first + this.second;
            this.operand = '+';
        },

        check() {
            this.hasAnimation = false;
            const starList = document.querySelectorAll('.front-star');
            if (this.result == this.userResult) {
                this.message = 'Правильно!';
                this.picture = 'right';
                this.userCount++;
                starList[this.iterations].classList.add('_gold');
            } else {
                this.message = 'Не правильно...';
                this.picture = 'wrong';

            }
            this.iterations++;
            if (this.iterations < 10) {
                setTimeout(() => {
                    this.start()
                }, 2000);
            }
            else {
                this.message = `ваш результат ` + this.userCount + ` из ` + this.iterations;
                setTimeout(() => {
                    this.userCount = 0;
                    this.iterations = '';
                    this.first = '';
                    this.second = '';
                    this.operand = '';
                    starList.forEach(star => star.classList.remove('_gold'));
                }, 3000);
            }
        },

    },
    components: {
        StarsComponent,
    }
}
</script>

<style ></style>