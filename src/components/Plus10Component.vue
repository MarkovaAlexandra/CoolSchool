<template>
    <div class="main">

        <!-- <h2>Plus10Component</h2> -->
        <StarsComponent />


        <button class="btn-calc" @click="start"> start</button>
        <div class="strochnie-vichisleniya">
            <!--:class добавляется если условие hasAnimation = true,
изначально ставлю его false, в момент старта меняю на тру, чтобы добавить класс в момент появления данных в диве,
в ф-ции check снова ставлю false, для message тоже самое, ток наоборот-->



            <div class="first">
                <p :class="{ animation: hasAnimation }">
                    {{ first }}</p>
            </div>
            <div class="operand-strochniy">
                <p :class="{ animation: hasAnimation }">{{ operand }} </p>
            </div>
            <div class="second">
                <p :class="{ animation: hasAnimation }">{{ second }}</p>
            </div>
            <div class="equal">
                <p :class="{ animation: hasAnimation }">=</p>
            </div>
            <input id="startHere" class="userInput" :class="{ showInputBorder: hasAnimation }" @keyup.enter="check"
                type="number" v-model="userResult">

            <!-- <button type="reset" class="btn-calc" @click="check">check</button> -->
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
            const startHere = document.getElementById('startHere');
            console.log(startHere);
            startHere.focus();
            this.userResult = '',
                this.message = '',
                this.hasAnimation = true;
            this.first = Math.floor(Math.random() * this.max + 1);
            this.second = Math.floor(Math.random() * (10 - this.first) + 1);
            this.result = this.first + this.second;
            this.operand = "+";
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
                    this.operand = '';
                    starList.forEach(star => star.classList.remove('_gold'));
                }, 3000);
            }
        },
    },
    components: { StarsComponent },
    // onMounted: {
    //     clearStarList() {
    //         const starList = document.querySelectorAll('.front-star');
    //         starList.forEach(star => star.classList.remove('_gold'));
    //     },
    // }
}




</script>

<style >
h2 {
    margin-top: 50px;
}
</style>