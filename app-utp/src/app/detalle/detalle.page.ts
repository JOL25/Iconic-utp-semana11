import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: false,
})
export class DetallePage {
  tipo = 'Sin tipo seleccionado';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.tipo = params['tipo'] || 'Sin tipo seleccionado';
    });
  }

  actualizarTipo(nuevoTipo: string) {
    this.tipo = nuevoTipo;
  }
}
