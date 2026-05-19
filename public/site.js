    const html = document.documentElement;
    const body = document.body;
    const siteHeader = document.getElementById("siteHeader");
    const topProgress = document.getElementById("topProgress");
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    const themeToggle = document.getElementById("themeToggle");
    const mobileThemeToggle = document.getElementById("mobileThemeToggle");
    const themeLabel = document.getElementById("themeLabel");
    const menuButton = document.getElementById("menuButton");
    const mobilePanel = document.getElementById("mobilePanel");
    const mobileLinks = mobilePanel.querySelectorAll("a");
    const sections = [...document.querySelectorAll("[data-section]")];
    const navLinks = [...document.querySelectorAll(".nav-link")];
    const revealItems = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const counterItems = document.querySelectorAll("[data-count]");
    const serviceCards = [...document.querySelectorAll(".service-card[data-service-key]")];
    const heroTilt = document.getElementById("heroTilt");
    const orbItems = document.querySelectorAll(".orb");
    const serviceModal = document.getElementById("serviceModal");
    const serviceModalClose = document.getElementById("serviceModalClose");
    const serviceModalTitle = document.getElementById("serviceModalTitle");
    const serviceModalSummary = document.getElementById("serviceModalSummary");
    const serviceModalMeta = document.getElementById("serviceModalMeta");
    const serviceModalList = document.getElementById("serviceModalList");
    const contactForm = document.getElementById("contactForm");
    const submitButton = document.getElementById("submitButton");
    const formNote = document.getElementById("formNote");
    let lastScrollY = window.scrollY;
    let modalTrigger = null;

    const serviceData = {
      personal: {
        title: "Personal Certificate global",
        summary: "Support for personal documents that need legal recognition in the UAE or for international use. This service helps customers move personal paperwork through the correct global chain with less confusion.",
        tags: ["Personal documents", "UAE use", "Legal processing"],
        items: [
          { title: "Birth and marriage support", copy: "Suitable for birth certificates, marriage certificates, and other family-related personal paperwork." },
          { title: "Country-specific review", copy: "The process changes by document origin and destination authority, so each file is checked first." },
          { title: "Embassy and ministry routing", copy: "Where required, files move through embassy, consulate, and ministry stages in the correct order." }
        ]
      },
      educational: {
        title: "Educational Certificate global",
        summary: "Built for degrees, diplomas, and academic records that need to be accepted in the UAE for work, higher study, professional licensing, or migration requirements.",
        tags: ["Degrees", "Diplomas", "Employment use"],
        items: [
          { title: "Academic document handling", copy: "Used for school certificates, diplomas, degrees, transcripts, and related academic records." },
          { title: "Employment and visa support", copy: "Often required for UAE jobs, labour processing, residency applications, and qualification verification." },
          { title: "Authority path guidance", copy: "We help map university, ministry, embassy, and MOFA requirements based on the certificate origin." }
        ]
      },
      commercial: {
        title: "Commercial Document global",
        summary: "Commercial global is used for business papers that require legal recognition for contracts, trade activity, company registration, and corporate operations in the UAE and abroad.",
        tags: ["Business use", "Trade papers", "Corporate support"],
        items: [
          { title: "Corporate paperwork", copy: "Suitable for commercial invoices, incorporation documents, agreements, powers of attorney, and related files." },
          { title: "Operational readiness", copy: "Helps companies prepare documents for legal, trade, banking, and authority submission use cases." },
          { title: "Cross-border coordination", copy: "Country-specific legalization and embassy paths are checked before submission starts." }
        ]
      },
      mofa: {
        title: "MOFA global Services",
        summary: "MOFA global is a critical step for many documents in the UAE. This service focuses on the Ministry of Foreign Affairs stage and the documents that depend on it for final acceptance.",
        tags: ["MOFA", "UAE ministry", "Final validation"],
        items: [
          { title: "Ministry stage follow-up", copy: "We help prepare and route documents that require UAE foreign ministry approval." },
          { title: "Document readiness checks", copy: "Before MOFA, documents are checked to confirm the prior legalization steps are complete." },
          { title: "Final-use support", copy: "Commonly needed for employment, residency, education, and business acceptance within the UAE." }
        ]
      },
      embassy: {
        title: "Embassy & Consulate global",
        summary: "Some countries require embassy or consulate legalization as a central part of the global path. This service focuses on those destination-specific authority requirements.",
        tags: ["Embassy", "Consulates", "Country-specific"],
        items: [
          { title: "Destination authority matching", copy: "Each case is checked against the embassy or consulate rules attached to the document origin and use case." },
          { title: "Sequenced legalization", copy: "Embassy and consulate stages are coordinated only after the correct prior globals are complete." },
          { title: "Customer guidance", copy: "Clients get clearer visibility into what is required before the file is submitted to external authorities." }
        ]
      },
      apostille: {
        title: "Apostille & International Use",
        summary: "This service supports documents that need apostille-related guidance or international legalization handling for overseas education, work, family, or business purposes.",
        tags: ["Apostille", "International", "Overseas use"],
        items: [
          { title: "International documentation flow", copy: "Helps identify whether apostille or full global is the correct route for the document." },
          { title: "Overseas education and work use", copy: "Common for people preparing documents for jobs, higher studies, or immigration outside the UAE." },
          { title: "Legalization decision support", copy: "We help customers understand the right path before documents enter the processing queue." }
        ]
      }
    };

    function syncThemeUi() {
      const isDark = html.dataset.theme === "dark";
      themeToggle.setAttribute("aria-pressed", String(isDark));
      themeLabel.textContent = isDark ? "Dark" : "Light";
      mobileThemeToggle.textContent = isDark ? "Switch to Light Theme" : "Switch to Dark Theme";
      themeColorMeta.setAttribute("content", isDark ? "#0f0b0c" : "#fffdfc");
    }

    function syncHeaderOffset() {
      window.requestAnimationFrame(() => {
        html.style.setProperty("--header-offset", `${siteHeader.offsetHeight}px`);
      });
    }

    function setTheme(nextTheme) {
      html.dataset.theme = nextTheme;
      localStorage.setItem("theme", nextTheme);
      syncThemeUi();
      syncHeaderOffset();
    }

    syncThemeUi();
    syncHeaderOffset();

    themeToggle.addEventListener("click", () => {
      setTheme(html.dataset.theme === "dark" ? "light" : "dark");
    });

    mobileThemeToggle.addEventListener("click", () => {
      setTheme(html.dataset.theme === "dark" ? "light" : "dark");
    });

    window.addEventListener("load", () => {
      body.classList.add("is-ready");
      syncHeaderOffset();
    });

    window.addEventListener("resize", syncHeaderOffset);

    function setHeaderState() {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      const isMenuOpen = mobilePanel.classList.contains("open");
      const isModalOpen = serviceModal.classList.contains("is-open");
      const isScrollingDown = scrollTop > lastScrollY;

      siteHeader.classList.toggle("scrolled", scrollTop > 18);
      siteHeader.classList.toggle("header-hidden", scrollTop > 160 && isScrollingDown && !isMenuOpen && !isModalOpen);

      if (scrollTop <= 24) {
        siteHeader.classList.remove("header-hidden");
      }

      topProgress.style.transform = `scaleX(${progress})`;

      orbItems.forEach((orb) => {
        const speed = Number(orb.dataset.speed || 0.08);
        orb.style.transform = `translate3d(0, ${scrollTop * speed}px, 0)`;
      });

      lastScrollY = scrollTop;
    }

    setHeaderState();
    let scrollTicking = false;
    window.addEventListener("scroll", () => {
      if (scrollTicking) {
        return;
      }

      scrollTicking = true;
      window.requestAnimationFrame(() => {
        setHeaderState();
        scrollTicking = false;
      });
    }, { passive: true });

    function toggleMenu(forceState) {
      const shouldOpen = typeof forceState === "boolean" ? forceState : !mobilePanel.classList.contains("open");
      mobilePanel.classList.toggle("open", shouldOpen);
      menuButton.setAttribute("aria-expanded", String(shouldOpen));
      siteHeader.classList.remove("header-hidden");
      syncHeaderOffset();
    }

    menuButton.addEventListener("click", () => toggleMenu());
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => toggleMenu(false));
    });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");

        const nestedCounters = entry.target.querySelectorAll("[data-count]");
        nestedCounters.forEach(animateCounter);

        if (entry.target.hasAttribute("data-count")) {
          animateCounter(entry.target);
        }
      });
    }, {
      threshold: 0.16,
      rootMargin: "0px 0px -40px 0px"
    });

    revealItems.forEach((item) => revealObserver.observe(item));
    counterItems.forEach((item) => revealObserver.observe(item));

    function animateCounter(element) {
      if (!element || element.dataset.animated === "true") {
        return;
      }

      element.dataset.animated = "true";
      const target = Number(element.dataset.count);
      const suffix = target === 98 ? "%" : target >= 40 ? "+" : "";
      let current = 0;
      const step = Math.max(1, Math.round(target / 48));

      const timer = window.setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          window.clearInterval(timer);
        }
        element.textContent = `${current}${suffix}`;
      }, 28);
    }

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          const isMatch = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", isMatch);
        });
      });
    }, {
      threshold: 0.45
    });

    sections.forEach((section) => sectionObserver.observe(section));

    function renderServiceModal(key) {
      const data = serviceData[key];
      if (!data) {
        return;
      }

      serviceModalTitle.textContent = data.title;
      serviceModalSummary.textContent = data.summary;
      serviceModalMeta.innerHTML = data.tags.map((tag) => `<span>${tag}</span>`).join("");
      serviceModalList.innerHTML = data.items.map((item, index) => `
        <article class="service-modal__item" style="--item-delay:${index * 0.08}s;">
          <span class="icon-badge" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8">
              <path d="M5 12l4 4L19 6" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </span>
          <div>
            <strong>${item.title}</strong>
            <p>${item.copy}</p>
          </div>
        </article>
      `).join("");
    }

    function openServiceModal(key, trigger) {
      renderServiceModal(key);
      modalTrigger = trigger || null;
      serviceModal.classList.add("is-open");
      serviceModal.setAttribute("aria-hidden", "false");
      body.style.overflow = "hidden";
      siteHeader.classList.remove("header-hidden");
      serviceModalClose.focus();
    }

    function closeServiceModal() {
      serviceModal.classList.remove("is-open");
      serviceModal.setAttribute("aria-hidden", "true");
      body.style.overflow = "";
      if (modalTrigger) {
        modalTrigger.focus();
      }
    }

    serviceCards.forEach((card) => {
      card.addEventListener("click", () => {
        openServiceModal(card.dataset.serviceKey, card);
      });

      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openServiceModal(card.dataset.serviceKey, card);
        }
      });
    });

    serviceModalClose.addEventListener("click", closeServiceModal);
    serviceModal.addEventListener("click", (event) => {
      if (event.target === serviceModal) {
        closeServiceModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && serviceModal.classList.contains("is-open")) {
        closeServiceModal();
      }
    });

    if (heroTilt && window.matchMedia("(pointer:fine)").matches) {
      let tiltFrame = null;

      heroTilt.addEventListener("pointermove", (event) => {
        const rect = heroTilt.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const rotateY = (x - 0.5) * 8;
        const rotateX = (0.5 - y) * 8;

        if (tiltFrame) {
          window.cancelAnimationFrame(tiltFrame);
        }

        tiltFrame = window.requestAnimationFrame(() => {
          heroTilt.style.setProperty("--rotate-x", `${rotateX}deg`);
          heroTilt.style.setProperty("--rotate-y", `${rotateY}deg`);
        });
      });

      heroTilt.addEventListener("pointerleave", () => {
        if (tiltFrame) {
          window.cancelAnimationFrame(tiltFrame);
          tiltFrame = null;
        }
        heroTilt.style.setProperty("--rotate-x", "0deg");
        heroTilt.style.setProperty("--rotate-y", "0deg");
      });
    }

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      submitButton.textContent = "Inquiry Sent";
      submitButton.style.background = "linear-gradient(135deg, #2ea66b, #127b52)";
      formNote.textContent = "Front-end confirmation complete. Connect this form to your backend or email endpoint to receive live global inquiries.";

      window.setTimeout(() => {
        submitButton.textContent = "Send Inquiry";
        submitButton.style.background = "";
      }, 2600);
    });

    document.getElementById("year").textContent = new Date().getFullYear();


    const buttons = document.querySelectorAll(".location-btn");
