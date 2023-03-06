window.addEventListener('DOMContentLoaded', function() {

    function slidePlugin (activeSlide = 0) {

        let slide = document.querySelectorAll('.slide');

        slide[activeSlide].classList.add('active')


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
    }

    slidePlugin(2)
});