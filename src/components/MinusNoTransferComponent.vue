<template>
    <h2>MinusNoTransferComponent</h2>
    <div>

        <div class="strochnie-vichisleniya">
            <button class="btn-calc" @click="start">start</button>
            <div class="first" :class="{ animation: hasAnimation }">{{ first }}</div>
            <div class="operand-strochniy" :class="{ animation: hasAnimation }">{{ operand }}</div>
            <div class="second" :class="{ animation: hasAnimation }">{{ second }}</div>
            <div class="equal" :class="{ animation: hasAnimation }">=</div>
            <input class="userInput" :class="{ showInputBorder: hasAnimation }" @keyup.enter="check" type="number"
                v-model="userResult">
            <button class="btn-calc" @click="check">check</button>
        </div>
        <div class="message" :class="{ animation: hasAnimation }"> {{ message }}</div>
        <div> Счёт = {{ userCount }}</div>

    </div>
</template>

<script>
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
            message: '',
            userCount: 0,
        }
    },
    methods: {
        start() {
            this.hasAnimation = true;
            this.userResult = '',
                this.message = '',
                //рандомим слагаемые
                //первое от 99 до 21
                this.first = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
            //второе в десятках (от max = десятков первого до 1)
            const tens = Math.floor(Math.random() * (Math.floor(this.first / 10) - 1) + 1);
            //второе в единицах  от( max=единиц первого до 0)
            const units = Math.floor(Math.random() * (Math.floor(this.first % 10)))
            this.second = tens * 10 + units;
            this.result = this.first - this.second;
            this.operand = '-';
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

<style ></style>