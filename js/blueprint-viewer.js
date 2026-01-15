/**
 * Screenshot Gallery Modal
 * Soporta múltiples imágenes por proyecto con navegación
 * Usa event delegation para proyectos renderizados dinámicamente
 */
(function () {
    'use strict';

    // Elementos del DOM (estáticos)
    const modal = document.getElementById('blueprintModal');
    const modalTitle = document.getElementById('modalTitle');
    const imageCounter = document.getElementById('imageCounter');
    const diagramImage = document.getElementById('diagramImage');
    const closeButton = document.querySelector('.modal-close');
    const backdrop = document.querySelector('.modal-backdrop');
    const projectsContainer = document.getElementById('projects');
    const prevButton = document.querySelector('.gallery-prev');
    const nextButton = document.querySelector('.gallery-next');
    const dotsContainer = document.getElementById('galleryDots');
    const captionElement = document.getElementById('galleryCaption');

    // Estado de la galería
    let currentScreenshots = [];
    let currentIndex = 0;
    let projectTitle = '';

    /**
     * Actualiza la imagen mostrada
     */
    function updateImage() {
        if (currentScreenshots.length === 0) return;

        const screenshot = currentScreenshots[currentIndex];
        diagramImage.src = screenshot.src;
        diagramImage.alt = `Screenshot: ${screenshot.caption || projectTitle}`;

        // Actualizar título con nombre del archivo
        const fileName = screenshot.src.split('/').pop();
        modalTitle.textContent = fileName;

        // Actualizar contador (1/3 formato)
        if (currentScreenshots.length > 1) {
            imageCounter.textContent = `(${currentIndex + 1}/${currentScreenshots.length})`;
        } else {
            imageCounter.textContent = '';
        }

        // Actualizar caption
        captionElement.textContent = screenshot.caption || '';

        // Actualizar dots
        updateDots();

        // Actualizar estado de botones de navegación
        updateNavButtons();
    }

    /**
     * Actualiza los indicadores (dots)
     */
    function updateDots() {
        if (currentScreenshots.length <= 1) {
            dotsContainer.innerHTML = '';
            return;
        }

        dotsContainer.innerHTML = currentScreenshots.map((_, index) =>
            `<button class="gallery-dot${index === currentIndex ? ' active' : ''}" 
                     data-index="${index}" 
                     aria-label="Ir a imagen ${index + 1}"
                     title="Imagen ${index + 1}"></button>`
        ).join('');
    }

    /**
     * Actualiza visibilidad de botones prev/next
     */
    function updateNavButtons() {
        const showNav = currentScreenshots.length > 1;
        prevButton.style.display = showNav ? 'flex' : 'none';
        nextButton.style.display = showNav ? 'flex' : 'none';

        // Deshabilitar en los extremos (opcional - comentado para loop infinito)
        // prevButton.disabled = currentIndex === 0;
        // nextButton.disabled = currentIndex === currentScreenshots.length - 1;
    }

    /**
     * Navega a la imagen anterior
     */
    function prevImage() {
        if (currentScreenshots.length <= 1) return;
        currentIndex = (currentIndex - 1 + currentScreenshots.length) % currentScreenshots.length;
        updateImage();
    }

    /**
     * Navega a la imagen siguiente
     */
    function nextImage() {
        if (currentScreenshots.length <= 1) return;
        currentIndex = (currentIndex + 1) % currentScreenshots.length;
        updateImage();
    }

    /**
     * Navega a un índice específico
     */
    function goToImage(index) {
        if (index >= 0 && index < currentScreenshots.length) {
            currentIndex = index;
            updateImage();
        }
    }

    /**
     * Abre el modal con los screenshots del proyecto
     */
    function openModal(screenshots, title) {
        currentScreenshots = screenshots;
        currentIndex = 0;
        projectTitle = title;

        // Activar modal
        modal.classList.add('active');
        document.body.classList.add('modal-open');

        // Mostrar primera imagen
        updateImage();

        // Focus en el botón de cerrar para accesibilidad
        setTimeout(() => closeButton.focus(), 100);
    }

    /**
     * Cierra el modal y limpia el estado
     */
    function closeModal() {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');

        // Limpiar después de la animación (usar placeholder transparente para evitar error)
        setTimeout(() => {
            diagramImage.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
            modalTitle.textContent = 'screenshot.png';
            imageCounter.textContent = '';
            captionElement.textContent = '';
            dotsContainer.innerHTML = '';
            currentScreenshots = [];
            currentIndex = 0;
        }, 200);
    }

    /**
     * Manejador de teclas
     */
    function handleKeydown(e) {
        if (!modal.classList.contains('active')) return;

        switch (e.key) {
            case 'Escape':
                closeModal();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
            case 'ArrowRight':
                nextImage();
                break;
        }
    }

    /**
     * Manejador para cerrar al hacer clic en el backdrop
     */
    function handleBackdropClick(e) {
        if (e.target === backdrop) {
            closeModal();
        }
    }

    /**
     * Inicializar todos los event listeners
     */
    function init() {
        // EVENT DELEGATION: Escuchar clicks en el contenedor de proyectos
        if (projectsContainer) {
            projectsContainer.addEventListener('click', (e) => {
                const link = e.target.closest('.architecture-link');
                if (link) {
                    e.preventDefault();
                    const screenshotsData = link.dataset.screenshots;
                    const title = link.dataset.title;

                    if (screenshotsData) {
                        try {
                            const screenshots = JSON.parse(screenshotsData);
                            openModal(screenshots, title);
                        } catch (error) {
                            console.error('Error parsing screenshots data:', error);
                        }
                    }
                }
            });
        }

        // Botones de navegación
        if (prevButton) {
            prevButton.addEventListener('click', prevImage);
        }
        if (nextButton) {
            nextButton.addEventListener('click', nextImage);
        }

        // Clicks en dots (event delegation)
        if (dotsContainer) {
            dotsContainer.addEventListener('click', (e) => {
                const dot = e.target.closest('.gallery-dot');
                if (dot) {
                    const index = parseInt(dot.dataset.index, 10);
                    goToImage(index);
                }
            });
        }

        // Event listeners para cerrar modal
        if (closeButton) {
            closeButton.addEventListener('click', closeModal);
        }
        if (backdrop) {
            backdrop.addEventListener('click', handleBackdropClick);
        }

        // Teclado: ESC, flechas
        document.addEventListener('keydown', handleKeydown);

        // Prevenir cierre al hacer clic en el contenedor del modal
        const modalContainer = document.querySelector('.modal-container');
        if (modalContainer) {
            modalContainer.addEventListener('click', (e) => e.stopPropagation());
        }

        // Manejo de errores de carga de imagen (solo si hay src real)
        if (diagramImage) {
            diagramImage.addEventListener('error', () => {
                // Ignorar error si el src está vacío o es placeholder
                if (diagramImage.src && !diagramImage.src.startsWith('data:')) {
                    diagramImage.alt = 'Error al cargar la imagen';
                }
            });
        }
    }

    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
