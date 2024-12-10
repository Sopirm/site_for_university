
    // Функция для прокрутки страницы вверх
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Показать кнопку при прокрутке вниз
    window.onscroll = function() {
        const scrollTopButton = document.getElementById('scrollTopButton');
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    };
