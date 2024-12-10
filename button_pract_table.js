const firstSemesterPractices = `
                    <tr>
                        <td>1</td>
                        <td>Основы языка HTML</td>
                        <td><input type="checkbox" checked></td>
                        <td><input type="checkbox" checked></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Создание макета в HTML</td>
                        <td><input type="checkbox"></td>
                        <td><input type="checkbox"></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Таблицы и интерактивные элементы в HTML</td>
                        <td><input type="checkbox"></td>
                        <td><input type="checkbox"></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Основы работы с CSS</td>
                        <td><input type="checkbox"></td>
                        <td><input type="checkbox"></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Работа с анимацией в CSS</td>
                        <td><input type="checkbox"></td>
                        <td><input type="checkbox"></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Адаптивная верстка и работа с HTML</td>
                        <td><input type="checkbox"></td>
                        <td><input type="checkbox"></td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Работа с фреймворками</td>
                        <td><input type="checkbox"></td>
                        <td><input type="checkbox"></td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Введение в JavaScript</td>
                        <td><input type="checkbox"></td>
                        <td><input type="checkbox"></td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Работа с событиями и взаимодействие в JavaScript</td>
                        <td><input type="checkbox"></td>
                        <td><input type="checkbox"></td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Введение в работу с DOM</td>
                        <td><input type="checkbox"></td>
                        <td><input type="checkbox"></td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Основы GitHub</td>
                        <td><input type="checkbox"></td>
                        <td><input type="checkbox"></td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>Работа с репозиториями на GitHub</td>
                        <td><input type="checkbox"></td>
                        <td><input type="checkbox"></td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td>Создание и поддержка страницы на GitHub Pages</td>
                        <td><input type="checkbox"></td>
                        <td><input type="checkbox"></td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td>Создание проекта</td>
                        <td><input type="checkbox"></td>
                        <td><input type="checkbox"></td>
                    </tr>
    `;

const secondSemesterPractices = `
        <tr>
            <td>1</td>
            <td>Базовое бэкенд-приложение</td>
            <td><input type="checkbox"></td>
            <td><input type="checkbox"></td>
        </tr>
        <tr>
            <td>2</td>
            <td>HTTP-запросы</td>
            <td><input type="checkbox"></td>
            <td><input type="checkbox"></td>
        </tr>
        <tr>
            <td>3</td>
            <td>JSON и работа с ним</td>
            <td><input type="checkbox"></td>
            <td><input type="checkbox"></td>
        </tr>
        <tr>
            <td>4</td>
            <td>HTTP-ответы</td>
            <td><input type="checkbox"></td>
            <td><input type="checkbox"></td>
        </tr>
        <tr>
            <td>5</td>
            <td>Проектирование API</td>
            <td><input type="checkbox"></td>
            <td><input type="checkbox"></td>
        </tr>
        <tr>
            <td>6</td>
            <td>Роутинг и его настройка</td>
            <td><input type="checkbox"></td>
            <td><input type="checkbox"></td>
        </tr>
        <tr>
            <td>7</td>
            <td>NoSQL базы данных</td>
            <td><input type="checkbox"></td>
            <td><input type="checkbox"></td>
        </tr>
        <tr>
            <td>8</td>
            <td>Обеспечение авторизации и доступа пользователей</td>
            <td><input type="checkbox"></td>
            <td><input type="checkbox"></td>
        </tr>
        <tr>
            <td>9</td>
            <td>Работа сторонних сервисов уведомления и авторизации</td>
            <td><input type="checkbox"></td>
            <td><input type="checkbox"></td>
        </tr>
        <tr>
            <td>10</td>
            <td>Основы ReactJS</td>
            <td><input type="checkbox"></td>
            <td><input type="checkbox"></td>
        </tr>
        <tr>
            <td>11</td>
            <td>Работа с компонентами динамической DOM</td>
            <td><input type="checkbox"></td>
            <td><input type="checkbox"></td>
        </tr>
        <tr>
            <td>12</td>
            <td>Использование хуков в React</td>
            <td><input type="checkbox"></td>
            <td><input type="checkbox"></td>
        </tr>
        <tr>
            <td>14</td>
            <td>Основы микросервисной архитектуры</td>
            <td><input type="checkbox"></td>
            <td><input type="checkbox"></td>
        </tr>
        <tr>
            <td>15</td>
            <td>Разработка классических модулей веб-приложений</td>
            <td><input type="checkbox"></td>
            <td><input type="checkbox"></td>
        </tr>
        <tr>
            <td>16</td>
            <td>Разработка классических модулей веб-приложений</td>
            <td><input type="checkbox"></td>
            <td><input type="checkbox"></td>
        </tr>
    `;
    let isSecondSemester = false;

    document.getElementById('showSecondSemesterPractices').addEventListener('click', function() {
        const practicesTableBody = document.querySelector('.accordion-content-pract tbody');
        if (isSecondSemester) {
            practicesTableBody.innerHTML = firstSemesterPractices;
            this.textContent = 'Посмотреть практики второго семестра';
        } else {
            practicesTableBody.innerHTML = secondSemesterPractices;
            this.textContent = 'Посмотреть практики первого семестра';
        }
        isSecondSemester = !isSecondSemester;
    });