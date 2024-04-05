<template>
    <div class="main">
        <!-- <h2>MultTablComponent</h2> -->
        <StarsComponent />
        <button class="btn-calc" @click="start">start</button>
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
            <!-- <button class="btn-calc" @click="check">check</button> -->
        </div>

        <div class="message" :class="{ animation: !hasAnimation }"> {{ message }}</div>
        <div class="count"> Счёт = {{ userCount }}</div>
    </div>
</template>

<script>
import StarsComponent from './StarsComponent.vue';

export default {
    data() {
        return {
            hasAnimation: false,
            first: null,
            second: null,
            operand: '',
            userResult: '',
            message: '',
            userCount: 0,
            iterations: 0,
            max: 9,
            min: 1,
        };
    },
    methods: {
        start() {
            const start = document.getElementById('startHere');
            start.focus();
            this.hasAnimation = true;
            this.userResult = '',
                this.message = '',
                this.first = Math.floor(Math.random() * this.max + 1);
            this.second = Math.floor(Math.random() * this.max + 1);
            this.result = this.first * this.second;
            this.operand = 'X';
        },
        check() {
            this.hasAnimation = false;
            const starList = document.querySelectorAll('.front-star');
            if (this.result == this.userResult) {
                this.message = 'Правильно!';
                this.userCount++;
                starList[this.iterations].classList.add('_gold');
            }
            else {
                this.message = 'Не правильно...';
            }
            this.iterations++;
            if (this.iterations < 10) {
                setTimeout(() => {
                    this.start();
                }, 1000);
            } else {
                this.message = `ваш результат ` + this.userCount + ` из ` + this.iterations;
                setTimeout(() => {
                    this.iterations = '';
                    this.first = '';
                    this.second = '';
                    this.operand = '';
                    starList.forEach(star => star.classList.remove('_gold'));
                }, 3000);
            }
        },
    },
    components: { StarsComponent }
}
</script>


