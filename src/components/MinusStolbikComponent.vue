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
                    <button id="6" class="btn-calc" type="reset" @click="check">проверить</button>

                    <div class="count" id="scrollHere"> Счёт = {{ userCount }}</div>
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
                <div class="userInputHelpBox">
                    <input id="3" @keyup.enter="changeFocus($event)" type="number" class="helpUserInput"
                        :class="{ showInputBorder: isBorder }">
                    <input id="1" @keyup.enter="changeFocus($event)" type="number" class="helpUserInput"
                        :class="{ showInputBorder: isBorder }">
                    <input @keyup.enter="changeFocus($event)" type="number" class="helpUserInput"
                        :class="{ showInputBorder: isBorder }">
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
                <div class="operand"> - </div>

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

                <div class="underline showUnderline"></div>
                <div class="userInputBox">

                    <input id="5" @keyup.enter="changeFocus($event)" v-model="userResHundred" type="number"
                        class="userInput" :class="{ showInputBorder: isBorder }">
                    <input id="4" @keyup.enter="changeFocus($event)" v-model="userResTen" type="number" class="userInput"
                        :class="{ showInputBorder: isBorder }">
                    <input id="2" @keyup.enter="changeFocus($event)" v-model="userResUnit" type="number" class="userInput"
                        :class="{ showInputBorder: isBorder }">
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
            condition: undefined,
            hasAnimation: false,
            isBorder: false,
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
            element.scrollIntoView({ behavior: 'smooth' });
            const start = document.getElementById('1');
            start.focus();
            this.hasAnimation = true;
            this.isBorder = true;
            this.condition = undefined;
            this.userResThousand = '';
            this.userResHundred = '';
            this.userResTen = '';
            this.userResUnit = '';
            this.userResult = '';
            this.message = '';
            this.first = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
            this.second = Math.floor(Math.random() * (this.first - this.min + 1) + this.min);
            this.firstList = String(this.first).split('');
            this.secondList = String(this.second).split('');
            this.result = this.first - this.second;
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
            } else {
                this.message = `ваш результат ` + this.userCount + ` из ` + this.iterations;
                setTimeout(() => {
                    this.iterations = 0;
                    this.userCount = 0;
                    starList.forEach(star => star.classList.remove('_gold'));
                    this.message = '';
                }, 3000);
            }

        },
        changeFocus($event) {
            /*
            инпуты пронумерованы для смены фокуса
            */
            console.log($event.target.id);
            let id = $event.target.id;
            console.log(id);
            let nextFocus = parseInt(id) + 1;
            console.log(nextFocus);
            const nextFocusElement = document.getElementById(String(nextFocus));
            nextFocusElement.focus();
        }
    },
    components: { StarsComponent }
}
</script>




<style scoped></style>