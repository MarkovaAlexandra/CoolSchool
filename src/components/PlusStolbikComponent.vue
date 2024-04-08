<template>
    <div class="main">

        <!-- <h2>PlusStolbikComponent</h2> -->
        <StarsComponent />
        <button class="btn-calc _movedLeft" @click="start">начать</button>
        <form action="#">
            <div class="smile-box center">
                <div class="left">
                    <button id="8" class="btn-calc" type="reset" @click="check">проверить</button>

                    <div class="count" id="scrollHere"> Счёт = {{ userCount }}</div>
                </div>
                <div class="smile">
                    <div v-show="this.picture == 'right'" :class="{ animationSmile: !hasAnimation }"><img width="120"
                            :src=right alt="Верно!"></div>
                    <div v-show="this.picture == 'wrong'" :class="{ animationSmile: !hasAnimation }"><img width="120"
                            :src=wrong alt="Неверно"></div>
                </div>
            </div>
            <div class="stolbikBox">
                <div class="userInputHelpBox">
                    <input id="6" @keyup.enter="changeFocus($event)" type="number" class="helpUserInput"
                        :class="{ showInputBorder: isBorder }">
                    <input id="4" @keyup.enter="changeFocus($event)" type="number" class="helpUserInput"
                        :class="{ showInputBorder: isBorder }">
                    <input id="2" @keyup.enter="changeFocus($event)" type="number" class="helpUserInput"
                        :class="{ showInputBorder: isBorder }">
                    <input disabled type="number" class="helpUserInput" :class="{ showInputBorder: isBorder }">
                </div>
                <div class="first-stolbik">
                    <div class="number">
                        <p :class="{ animation: hasAnimation }">{{
                            firstList[0] }}</p>
                    </div>
                    <div class="number">
                        <p :class="{ animation: hasAnimation }">{{
                            firstList[1] }}</p>
                    </div>
                    <div class="number">
                        <p :class="{ animation: hasAnimation }">{{
                            firstList[2] }}</p>
                    </div>

                </div>
                <div class="operand"> + </div>

                <div class="second-stolbik">

                    <div class="number">
                        <p :class="{ animation: hasAnimation }">{{
                            secondList[0] }}</p>
                    </div>
                    <div class="number">
                        <p :class="{ animation: hasAnimation }">{{
                            secondList[1] }}</p>
                    </div>
                    <div class="number">
                        <p :class="{ animation: hasAnimation }">{{
                            secondList[2] }}</p>
                    </div>

                </div>
                <!-- <div class="underline" :class="{ showUnderline: isBorder }"></div> -->
                <div class="underline showUnderline"></div>
                <div class="userInputBox">
                    <input id="7" @keyup.enter="changeFocus($event)" v-model="userResThousand" type="number"
                        class="userInput" :class="{ showInputBorder: isBorder }">
                    <input id="5" @keyup.enter="changeFocus($event)" v-model="userResHundred" type="number"
                        class="userInput" :class="{ showInputBorder: isBorder }">
                    <input id="3" @keyup.enter="changeFocus($event)" v-model="userResTen" type="number" class="userInput"
                        :class="{ showInputBorder: isBorder }">
                    <input id="1" @keyup.enter="changeFocus($event)" v-model="userResUnit" type="number" class="userInput"
                        :class="{ showInputBorder: isBorder }">
                </div>
            </div>


        </form>
        <div class="message" :class="{ animation: !hasAnimation }">{{ message }}</div>
    </div>
</template>

<script>
import StarsComponent from './StarsComponent.vue';

export default {
    data() {
        return {
            right: require('@/assets/img/2.png'),
            wrong: require('@/assets/img/1.png'),
            hasAnimation: false,
            isBorder: false,
            picture: undefined,
            first: null,
            second: null,
            firstList: [],
            secondList: [],
            result: null,
            userResThousand: '',
            userResHundred: '',
            userResTen: '',
            userResUnit: '',
            userResult: '',
            message: '',
            userCount: 0,
            iterations: 0,
            max: 999,
            min: 100,
            smth: '',
        };
    },
    methods: {
        start() {
            const element = document.getElementById('scrollHere');
            element.scrollIntoView({ behavior: 'smooth' });
            const start = document.getElementById('1');
            start.focus();
            this.hasAnimation = true;
            this.isBorder = true;
            this.picture = undefined;
            this.userResThousand = '';
            this.userResHundred = '';
            this.userResTen = '';
            this.userResUnit = '';
            this.userResult = '';
            this.message = '';
            this.first = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
            this.second = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
            this.firstList = String(this.first).split('');
            this.secondList = String(this.second).split('');
            this.result = this.first + this.second;
        },
        check() {
            this.hasAnimation = false;
            const starList = document.querySelectorAll('.front-star');
            this.userResult = Number(String(this.userResThousand) + String(this.userResHundred)
                + String(this.userResTen) + String(this.userResUnit));
            console.log(this.userTotal);
            if (this.result == this.userResult) {
                this.message = 'Правильно!';
                this.userCount++;
                starList[this.iterations].classList.add('_gold');
                this.picture = 'right';
            }
            else {
                this.message = 'Не правильно...';
                this.picture = 'wrong';

            }
            this.iterations++;
            console.log(this.iterations);
            if (this.iterations < 10) {
                console.log(this.iterations);
                setTimeout(() => {
                    this.start();
                }, 1000);
            }
            else {
                this.message = `ваш результат ` + this.userCount + ` из ` + this.iterations;
                starList.forEach(star => star.classList.remove('_gold'));
                this.iterations = '';
            }
        },
        changeFocus($event) {
            /*
            инпуты пронумерованы для смены фокуса
            */
            // console.log($event.target.id);
            let id = $event.target.id;
            // console.log(id);
            let nextFocus = parseInt(id) + 1;
            // console.log(nextFocus);
            const nextFocusElement = document.getElementById(nextFocus);
            nextFocusElement.focus();
        }
    },
    components: { StarsComponent }
}
</script>




<style>
.userInputHelpBox :last-child {
    border: 1px solid transparent;
    background-color: transparent;
}

/* .number {
    width: 60px;
    height: 60px;
    border: 1px solid red;
    font-size: 40px;
    background-color: #ffdbe8;
} */
</style>