document.addEventListener('DOMContentLoaded', function() {
    const accordionButton = document.querySelector('.accordion-button-pract');
    const accordionContent = document.querySelector('.accordion-content-pract');
    
    if (accordionButton && accordionContent) {
        accordionButton.addEventListener('click', function() {
            // Переключаем активное состояние
            const isActive = accordionContent.classList.toggle('active');
            
            // Меняем стрелку
            this.textContent = isActive ? 'Практики ▲' : 'Практики ▼';
            
            // Добавляем лог для отладки
            console.log('Аккордеон нажат', isActive);
        });
    } else {
        console.error('Элементы аккордеона не найдены');
    }
}); 