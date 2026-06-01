// ===== KASDD Learning Notebook — Main JS =====

// Auto-render math after page loads
document.addEventListener("DOMContentLoaded", () => {
  if (window.renderMathInElement) {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\[", right: "\\]", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false }
      ],
      throwOnError: false,
      strict: false,
      trust: true,
    });
  }

  // Highlight active nav link based on current path
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav.topbar .nav-links a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });

  // Sidebar TOC: highlight current section while scrolling
  const tocLinks = document.querySelectorAll(".sidebar a");
  const sections = Array.from(tocLinks)
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  if (sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tocLinks.forEach((l) => l.classList.remove("active"));
            const id = entry.target.id;
            const matching = document.querySelector(
              `.sidebar a[href="#${id}"]`
            );
            if (matching) matching.classList.add("active");
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
  }

  // ===== Quiz / Exercise interactions =====
  document.querySelectorAll(".options").forEach((opts) => {
    const correctIdx = parseInt(opts.dataset.correct, 10);
    opts.querySelectorAll("li").forEach((li, i) => {
      li.addEventListener("click", () => {
        // Reset siblings
        opts.querySelectorAll("li").forEach((l) =>
          l.classList.remove("selected", "correct", "incorrect")
        );
        li.classList.add("selected");
        if (Number.isInteger(correctIdx)) {
          if (i === correctIdx) li.classList.add("correct");
          else {
            li.classList.add("incorrect");
            const correctLi = opts.querySelectorAll("li")[correctIdx];
            if (correctLi) correctLi.classList.add("correct");
          }
        }
        // Auto-reveal solution if present in same .exercise
        const ex = li.closest(".exercise");
        if (ex) {
          const sol = ex.querySelector(".solution");
          if (sol) sol.classList.add("show");
        }
      });
    });
  });

  // "Show solution" buttons
  document.querySelectorAll("button.reveal").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.target;
      const sol = target
        ? document.querySelector(target)
        : btn.closest(".exercise").querySelector(".solution");
      if (sol) sol.classList.toggle("show");
      btn.textContent = sol.classList.contains("show")
        ? "Hide solution"
        : "Show solution";
    });
  });

  // ===== Exercise filters =====
  const filterButtons = document.querySelectorAll(".filter-bar button[data-filter]");
  if (filterButtons.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.dataset.filter;
        document.querySelectorAll(".exercise").forEach((ex) => {
          if (filter === "all" || ex.dataset.topic === filter || ex.dataset.set === filter) {
            ex.style.display = "";
          } else {
            ex.style.display = "none";
          }
        });
      });
    });
  }
});
