function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.fade-in-up');

    window.addEventListener('scroll', function () {
        elements.forEach(function (element) {
            if (isInViewport(element)) {
                element.classList.add('animated');
            }
        });
    });
});
