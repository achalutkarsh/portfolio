import { Component, OnInit, Input } from '@angular/core'
import * as d3 from 'd3'

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {

  pieChartData: any
  

  title: string
  description: string
  keys: string
  timeline: string

  constructor() { }

  ngOnInit(): void {

    this.pieChartData = [
      {
        name: 'Sales App',
        value: 25,
        color: 'red',
        description: 'It helps to view global finances and performance metrics in the form of various bar & area charts for all Nissan vehicle segments with features to filter a/c to day, month, year, market & model.',
        keys: 'Angular, Cordova, D3.js',
        timeline: ' Jul 2020 - active'
      },
      {
        name: 'Feedback Library',
        value: 25,
        color: 'green',
        description: 'Imported over many applications around Nissan, hosted over their private repo, primarily to receive feedback & queries from the users.',
        keys: 'Angular',
        timeline: 'Nov 2020 - active'
      },
      {
        name: 'Small Events (Module)',
        value: 25,
        color: 'magenta',
        description: 'It allows users to create a new type of vehicle in the market or edit the existing one with a new model.',
        keys: 'Angular, Slider, Timeline',
        timeline: 'Mar 2020 - Jul 2020'
      },
      {
        name: 'Planning Tool',
        value: 25,
        color: 'blue',
        description: 'Timeline for modification of data, charts representing sales & volume across different markets and specific models with features to have different combination of model families.',
        keys: 'Angular, D3.js',
        timeline: 'Aug 2019 - Jul 2020'
      },
    ]

    this.createChannelMixChart()
  }

  createChannelMixChart() {

    this.updateContext(this.pieChartData[Math.floor(Math.random() * 4)])

    const width = 400
    const height = 400
    const margin = 30
    const radius = Math.min(width, height) / 2 - margin

    d3.select('#donutChart svg').remove()

    const svg = d3
      .select('#donutChart')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

    const arc = d3
      .arc()
      .outerRadius(radius)
      .innerRadius(120)

    const pie = d3
      .pie()
      .sort(null)
      .value(d => {
        return d.value
      })

    const g = svg
      .selectAll('.arc')
      .data(pie(this.pieChartData))
      .enter()
      .append('g')

    g.append('path')
      .attr('d', arc)
      .style('fill', d => d.data.color)
      .style('opacity', 0.75)
      .attr('stroke', 'none')
      .style('cursor', 'pointer')
      .on('click', (d, i) => this.updateContext(i.data))

    const text = svg.append('text').text('Click Any Color')

    // Add SVG Text Element Attributes
    text
      .attr('x', -55)
      .attr('y', 10)
      .attr('font-size', '18px')
      .attr('fill', 'var(--text)')

  }

  updateContext(value) {
    this.title = value.name
    this.description = value.description
    this.keys = value.keys
    this.timeline = value.timeline

    document.documentElement.style.setProperty('--pieDataColor', value.color)


  }
}
