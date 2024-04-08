<template>
    <div class="header center">
        <div class="header-info">{{ show }}</div>

        <h1>Тренажер по арифметике для младшей школы</h1>

        <nav class="nav">
            <div class="menu">
                <router-link to="/tasks" class="menu-link"> выбрать тему </router-link>
            </div>
        </nav>
    </div>
</template>


<script>
export default {
    data() {
        return {
            textFull: '5+ Пятематика 5+',
            textShort: 'Пятематика',
            text: 'text',
            window: 0,
        }
    },
    methods: {
        // showWindowSize() {
        //     console.log(window.innerWidth)
        // }
    },
    computed: {
        show() {
            this.window = window.innerWidth;
            console.log(this.window)
            if (this.window < 400) {
                this.text = this.textShort;
            }
            else {
                this.text = this.textFull;
            }
            console.log(this.text);
            return this.text;
        }



    }

}
</script>

<style>
.header {
    padding-top: 16px;

}

.header-info {
    font-size: 40px;
    font-weight: 600;
}

h1 {
    font-size: 28px;
    font-weight: 600;
    padding: 16px 0;
}

.nav {
    min-height: 30px;
    padding: 20px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu {

    border-radius: 25px;
    text-decoration: none;
    background-color: #ffefb1;
    position: relative;
    border: 3px solid black;
    transition: all 0.3s ease;
    color: #32023D;
    font-size: 24px;
    font-weight: 600;
    width: 300px;
}

.menu-link {
    display: block;
    padding: 16px;
}

.menu:hover {

    background-color: #fbe284;


}

.menu:active {
    top: 2px;
}
</style>