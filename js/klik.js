const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');
        const targetContent = document.getElementById(target);
        const arrow = tab.querySelector('.arrow');

        const isActive = !targetContent.classList.contains('hidden');

        // Reset semua konten dan tombol
        contents.forEach(content => content.classList.add('hidden'));
        tabs.forEach(btn => {
            btn.classList.remove('bg-teal-700', 'border-white');
            btn.querySelector('.arrow').textContent = '▲';
        });

        // Jika belum aktif, aktifkan tombol & tampilkan konten
        if (!isActive) {
            targetContent.classList.remove('hidden');
            tab.classList.add('bg-teal-700', 'border-white');
            arrow.textContent = '▼';
        }
    });
});
