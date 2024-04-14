<template>
    <div class="main center">
        <h2 class="main__title"> Хочешь пятерку по математике?</h2>
        <div class="main__descr">
            Здесь ты сможешь быстро и легко выучить Таблицу Умножения,
            «прокачать» свои навыки устного счета,с интересом и пользой провести время.<br>
            И никто не скажет, что ты слишком много времени проводишь за компьютером!<br>
            Выбирай тему и тренируйся,</div>
        <div class="main__subtitle"> Успехов в учебе!</div>


    </div>
</template>



<script>
export default {
    head: {
        title: 'Онлайн-тренажеры по математике для начальной школы| Пятематика | Пятерка по математике',
        meta: [
            {
                name: 'description',
                content: 'Онлайн-тренажер по математике для отработки и совершенствования основных навыков устного счета  и вычислений столбиком при помощи специально разработанных алгоритмов генерации математических примеров. Предназначен для учеников начальной школы, а также родителей и преподавателей. Для работы в школе и дома.',
            },
        ],
    },
}
</script>
<style>
.main__title {
    font-size: 38px;
    margin-top: 30px;
    margin-bottom: 30px;
    font-weight: 600;
}

.main__subtitle {
    font-size: 30px;
    margin-bottom: 30px;
    font-weight: 600;
}

.main__descr {
    margin-bottom: 30px;
    font-size: 24px;
    line-height: 1.4;
    font-weight: 500;
}
</style>