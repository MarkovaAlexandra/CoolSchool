<template>
    <div class="main">
        <StarsComponent />

        <div class="start-box">
            <button class="btn-calc" @click="start"> начать</button>

            <button @click="muteSound"> <img width="30" :src=soundPic alt="вкл/выкл звук"> </button>
        </div>

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
        <div class="result-content center">
            <div class="result-text">
                <div class="count"> Счёт = {{ userCount }}</div>
                <div class="message" :class="{ animation: !hasAnimation }"> {{ message }}</div>
            </div>
            <div class="smile">
                <div v-show="this.condition == 'right'" :class="{ animationSmile: !hasAnimation }"><img width="120"
                        :src=right alt="Верно!"></div>
                <div v-show="this.condition == 'wrong'" :class="{ animationSmile: !hasAnimation }"><img width="120"
                        :src=wrong alt="Неверно"></div>
            </div>

        </div>

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
            condition: undefined,
        }
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
            const start = document.getElementById('startHere');
            start.focus();
            this.condition = undefined;
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
                this.condition = 'right';
                this.userCount++;
                starList[this.iterations].classList.add('_gold');
            } else {
                this.message = `Ошибка, верный ответ ${this.result}`;
                this.condition = 'wrong';

            }
            this.iterations++;
            if (this.iterations < 10) {
                setTimeout(() => {
                    this.start()
                }, 1500);
            }
            else {
                this.message = `ваш результат ` + this.userCount + ` из ` + this.iterations;
                setTimeout(() => {
                    this.userCount = 0;
                    this.iterations = 0;
                    this.first = null;
                    this.second = null;
                    this.operand = '';
                    starList.forEach(star => star.classList.remove('_gold'));
                    this.message = '';
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