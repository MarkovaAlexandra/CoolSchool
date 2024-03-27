<template>
    <h2>TasksComponent</h2>
    <div>
        <div class="buttons-box center">
            <button class="btn-task" v-for="link in links" :key="link.id"><router-link :to="link.url">{{ link.title
            }}</router-link>
            </button>
        </div>

        <RouterView />
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    id: 1,
                    title: 'Home',
                    url: '/',
                },
                {
                    id: 2,
                    title: 'Сложение в пределах 10',
                    url: '/plus',
                },
                {
                    id: 3,
                    title: 'Вычитание в пределах 10',
                    url: '/minus',
                },
                {
                    id: 4,
                    title: 'Сложение без перехода через разряд',
                    url: '/plusnotransfer',
                },
                {
                    id: 5,
                    title: 'Вычитание без перехода через разряд',
                    url: '/minusnotransfer',
                },
                {
                    id: 6,
                    title: 'Табличное умножение',
                    url: '/multipltabl',
                },
                {
                    id: 7,
                    title: 'Табличное деление',
                    url: '/divisiontabl',
                },
                {
                    id: 8,
                    title: 'Сложение столбиком',
                    url: '/plusstolbik',
                },
                {
                    id: 9,
                    title: 'Вычитание столбиком',
                    url: '/minusstolbik',
                },
                {
                    id: 10,
                    title: 'Умножение столбиком',
                    url: '/multstolbik',
                },
                {
                    id: 11,
                    title: 'Деление столбиком',
                    url: '/divstolbiknoreminder',
                },
                {
                    id: 12,
                    title: 'Деление столбиком с остатком',
                    url: '/divstolbik',
                },

            ],
            background: require('@/assets/img/Background_blue.jpg'),
        }
    }
}
</script>

<style scoped>
.buttons-box {

    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 16px;

}

.btn-task {
    padding: 16px;
    border-radius: 25px;
    text-decoration: none;
    background-color: #ffdbe8;
    position: relative;
    border: 3px solid black;
    transition: all 0.3s ease;
    color: #32023D;
    font-size: 20px;
}

.btn-task:hover {

    background-color: #fbe284;


}

.btn-task:active {
    top: 2px;
}
</style>