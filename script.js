// Открытие и закрытие модального окна
const modal = document.getElementById("orderModal");
const orderButtons = document.querySelectorAll(".order-btn");
const closeModalBtn = modal?.querySelector(".close-btn"); // Защита от ошибки, если элемента нет
const serviceTypeInput = document.getElementById("serviceType");

// Проверяем, существует ли модальное окно и кнопки
if (modal && orderButtons.length > 0) {
  // Открытие модального окна при клике на "Order"
  orderButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const service = btn.getAttribute("data-service") || "Default Service";
      serviceTypeInput.value = service; // Устанавливаем тип услуги
      modal.style.display = "flex";
    });
  });

  // Закрытие модального окна через кнопку
  closeModalBtn?.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Закрытие окна при клике вне его области
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Закрытие окна через клавишу Esc
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
      modal.style.display = "none";
    }
  });
} else {
  console.error("Modal or order buttons are missing!");
}
