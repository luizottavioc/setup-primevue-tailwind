# Front-end: setup-primevue-tailwind

This repository sets up a project structure using PrimeVue and TailwindCSS. The proposed folder structure is designed to keep the project organized, scalable, and maintainable. Below, you will find an explanation of the structure and the purpose of each folder.

## Technologies
This project is built with the following technologies and libraries:
- [Vue 3](https://vuejs.org/) with [TypeScript](https://www.typescriptlang.org/): The core framework for building reactive user interfaces, utilizing TypeScript for type safety and better tooling.
- [PrimeVue](https://primevue.org/): A rich UI component library for Vue, providing pre-built components for fast and efficient development.
- [TailwindCSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom user interfaces with minimal effort.
- [Notivue](https://notivue.smastrom.io/): A lightweight and customizable notification system for Vue.js applications.
- [Phosphor Icons](https://phosphoricons.com/): A flexible and customizable icon set for consistent and beautiful iconography across the app.
- [Pinia](https://pinia.vuejs.org/): A lightweight and simple state management system for Vue 3, replacing Vuex as the recommended option.
- [Vue Router](https://router.vuejs.org/): The official Vue.js router for navigation and page routing within the application.
- [ESLint](https://eslint.org/): A tool for identifying and fixing problems in the code, ensuring that best practices and code consistency are maintained.
- [Prettier](https://prettier.io/): A code formatting tool to ensure consistent style across the project, working seamlessly with ESLint.

## Project Structure Overview
```
src/
│
├── assets/
│   └── (Static files such as images, logos, and CSS)
│
├── components/
│   └── (Global, reusable, and custom components across the application)
│
├── config/
│   └── (Project configuration objects such as colors, notifications, etc.)
│
├── modules/
│   └── (All the specific modules of the system are housed here - e.g., users, home)
│
├── router/
│   └── (Routing configuration for the application)
│
├── services/
│   └── (Business logic of the application, designed to be unit-testable)
│
├── stores/
│   └── (Application-wide state management stores - e.g., application.store, users.store)
│
├── types/
│   └── (TypeScript `.d.ts` files to define types and interfaces for the application)
```

## Detailed Explanation of Each Folder
### assets/
This folder contains static files such as images, logos, and stylesheets. Any assets required globally across the project are placed here.

### components/
In this folder, we store global, reusable components that are used across the application. These can be custom components tailored for the app’s functionality and user interface.

### config/
This folder houses project configuration objects such as color schemes, notification settings, and any other global configurations needed throughout the app.

### modules/
All individual modules of the system are kept here. Each module should have its own folder (e.g., users/, home/), and inside, you can repeat the following structure (except for the routes and config folders):
```
modules/
│
├── users/                (Example module)
│   ├── components/       (Module-specific components)
│   ├── services/         (Business logic for the module)
│   ├── stores/           (State management for the module)
│   ├── types/            (Module-specific TypeScript definitions)
│   ├── pages/            (Module pages or views)
│   ├── routes.ts         (Module-specific routes)
```
Each module has its own isolated structure, allowing for easy discovery of related logic and facilitating individual management of modules.
  - `components/`: Custom components related to this specific module.
  - `pages/`: Views and pages that belong to this specific module.
  - `routes.ts`: Module-specific routing configuration to connect its pages/views.
  - `services/`: Business logic relevant to this module.
  - `stores/`: Pinia stores for the module.
  - `types/`: TypeScript definitions specific to the module.
This modular structure makes it easy to scale the project while maintaining clear boundaries between different areas of the application.
### router/
The router folder contains all the configuration for the application's routes. It centralizes how pages are navigated within the app.

### services/
This folder contains the business logic and services of the application. The idea is that all the code here is reusable and is designed to be easily testable. Each service should be scoped by functionality (not by modules).

### stores/
This folder contains the application's stores for state management, such as application.store.ts and users.store.ts. It uses a central store system (Pinia) to manage and share state across the entire application.

### types/
The types folder is where TypeScript definition files (*.d.ts) are placed to define and organize the interfaces, types, and contracts used across the application. This ensures type safety and helps with code maintenance.

### Modular Structure
One of the key features of this structure is that each module under modules/ follows a self-contained structure. This makes it easier to maintain, develop, and isolate logic per module. By having components, pages, services, stores, and types for each module, we ensure that configurations remain highly modularized and easy to manage.