$(function() {
	var curr = new Date().getFullYear();
	var opt = {
		'default': {
			theme: 'default',
			mode: 'scroller',
			display: 'modal',
			animate: 'fade'
		},
		'dateY': {
			preset: 'date',
			dateFormat: 'yyyy',
			defaultValue: new Date(new Date()),
			invalid: {
				daysOfWeek: [0, 6],
				daysOfMonth: ['5/1', '12/24', '12/25']
			},
			onBeforeShow: function(inst) {
				if(inst.settings.wheels[0].length > 1) {
					inst.settings.wheels[0].pop();
					inst.settings.wheels[0].pop();
				} else {
					null
				}
			}
		},
		'dateYM': {
			preset: 'date',
			dateFormat: 'yyyy-mm',
			defaultValue: new Date(new Date()),
			onBeforeShow: function(inst) {
				if(inst.settings.wheels[0].length > 2) {
					inst.settings.wheels[0].pop();
				} else {
					null
				}
			}
		},
		'dateYMD': {
			preset: 'date',
			dateFormat: 'yyyy/mm/dd',
			defaultValue: new Date(new Date()),
			invalid: {
				daysOfWeek: [0, 6],
				daysOfMonth: ['5/1', '12/24', '12/25']
			}
		},
		'datetime': {
			preset: 'datetime',
			minDate: new Date(2012, 3, 10, 9, 22),
			maxDate: new Date(2014, 7, 30, 15, 44),
			stepMinute: 5
		},
		'time': {
			preset: 'time'
		},
		'select': {
			preset: 'select'
		},
		'select-opt': {
			preset: 'select',
			group: true,
			width: 50
		}
	}
	$('#meeting-start-time').scroller($.extend(opt['time'], opt['default']));
	$('#meeting-end-time').scroller($.extend(opt['time'], opt['default']));
	$('#start-time').scroller($.extend(opt['datetime'], opt['default']));
	$('#end-time').scroller($.extend(opt['datetime'], opt['default']));
	$('.meeting-date').scroller($.extend(opt['dateYMD'], opt['default']));
	$('.room-option').scroller($.extend(opt['select'], opt['default']));
	$('.demo-test-select-opt').scroller($.extend(opt['select-opt'], opt['default']));
});
//饼状图
var can1 = document.getElementById("can1");
var ctx = can1.getContext("2d");
var nums = [30, 12, 40, 18];
var colors = ["#ff6d60", "#ff994e", "#28c16e", "#e6e6e6"];
var start = 0;
var end = 0;
ctx.translate(150, 180);
//绘制圆饼  
function pieChart() {
	for(var i = 0; i < nums.length; i++) {
		ctx.beginPath();
		ctx.moveTo(0, 0);
		end += nums[i] / 50 * Math.PI; //终止角度  
		ctx.strokeStyle = "white";
		ctx.fillStyle = colors[i];
		ctx.arc(0, 0, 150, start, end);
		ctx.fill();
		ctx.closePath();
		ctx.stroke();
		start += nums[i] / 50 * Math.PI; //起始角度  
	}
}
ctx.rotate(-Math.PI / 2); //旋转一定角度更加自然  
pieChart();
pieNum();

