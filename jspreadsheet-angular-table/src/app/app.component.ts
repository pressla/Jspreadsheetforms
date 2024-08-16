import { Component } from '@angular/core';
import { TableComponent } from './table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Jspreadsheet Angular Table';
}
