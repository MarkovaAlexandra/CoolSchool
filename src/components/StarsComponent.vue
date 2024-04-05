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
    gap: 16px;
    justify-content: center;
    align-items: center;
}

.star {
    position: relative;
    width: 60px;
}

.back-star {
    color: black;
    font-size: 44px;
}

.front-star {
    position: absolute;
    color: #fff;
    font-size: 33px;
    top: 5px;
    left: 11px;
}

._gold {
    color: gold;
}
</style>