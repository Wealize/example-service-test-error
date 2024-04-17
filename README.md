# Ejemplo
Ejemplo mínimo para reproducir el problema de test de servicio con JEST. 
El proyecto está con TS, pero el problema parece radicar en incluir como dependencia algunos paquetes.
El ejemplo está preparado para que falle con el paquete pkce-challenge.

Se configura un endpoint y un test que hacen uso del mismo servicio (src/core/api/test/test.service.ts).
El endpoint funciona correctamente pero el test con Jest no.

## Requisitos
- node 16. Por ciertos motivos, ahora mismo necesitamos que el proyecto se ejecute sobre node 16 y no se puede cambiar.

## Quick start
- npm i (ok)
- npm build (ok)
- npm run serve (ok, ir a http://localhost:8000/api/test, despues Ctrl+C)
- npm run test (falla)
