<template>
    <div class="main">

        <StarsComponent />


        <div class="start-box _movedLeft">
            <button class="btn-calc" @click="start"> начать</button>

            <button @click="muteSound"> <img width="30" :src=soundPic alt="вкл/выкл звук"> </button>
        </div>

        <form action="#">
            <div class="smile-box center">
                <div class="left">
                    <button id="scrollHere" class="btn-calc btn-check" type="reset" @click="check">проверить</button>

                    <div class="count"> Счёт = {{ userCount }}</div>
                </div>
                <div class="smile">
                    <div v-show="this.condition == 'right'" :class="{ animationSmile: !hasAnimation }"><img width="120"
                            :src=right alt="Верно!"></div>
                    <div v-show="this.condition == 'wrong'" :class="{ animationSmile: !hasAnimation }"><img width="120"
                            :src=wrong alt="Неверно"></div>
                </div>
            </div>
            <div class="message" :class="{ animation: !hasAnimation }">{{ message }}</div>

            <div class="stolbikBox">
                <div class="first-stolbik relative">
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
                <div class="operand-mult">х</div>
                <div class="second-stolbik">

                    <div class="number">
                        <p :class="{ animation: hasAnimation }">{{
                            secondList[0] }}</p>
                    </div>
                    <div class="number">
                        <p :class="{ animation: hasAnimation }">{{
                            secondList[1] }}</p>
                    </div>

                </div>
                <!-- <div class="underline" :class="{ showUnderline: isBorder }"></div> -->
                <div class="underline showUnderline"></div>
                <div class="userInputBox relative">
                    <input @keyup.enter="changeFocusSecondLine()" type="number" class="userInput"
                        :class="{ showInputBorder: isBorder }">
                    <input @keyup.enter="changeFocus($event)" type="number" class="userInput"
                        :class="{ showInputBorder: isBorder }">
                    <input @keyup.enter="changeFocus($event)" type="number" class="userInput"
                        :class="{ showInputBorder: isBorder }">
                    <input @keyup.enter="changeFocus($event)" id="startHere" type="number" class="userInput"
                        :class="{ showInputBorder: isBorder }">

                </div>
                <div class="operand-plus">+</div>
                <div class="userInputBox userInput2Box">
                    <input @keyup.enter="changeFocusResultLine()" type="number" class="userInput"
                        :class="{ showInputBorder: isBorder }">
                    <input @keyup.enter="changeFocus($event)" type="number" class="userInput"
                        :class="{ showInputBorder: isBorder }">
                    <input @keyup.enter="changeFocus($event)" type="number" class="userInput"
                        :class="{ showInputBorder: isBorder }">
                    <input @keyup.enter="changeFocus($event)" id="startSecondLine" type="number" class="userInput"
                        :class="{ showInputBorder: isBorder }">
                    <input disabled type="number" class="userInput">
                </div>
                <!-- <div class="underline" :class="{ showUnderline: isBorder }"></div> -->
                <div class="underline showUnderline"></div>
                <div class="userInputBox">
                    <input @keyup.enter="goToCheckBtn" v-model="userResTenThousand" type="number" class="userInput"
                        :class="{ showInputBorder: isBorder }">
                    <input @keyup.enter="changeFocus($event)" v-model="userResThousand" type="number" class="userInput"
                        :class="{ showInputBorder: isBorder }">
                    <input @keyup.enter="changeFocus($event)" v-model="userResHundred" type="number" class="userInput"
                        :class="{ showInputBorder: isBorder }">
                    <input @keyup.enter="changeFocus($event)" v-model="userResTen" type="number" class="userInput"
                        :class="{ showInputBorder: isBorder }">
                    <input @keyup.enter="changeFocus($event)" id="startResultLine" v-model="userResUnit" type="number"
                        class="userInput" :class="{ showInputBorder: isBorder }">
                </div>
            </div>


        </form>

        <div v-if="this.condition == 'right'" class="sound">
            <audio class="win" :autoplay="soundOn" :src=winSound></audio>
        </div>
        <div v-if="this.condition == 'wrong'">
            <audio class="lose" :autoplay="soundOn" :src=loseSound></audio>
        </div>

    </div>
</template>



<script>
import StarsComponent from './StarsComponent.vue';


