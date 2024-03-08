<template>
    <h2>PlusStolbikComponent</h2>
    <div class="plusstolbik">
        <button @click="start">start</button>
        <div class="userInput">
            <input type="number" class="helpUser">
            <input type="number" class="helpUser">
            <input type="number" class="helpUser">
            <input type="number" class="helpUser">
        </div>
        <div class="first-stolbik">
            <div v-for="(item, index) in firstList" :key="index" class="number">{{ item }}</div>
        </div>
        <div class="operand">+</div>
        <div class="second-stolbik">
            <div v-for="(item, index) in secondList" :key="index" class="number">{{ item }}</div>
        </div>
        <div class="equal"></div>
        <div class="userInput">
            <input v-model="userResThousand" type="number" class="inputUser">
            <input v-model="userResHundred" type="number" class="inputUser">
            <input v-model="userResTen" type="number" class="inputUser">
            <input v-model="userResUnit" type="number" class="inputUser">
        </div>
        <button @click="check">check</button>
        <div class="message">{{ message }}</div>
        <div> Счёт = {{ userCount }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            first: null,
            second: null,
            firstList: [],
            secondList: [],
            operand: '+',
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



        },
        check() {
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
.userInput {
    margin-bottom: 10px;
}

.plusstolbik {
    width: 230px;
    margin: 0 auto;
}

.first-stolbik,
.second-stolbik {
    height: 50px;
    display: flex;
    justify-content: end;
    margin-bottom: 10px;
}

.helpUser {
    width: 25px;
    height: 25px;
    margin-right: 25px;
}

.number {
    width: 50px;
    height: 50px;
    border: 1px solid red;
}

.inputUser {
    width: 50px;
    height: 50px;
}

.message {
    height: 25px;
}
</style>