const passwords = ['malachil0612', 'test', 'ezekiell0315']
function malachi() {
    if (passwords.includes(prompt("WHATS THE PASSWORD!!!"))) {
        window.location.href = "malachi/index.html"
    }
    else {
        alert('the password you entered is incorrect')
    }
};
function ezekiel() {
    if (passwords.includes(prompt("WHATS THE PASSWORD!!!"))) {
        window.location.href = "ezekiel/index.html"
    }
    else {
        alert('the password you entered is incorrect')
    }
};