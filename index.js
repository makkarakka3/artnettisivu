function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

    function toggleCloudRedirectAlert() {
        if (confirm("Tämä uudelleenohjaa sinut cloud.artelokuvaoy.com:iin!\nJos et ole töissä Art Elokuva OY:llä sinulla ei ole käyttäjää tälle sivulle.\nJos olet töissä Art Elokuva OY:llä ja halua käyttäjän, ota yhteys tatuun.\nHaluatko jatkaa?")) {
            location.replace("https://cloud.artelokuvaoy.com")
    } else {
        void(0)
    }
}
