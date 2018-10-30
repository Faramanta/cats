var card = document.querySelectorAll('.js-card-status');
var cardBlock = document.querySelectorAll('.card__block');


for (var i = 0; i < card.length; i++) {
    card[i].addEventListener('click', function () {
        if (!(this.parentNode.getAttribute('data-available') === 'disabled')) {
            this.parentNode.classList.toggle('selected');
            if (this.parentNode.classList.contains('selected')) {
                this.addEventListener('mouseleave', function () {
                    if (this.parentNode.classList.contains('selected')) {
                        this.parentNode.classList.add('hover');
                    } else {
                        this.parentNode.classList.remove('hover');
                    }
                });
            }
        }
    });
}

