<template>
    <h2>Minus10Component</h2> <button @click="start">start</button>
    <div class="strochnie-vichisleniya">

        <div class="first">{{ first }}</div>
        <div class="operand">{{ operand }}</div>
        <div class="second">{{ second }}</div>
        <div class="equal">=</div>
        <input type="number" v-model="userResult">
        <button @click="check">check</button>

    </div>
    <div class="message">{{ message }}</div>
    <div> Счёт = {{ userCount }}</div>
</template>

<script>
export default {
    data() {
        return {
            first: null,
            second: null,
            operand: '-',
            userResult: '',
            message: '',
            max: 9,
            min: 1,
            userCount: 0,
        }
    },
    methods: {
        start() {
            this.userResult = '',
                this.message = '',
                this.first = Math.floor(Math.random() * this.max + 1);
            this.second = Math.floor(Math.random() * (this.first) + 1);
            this.result = this.first - this.second;
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

