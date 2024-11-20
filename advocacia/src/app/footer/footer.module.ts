// src/app/footer/footer.module.ts
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],  // Declara o FooterComponent
  exports: [FooterComponent]        // Exporta o FooterComponent para ser utilizado fora do módulo
})
export class FooterModule {}
