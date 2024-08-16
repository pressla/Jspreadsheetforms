import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import jspreadsheet from 'jspreadsheet-ce';

@Component({
  selector: 'app-table',
  template: '<div #spreadsheet></div>'
})
export class TableComponent implements OnInit {
  @ViewChild('spreadsheet', { static: true }) spreadsheetEl!: ElementRef;
  
  private table: any;

  ngOnInit() {
    this.initTable();
  }

  initTable() {
    this.table = jspreadsheet(this.spreadsheetEl.nativeElement, {
      data: [
        ['', '', '', 'Carl Schenck', 'Hindemith', 'Masao Horiba', 'Atsushi Horiba'],
        ['', '', '', 'Universal Dynamometer (Brake Emission)', 'NVH Dynamometer (Brake Emission)', 'NVH Dynamometer', 'High-Performance Dynamometer'],
        ['Day', 'Date', 'CW', 'Customer | Project Info', 'Customer | Project Info', 'Customer | Project Info', 'Customer | Project Info'],
        ['So', '26. Mai. 24', '21', 'H007 Horiba Intern', 'H007 Horiba Intern | LS3', 'H014 ADVICS Europe | T2414060-M H2024-15', ''],
        ['Mo', '27. Mai. 24', '22', 'H017 Stellantis', 'H007 Horiba Intern | LS3', 'H014 ADVICS Europe | T2414060-M H2024-15', 'H011 VW AG | Wintertest - Test 3'],
        // ... Add more rows as needed
      ],
      columns: [
        { type: 'text', width: 50 },
        { type: 'text', width: 100 },
        { type: 'text', width: 50 },
        { type: 'text', width: 200 },
        { type: 'text', width: 200 },
        { type: 'text', width: 200 },
        { type: 'text', width: 200 },
      ],
      mergeCells: {
        A1: [1, 3],
        B1: [1, 3],
        C1: [1, 3],
        D1: [1, 1, 4, 1],
        E1: [1, 1, 4, 1],
        F1: [1, 1, 4, 1],
        G1: [1, 1, 4, 1],
      },
      style: {
        A1: 'background-color: #f0f0f0;',
        B1: 'background-color: #f0f0f0;',
        C1: 'background-color: #f0f0f0;',
        D1: 'background-color: #90EE90;',
        E1: 'background-color: #98FB98;',
        F1: 'background-color: #D3D3D3;',
        G1: 'background-color: #ADD8E6;',
      }
    });
  }
}