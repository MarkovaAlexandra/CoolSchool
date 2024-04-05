function check_line() {
    // this.hasAnimation = false;
    const starList = document.querySelectorAll('.front-star');
    if (result == this.userResult) {
        this.message = 'Правильно!';
        this.userCount++;
        starList[this.iterations].classList.add('_gold');
    }
    else {
        this.message = 'Не правильно...';

    }
    this.iterations++;
    if (this.iterations < 10) {
        setTimeout(() => {
            this.start();
        }, 1000);
    }
    else {
        this.message = `ваш результат ` + this.userCount + ` из ` + this.iterations;
        setTimeout(() => {
            this.iterations = '';
            this.userCount = 0;
            this.first = '';
            this.second = '';
            this.operand = '';
            starList.forEach(star => star.classList.remove('_gold'));
        }, 3000);
    }

}

export { check_line };