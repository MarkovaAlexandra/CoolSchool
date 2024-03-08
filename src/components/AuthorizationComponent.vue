<template>
    <div>
        <h2>AuthorizationComponenet</h2>
        <label>
            <input v-model="userName" type="text" placeholder="Имя">
        </label>
        <label>
            <input v-model="userPass" type="password" placeholder="Пароль">
        </label>
        <button @click="checkUser">Войти</button>
        <button @click="registerUser">Зарегистрироваться</button>
        <p>{{ greeting_message }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: '',
            userPass: '',
            greeting_message: '',
            userStatistic: [],
        }
    },
    methods: {
        registerUser() {
            localStorage.setItem(this.userName, this.userPass);
            localStorage.setItem(this.userName + '_statistic', this.userStatistic)
            this.greeting_message = 'Вы зарегистрированы успешно, начинайте заниматься';
            this.userName = '';
            this.userPass = '';
        },
        checkUser() {
            (localStorage.getItem(this.userName) == this.userPass) ? this.greeting_message = `Привет, ${this.userName}` : this.greeting_message = 'Пройдите регистрацию';
            this.userName = '';
            this.userPass = '';
        }
    },
}
</script>