const mapFrame = document.getElementById("mapFrame");
const infoBox = document.getElementById("locationInfo");

const locations = {
  dubai: {
    map: "https://www.google.com/maps?q=Sheikha+Mhara+Building+Al+Twar+5+Dubai&output=embed",
    title: "Sheikha Mhara Building - Office No 218/16 Second Floor - near Al Twar Center - Al Twar 5 - Dubai - United Arab Emirates",
    address: "Al Tawhidi Building, Bur Dubai, UAE",
    phone1: "+91 79027 77751",
    phone2: "+91 79027 77721",
    dir: "https://www.google.com/maps?q=Sheikha+Mhara+Building+Al+Twar+5+Dubai&output=embed"
  },
  delhi: {
    map: "https://www.google.com/maps?q=Azbaan+Global+Attestation+%26+Apostille+Services+Kochi&output=embed",
    title: "Office No-122, Antriksh Bhawan, 22, KG Marg, Connaught Place, New Delhi, Delhi 110001",
    address: "New Delhi, India",
    phone1:  "+91 79027 77751",
    phone2: "+91 79027 77721",
    dir: "https://www.google.com/maps?q=Azbaan+Global+Attestation+%26+Apostille+Services+Kochi&output=embed"
  },
  kochi: {
    map: "https://www.google.com/maps?q=Azbaan+Global+Attestation+%26+Apostille+Services+Kochi&output=embed",
    title: "Kochi Office",
    address: "X77Q+F2W, Pallimukku, Kochi, Ernakulam, Kerala 682016",
    phone1:  "+91 79027 77751",
    phone2: "+91 79027 77721",
    dir: "https://www.google.com/maps?q=Azbaan+Global+Attestation+%26+Apostille+Services+Kochi&output=embed"
  },
  kozhikode: {
    map: "https://www.google.com/maps?q=Azbaan+Tours+%26+Travels+Kozhikode&output=embed",
    title: "Room No. 63/3617, Ground, CD TOWER, New Bus Stand, EMS Stadium, Arayidathupalam, Kozhikode, Kerala 673004",
    address: "Kozhikode, Kerala",
    phone1:  "+91 79027 77751",
    phone2: "+91 79027 77721",
    dir: "https://www.google.com/maps?q=Azbaan+Tours+%26+Travels+Kozhikode&output=embed"
  },
  mumbai: {
    map: "https://www.google.com/maps?q=Mumbai,India&output=embed",
    title: "Mumbai Office",
    address: "Mumbai, India",
    phone1: "+91 79027 77751",
    phone2: "+91 79027 77721",
    dir: "https://www.google.com/maps?q=Mumbai"
  },
  qatar: {
    map: "https://www.google.com/maps?q=Doha,Qatar&output=embed",
    title: "Qatar Office",
    address: "Doha, Qatar",
    phone1:  "+91 79027 77751",
    phone2: "+91 79027 77721",
    dir: "https://www.google.com/maps?q=Doha,Qatar"
  }
};

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const key = btn.dataset.map;
    const data = locations[key];

    mapFrame.src = data.map;

    infoBox.innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.address}</p>
      <div class="contact-row">
        <span>📞 ${data.phone1}</span>
        ${data.phone2 ? `<span>☎ ${data.phone2}</span>` : ""}
      </div>
      <a href="${data.dir}" target="_blank" class="direction-btn">Get Directions</a>
    `;
  });
});
