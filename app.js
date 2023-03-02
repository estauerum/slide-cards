window.addEventListener('DOMContentLoaded', function() {

    let slide = document.querySelectorAll('.slide');



    slide.forEach(function(item) {
        item.addEventListener('click', () => {
            clearActiveClasses()
            item.classList.add('active')
        })
    });


    function clearActiveClasses () {
        slide.forEach(function(item) {
            item.classList.remove('active')
        })
    }
});