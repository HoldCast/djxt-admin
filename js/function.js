//自动计算框架所占高度
function autoHeight(height) {
    $('#wrapper').height(height + 10);
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
        var title = $this.attr('title');
        if($iframe.prop('src').indexOf(url) == -1){
            if(url && url != 'undefined'){
                console.log(url, title);
                $iframe.prop('src', url + '?title=' + title)
            }
        }

        e.stopPropagation();
    });

}