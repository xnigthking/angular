// src/app/app.component.ts
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterModule } from './footer/footer.module';  // Importando o FooterModule

@Component({
  selector: 'app-root',
  standalone: true,  // Tornando o AppComponent um componente standalone
  imports: [
    HeaderComponent,
    CarouselComponent,
    ContactFormComponent,
    AboutUsComponent,
    FooterModule  // Usando FooterModule para poder usar o FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
