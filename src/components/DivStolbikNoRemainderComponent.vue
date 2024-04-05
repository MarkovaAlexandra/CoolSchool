<template>
    <div class="main">
        <!-- <h2>DivStolbikNoRemainderComponent</h2> -->
        <StarsComponent />

        <button class="btn-calc" @click="start">start</button>
        <form action="#">
            <button class="btn-calc" type="reset" @click="check">check</button>

            <div class="count"> Счёт = {{ userCount }}</div>


            <div class="tren-content center">

                <table>
                    <tr>

                        <td class="minus invisible"></td>
                        <td class="number">{{ firstList[0] == 0 ? " " : firstList[0] }}</td>
                        <td class="number">{{ firstList[1] }}</td>
                        <td class="number">{{ firstList[2] }}</td>
                        <td class="number">{{ firstList[3] }}</td>
                        <td class="narrow-vertical blueLine"></td>
                        <td class="number">{{ secondList[0] }}</td>
                        <td class="number">{{ secondList[1] }}</td>
                        <td class="number"></td>
                    </tr>
                    <tr>
                        <td class="minus"></td>
                        <td class="narrow-horizontal"></td>
                        <td class="narrow-horizontal"></td>
                        <td class="narrow-horizontal"></td>
                        <td class="narrow-horizontal"></td>
                        <td class="narrow-horizontal narrow-vertical"></td>
                        <td class="narrow-horizontal redLine"></td>
                        <td class="narrow-horizontal redLine"></td>
                        <td class="narrow-horizontal redLine"></td>
                    </tr>
                    <tr>
                        <td class="minus  invisible"></td>
                        <td><input class="input-division" type="number"></td>
                        <td><input class="input-division" type="number"></td>
                        <td><input class="input-division" type="number"></td>
                        <td><input class="input-division" type="number"></td>
                        <td class="narrow-vertical blueLine"></td>
                        <td><input v-model="userResHundred" class="input-division" type="number"></td>
                        <td><input v-model="userResTen" class="input-division" type="number"></td>
                        <td><input v-model="userResUnit" class="input-division" type="number"></td>
                    </tr>
                    <tr>
                        <td class="minus invisible"></td>
                        <td class="narrow-horizontal redLine"></td>
                        <td class="narrow-horizontal redLine"></td>
                        <td class="narrow-horizontal redLine"></td>
                        <td class="narrow-horizontal redLine"></td>
                        <td class="narrow-horizontal narrow-vertical"></td>
                        <td class="narrow-horizontal "></td>
                        <td class="narrow-horizontal "></td>
                        <td class="narrow-horizontal "></td>
                    </tr>
                    <tr>
                        <td class="minus invisible"></td>
                        <td><input class="input-division" type="number"></td>
                        <td><input class="input-division" type="number"></td>
                        <td><input class="input-division" type="number"></td>
                        <td><input class="input-division" type="number"></td>
                        <td class="narrow-vertical"></td>
                        <td class="invisible"></td>
                        <td class="invisible"></td>
                        <td class="invisible"></td>
                    </tr>
                    <tr>
                        <td class="minus"></td>
                        <td class="narrow-horizontal invisible"></td>
                        <td class="narrow-horizontal invisible"></td>
                        <td class="narrow-horizontal invisible"></td>
                        <td class="narrow-horizontal invisible"></td>
                        <td class="narrow-horizontal narrow-vertical invisible"></td>
                        <td class="narrow-horizontal invisible"></td>
                        <td class="narrow-horizontal invisible"></td>
                        <td class="narrow-horizontal invisible"></td>
                    </tr>
                    <tr>
                        <td class="minus invisible"></td>
                        <td><input class="input-division" type="number"></td>
                        <td><input class="input-division" type="number"></td>
                        <td><input class="input-division" type="number"></td>
                        <td><input class="input-division" type="number"></td>
                        <td class="narrow-vertical"></td>
                        <td class="invisible"></td>
                        <td class="invisible"></td>
                        <td class="invisible"></td>
                    </tr>
                    <tr>
                        <td class="minus invisible"></td>
                        <td class="narrow-horizontal redLine"></td>
                        <td class="narrow-horizontal redLine"></td>
                        <td class="narrow-horizontal redLine"></td>
                        <td class="narrow-horizontal redLine"></td>
                        <td class="narrow-horizontal narrow-vertical"></td>
                        <td class="narrow-horizontal "></td>
                        <td class="narrow-horizontal "></td>
                        <td class="narrow-horizontal "></td>
                    </tr>
                    <tr>
                        <td class="minus invisible"></td>
                        <td><input class="input-division" type="number"></td>
                        <td><input class="input-division" type="number"></td>
                        <td><input class="input-division" type="number"></td>
                        <td><input class="input-division" type="number"></td>
                        <td class="narrow-vertical"></td>
                        <td class="invisible"></td>
                        <td class="invisible"></td>
                        <td class="invisible"></td>
                    </tr>
                    <tr>
                        <td class="minus"></td>
                        <td class="narrow-horizontal invisible"></td>
                        <td class="narrow-horizontal invisible"></td>
                        <td class="narrow-horizontal invisible"></td>
                        <td class="narrow-horizontal invisible"></td>
                        <td class="narrow-horizontal narrow-vertical invisible"></td>
                        <td class="narrow-horizontal invisible"></td>
                        <td class="narrow-horizontal invisible"></td>
                        <td class="narrow-horizontal invisible"></td>
                    </tr>
                    <tr>
                        <td class="minus invisible"></td>
                        <td><input class="input-division" type="number"></td>
                        <td><input class="input-division" type="number"></td>
                        <td><input class="input-division" type="number"></td>
                        <td><input class="input-division" type="number"></td>
                        <td class="narrow-vertical"></td>
                        <td class="invisible"></td>
                        <td class="invisible"></td>
                        <td class="invisible"></td>
                    </tr>
                    <tr>
                        <td class="minus invisible"></td>
                        <td class="narrow-horizontal redLine"></td>
                        <td class="narrow-horizontal redLine"></td>
                        <td class="narrow-horizontal redLine"></td>
                        <td class="narrow-horizontal redLine"></td>
                        <td class="narrow-horizontal narrow-vertical"></td>
                        <td class="narrow-horizontal "></td>
                        <td class="narrow-horizontal "></td>
                        <td class="narrow-horizontal "></td>
                    </tr>
                    <tr>
                        <td class="minus invisible"></td>
                        <td><input class="input-division" type="number"></td>
                        <td><input class="input-division" type="number"></td>
                        <td><input class="input-division" type="number"></td>
                        <td><input id="scrollHere" class="input-division" type="number"></td>
                        <td class="narrow-vertical"></td>
                        <td class="invisible"></td>
                        <td class="invisible"></td>
                        <td class="invisible"></td>
                    </tr>

                </table>

            </div>
            <!-- <button class="btn-calc" type="reset" @click="check">check</button> -->

        </form>
        <div class="message" :class="{ animation: !hasAnimation }">{{ message }}</div>
        <!-- <div class="count" id="scrollHere"> Счёт = {{ userCount }}</div> -->


    </div>
