document.addEventListener('DOMContentLoaded', function() {
    const accordionButton = document.querySelector('.accordion-button');
    const accordionContent = document.querySelector('.accordion-content');
    
    if (accordionButton && accordionContent) {
        accordionButton.addEventListener('click', function() {
            // Переключаем активное состояние
            const isActive = accordionContent.classList.toggle('active');
            
            // Меняем стрелку
            this.textContent = isActive ? 'Лекции ▲' : 'Лекции ▼';
            
            // Добавляем лог для отладки
            console.log('Аккордеон нажат', isActive);
        });
    } else {
        console.error('Элементы аккордеона не найдены');
    }
});

document.getElementById('showSecondSemesterPractices').addEventListener('click', function() {
    const secondSemesterContent = document.querySelector('.accordion-content-pract-second-semester');
    const firstSemesterContent = document.querySelector('.accordion-content-pract');
    
    if (secondSemesterContent.style.display === 'none') {
        secondSemesterContent.style.display = 'block';
        firstSemesterContent.style.display = 'none';
        this.textContent = 'Посмотреть практики первого семестра';
    } else {
        secondSemesterContent.style.display = 'none';
        firstSemesterContent.style.display = 'block';
        this.textContent = 'Посмотреть практики второго семестра';
    }
}); 