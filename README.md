# --- SegundoExamenDavidSMamaniGutierrez ---

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.1.


## -- Framework CSS --
Se elegio **Bootstrap**.

## -- Template --
El proyecto esta basado en el template: **grayscale**   
[Start Bootstrap](https://startbootstrap.com/theme/grayscale).

**Licencia:** MIT License  
[Ver licencia completa](https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)

# --- Proceso --- 
**Layout**
 - se genero el layout: "ng g c layout" 
**Home**
 - se genero home: "ng g c home" 
**Template**
 - se adapto el template 


**Ruta /ui creada**
 - ng g c ui 
 - componentes agregados al ui.html

**Navegacion mejorada**
 - se agrego la opcion **ui componentes** para acceder y poder visualizarlos desde el navbar

**PWA**
 - se agrego el **pwa** ng add @angular/pwa --project segundo_examen_David_S_Mamani_Gutierre

**OFFLINE**
 - se logro hacer que la pagina recargara sin conexion "apenas"
 - ng build compila la aplicación web para producción
 - npx http-server -p 8080 -c-1 dist/segundo_examen_David_S_Mamani_Gutierrez/browser para probar la aplicacion web
 - Verificacion: Abrir DevTools → Application → Service Workers → marcar Offline → recargar.