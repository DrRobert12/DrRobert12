
(function() {
    'use strict';

    function hydrateEmailLink() {
        const emailLink = document.getElementById('emailLink');
        const emailText = document.getElementById('emailText');
        
        if (!emailLink || !emailText) {
            console.warn('Email elements not found in DOM');
            return;
        }

        const encodedEmail = emailLink.dataset.enc;
        
        if (!encodedEmail) {
            console.error('No encoded email found in data-enc attribute');
            emailText.textContent = 'Error: No contact data';
            return;
        }

        try {
            // Decodificar Base64 usando función nativa del navegador
            const decodedEmail = atob(encodedEmail);
            
            // Validar formato de email básico
            if (!decodedEmail.includes('@') || !decodedEmail.includes('.')) {
                throw new Error('Invalid email format');
            }

            // Inyectar dinámicamente en el DOM
            emailLink.href = `mailto:${decodedEmail}`;
            emailText.textContent = decodedEmail;
            
            // Guardar email decodificado para uso del botón de copiar
            emailLink.dataset.decodedEmail = decodedEmail;
            
        } catch (error) {
            console.error('Error decoding email:', error);
            emailText.textContent = 'Error loading contact';
        }
    }

    /**
     * Funcionalidad de copiar email al portapapeles
     */
    function initializeCopyButton() {
        const copyBtn = document.getElementById('copyEmailBtn');
        const emailLink = document.getElementById('emailLink');
        
        if (!copyBtn || !emailLink) {
            return;
        }

        copyBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            
            const emailToCopy = emailLink.dataset.decodedEmail;
            
            if (!emailToCopy) {
                return;
            }

            try {
                await navigator.clipboard.writeText(emailToCopy);
                
                // Feedback visual
                const copyText = copyBtn.querySelector('.copy-text');
                const originalText = copyText.textContent;
                
                copyBtn.classList.add('copied');
                copyText.textContent = 'Copied!';
                
                // Restaurar después de 2 segundos
                setTimeout(() => {
                    copyBtn.classList.remove('copied');
                    copyText.textContent = originalText;
                }, 2000);
                
            } catch (error) {
                console.error('Failed to copy email:', error);
                
                // Fallback para navegadores antiguos
                fallbackCopyToClipboard(emailToCopy, copyBtn);
            }
        });
    }

    /**
     * Fallback para navegadores que no soportan Clipboard API
     */
    function fallbackCopyToClipboard(text, button) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                const copyText = button.querySelector('.copy-text');
                button.classList.add('copied');
                copyText.textContent = 'Copied!';
                
                setTimeout(() => {
                    button.classList.remove('copied');
                    copyText.textContent = 'Copy';
                }, 2000);
            }
        } catch (error) {
            console.error('Fallback copy failed:', error);
        }
        
        document.body.removeChild(textArea);
    }

    /**
     * Inicialización del módulo
     */
    function init() {
        // Hidratar email cuando el DOM esté listo
        hydrateEmailLink();
        
        // Inicializar botón de copiar
        initializeCopyButton();
        
        console.log('Contact deobfuscation module initialized');
    }

    // Ejecutar cuando el DOM esté completamente cargado
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
