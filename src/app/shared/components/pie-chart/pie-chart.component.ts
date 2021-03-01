import { Component, OnInit, Input } from '@angular/core'
import * as d3 from 'd3'

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {

  @Input() pieChartData

  title: string
  description: string
  keys: string
  timeline: string

  constructor() { }

  ngOnInit(): void {
    this.createChannelMixChart()
  }

  createChannelMixChart() {

    this.updateContext(this.pieChartData[0])

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

  }

  updateContext(value) {
    this.title = value.name
    this.description = value.description
    this.keys = value.keys
    this.timeline = value.timeline
  }
}
