<template>
    <div class="stars">
        <div class="star">
            <i class="fa-solid fa-star back-star"></i>
            <i class="fa-solid fa-star front-star"></i>
        </div>
        <div class="star">
            <i class="fa-solid fa-star back-star"></i>
            <i class="fa-solid fa-star front-star"></i>
        </div>
        <div class="star">
            <i class="fa-solid fa-star back-star"></i>
            <i class="fa-solid fa-star front-star"></i>
        </div>
        <div class="star">
            <i class="fa-solid fa-star back-star"></i>
            <i class="fa-solid fa-star front-star"></i>
        </div>
        <div class="star">
            <i class="fa-solid fa-star back-star"></i>
            <i class="fa-solid fa-star front-star"></i>
        </div>
        <div class="star">
            <i class="fa-solid fa-star back-star"></i>
            <i class="fa-solid fa-star front-star"></i>
        </div>
        <div class="star">
            <i class="fa-solid fa-star back-star"></i>
            <i class="fa-solid fa-star front-star"></i>
        </div>
        <div class="star">
            <i class="fa-solid fa-star back-star"></i>
            <i class="fa-solid fa-star front-star"></i>
        </div>
        <div class="star">
            <i class="fa-solid fa-star back-star"></i>
            <i class="fa-solid fa-star front-star"></i>
        </div>
        <div class="star">
            <i class="fa-solid fa-star back-star"></i>
            <i class="fa-solid fa-star front-star"></i>
        </div>
    </div>
</template>

<style >
.fa-solid {
    color: gold;
    font-size: 40px;
}



.stars {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
}

.star {
    position: relative;
    width: 35px;
}

.back-star {
    color: black;
    font-size: 34px;
}

.front-star {
    position: absolute;
    color: #fff;
    font-size: 26px;
    top: 4px;
    left: 4px;
}

._gold {
    color: gold;
}
</style>