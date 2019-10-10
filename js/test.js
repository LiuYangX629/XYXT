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
            data: [820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330,820, 932, 901, 934, 1290, 1330,820, 932, 901, 934, 1290],
            type: 'line',
            areaStyle: {}
        }]
    };
    one.setOption(oneOption);
},false);

window.addEventListener('load',function () {
    let main = document.querySelectorAll('.echarts2');

    let two = echarts.init(main[0]);
    let twoOption = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['00:00', '01.00', '02.00', '03.00', '04.00', '05.00', '06.00','07.00','08.00','09.00','10.00','11.00','12.00','13.00','14.00','15.00','16.00','17.00','18.00','19.00','20.00','21.00','22.00','23.00']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [420, 432, 401, 434, 490, 330, 420,420, 432, 401, 434, 490, 420, 432, 401, 434, 490, 330, 420,420, 432, 401, 434, 490],
            type: 'line',
            areaStyle: {}
        }]
    };

    two.setOption(twoOption);
},false);