export default {
    head: {
        title: ' 5тематика | онлайн-тренажер по математике',
        meta: [
            {
                name: 'description',
                content: 'Онлайн-тренажер по математике для отработки навыков устного счета  и вычислений столбиком в начальной школе при помощи специально разработанных алгоритмов генерации математических примеров. Предназначен для учеников начальной школы, а также родителей и преподавателей. Для работы в школе и дома.',
            },
        ],
    },
    data() {
        return {
            right: require('@/assets/img/2.png'),
            wrong: require('@/assets/img/1.png'),
            loseSound: require('@/assets/audio/lose.mp3'),
            winSound: require('@/assets/audio/win.mp3'),
            soundPic: require('@/assets/img/sound_on.png'), // начальная иконка на кнопке
            soundOnPic: require('@/assets/img/sound_on.png'),
            soundOffPic: require('@/assets/img/sound_off.png'),
            soundOn: false, //изначально звук в режиме autoplay false, для включения ф-ция muteSound по кнопке
            hasAnimation: false,
            isBorder: false,
            condition: undefined,
            first: null,
            second: null,
            firstList: [],
            secondList: [],
            result: null,
            userResTenThousand: '',
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
            max2: 99,
            min2: 11,
            smth: '',
        };
    },
    methods: {
        muteSound() {
            this.soundOn = !this.soundOn; //переключает autoplay true/false (биндится в атрибут аудио)
            if (this.soundOn == true) {
                this.soundPic = this.soundOffPic; //переключает иконку на кнопке
            }
            else {
                this.soundPic = this.soundOnPic;
            }

        },
        start() {
            const starList = document.querySelectorAll('.front-star');
            if (this.iterations == 0) {
                starList.forEach(star => star.classList.remove('_gold'));
            }
            const element = document.getElementById('scrollHere');
            element.scrollIntoView({ block: 'start', behavior: 'smooth' });
            const startInput = document.getElementById('startHere');
            startInput.focus();
            this.isBorder = true;
            this.hasAnimation = true;
            this.condition = undefined;
            this.userResTenThousand = '';
            this.userResThousand = '';
            this.userResHundred = '';
            this.userResTen = '';
            this.userResUnit = '';
            this.userResult = '';
            this.message = '';
            this.first = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
            this.second = Math.floor(Math.random() * (this.max2 - this.min2 + 1) + this.min2);
            this.firstList = String(this.first).split('');
            this.secondList = String(this.second).split('');
            this.result = this.first * this.second;
            this.operandPlus = '+';
            this.operandMult = 'X';
        },
        check() {
            this.hasAnimation = false;
            const starList = document.querySelectorAll('.front-star');
            this.userResult = Number(String(this.userResTenThousand) + String(this.userResThousand) + String(this.userResHundred)
                + String(this.userResTen) + String(this.userResUnit));

            if (this.result == this.userResult) {
                this.message = 'Правильно!';
                this.userCount++;
                starList[this.iterations].classList.add('_gold');
                this.condition = 'right';
            }
            else {
                this.message = `Ошибка, верный ответ ${this.result}`;
                this.condition = 'wrong';
            }
            this.iterations++;
            if (this.iterations < 10) {
                setTimeout(() => {
                    this.start();
                }, 1500);
            }
            else {
                this.message = `ваш результат ` + this.userCount + ` из ` + this.iterations;
                setTimeout(() => {
                    this.iterations = 0;
                    this.userCount = 0;
                    starList.forEach(star => star.classList.remove('_gold'));
                }, 3000);
            }
        },
        changeFocus($event) {
            $event.target.previousSibling.focus();
        },
        changeFocusSecondLine() {
            const startSecondLine = document.getElementById('startSecondLine');
            startSecondLine.focus();
        },
        changeFocusResultLine() {
            const startResultLine = document.getElementById('startResultLine');
            startResultLine.focus();
        },
        goToCheckBtn() {
            const checkBtn = document.getElementById('scrollHere');
            checkBtn.focus();
        }
    },
    components: { StarsComponent },



}

</script>




<style scoped>
.userInputBox2 :last-child,
.userInputHelpBox :last-child {
    border: 1px solid transparent;
    background-color: transparent;
}

.mult-stolbik {
    position: relative;
}



.relative {
    position: relative;
}

.operand-mult {
    position: absolute;
    top: 40px;
    left: 64px;
    font-size: 37px;
}

.operand-plus {

    position: absolute;
    left: -67px;
    top: 179px;
    font-size: 52px;
}
</style>