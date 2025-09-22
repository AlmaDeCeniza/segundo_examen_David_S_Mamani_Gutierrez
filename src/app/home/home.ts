import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  // Solicita permiso para mostrar notificaciones
  pedirPermiso(): void {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          alert('Permiso concedido para notificaciones');
        } else {
          alert('Permiso denegado para notificaciones');
        }
      });
    } else {
      alert('Tu navegador no soporta notificaciones');
    }
  }

  // Muestra una notificación
  mostrarNotificacion(): void {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Hola!', {
        body: 'Esta es una notificación de prueba',
        icon: 'assets/img/ipad.png' // opcional, puedes cambiar la imagen
      });
    } else {
      alert('No tienes permiso para mostrar notificaciones');
    }
  }

}
