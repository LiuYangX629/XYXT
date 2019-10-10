window.addEventListener('load',function () {
    let main = document.querySelectorAll('.echarts1');
    let one = echarts.init(main[0]);
    let oneOption = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['00:00', '01.00', '02.00', '03.00', '04.00', '05.00', '06.00','07.00','08.00','09.00','10.00','11.00','12.00','13.00','14.00','15.00','16.00','17.00','18.00','19.00','20.00','21.00','22.00','23.00']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [4.5, 4.5, 4.3,4.3, 4.2, 4.2, 4.3,4.2, 6.1, 6.2, 6.2, 6.0,7.1 ,7.2, 7.5, 7.2, 7.1, 7.0, 6.5,6.2, 5.6, 5.2, 5.0, 5.0],
            type: 'line',
            areaStyle: {}
        }]
    };
    one.setOption(oneOption);
},false);

window.addEventListener('load',function () {
    let main = document.querySelectorAll('.echarts2');
    let two = echarts.init(main[0]);
    var colors = ['#5793f3', '#d14a61', '#675bba'];
    let twoOption = {
        color: colors,

        tooltip: {
            trigger: 'none',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data:['舒张压', '收缩压']
        },
        grid: {
            top: 70,
            bottom: 50
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: colors[1]
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function (params) {
                            return '收缩压  ' + params.value
                                + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                        }
                    }
                },
                data: ['00:00', '01.00', '02.00', '03.00', '04.00', '05.00', '06.00','07.00','08.00','09.00','10.00','11.00','12.00','13.00','14.00','15.00','16.00','17.00','18.00','19.00','20.00','21.00','22.00','23.00']
            },
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function (params) {
                            return '舒张压  ' + params.value
                                + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                        }
                    }
                },
                data: ['00:00', '01.00', '02.00', '03.00', '04.00', '05.00', '06.00','07.00','08.00','09.00','10.00','11.00','12.00','13.00','14.00','15.00','16.00','17.00','18.00','19.00','20.00','21.00','22.00','23.00']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name:'舒张压',
                type:'line',
                xAxisIndex: 1,
                smooth: true,
                data: [78,79,75,76,74,78,71,80,81,84,82,80,79,80,82,84,85,82,80,81,78,76,76,75]
            },
            {
                name:'收缩压',
                type:'line',
                smooth: true,
                data: [115,113,114,119,115,114,115,119,122,123,125,121,122,128,126,126,124,122,123,121,120,118,120,118]
            }
        ]
    };
    two.setOption(twoOption);
},false);

window.addEventListener('load',function () {
    let main = document.querySelectorAll('.echarts3');
    let three = echarts.init(main[0]);
    let threeOption = {
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'',
                type:'bar',
                barWidth: '60%',
                data:[7.2, 5.6, 12.3, 8.4, 6.5, 2.4, 5.7]
            }
        ]
    };

    three.setOption(threeOption);
},false);

