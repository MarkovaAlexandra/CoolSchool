<template>
    <div class="main">
        <div class="buttons-box center">
            <button class="btn-task" v-for="link in links" :key="link.id"><router-link class="menu-link" :to=link.url>{{
                link.title
            }} </router-link>
            </button>
        </div>
    </div>
</template>

<script>


export default {
    head: {
        title: ' 5тематика | онлайн-тренажер по математике',
        meta: [
            {
                name: 'description',
                content: 'Онлайн-тренажер по математике для отработки навыков устного счета  и вычислений столбиком в начальной школе при помощи специально разработанных алгоритмов генерации математических примеров. Предназначен для учеников начальной школы, а также родителей и преподавателей. Для работы в школе и дома.',
            },
        ],
    },
    data() {
        return {
            links: [
                {
                    id: 1,
                    title: 'На главную',
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
    },

}

</script>

<style scoped>
.buttons-box {

    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 16px;

}

.btn-task {
    /* padding: 16px; */
    min-height: 80px;
    border-radius: 25px;
    text-decoration: none;
    background-color: #ffdbe8;
    position: relative;
    border: 3px solid black;
    transition: all 0.3s ease;
    color: #32023D;
    font-size: 20px;
    font-weight: 600;
}

.btn-task:hover {

    background-color: #fbe284;


}

.btn-task:active {
    top: 2px;
}
</style>