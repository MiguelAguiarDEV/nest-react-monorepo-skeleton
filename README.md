# 🏗️ nest-react-monorepo

Bienvenido al monorepo que integra un backend robusto en **NestJS** y un frontend moderno en **React**. Este proyecto está diseñado para facilitar el desarrollo, mantenimiento y escalabilidad de aplicaciones fullstack, centralizando dependencias y recursos compartidos.

---

## 📁 Estructura del Proyecto

```
nest-react-monorepo/
│
├── apps/
│   ├── backend/    # API RESTful con NestJS
│   └── frontend/   # SPA con React + Vite
│
├── packages/       # Librerías y utilidades compartidas (opcional)
│
├── .gitignore      # Exclusiones de control de versiones
├── package.json    # Scripts y dependencias raíz
├── tsconfig.base.json
└── README.md
```

---

## 🚀 Primeros Pasos

### 1. Requisitos

- **Node.js** >= 18.x
- **npm** >= 9.x

### 2. Instalación

Instala todas las dependencias del monorepo:

```sh
npm install
```

---

## 🛠️ Comandos Útiles

Desde la raíz del proyecto puedes ejecutar:

| Comando                  | Descripción                    |
| ------------------------ | ------------------------------ |
| `npm run frontend:dev`   | Inicia el frontend en modo dev |
| `npm run backend:dev`    | Inicia el backend en modo dev  |
| `npm run frontend:build` | Compila el frontend            |
| `npm run backend:build`  | Compila el backend             |
| `npm run frontend:test`  | Ejecuta tests del frontend     |
| `npm run backend:test`   | Ejecuta tests del backend      |
| `npm run lint`           | Lint global del monorepo       |
| `npm run format`         | Formatea el código             |

> **Nota:** Puedes agregar o modificar scripts en el `package.json` raíz o en cada app.

---

## 🌱 Desarrollo

- **Frontend:**  
  Ubicado en `apps/frontend`. Usa React y Vite para desarrollo rápido y moderno.
- **Backend:**  
  Ubicado en `apps/backend`. Basado en NestJS, ideal para APIs escalables y mantenibles.
- **Paquetes compartidos:**  
  Crea utilidades o componentes reutilizables en `packages/`.

---

## 🧹 Buenas Prácticas

- Mantén las dependencias sincronizadas.
- Usa scripts de lint y format antes de hacer commits.
- Los archivos sensibles (`.env`, logs, builds, etc.) están ignorados por `.gitignore`.

---

## 📄 Licencia

MIT

---

¡Feliz desarrollo! 🚀
