 
              // Function to handle the image view popup
              function viewImage(imageSrc) {
                window.open(imageSrc, "_blank");
              }

              // Enhanced tilt effect with JavaScript for better control
              document.addEventListener('DOMContentLoaded', function () {
                const cards = document.querySelectorAll('.project-card, .certificate-card');

                cards.forEach(card => {
                  // Mouse move tilt effect
                  card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const angleX = (y - centerY) / 20;
                    const angleY = (centerX - x) / 20;

                    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.03)`;
                  });

                  // Reset on mouse leave
                  card.addEventListener('mouseleave', () => {
                    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
                  });

                  // Click/press effect
                  card.addEventListener('mousedown', () => {
                    card.style.transform = 'perspective(1000px) rotateX(10deg) rotateY(10deg) scale(0.98)';
                  });

                  card.addEventListener('mouseup', () => {
                    card.style.transform = 'perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.03)';
                  });
                });
              });
            