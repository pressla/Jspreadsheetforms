import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import jspreadsheet from 'jspreadsheet-ce';

@Component({
  selector: 'app-table',
  standalone: true,
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
        ['', '', '','' ,'','','','','', '','Carl Schenck','' ,'Hindemith', 'Masao Horiba', 'Atsushi Horiba'],
        ['', '', '','' ,'','','','','', '','Universal Dynamometer (Brake Emission)','' ,'NVH Dynamometer (Brake Emission)', 'NVH Dynamometer', 'High-Performance Dynamometer'],
        ['', 'Date', '','','','','Rieth','Stefan','Lutz' ,'Customer', 'Project Info', 'Customer | Project Info', 'Customer | Project Info', 'Customer | Project Info'],
        ['So', '26/5/2024', '21','NV' ,'NV','1','','','','','H007 Horiba', 'Intern', 'H007 Horiba Intern | LS3', 'H014 ADVICS Europe | T2414060-M H2024-15', ''],
        ['Mo', '27/5/2024', '22','A' ,'HO','','','','','', 'H017 Stellantis','place', 'H007 Horiba Intern | LS3', 'H014 ADVICS Europe | T2414060-M H2024-15', 'H011 VW AG | Wintertest - Test 3'],
        // ... Add more rows as needed
      ],
      columns: [
        { type: 'text', title:'Day',width: 50 },
        { type: 'calendar', title:'Date',width: 100 },
        { type: 'numeric', title:'CW',width: 50 },
        { type: 'dropdown', title:'Schickert',width: 80, source:[ "A", "HO", "NV", "SR"] },
        { type: 'dropdown', title:'Kunze',width: 80, source:[ "A", "HO", "NV", "SR"] },
        { type: 'checkbox', width: 40 },{ type: 'checkbox', width: 40 },{ type: 'checkbox', width: 40 },{ type: 'checkbox', width: 40 },{ type: 'checkbox', width: 40 },
        { type: 'text', width: 140 },
        { type: 'text', width: 140 },
        { type: 'text', width: 140 },
        { type: 'text', width: 140 },
        { type: 'text', width: 140 },
        { type: 'text', width: 140 },
      ],
      mergeCells: {
        K1: [2, 1],
        K2: [2, 1],
        M1: [2, 1],
        M2: [2, 1]
 
      },
      style: {
        K1: 'background-color: #98FB98;',
        L1: 'background-color: #98FB98;',
        K2: 'background-color: #98FB98;',
        L2: 'background-color: #98FB98;',
        K3: 'background-color: #98FB98;',
        L3: 'background-color: #98FB98;',

        M1: 'background-color: #ADD8E6;',
        N1: 'background-color: #ADD8E6;',
        E1: 'background-color: #98FB98;',
        F1: 'background-color: #D3D3D3;',
        G1: 'background-color: #ADD8E6;',
      },
    });
  }
}