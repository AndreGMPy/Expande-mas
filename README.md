# EXPANDE+

Sitio oficial de EXPANDE+, una agencia integral que conecta marketing, creación de contenido y soluciones tecnológicas para ayudar a los negocios a atraer atención, convertir oportunidades y crecer.

## Stack

- Next.js 16 con App Router
- React 19 y TypeScript
- Tailwind CSS 4
- Motion for React
- Lucide React
- `next/image` y `next/font`

## Instalación

El proyecto utiliza exclusivamente pnpm. Si pnpm todavía no está disponible en el equipo, se puede habilitar mediante Corepack con `corepack enable pnpm`.

```bash
pnpm install
```

## Desarrollo

```bash
pnpm dev
```

La aplicación quedará disponible normalmente en `http://localhost:3000`.

## Verificaciones y build

```bash
pnpm lint
pnpm build
pnpm start
```

## Estructura principal

- `src/app`: ruta principal, estilos globales, metadata, sitemap y robots.
- `src/components/layout`: navegación y footer.
- `src/components/sections`: secciones editoriales y comerciales de la página.
- `src/components/ui`: piezas reutilizables, reveals, botones y visuales.
- `src/components/effects`: efectos ambientales ligeros.
- `src/config/site.ts`: identidad del sitio y datos de contacto.
- `src/data/services.ts`: contenido estructurado de los ocho servicios.
- `public/expande-plus`: assets oficiales usados por la aplicación.
- `public/expande-plus-assets`: paquete original de assets y su documentación, conservados sin cambios.

## Modificar datos de contacto

Edita el objeto `CONTACT` en `src/config/site.ts`:

```ts
export const CONTACT = {
  whatsapp: "",
  email: "",
  instagram: "",
  facebook: "",
};
```

Mientras los valores estén vacíos, los enlaces sociales y el botón de WhatsApp regresan de forma segura a la sección de contacto.

## Dominio y SEO

Cuando exista el dominio definitivo, define `NEXT_PUBLIC_SITE_URL` en `.env.local` sin diagonal final:

```bash
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

Este valor alimenta Open Graph, `robots.txt` y `sitemap.xml`. En desarrollo se utiliza `http://localhost:3000` de forma segura.

## Modificar servicios

Los títulos, descripciones, características e imágenes se administran en `src/data/services.ts`. Cada servicio implementa la interfaz `Service`.

## Formulario

El formulario incluye validación frontend y estados accesibles. No envía información todavía porque no hay un endpoint configurado; informa honestamente que el envío en línea estará disponible próximamente. La función `handleSubmit` en `src/components/sections/Contact.tsx` está preparada como punto de integración para el backend.

## Assets

Los recursos oficiales se sirven desde `public/expande-plus` y se renderizan mediante `next/image`. El paquete original, incluido su README y manifiesto de dimensiones, permanece intacto en `public/expande-plus-assets`.
