# Portfolio 2025

Este es mi portfolio personal fullstack. El backend está hecho con FastAPI (Python) y el frontend con Next.js (React).

---

## Backend (FastAPI)

### Requisitos

- Python 3.10+
- pip
- (Opcional) Entorno virtual

### Instalación

1. Clona el repositorio y entra a la carpeta del backend:
   ```sh
   git clone https://github.com/tuusuario/PortFolio_2025.git
   cd PortFolio_2025/portfolio-backend
   ```

2. Crea y activa el entorno virtual:
   ```sh
   python -m venv venv
   venv\Scripts\activate
   ```

3. Instala las dependencias:
   ```sh
   pip install fastapi uvicorn
   ```

### Ejecución

Para arrancar el backend simplemente ejecuta:
```sh
start.bat
```
Esto levanta el servidor en [http://localhost:8001](http://localhost:8001).

### Endpoints principales

- `GET /` → Mensaje de bienvenida

---

## Frontend (Next.js)

### Requisitos

- Node.js 18+
- npm

### Instalación

1. Ve a la carpeta del frontend:
   ```sh
   cd ../portfolio-frontend
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

### Ejecución

Para desarrollo:
```sh
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Notas

- El backend y el frontend corren en puertos distintos.
- Puedes modificar los endpoints del backend en `main.py`.
- Si conectas el frontend con el backend, asegúrate de usar la URL correcta (`http://localhost:8001`).

---

## Licencia

MIT
