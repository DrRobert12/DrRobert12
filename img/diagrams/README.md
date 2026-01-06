# Diagramas de Arquitectura

Este directorio contiene los diagramas de arquitectura de los proyectos.

## Recomendaciones de Diseño

### Formato
- **Formato recomendado**: PNG con fondo transparente
- **Resolución**: Mínimo 1200px de ancho
- **Peso máximo**: 500KB para carga rápida

### Herramientas Sugeridas
- [Draw.io](https://app.diagrams.net/) - Editor gratuito online
- [Excalidraw](https://excalidraw.com/) - Dibujos estilo sketch
- [Mermaid](https://mermaid.live/) - Diagramas desde código

### Estilo Visual
Para mantener coherencia con el tema oscuro del portfolio:

**Colores recomendados:**
- Fondo: Transparente o #1e2127
- Líneas principales: #61afef (azul terminal)
- Componentes backend: #98c379 (verde)
- Bases de datos: #56b6c2 (cyan)
- Servicios externos: #c678dd (púrpura)
- Texto: #abb2bf (gris claro)

**Tipografía:**
- JetBrains Mono o fuentes monoespaciadas
- Tamaño mínimo de texto: 12pt

### Nombres de Archivo
Los nombres deben coincidir con los especificados en `proyect.json`:
- `arch_payments.png`
- `arch_auth.png`

## Integración

Los diagramas se referencian en el archivo JSON:
```json
"architecture_diagram": "/static/img/diagrams/arch_payments.png"
```

El Blueprint Viewer modal mostrará automáticamente estos diagramas cuando el usuario haga clic en `[ Architecture.png ]`.
