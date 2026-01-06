
(function() {
    'use strict';

    // Elementos del DOM
    const modal = document.getElementById('blueprintModal');
    const modalTitle = document.getElementById('modalTitle');
    const diagramImage = document.getElementById('diagramImage');
    const closeButton = document.querySelector('.modal-close');
    const backdrop = document.querySelector('.modal-backdrop');
    const architectureLinks = document.querySelectorAll('.architecture-link');

    function openModal(diagramPath, projectTitle) {
        // Configurar imagen y título
        diagramImage.src = diagramPath;
        diagramImage.alt = `Diagrama de arquitectura: ${projectTitle}`;
        
        // Extraer nombre del archivo de la ruta
        const fileName = diagramPath.split('/').pop();
        modalTitle.textContent = fileName;

        // Activar modal
        modal.classList.add('active');
        document.body.classList.add('modal-open');

        // Focus en el botón de cerrar para accesibilidad
        setTimeout(() => closeButton.focus(), 100);
    }

    /**
     * Cierra el modal y limpia el estado
     */
    function closeModal() {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');

        // Limpiar imagen después de la animación
        setTimeout(() => {
            diagramImage.src = '';
            modalTitle.textContent = 'architecture.png';
        }, 200);
    }

    /**
     * Manejador de eventos para los enlaces de arquitectura
     */
    function initializeArchitectureLinks() {
        architectureLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const diagramPath = link.dataset.diagram;
                const projectTitle = link.dataset.title;
                
                if (diagramPath) {
                    openModal(diagramPath, projectTitle);
                }
            });
        });
    }

    /**
     * Manejador para cerrar modal con tecla ESC
     */
    function handleEscapeKey(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
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
     * Manejador para el botón de cerrar
     */
    function handleCloseButton() {
        closeModal();
    }

    /**
     * Prevenir propagación de clics dentro del modal
     */
    function preventModalContainerClick(e) {
        e.stopPropagation();
    }

    /**
     * Inicializar todos los event listeners
     */
    function init() {
        // Event listeners para abrir modal
        initializeArchitectureLinks();

        // Event listeners para cerrar modal
        closeButton.addEventListener('click', handleCloseButton);
        backdrop.addEventListener('click', handleBackdropClick);
        document.addEventListener('keydown', handleEscapeKey);

        // Prevenir cierre al hacer clic en el contenedor
        const modalContainer = document.querySelector('.modal-container');
        modalContainer.addEventListener('click', preventModalContainerClick);

        // Manejo de errores de carga de imagen
        diagramImage.addEventListener('error', () => {
            console.error('Error al cargar el diagrama');
            diagramImage.alt = 'Error al cargar el diagrama de arquitectura';
        });

        console.log('Blueprint Viewer initialized successfully');
    }

    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
