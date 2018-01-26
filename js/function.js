//设置子框架容器高度
function setContainerHeight(height) {
    $('#wrapper').height(height + 10);
}
//获取子框架body高度,调用父框架方法执行
function setFrameHeight() {
    var height = $('body').height();        //获取自框架body的高度
    parent.setContainerHeight(height);      //调用父框架方法设置容器高度
}
//创建左边菜单
function createHomeMenu() {
    var menuHtml = '';
    for (var i = 0; i < homeMenu.length; i++) {
        var menuItem = homeMenu[i];
        var activeClass = '';
        if(menuItem.type == 'home'){
            activeClass = 'active';
        }
        var subMenu = menuItem.children;
        menuHtml += '<li title="' + menuItem.name + '" class="sub-menu" url="' + menuItem.url + '">';
        menuHtml += '<a class="dcjq-parent ' + activeClass + '" href="javascript:;"><i class="fa ' + menuItem.icon + '"></i><span>' + menuItem.name + '</span></a>';
        if (subMenu && subMenu.length) {
            menuHtml += '<ul class="sub">';
            for (var j = 0; j < subMenu.length; j++) {
                var subMenuItem = subMenu[j];
                menuHtml += '<li title="'+subMenuItem.name+'" url="' + subMenuItem.url + '"><a href="javascript:;">' + subMenuItem.name + '</a></li>';
            }
            menuHtml += '</ul>';
        }
        menuHtml += '</li>';
    }
    $('#nav-accordion').append(menuHtml).off('click.menu').on('click.menu', 'li', function (e) {
        var $iframe = $('#frameContent');
        var $this = $(this);
        var url = $this.attr('url');
        FrameName = $this.attr('title');
        if($iframe.prop('src').indexOf(url) == -1){
            if(url && url != 'undefined'){
                $iframe.prop('src', url);
            }
        }
        e.stopPropagation();
    });
}
//设置标题信息
function setTitle() {
    var titleName = parent.FrameName;
    var $title = $('#mainTitle');
    if($title && $title.length){
        $title.text(titleName);
    }
}


/*** 工具函数方法 ***/

//获取页面参数
function getUrlParam() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = {};
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = [];
        if(str.indexOf('&') != -1){
            strs = str.split("&");
        }
        else{
            strs[0] = str;
        }

        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}