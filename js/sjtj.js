$(function () {
    jgsjtj();
});

function jgsjtj() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('sjtiEchart'));

    // 指定图表的配置项和数据
    option = {
        title : {
            text: '党员文化程度分类',
            subtext: '统计数据',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            //data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series : [
            {
                name: '组织机构组成',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'小学'},
                    {value:310, name:'初中'},
                    {value:234, name:'中专'},
                    {value:135, name:'高中'},
                    {value:135, name:'大专'},
                    {value:135, name:'本科'},
                    {value:135, name:'硕士'},
                    {value:19, name:'博士'}
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

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}