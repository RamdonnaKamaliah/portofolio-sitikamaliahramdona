
      const mobileMenuButton = document.getElementById("mobile-menu-button");
      const mobileMenu = document.getElementById("mobile-menu");
      const menuIcon = document.getElementById("menu-icon");

      // Toggle mobile menu visibility
      mobileMenuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
        menuIcon.classList.toggle("bx-menu");
        menuIcon.classList.toggle("bx-x");
      });

      // Close mobile menu if clicked outside
      document.addEventListener("click", function (e) {
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
          mobileMenu.classList.add("hidden");
          menuIcon.classList.remove("bx-x");
          menuIcon.classList.add("bx-menu");
        }
      });

      // Add blur effect on scroll
      const header = document.querySelector("header");
      window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
          header.classList.add("backdrop-blur-lg", "bg-opacity-60");
        } else {
          header.classList.remove("backdrop-blur-lg", "bg-opacity-60");
        }
      });

      // Close mobile menu when a menu item is clicked
      const menuLinks = mobileMenu.querySelectorAll("a");
      menuLinks.forEach(link => {
        link.addEventListener("click", function () {
          mobileMenu.classList.add("hidden"); // Sembunyikan mobile menu
          menuIcon.classList.remove("bx-x"); // Kembalikan ikon ke menu
          menuIcon.classList.add("bx-menu");
        });
      });
    