const modal = document.getElementById("modal");
const btn_1 = document.getElementById("openModal1");
const btn_2 = document.getElementById("openModal2");
const btn_3 = document.getElementById("openModal3");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

// Создание объекта formData
const formData = {
  name: '',
  email: '',
  phone: '',
  date: '',
  comment: '',
  printData: function() {
    console.log(`Имя: ${this.name}`);
    console.log(`E-mail: ${this.email}`);
    console.log(`Телефон: ${this.phone}`);
    console.log(`Дата: ${this.date}`);
    console.log(`Комментарий: ${this.comment}`);
  }
};

btn_1.onclick = function() {
  modal.style.display = "block";
}

btn_2.onclick = function() {
    modal.style.display = "block";
}

btn_3.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}


form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      date: document.getElementById('date').value,
      comment: document.getElementById('comments').value
  };

  if (!formData.name || !formData.email || !formData.comment) {
      alert('Пожалуйста, заполните все обязательные поля.');
      return;
  }

  const phoneNumber = formData.phone.replace(/\D/g, '');
  if (phoneNumber.length < 11) {
      alert('Введите корректный номер телефона.');
      return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert('Введите корректный e-mail.');
      return;
  }

  // Скрываем форму
  form.style.display = 'none';

  // Отображаем сообщение об успешной отправке с введёнными данными
  successMessage.style.display = 'block';
  successMessage.innerHTML = `
      <h2 style="color: #28a745; font-size: 24px; margin-bottom: 20px;">Форма успешно отправлена!</h2>
      <div style="font-size: 18px; line-height: 1.6;">
          <p><strong>Имя:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Телефон:</strong> ${formData.phone}</p>
          <p><strong>Дата:</strong> ${formData.date}</p>
          <p><strong>Комментарий:</strong> ${formData.comment}</p>
      </div>
      <button onclick="resetForm()" style="margin-top: 20px; padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">Отправить новую заявку</button>
  `;
});

// Добавляем новую функцию для сброса формы
function resetForm() {
  form.reset();
  form.style.display = 'block';
  successMessage.style.display = 'none';
}

