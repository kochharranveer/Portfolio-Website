function switch_theme () {
    var checkbox = document.getElementById("theme_switcher");

    if (checkbox.checked == true) {
        document.body.setAttribute('data-theme', 'light')
    } else {
        document.body.setAttribute('data-theme', 'dark')
    }
}