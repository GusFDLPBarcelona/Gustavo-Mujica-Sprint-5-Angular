# Sprint 5 — Onboarding Digital

Aplicación de onboarding interactiva construida con **Angular 18** que presenta tres consejos clave para aprender a programar, a través de un carrusel de tarjetas animado con navegación por botones y puntos de progreso.

## Demo

[Ver demo en GitHub Pages](https://gusfdlpbarcelona.github.io/Gustavo-Mujica-Sprint-5-Angular/)

## Tecnologías

- Angular 18 (standalone components, nueva sintaxis de control de flujo `@if` / `@for`)
- TypeScript
- Bootstrap 5
- CSS animations

## Estructura del proyecto

```
onboarding/
├── src/app/
│   ├── escena/          # Componente carrusel: recibe los pasos vía @Input()
│   ├── home/            # Componente contenedor: obtiene los datos del servicio
│   ├── steps.service.ts # Servicio que provee los pasos del onboarding
│   └── istep.interface.ts
```

## Conceptos practicados

- **Arquitectura de componentes standalone** en Angular 18
- **`@Input()`** para pasar datos del componente padre al hijo
- **Servicios e inyección de dependencias** (`StepsService`)
- **Interfaces TypeScript** para tipar los datos (`iStep`)
- **Nueva sintaxis de control de flujo** (`@if`, `@for`) — Angular 17+
- **Binding de clases y estilos** (`[class.active]`, `[style.background-color]`)
- **Animaciones CSS** con `@keyframes` y control de reanimación vía `@if`

## Instalación

```bash
npm install
ng serve
```

Navega a `http://localhost:4200/`.
