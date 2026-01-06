/**
 * Blueprint Viewer Modal
 * Usa event delegation para funcionar con proyectos renderizados dinámicamente
 */
(function() {
    'use strict';

    // Elementos del DOM (estáticos)
    const modal = document.getElementById('blueprintModal');
    const modalTitle = document.getElementById('modalTitle');
    const diagramImage = document.getElementById('diagramImage');
    const closeButton = document.querySelector('.modal-close');
    const backdrop = document.querySelector('.modal-backdrop');
    const projectsContainer = document.getElementById('projects');

    /**
     * Abre el modal con el diagrama especificado
     */
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
     * Inicializar todos los event listeners
     */
    function init() {
        // EVENT DELEGATION: Escuchar clicks en el contenedor de proyectos
        // Esto funciona aunque los proyectos se rendericen después
        if (projectsContainer) {
            projectsContainer.addEventListener('click', (e) => {
                // Buscar si el click fue en un .architecture-link o su hijo
                const link = e.target.closest('.architecture-link');
                if (link) {
                    e.preventDefault();
                    const diagramPath = link.dataset.diagram;
                    const projectTitle = link.dataset.title;
                    
                    if (diagramPath) {
                        openModal(diagramPath, projectTitle);
                    }
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
        document.addEventListener('keydown', handleEscapeKey);

        // Prevenir cierre al hacer clic en el contenedor del modal
        const modalContainer = document.querySelector('.modal-container');
        if (modalContainer) {
            modalContainer.addEventListener('click', (e) => e.stopPropagation());
        }

        // Manejo de errores de carga de imagen
        if (diagramImage) {
            diagramImage.addEventListener('error', () => {
                console.error('Error al cargar el diagrama');
                diagramImage.alt = 'Error al cargar el diagrama de arquitectura';
            });
        }

        console.log('Blueprint Viewer initialized (event delegation)');
    }

    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
