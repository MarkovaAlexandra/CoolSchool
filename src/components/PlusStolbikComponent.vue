<template>
    <h2>PlusStolbikComponent</h2>
    <button @click="start">start</button>
    <form action="#">
        <div class="stolbikBox">
            <div class="userInputHelpBox">
                <input type="number" class="helpUserInput" :class="{ showInputBorder: isBorder }">
                <input type="number" class="helpUserInput" :class="{ showInputBorder: isBorder }">
                <input type="number" class="helpUserInput" :class="{ showInputBorder: isBorder }">
                <input disabled type="number" class="helpUserInput" :class="{ showInputBorder: isBorder }">
            </div>
            <div class="first-stolbik">
                <div v-for="(item, index) in firstList" :key="index" class="number" :class="{ animation: hasAnimation }">{{
                    item }}</div>
                <div class="operand" :class="{ animation: hasAnimation }">{{ operand }}</div>
            </div>

            <div class="second-stolbik">
                <div v-for="(item, index) in secondList" :key="index" class="number" :class="{ animation: hasAnimation }">{{
                    item }}</div>
            </div>
            <div class="underline" :class="{ showUnderline: isBorder }"></div>
            <div class="userInputBox">
                <input v-model="userResThousand" type="number" class="userInput" :class="{ showInputBorder: isBorder }">
                <input v-model="userResHundred" type="number" class="userInput" :class="{ showInputBorder: isBorder }">
                <input v-model="userResTen" type="number" class="userInput" :class="{ showInputBorder: isBorder }">
                <input v-model="userResUnit" type="number" class="userInput" :class="{ showInputBorder: isBorder }">
            </div>
            <button type="reset" @click="check">check</button>
        </div>
    </form>
    <div class="message" :class="{ animation: !hasAnimation }">{{ message }}</div>
    <div> Счёт = {{ userCount }}</div>
</template>

<script>
export default {
    data() {
        return {
            hasAnimation: false,
            isBorder: false,
            first: null,
            second: null,
            firstList: [],
            secondList: [],
            operand: '',
            result: null,
            userResThousand: '',
            userResHundred: '',
            userResTen: '',
            userResUnit: '',
            userResult: '',
            message: '',
            userCount: 0,
            max: 999,
            min: 100,
            smth: '',
        }
    },
    methods: {
        start() {
            this.hasAnimation = true;
            this.isBorder = true;
            this.userResThousand = '';
            this.userResHundred = '';
            this.userResTen = '';
            this.userResUnit = '';
            this.userResult = '';
            this.message = '';
            this.first = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
            this.second = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
            this.firstList = String(this.first).split('');
            this.secondList = String(this.second).split('');
            this.result = this.first + this.second;
            this.operand = '+';
        },
        check() {
            this.hasAnimation = false;
            this.userResult = Number(String(this.userResThousand) + String(this.userResHundred)
                + String(this.userResTen) + String(this.userResUnit));
            console.log(this.userTotal);

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
.userInputHelpBox :last-child {
    border: 1px solid transparent;
    background-color: transparent;
}

.number {
    width: 50px;
    height: 50px;
    border: 1px solid red;
    font-size: 24px;
}
</style>