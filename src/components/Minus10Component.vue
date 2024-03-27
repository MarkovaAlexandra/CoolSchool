<template>
    <h2>Minus10Component</h2>

    <div class="strochnie-vichisleniya">
        <button class="btn-calc" @click="start">start</button>
        <div class="first" :class="{ animation: hasAnimation }">{{ first }}</div>
        <div class="operand-strochniy" :class="{ animation: hasAnimation }">{{ operand }}</div>
        <div class="second" :class="{ animation: hasAnimation }">{{ second }}</div>
        <div :class="{ animation: hasAnimation }" class="equal">=</div>
        <input class="userInput" :class="{ showInputBorder: hasAnimation }" @keyup.enter="check" type="number"
            v-model="userResult">
        <button class="btn-calc" @click="check">check</button>

    </div>
    <div class="message" :class="{ animation: !hasAnimation }">{{ message }}</div>
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
            max: 9,
            min: 1,
            userCount: 0,
        }
    },
    methods: {
        start() {
            this.hasAnimation = true;
            this.userResult = '',
                this.message = '',
                this.first = Math.floor(Math.random() * this.max + 1);
            this.second = Math.floor(Math.random() * (this.first) + 1);
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