</template>


<script>
import StarsComponent from './StarsComponent.vue';

export default {
    data() {
        return {
            hasAnimation: false,
            // isBorder: false,
            first: null,
            second: null,
            firstList: [],
            secondList: [],
            operand: '+',
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
            //максимальное значение делителя 30, а то очень сложно детям считать
            max2: 50,
            min2: 9,
        };
    },
    methods: {
        start() {
            // this.isBorder = true;
            const element = document.getElementById('scrollHere');
            element.scrollIntoView({ behavior: 'smooth' });
            this.hasAnimation = true;
            this.userResTenThousand = '';
            this.userResThousand = '';
            this.userResHundred = '';
            this.userResTen = '';
            this.userResUnit = '';
            this.userResult = '';
            this.message = '';
            // this.first = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
            //сначала рандомим делитель
            this.second = Math.floor(Math.random() * (this.max2 - this.min2 + 1) + this.min2);
            //если делить двузначный, то делимое двузначное
            if (this.second > 9) {
                this.max = 99;
                this.min = 11;
            }
            //если делить однозначный, то резалт может буть трехзначным
            else {
                this.max = 999;
                this.min = 11;
            }
            this.result = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
            this.first = this.result * this.second;
            this.firstList = String(this.first).split('');
            console.log(this.firstList.length);
            if (this.firstList.length < 4) {
                this.firstList.unshift(0);
            }
            this.secondList = String(this.second).split('');
            console.log(this.result);
            console.log(this.firstList);
            console.log(this.secondList);
        },
        check() {
            this.hasAnimation = false;
            const starList = document.querySelectorAll('.front-star');
            this.userResult = Number(String(this.userResHundred)
                + String(this.userResTen) + String(this.userResUnit));
            console.log(this.userResult);
            console.log(this.result);
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
                    starList.forEach(star => star.classList.remove('_gold'));
                }, 3000);
            }
        },
    },
    components: { StarsComponent }
}
</script>





<style scoped>
.tren-content {
    display: flex;
    justify-content: center;

}

td,
.input-division {
    width: 50px;
    height: 50px;
    border: 1px solid grey;
    border-radius: 5px;

}

.input-division {
    border: none;
}

.narrow-vertical {
    width: 3px;
    border-radius: 0;
    border: transparent;
}

.narrow-horizontal {
    height: 3px;
    border-radius: 0;
    border: transparent;
}

.redLine {
    background-color: red;
}

.blueLine {
    background-color: blue;
}

.minus {
    background-color: black;
    height: 3px;
    width: 15px;
}

.invisible {
    opacity: 0;
}
</style>