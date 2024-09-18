/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';


bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(), // Angular animasyonlarını sağlıyoruz
    provideToastr({
      positionClass: 'toast-top-right', // Toastr mesajlarının sağ üst köşede çıkmasını sağlar
      preventDuplicates: true, // Aynı mesajın tekrarını önler
      timeOut: 3000, // Mesajın gösterimde kalma süresi (milisaniye)
    }), // Toastr'ı sağlıyoruz
    provideRouter(routes, withHashLocation()), // Router sağlayıcısı
    provideHttpClient(), // HttpClient sağlayıcısını ekliyoruz
  ],
}).catch((err) => console.error(err));
