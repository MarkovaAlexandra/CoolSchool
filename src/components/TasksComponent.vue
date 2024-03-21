<template>
    <h2>TasksComponent</h2>
    <div>
        <button v-for="link in links" :key="link.id" style="background-color: rgb(197, 161, 161);"><router-link
                :to="link.url">{{ link.title }}</router-link> </button>

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

            ]
        }
    }
}
</script>

<style scoped></style>