// Модальное окно заказа
const modal = document.getElementById("orderModal");
const orderButtons = document.querySelectorAll(".order-btn");
const closeModalBtn = modal?.querySelector(".close-btn");
const serviceTypeInput = document.getElementById("serviceType");

// Проверяем наличие модального окна и кнопок
if (modal && orderButtons.length > 0) {
  console.log("Модальное окно и кнопки найдены");

  // Скрываем модальное окно по умолчанию
  modal.style.display = "none";

  // Открытие модального окна при клике на кнопки "Order"
  orderButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("Кнопка 'Order' нажата");

      // Устанавливаем тип услуги в скрытое поле
      const service = btn.getAttribute("data-service") || "Default Service";
      serviceTypeInput.value = service;
      
      // Отображаем модальное окно
      modal.style.display = "flex";
    });
  });

  // Закрытие модального окна через кнопку закрытия
  closeModalBtn?.addEventListener("click", () => {
    console.log("Кнопка закрытия модального окна нажата");
    modal.style.display = "none";  // Скрываем модальное окно
  });

  // Закрытие окна при клике вне его области
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      console.log("Клик за пределами модального окна");
      modal.style.display = "none";  // Скрываем модальное окно
    }
  });

  // Закрытие окна через клавишу Esc
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
      console.log("Клавиша Esc нажата");
      modal.style.display = "none";  // Скрываем модальное окно
    }
  });
} else {
  console.error("Modal или order buttons отсутствуют!");  // Сообщение об ошибке, если элементы не найдены
}

