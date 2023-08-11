import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
      this.menuItems = [
        {
          label: 'Colección',
          icon: 'pi pi-desktop',
          items: [
            {
              label: 'Peliculas',
              icon: 'pi pi-align-left',
              routerLink: 'movies',
            },
            {
              label: 'Categorías',
              icon: 'pi pi-dollar',
              routerLink: 'numbers',
            }
          ]
        },
        {
          label: 'Comprar',
          icon: 'pi pi-desktop',
          items: [
            {
              label: 'Todos los productos',
              icon: 'pi pi-desktop',
            },
          ]
        },
        {
          label: 'Acerca de',
          icon: 'pi pi-desktop',
        },
        {
          label: 'Contactanos',
          icon: 'pi pi-desktop',
        },
      ];
  }
}
