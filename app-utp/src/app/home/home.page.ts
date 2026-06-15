import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  nombre = '';
  correo = '';
  tipoApp = '';
  mensaje = '';
  registroValido = false;

  constructor(private router: Router) {}

  validarRegistro() {
    const correoValido = this.correo.includes('@') && this.correo.includes('.');

    if (!this.nombre.trim() || !this.correo.trim() || !this.tipoApp) {
      this.registroValido = false;
      this.mensaje = 'Complete todos los campos antes de continuar.';
      return;
    }

    if (!correoValido) {
      this.registroValido = false;
      this.mensaje = 'Ingrese un correo valido.';
      return;
    }

    this.registroValido = true;
    this.mensaje = 'Registro valido. Bienvenido/a ' + this.nombre + '. Tipo de app: ' + this.tipoApp + '.';
  }

  limpiar() {
    this.nombre = '';
    this.correo = '';
    this.tipoApp = '';
    this.mensaje = '';
    this.registroValido = false;
  }

  irADetalle() {
    this.validarRegistro();

    if (!this.registroValido) {
      return;
    }

    this.router.navigate(['/detalle'], {
      queryParams: { tipo: this.tipoApp },
    });
  }
}
