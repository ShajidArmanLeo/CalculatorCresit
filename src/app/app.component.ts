import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { RouterOutlet } from '@angular/router';

interface Application {
  value: string;
  viewValue: string;
}
interface Tile {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'Calculator-Ceresit';



  applications: Application[] = [
    {value: 'bathroom', viewValue: 'Bathrooms'},
    {value: 'kitchen', viewValue: 'Kitchen'},
    {value: 'living-room', viewValue: 'Living rooms'},
    {value: 'entrance', viewValue: 'Entrance/corridor'},
    {value: 'pool', viewValue: 'Pools'},
    {value: 'balcony', viewValue: 'Balconies/Terraces'},
    {value: 'heavy-traffic', viewValue: 'Heavy Traffic Area'},
    {value: 'industrial', viewValue: 'Industrial areas (car washing/industrial kitchen/food production/labs  etc…)'},
    {value: 'spa', viewValue: ' Spas, hammams (incl public areas)'}
  ];

  tiles: Tile[] = [
    {value: 'Gres', viewValue: 'Gres'},
    {value: 'Porcelain', viewValue: 'Porcelain'},
    {value: 'Earthenware', viewValue: 'Earthenware'},
    {value: 'Stoneware', viewValue: 'Stoneware'},
    {value: 'Natural stone', viewValue: 'Natural stone'},
    {value: 'Glass mosaics', viewValue: 'Glass mosaics'},
    {value: 'Mosaic', viewValue: 'Mosaic'}
  ];

}

