import { inject } from '@angular/core';
import { CanActivateFn ,Router} from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Basit bir kimlik doğrulama kontrolü
  const isAuthenticated = true ;

  if (isAuthenticated) {
    return true; // Erişime izin ver
  } else {
    const router = inject(Router); // Router'ı manuel olarak inject ediyoruz
    router.navigate(['/login']); // Giriş sayfasına yönlendir
    return false; // Erişimi engelle
  }
};
