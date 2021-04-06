import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-by-user';
  users: any[];
  duties: any[];
  selectedDuties: any[];
  items: any;
  constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.users = [
          { nickName: 'heav3nz', name: 'Juerguen', lastName: 'Herrera', image: '2089' },
          { nickName: 'ch1k1$', name: 'Alexandra', lastName: 'Matamoros', image: '2016'},
          { nickName: 'w0lfbane', name: 'Jessy', lastName: 'Rodríguez', image: '0080' }
        ] ;
        this.duties = [
          { id: 1, todo: 'Kill Terminal Process' }
        ];
        this.items = [
          {
              label: 'File',
              items: [{
                      label: 'New', 
                      icon: 'pi pi-fw pi-plus',
                      items: [
                          {label: 'Project'},
                          {label: 'Other'},
                      ]
                  },
                  {label: 'Open'},
                  {label: 'Quit'}
              ]
          },
          {
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              items: [
                  {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                  {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
              ]
          }
      ];
    }
}
