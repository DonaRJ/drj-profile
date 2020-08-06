import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';

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
    { backgroundColor: ['#e71873', '#0d70b4', '#fdcd00'] },
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
