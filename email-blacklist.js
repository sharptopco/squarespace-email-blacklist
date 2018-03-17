function initializeBlacklistListener() {
    var submitButton = $("input[type=submit]");
    $("input:text[name='email']").on('change', function() {
        if (isBlacklisted(this.value)) {
            $(this).parent().addClass('error');
            disable(submitButton);
        } else {
            $(this).parent().removeClass('error');
            enable(submitButton);
        }
    });
}

function isBlacklisted(email) {
    var failures = 0;
    [
        'gmail\\.com',
        'yahoo\\.com',
        'yahoo\\.in',
        'earthlink\\.net',
        'hotmail\\.com',
        'icloud\\.com',
        'me\\.com',
        'outlook\\.com',
        'aol\\.com',
        'hotmail\\.com',
        'mail\\.com',
        'email\\.com',
        'yandex\\.com',
        'protonmail\\.com',
        'verizon\\.net'
    ].forEach(function(domain) {
        var re = new RegExp("^[\\w.+\\-]+@" + domain + "$");
        if (re.test(String(email).toLowerCase())) failures++;
    });
    return failures > 0;
}

function disable(button) {
    button.attr('disabled','disabled');
    button.css({ 'background-color' : 'gray', 'border-color' : 'gray', 'opacity' : '0.5' });
}

function enable(button) {
    button.removeAttr('disabled');
    button.css({ 'background-color' : '', 'border-color' : '', 'opacity' : '' });
}
