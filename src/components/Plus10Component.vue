<template>
    <h2>Plus10Component</h2>
    <button @click="start">start</button>
    <div class="strochnie-vichisleniya">
        <!--:class добавляется если условие hasAnimation = true,
изначально ставлю его false, в момент старта меняю на тру, чтобы добавить класс в момент появления данных в диве,
в ф-ции check снова ставлю false, для message тоже самое, ток наоборот-->
        <div class="first" :class="{ animation: hasAnimation }">{{ first }}</div>
        <div class="operand-strochniy" :class="{ animation: hasAnimation }">{{ operand }}</div>
        <div class="second" :class="{ animation: hasAnimation }">{{ second }}</div>
        <div class="equal">=</div>
        <input class="userInput" :class="{ showInputBorder: hasAnimation }" @keyup.enter="check" type="number"
            v-model="userResult">
        <button @click="check">check</button>
    </div>
    <div class="message" :class="{ animation: !hasAnimation }"> {{ message }}</div>
    <div> Счёт = {{ userCount }}</div>
</template>

<script>
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
            max: 9,
            min: 1,
        }
    },
    methods: {
        start() {
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

<style >
h2 {
    margin-top: 50px;
}

.strochnie-vichisleniya {

    display: flex;
    justify-content: center;
}

.first,
.second {
    height: 25px;
    width: 25px;
    font-size: 24px;
}
</style>