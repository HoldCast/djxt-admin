var homeMenu = [
    {
        name: '首页',                //名称
        type: 'home',
        type: 'home',      //路径
        icon: 'fa-home' ,           //图标样式
        children: []                //子目录
    },
    {
        name: '统计分析',
        type: 'tjfx',
        icon: 'fa-bar-chart-o' ,
        children: []
    },
    {
        name: '组织机构',
        icon: 'fa-sitemap',
        children: [
            {name: '机构设置',type: 'jgsz'},
            {name: '数据统计',type: 'sjtj'}
        ]
    },
    {
        name: '党员发展',
        icon: 'fa-users',
        children: [
            {name: '入党积极分子',type:'rdjjfz'},
            {name: '发展对象信息',type: 'fzdxxx'},
            {name: '预备党员管理',type: 'ybdygl'},
            {name: '预备转正党员管理',type: 'ybzzdygl'}
        ]
    },
    {
        name: '党员管理',
        icon: 'fa-th',
        children: [
            {name: '党员登记管理',type: 'dydjgl'},
            {name: '流动党员管理',type: 'lddygl'},
            {name: '党员注销管理',type: 'dyzxgl'},
            {name: '党费收缴管理',type: 'dfsjgl'},
            {name: '党员评议管理',type: 'dypygl'}
        ]
    },
    {
        name: '党员服务',
        icon: 'fa-tasks',
        type: 'debug'
    },
    {
        name: '党员活动',
        icon: 'fa-th-large',
        children: [
            {name: '活动开展',type: 'hdkz'},
            {name: '活动情况统计',type: 'hdqktj'}
        ]
    },
    {
        name: '居民议事',
        icon: 'fa-list-alt',
        children: [
            {name: '议题受理情况',type: 'debug'},
            {name: '议题审查情况',type: 'debug'},
            {name: '会议公告信息',type: 'debug'},
            {name: '会议通知信息',type: 'debug'},
            {name: '表决决议公告',type: 'debug'},
            {name: '实施结果公告',type: 'debug'},
            {name: '实施结果季度公告',type: 'debug'},
        ]
    }
];