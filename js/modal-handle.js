//模态框处理方法

//父框架执行调用模态框
function openModal(modalHtml,objData,callback) {
    $('#frameModal').append(modalHtml);
    var $modal = $('#' + objData.modalId);
    $modal.modal('show');
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
    //关闭后重置内容
    $modal.on('hidden.bs.modal', function (e) {
        //$modal.find('form')[0].reset();
    });
    $('#'+objData.saveBtn).off('click.a').on('click.a',function () {
        var formData = {};
        $modal.modal('hide');
        $modal.find('form .val').each(function (index) {
            var $this = $(this);
            var thisName = $this.attr('name');
            var thisValue = $this.val();
            formData[thisName] = thisValue;
        });
        callback(formData);
    });
    //$('#frameContent')[0].contentWindow.updateData(1123);
}

