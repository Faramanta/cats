var card = document.querySelectorAll('.js-card-status');
var cardBlock = document.querySelectorAll('.card__block');

(function(ELEMENT) {
    ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
    ELEMENT.closest = ELEMENT.closest || function closest(selector) {
        if (!this) return null;
        if (this.matches(selector)) return this;
        if (!this.parentElement) {return null}
        else return this.parentElement.closest(selector)
    };
}(Element.prototype));

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

