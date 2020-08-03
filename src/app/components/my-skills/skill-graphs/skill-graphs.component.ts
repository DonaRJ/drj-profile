import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
  selector: 'app-skill-graphs',
  templateUrl: './skill-graphs.component.html',
  styleUrls: ['./skill-graphs.component.scss'],
})
export class SkillGraphsComponent implements OnInit {
  doughnutChartLabels: Label[] = [
    'Communication',
    'Team Work',
    'Project Management',
  ];
  doughnutChartData = [55, 25, 20];
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartColors: Color[] = [
    { backgroundColor: ['#ffca2b', '#31e42e', '#17a9ff'] },
  ];
  labelColor = '#fff';
  chartOptions = {
    legend: {
      labels: {
        fontColor: '#fff',
      },
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
