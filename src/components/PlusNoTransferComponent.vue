<template>
    <h2>PlusNoTransferComponent</h2>
    <div>
        <button @click="start">start</button>
        <div class="strochnie-vichisleniya">
            <div class="first">{{ first }}</div>
            <div class="operand">{{ operand }}</div>
            <div class="second">{{ second }}</div>
            <div class="equal">=</div>
            <input type="number" v-model="userResult">
            <button @click="check">check</button>
        </div>
        <div class="message"> {{ message }}</div>
        <div> Счёт = {{ userCount }}</div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            first: null,
            max: 88,
            min: 10,
            second: null,
            secondMax: null,
            secondMin: 1,
            operand: '+',
            userResult: '',
            message: '',
            userCount: 0,
        }
    },
    methods: {
        start() {
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
        },
        check() {
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
.first,
.second {
    height: 25px;
}

.message {
    height: 25px;
}
</style>