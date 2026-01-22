# Coleccion Autos a Escala

Monorepo con frontend (Next App Router) y backend (NestJS + Prisma) para un catalogo personal de autos a escala.

## Requisitos
- Node >= 20
- PostgreSQL disponible para el backend

## Estructura
- `frontend/`: Next.js App Router + Tailwind
- `backend/`: NestJS + Prisma

## Configuracion
1) Copiar `backend/.env.example` a `backend/.env` y ajustar los valores.

## Desarrollo local
Frontend:
```bash
cd frontend
npm run dev
```

Backend:
```bash
cd backend
npm run start:dev
```

Swagger queda disponible en `http://localhost:3001/docs` y el health check en `http://localhost:3001/health`.

## Prisma
Cuando la base de datos este disponible:
```bash
cd backend
npx prisma migrate dev --name init
npx prisma generate
```
