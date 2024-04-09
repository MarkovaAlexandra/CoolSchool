<template>
    <div>
        <div class="footer-section">

            <div class="footer center">

                <div class="footer-info"><a target="_blank" href="https://t.me/hello_markova">Связь с разработчиком</a>
                </div>
                <div class="footer-info">
                    <div class="footer-link">
                        Design by <a
                            href="https://ru.freepik.com/free-vector/colorful-background-with-geometric-shapes_18483442.htm">Freepik</a>
                    </div>
                    <div class="footer-link">
                        Favicon by
                        <a
                            href="https://ru.freepik.com/free-vector/colorful-background-with-geometric-shapes_18483442.htm">Freepik</a>
                    </div>

                </div>
                <div class="footer-info"> <router-link to="/confidentional">Политика конфиденциальности</router-link> </div>

            </div>
        </div>
    </div>
</template>


<style>
.footer-section {
    padding: 8px 0;
    background-color: #9acbf5d1;
}

.footer {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;

}

.footer-info {
    font-size: 14px;
    color: black;
    font-weight: 500;
    width: 33%;
}

@media(max-width:476px) {
    .footer {
        gap: 8px;
    }

    .footer-info {
        width: 100%;
    }
}
</style>