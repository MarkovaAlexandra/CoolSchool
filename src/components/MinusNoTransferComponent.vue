<template>
    <div class="main">
        <!-- <h2>MinusNoTransferComponent</h2> -->
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
    </div>
    <div class="message" :class="{ animation: !hasAnimation }"> {{ message }}</div>
    <div class="count"> Счёт = {{ userCount }}</div>
</template>

<script>
import StarsComponent from './StarsComponent.vue';

export default {
    data() {
        return {
            hasAnimation: false,
            first: null,
            max: 99,
            min: 21,
            second: null,
            secondMax: null,
            secondMin: 1,
            operand: '',
            userResult: '',
            iterations: 0,
            message: '',
            userCount: 0,
        };
    },
    methods: {
        start() {
            const start = document.getElementById('startHere');
            start.focus();
            this.hasAnimation = true;
            this.userResult = '',
                this.message = '',
                //рандомим слагаемые
                //первое от 99 до 21
                this.first = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
            //второе в десятках (от max = десятков первого до 1)
            const tens = Math.floor(Math.random() * (Math.floor(this.first / 10) - 1) + 1);
            //второе в единицах  от( max=единиц первого до 0)
            const units = Math.floor(Math.random() * (Math.floor(this.first % 10)));
            this.second = tens * 10 + units;
            this.result = this.first - this.second;
            this.operand = '-';
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
            }
            else {
                this.message = `ваш результат ` + this.userCount + ` из ` + this.iterations;
                setTimeout(() => {
                    this.iterations = '';
                    this.userCount = 0;
                    this.first = '';
                    this.second = '';
                    starList.forEach(star => star.classList.remove('_gold'));
                }, 3000);
            }
        },
    },
    components: { StarsComponent }
}
</script>

<style ></style>