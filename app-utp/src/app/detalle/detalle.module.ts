import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ResumenAppComponent } from '../components/resumen-app/resumen-app.component';
import { SelectorTipoComponent } from '../components/selector-tipo/selector-tipo.component';
import { DetallePageRoutingModule } from './detalle-routing.module';
import { DetallePage } from './detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePageRoutingModule,
    ResumenAppComponent,
    SelectorTipoComponent,
  ],
  declarations: [DetallePage],
})
export class DetallePageModule {}
