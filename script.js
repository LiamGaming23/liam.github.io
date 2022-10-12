$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".nav").addClass('sticky')
        } else {
            $(".nav").removeClass('sticky')
        }
    })
})
const footer = document.querySelector('footer')
const established = new Date()
window.onload = () => {
    footer.innerText = `© Liam 2022-${established.getFullYear()}`
}