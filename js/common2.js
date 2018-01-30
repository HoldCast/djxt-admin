//父框架全局变量
var FrameName = '';             //模块名称

$(function () {
    createHomeMenu();   //创建左边菜单
    leftMenuClass();    //左边菜单样式
    dateTime();         //时间控件初始化
});


//创建左边菜单
function createHomeMenu() {
    $('#commonHeader').load('header.html');
    var menuHtml = '';
    for (var i = 0; i < homeMenu.length; i++) {
        var menuItem = homeMenu[i];
        var type = menuItem.type;
        var activeClass = '';
        var href = 'javascript:;';
        if(type && type != 'undefined'){
            href = type + '.html?pageType=' + type;
        }
        var subMenu = menuItem.children;
        menuHtml += '<li title="' + menuItem.name + '" class="sub-menu" type="' + type + '">';
        menuHtml += '<a class="dcjq-parent menu-' + type + '" href="' + href + '">' +
                        '<i class="fa ' + menuItem.icon + '"></i><span>' + menuItem.name + '</span>' +
                    '</a>';
        if (subMenu && subMenu.length) {
            menuHtml += '<ul class="sub">';
            for (var j = 0; j < subMenu.length; j++) {
                var subMenuItem = subMenu[j];
                var subType = subMenuItem.type;
                var url = subType + '.html?pageType=' + subType;
                menuHtml += '<li title="' + subMenuItem.name + '" url="' + subMenuItem.url + '">' +
                    '<a class="menu-' + subType + '" menuType="sunMenu" href="' + url + '">' + subMenuItem.name + '</a>' +
                    '</li>';
            }
            menuHtml += '</ul>';
        }
        menuHtml += '</li>';
    }
    $('#nav-accordion').append(menuHtml);
}

//处理左边菜单显示状态
function leftMenuClass() {
    var urlParam = getUrlParam();
    var pageType = urlParam.pageType;
    if(!pageType){
        pageType = 'home';
    }
    var $menu = $('a.menu-' + pageType);
    var menuType = $menu.attr('menuType');
    if(menuType == 'sunMenu'){
        $menu.parent().parent().show();
        $menu.parent().parent().prev().addClass('active');
    }
    $menu.addClass('active');
}

//时间控件处理
function dateTime() {
    $('.form_date').datetimepicker({
        format: 'yyyy-mm-dd',
        language:  'zh-CN',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });
}