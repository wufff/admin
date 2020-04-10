/**
 * date:2020/02/28
 * author:Mr.Chung
 * version:2.0
 * description:layuimini tab框架扩展
 */
layui.define(["jquery", "layer"], function (exports) {
        var $ = layui.$,
        layer = layui.layer;

    var formData = {
        getTr:function(obj){
            var data = {}
            var tr = $(obj).parents("tr");
            var tds = tr.find("td");
            tds.each(function(index,item){
                var k = $(item).attr("data-k");
                var v = $(item).attr("value");
                if(k){
                    if(v){
                        data[k] = v;
                    }else{
                        data[k] = $(item).text();
                    }
                }
            })
            return data;
        }
    };

    exports("formData", formData);
});
