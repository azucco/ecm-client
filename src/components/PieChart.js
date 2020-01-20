import React from "react"
import CanvasJSReact from '../js/canvasjs.react'
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class PieChart extends React.Component {
	render() {
		const options = {
			theme: "light2",
			animationEnabled: true,
			exportEnabled: false,
			data: [{
				type: "doughnut",
				showInLegend: false,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints: this.props.data,
				indexLabelFontColor: "white"
			}],
			legend:{
				fontFamily: "tahoma",
				fontWeight: "normal"
			},
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}