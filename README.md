# Arsenal de Ventas · CDI

Módulo de entrenamiento comercial del **Central de Ventas** (Consultoría de Importación).
HTML, CSS y JavaScript vanilla — sin dependencias ni frameworks. Mismo sistema de diseño que el Central de Ventas.

## Estructura

```
index.html              → Landing principal (HUB) con las tarjetas de cada recurso
arsenal.css             → Sistema de diseño compartido (temas claro/oscuro)
arsenal.js              → Comportamientos compartidos (tema, reloj, reveal, spotlight)
videos-de-cierre/       → Biblioteca de ventas reales grabadas
aperturas/              → Guiones de apertura y sondeo
guiones/                → Guiones de llamada paso a paso
```

Recursos en construcción (aún no incluidos): Técnicas de Cierre, Manejo de Objeciones.

## Publicar en GitHub Pages

1. Crea un repositorio llamado **`ARSENAL-DE-VENTAS`**.
2. Sube **el contenido de esta carpeta a la raíz** del repositorio (index.html debe quedar en la raíz, no dentro de otra carpeta).
3. En el repo: **Settings → Pages → Branch: `main` / root → Save**.
4. Quedará disponible en `https://<usuario>.github.io/ARSENAL-DE-VENTAS/`.

> Nota: el botón "Central de Ventas" del topbar apunta a la URL raíz de la cuenta.
> Reemplázala por la URL real del Central de Ventas si es distinta (buscar `href="https://consultoriaimportacion-crypto.github.io/"` en `index.html`).

## Cómo agregar contenido

- **Videos de Cierre:** editar el array `VIDEOS` en `videos-de-cierre/index.html`.
- **Aperturas / Guiones:** editar el array `GUIONES` en su respectivo `index.html`.
  Cada bloque tiene `items` y/o `subs`; cada item es `{t:'say'|'tip'|'wait', x:'...'}`.
