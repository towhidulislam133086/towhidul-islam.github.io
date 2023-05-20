$(".dropdown-menu li a").click(function() {

    $(".btn:first-child").html($(this).text() + ' <span class="caret"></span>');

});

var radios = document.querySelectorAll('[name=inlineReasonRadio]');
Array.from(radios).forEach(function(r) {
    r.addEventListener('click', function() {
        var priceEl = document.getElementById('specifyReasonField');
        if (this.id == 'inlineRadio3')
            priceEl.removeAttribute('disabled');
        else
            priceEl.setAttribute('disabled', true);
    });
});

var radios = document.querySelectorAll('[name=customRadioInline1]');
Array.from(radios).forEach(function(r) {
    r.addEventListener('click', function() {
        var priceEl = document.getElementById('price');
        if (this.id == 'sell')
            priceEl.removeAttribute('disabled');
        else
            priceEl.setAttribute('disabled', 'disabled');
    });
});