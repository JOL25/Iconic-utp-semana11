import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-resumen-app',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './resumen-app.component.html',
  styleUrls: ['./resumen-app.component.scss'],
})
export class ResumenAppComponent {
  @Input() tipo = '';
}
