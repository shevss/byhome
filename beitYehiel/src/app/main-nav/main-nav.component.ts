import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-main-nav',
  imports: [MatTabsModule,MatToolbarModule,MatFormFieldModule,MatCardModule,MatExpansionModule],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.css'
})
export class MainNavComponent {
  panelOpenState = false;
}
