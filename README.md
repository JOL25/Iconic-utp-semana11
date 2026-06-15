# Iconic-utp-semana11

Aplicacion movil hibrida desarrollada con Ionic + Angular a partir de las diapositivas de Semana 11 y Semana 12.

## Proyecto

La app esta en la carpeta:

```bash
app-utp
```

Incluye:

- Home con formulario de Registro UTP, `ngModel`, `ion-input`, `ion-select`, botones y validacion.
- Ruta `/detalle`.
- Componente `resumen-app` con comunicacion padre a hijo mediante `@Input()`.
- Componente `selector-tipo` con comunicacion hijo a padre mediante `@Output()`.
- Script `generar-apk.sh` para generar `mi-app-debug.apk` en un entorno Linux/Codespaces.

## Ejecutar en navegador

```bash
cd app-utp
npm install
npm start
```

En Codespaces, usar:

```bash
ionic serve --host 0.0.0.0 --port 8100
```

## Generar APK debug en Codespaces/Linux

```bash
cd app-utp
chmod +x generar-apk.sh
./generar-apk.sh
```
