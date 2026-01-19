 function toggleTab(tabName) {
            const content = document.getElementById(`content-${tabName}`);
            const arrow = document.getElementById(`arrow-${tabName}`);
            const isHidden = content.classList.contains('hidden');

            // Sembunyikan semua dulu
            document.querySelectorAll('[id^="content-"]').forEach(el => el.classList.add('hidden'));
            document.querySelectorAll('[id^="arrow-"]').forEach(el => el.setAttribute('icon', 'mdi:chevron-down'));

            if (isHidden) {
              content.classList.remove('hidden');
              arrow.setAttribute('icon', 'mdi:chevron-up');
            }
          }