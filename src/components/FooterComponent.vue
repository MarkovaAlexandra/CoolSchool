<template>
    <div>
        <div class="footer-section">

            <div class="footer center">

                <div class="footer-info"><a target="_blank" href="https://t.me/hello_markova">Связь с разработчиком</a>
                </div>
                <div class="footer-info">
                    Design by <a
                        href="https://ru.freepik.com/free-vector/colorful-background-with-geometric-shapes_18483442.htm">Freepik</a>
                </div>
                <div class="footer-info"> <router-link to="/confidentional">Политика конфиденциальности</router-link> </div>

            </div>
        </div>
    </div>
</template>


<style>
.footer-section {
    margin: 30px 0;
}

.footer {
    height: 50px;
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    flex-wrap: wrap;
    gap: 16px;
}

.footer-info {

    font-size: 20px;
    color: black;
    font-weight: 600;
}
</style>