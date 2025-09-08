// Mobile menu toggle + accessibility
    (function () {
      const toggle = document.getElementById("menu-toggle");
      const nav = document.getElementById("primary-nav");

      function closeMenu() {
        document.body.classList.remove("menu-open");
        nav.classList.remove("open");
        toggle.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
      }

      function openMenu() {
        document.body.classList.add("menu-open");
        nav.classList.add("open");
        toggle.classList.add("active");
        toggle.setAttribute("aria-expanded", "true");
      }

      if (toggle && nav) {
        toggle.addEventListener("click", () => {
          const isOpen = nav.classList.contains("open");
          isOpen ? closeMenu() : openMenu();
        });

        // Close on nav link click (mobile)
        nav.addEventListener("click", (e) => {
          const target = e.target;
          if (target.tagName === "A") {
            closeMenu();
          }
        });

        // Close on ESC
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape") closeMenu();
        });

        // Handle resize
        window.addEventListener("resize", () => {
          if (window.innerWidth > 900) closeMenu();
        });
      }
    })();

    // Complaints form logic (only runs if elements exist)
    (function () {
      const complaintForm = document.getElementById("complaintForm");
      const complaintsContainer = document.getElementById("complaints-container");

      if (!complaintForm || !complaintsContainer) {
        // Not on this page; skip
        return;
      }

      let complaints = JSON.parse(localStorage.getItem("complaints") || "[]");

      function displayComplaints() {
        complaintsContainer.innerHTML = "";
        complaints.forEach((complaint, index) => {
          const card = document.createElement("div");
          card.className = "complaint-card";
          card.innerHTML = `
            <h4>${complaint.subject}</h4>
            <p><strong>From:</strong> ${complaint.name}</p>
            <p><strong>Email:</strong> ${complaint.email}</p>
            <p><strong>Date:</strong> ${new Date(complaint.date).toLocaleString()}</p>
            <p>${complaint.complaint}</p>
            <button class="delete-btn" data-index="${index}" aria-label="Delete complaint ${index + 1}">Delete</button>
          `;
          complaintsContainer.appendChild(card);
        });
      }

      complaintsContainer.addEventListener("click", (event) => {
        const btn = event.target.closest(".delete-btn");
        if (!btn) return;
        const index = Number(btn.getAttribute("data-index"));
        complaints.splice(index, 1);
        localStorage.setItem("complaints", JSON.stringify(complaints));
        displayComplaints();
      });

      complaintForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const complaint = {
          name: (document.getElementById("name")?.value || "").trim(),
          email: (document.getElementById("email")?.value || "").trim(),
          subject: (document.getElementById("subject")?.value || "").trim(),
          complaint: (document.getElementById("complaint")?.value || "").trim(),
          date: new Date().toISOString(),
        };

        if (!complaint.name || !complaint.email || !complaint.subject || !complaint.complaint) {
          alert("All fields are required.");
          return;
        }

        complaints.unshift(complaint);
        localStorage.setItem("complaints", JSON.stringify(complaints));
        complaintForm.reset();
        displayComplaints();
      });

      displayComplaints();
    })();