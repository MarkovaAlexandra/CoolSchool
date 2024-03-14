<template>
    <div>
        <h2>MultTablComponent</h2>
        <button @click="start">start</button>
        <div class="strochnie-vichisleniya">

            <div class="first" :class="{ animation: hasAnimation }">{{ first }}</div>
            <div class="operand">{{ operand }}</div>
            <div class="second" :class="{ animation: hasAnimation }">{{ second }}</div>
            <div class="equal">=</div>
            <input class="userInput" :class="{ showInputBorder: hasAnimation }" @keyup.enter="check" type="number"
                v-model="userResult">
            <button @click="check">check</button>
        </div>

        <div class="message" :class="{ animation: !hasAnimation }"> {{ message }}</div>
        <div> Счёт = {{ userCount }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hasAnimation: false,
            first: null,
            second: null,
            operand: '*',
            userResult: '',
            message: '',
            userCount: 0,
            max: 9,
            min: 1,
        }
    },
    methods: {
        start() {
            this.hasAnimation = true;
            this.userResult = '',
                this.message = '',
                this.first = Math.floor(Math.random() * this.max + 1);
            this.second = Math.floor(Math.random() * this.max + 1);
            this.result = this.first * this.second;
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


