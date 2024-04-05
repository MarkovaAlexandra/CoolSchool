<template>
    <div class="header">
        <h1>5+ Пятематика 5+</h1>
        <div class="header-info">Тренажер по арифметике для младшей школы</div>
        <nav class="nav">
            <div class="menu">
                <router-link to="/tasks" class="menu-link"> выбрать тему </router-link>
            </div>
        </nav>
    </div>
</template>

<style>
.header {
    padding-top: 16px;

}

h1 {
    font-size: 40px;
    flex: 600;
}

.header-info {
    font-size: 28px;
    font-weight: 600;
    padding: 16px;
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