function validateForm() {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return false;
      }

      alert("Thank you, " + name + "! Your message has been sent.");
      return true;
    }

    // To-Do List
    function addTask() {
      const input = document.getElementById("todoInput");
      const task = input.value.trim();

      if (task === "") {
        alert("Please enter a task.");
        return;
      }

      const li = document.createElement("li");
      li.textContent = task;

      const btn = document.createElement("button");
      btn.textContent = "Remove";
      btn.className = "remove-btn";
      btn.onclick = function () {
        li.remove();
      };

      li.appendChild(btn);
      document.getElementById("todoList").appendChild(li);
      input.value = "";
    }