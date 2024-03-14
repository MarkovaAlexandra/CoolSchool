<template>
    <div>
        <h2>DivStolbikNoRemainderComponent</h2>
        <button @click="start">start</button>
        <form action="#">

            <div class="tren-content center">

                <table>
                    <tr>

                        <td class="minus invisible"></td>
                        <td>{{ firstList[0] == 0 ? " " : firstList[0] }}</td>
                        <td>{{ firstList[1] }}</td>
                        <td>{{ firstList[2] }}</td>
                        <td>{{ firstList[3] }}</td>
                        <td class="narrow-vertical blueLine"></td>
                        <td>{{ secondList[0] }}</td>
                        <td>{{ secondList[1] }}</td>
                        <td></td>
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
                        <td><input class="input-division" type="number"></td>
                        <td class="narrow-vertical"></td>
                        <td class="invisible"></td>
                        <td class="invisible"></td>
                        <td class="invisible"></td>
                    </tr>



                </table>

            </div>
            <button type="reset" @click="check">check</button>

        </form>
        <div class="message" :class="{ animation: !hasAnimation }">{{ message }}</div>
        <div> Счёт = {{ userCount }}</div>
    </div>
</template>


<script>
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
            max: 999,
            min: 100,
            //максимальное значение делителя 30, а то очень сложно детям считать
            max2: 30,
            min2: 9,

        }
    },
    methods: {
        start() {
            // this.isBorder = true;
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
            this.userResult = Number(String(this.userResHundred)
                + String(this.userResTen) + String(this.userResUnit));
            console.log(this.userResult);
            console.log(this.result);

            if (this.result == this.userResult) {
                this.message = 'Верно'
                this.userCount++;
            } else {
                this.message = 'Упсссс';
                this.userCount--;
            }
            setTimeout(() => {
                this.start()
            }, 1000);

        },

    }

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