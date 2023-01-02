import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouterNavigate {
  constructor(private router: Router) {}

  navigatePath(path: string): void {
    this.router.navigate([path]);
  }
}
