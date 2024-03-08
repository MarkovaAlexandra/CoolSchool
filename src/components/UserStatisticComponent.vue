<template>
    <div>
        <h2>UserStatisticComponent</h2>
        <h2>Компонент в разработке</h2>
        <input v-model="userName" type="text" placeholder="твое имя">
        <div>Верных решений - {{ right }}</div>
        <div>Ошибок - {{ wrong }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: '',
            right: null,
            wrong: null,
        }
    },
    //прописать метод
    methods: {
        showStatistic() {

        }
    },
}
</script>