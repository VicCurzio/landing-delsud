# Landing Delsud

Landing page desarrollada como prueba técnica para el puesto de Frontend
Developer en Grupo Delsud. Presenta la propuesta, características, testimonios,
preguntas frecuentes y sponsors, en una sola página pensada mobile-first.

En producción: <https://landing-delsud-challenge.vercel.app/>

## Requisitos

| | |
|---|---|
| Node | 20 o superior |
| Base de datos | no usa |
| Servicios externos | ninguno, no hay variables de entorno |

## Puesta en marcha (local, en cinco minutos)

```bash
git clone https://github.com/VicCurzio/landing-delsud.git && cd landing-delsud
npm install
npm run dev
```

Abre en <http://localhost:3000>.

## Verificación

No hay suite de tests: es una página estática sin lógica. Lo que corre:

```bash
npm run lint
npm run build   # que compile es parte de la verificación
```

Los dos corren en GitHub Actions en cada push y en cada pull request
(`.github/workflows/ci.yml`).

## Cómo se despliega

Vercel, conectado al repositorio: cada push a `main` publica. No hay paso
manual ni workflow de despliegue propio.

## Decisiones

- **Next.js con generación estática.** No hay datos que cambien: el HTML se
  genera al compilar y llega listo al navegador.
- **CSS Modules** en vez de una librería de estilos: los estilos quedan
  encapsulados por componente y no hay forma de que colisionen entre secciones.
- **Un componente por carpeta**, con su `.module.css` al lado. Un archivo suelto
  no tiene dónde poner sus estilos sin ensuciar al vecino.
- **`next/image`** para que las imágenes se sirvan optimizadas y en el tamaño
  que corresponde a cada pantalla.

## Estructura del código

```text
src/app/
  components/     # un componente por carpeta, con su CSS Module
  styles/         # estilos globales
  layout.js       # layout general
  page.js         # la página: compone las secciones
```
