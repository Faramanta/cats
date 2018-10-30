var card = document.querySelectorAll('.js-card-status');
var cardBlock = document.querySelectorAll('.card__block');


for (var i = 0; i < card.length; i++) {
    card[i].addEventListener('click', function (e) {
        e.preventDefault();
        if (!(this.closest('.card__block').getAttribute('data-available') === 'disabled')) {
            this.closest('.card__block').classList.toggle('selected');
            if (this.closest('.card__block').classList.contains('selected')) {
                this.closest('.card__block').addEventListener('mouseleave', function () {
                    if (this.closest('.card__block').classList.contains('selected')) {
                        this.closest('.card__block').classList.add('hover');
                    } else {
                        this.closest('.card__block').classList.remove('hover');
                    }
                });
            }
        }
    });
}

