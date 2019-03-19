		$(function(){
			
		
			// 基于准备好的dom，初始化echarts实例
			var myChart = echarts.init(document.getElementById('cylindricalGraphmain'));

			// 指定图表的配置项和数据
			var option = {
				title: {
					text: '抢修概况'
				},
				tooltip: {},
				legend: {
					data:['销量']
				},
				xAxis: {
					data: ["漳泽","武乡","配电","平顺","襄垣","屯留"]
				},
				yAxis: {},
				series: [{
					name: '销量',
					type: 'bar',
					data: [5, 20, 36, 10, 10, 20]
				}]
			};

			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
		
		
			// 左饼图
			var myLeftChart = echarts.init(document.getElementById('pieChartLeft'));
			var leftoption = {
				title : {
					text: '',
					subtext: '',
					x:'center'
				},
				tooltip : {
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
					orient: 'vertical',
					left: 'left',
					data: ['开票','不开票','勘查中']
				},
				series : [
					{
						name: '访问来源',
						type: 'pie',
						radius : '55%',
						center: ['50%', '60%'],
						data:[
							{value:335, name:'开票'},
							{value:310, name:'不开票'},
							{value:234, name:'勘查中'},
						],
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}
				]
			};
			myLeftChart.setOption(leftoption);
			//右饼图
			var myRigntChart = echarts.init(document.getElementById('pieChartRight'));
			var rightoption = {
				title : {
					text: '',
					subtext: '',
					x:'center'
				},
				tooltip : {
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
					orient: 'vertical',
					left: 'left',
					data: ['主动工单','推送工单']
				},
				series : [
					{
						name: '访问来源',
						type: 'pie',
						radius : '55%',
						center: ['50%', '60%'],
						data:[
							{value:335, name:'主动工单'},
							{value:310, name:'推送工单'},
						],
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}
				]
			};
			myRigntChart.setOption(rightoption);
		
		})