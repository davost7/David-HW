var audi      = $('.audi'),
    bmw       = $('.bmw'),
    nissan    = $('.nissan'),
    vauxhall  = $('.vauxhall');

$('#all-makes').change(function() {
    $('.all-models').prop('selected', true);

    // .show() and .hide() working on Chrome, Firefox and Opera.
    // Added attr() and removeAttr() to work on Safari but the disabled options are still visible. Would ideally like to hide these.
    if ($(this).val() === 'audi') {
        audi.show().removeAttr('disabled');
        bmw.hide().attr('disabled', 'disabled');
        nissan.hide().attr('disabled', 'disabled');
        vauxhall.hide().attr('disabled', 'disabled');
    } else if ($(this).val() === 'bmw') {
        audi.hide().attr('disabled', 'disabled');
        bmw.show().removeAttr('disabled');
        nissan.hide().attr('disabled', 'disabled');
        vauxhall.hide().attr('disabled', 'disabled');
    } else if ($(this).val() === 'nissan') {
        audi.hide().attr('disabled', 'disabled');
        bmw.hide().attr('disabled', 'disabled');
        nissan.show().removeAttr('disabled');
        vauxhall.hide().attr('disabled', 'disabled');
    } else if ($(this).val() === 'vauxhall') {
        audi.hide().attr('disabled', 'disabled');
        bmw.hide().attr('disabled', 'disabled');
        nissan.hide().attr('disabled', 'disabled');
        vauxhall.show().removeAttr('disabled');
    }
});