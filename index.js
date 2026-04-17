document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", function () {
    btn.parentElement.remove();
    });
});

const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-task-btn");
const main = document.querySelector("main");

// =====================
// إضافة Task جديدة
// =====================
function addTask() {
    const text = input.value.trim();

    if (text === "") return;

    const task = document.createElement("label");
    task.classList.add("task", "fade-in");

    task.innerHTML = `
        <input type="checkbox">
        <span class="checkmark"></span>
        <span class="task-text">${text}</span>
        <button class="delete-btn">
            <i class="fa-solid fa-trash"></i>
        </button>
    `;

    main.appendChild(task);
    input.value = "";

    observeTask(task);
}

// زرار الإضافة
addBtn.addEventListener("click", addTask);

// Enter يضيف task
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

// =====================
// حذف Task + Animation
// =====================
document.addEventListener("click", (e) => {
    if (e.target.closest(".delete-btn")) {
        const task = e.target.closest(".task");

        task.classList.add("remove");

        setTimeout(() => {
            task.remove();
        }, 300);
    }
});

// =====================
// Scroll Animation (ظهور تدريجي)
// =====================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

function observeTask(task) {
    observer.observe(task);
}

// observe الموجودين في البداية
document.querySelectorAll(".task").forEach(observeTask);

function createTask(taskObj) {
    const task = document.createElement("label");
    task.classList.add("task");
    task.dataset.id = taskObj.id;

    task.innerHTML = `
        <input type="checkbox" ${taskObj.done ? "checked" : ""}>
        <span class="checkmark"></span>
        <span class="task-text">${taskObj.text}</span>
        <button class="delete-btn">
            <i class="fa-solid fa-trash"></i>
        </button>
    `;

    main.appendChild(task);

    // 👇 مهم جدًا: trigger animation بعد الإضافة
    requestAnimationFrame(() => {
        task.classList.add("show");
    });
}
tasks.forEach(createTask);
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");

    if (window.scrollY > 20) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});