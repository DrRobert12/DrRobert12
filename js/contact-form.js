/**
 * Contact Form - AJAX Submission
 * Envía el formulario sin redirección y muestra feedback inline
 */
(function () {
    'use strict';

    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');

    if (!form || !submitBtn || !formStatus) return;

    /**
     * Muestra mensaje de estado
     */
    function showStatus(type, message) {
        formStatus.className = `form-status ${type}`;
        formStatus.innerHTML = message;
        formStatus.style.display = 'block';
    }

    /**
     * Resetea el formulario después de éxito
     */
    function resetForm() {
        form.reset();
        submitBtn.disabled = false;
        submitBtn.querySelector('.submit-text').textContent = 'Enviar mensaje';
        submitBtn.querySelector('.submit-icon').textContent = '▶';
    }

    /**
     * Handle form submission
     */
    async function handleSubmit(e) {
        e.preventDefault();

        // Disable button and show loading
        submitBtn.disabled = true;
        submitBtn.querySelector('.submit-text').textContent = 'Enviando...';
        submitBtn.querySelector('.submit-icon').textContent = '⏳';
        formStatus.style.display = 'none';

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showStatus('success', `
                    <span class="status-icon">✔</span>
                    <span class="status-message">
                        <strong>HTTP/1.1 200 OK</strong> — Mensaje enviado correctamente. ¡Gracias por contactarme!
                    </span>
                `);
                resetForm();

                // Ocultar mensaje después de 8 segundos
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 8000);
            } else {
                const data = await response.json();
                throw new Error(data.error || 'Error al enviar');
            }
        } catch (error) {
            showStatus('error', `
                <span class="status-icon">✖</span>
                <span class="status-message">
                    <strong>HTTP/1.1 500 Error</strong> — No se pudo enviar. Intenta de nuevo o usa el email directo.
                </span>
            `);
            submitBtn.disabled = false;
            submitBtn.querySelector('.submit-text').textContent = 'Reintentar';
            submitBtn.querySelector('.submit-icon').textContent = '↻';
        }
    }

    // Add submit handler
    form.addEventListener('submit', handleSubmit);

})();
