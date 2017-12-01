/**
 * Created by Dell on 2017/11/21.
 */
/*通用框架*/
function $F(){}
$F.prototype = {
    //去除空格
    trim:function(str){
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    //AJAX 函数fn接收服务器传回的文件
    myAjax:function(URL,fn){
        var xhr = createXHR();	//返回了一个XHR对象，这个对象IE6兼容。
        //var data = '';
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
                    fn(xhr.responseText);
                    //console.log(xhr.responseText);
                    //data = xhr.responseText;
                    //return xhr.responseText;
                }else{
                    alert("请求失败：" + xhr.status);
                }
            }
        };
        xhr.open("get",URL,true);
        xhr.send();

        //闭包形式，因为这个函数只服务于ajax函数，所以放在里面
        function createXHR() {
            //本函数来自于《JavaScript高级程序设计 第3版》第21章
            if (typeof XMLHttpRequest != "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject != "undefined") {
                if (typeof arguments.callee.activeXString != "string") {
                    var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                            "MSXML2.XMLHttp"
                        ],
                        i, len;
                    for (i = 0, len = versions.length; i < len; i++) {
                        try {
                            new ActiveXObject(versions[i]);
                            arguments.callee.activeXString = versions[i];
                            break;
                        } catch (ex) {
                            //skip
                        }
                    }
                }
                return new ActiveXObject(arguments.callee.activeXString);
            } else {
                throw new Error("No XHR object available.");
            }
        }
        //return data;
    },
    //数据格式化
    formateString:function(str, data){
        return str.replace(/@\((\w+)\)/g, function(match, key){
            return typeof data[key] === "undefined" ? '' : data[key]});
    },
    //模板
    bindTemplate:function(html,data){
        var render = template.compile(html);
        var str = render(data);
        return str;
    },
    //继承单个拷贝继承
    extendC:function(Child,Parent){
        var c = Child.prototype;
        var p = Parent.prototype;
        for(var i in p){
            c[i] = p[i];
        }
        t.uber = p;
    },
    //中间对象继承
    extendI:function(Child,Parent){
        var Inter = function(){};
        Inter.prototype = Parent.prototype;
        Child.prototype = new Inter();
        Child.prototype.constructor = Child;
        Child.uber = Parent.prototype;
    },
    //单个继承
    extend:function(target,source){
        for(var key in source){
            target[key] = source[key];
        }
        return target;
    },
    //继承多个
    extends:function(){
        var key,i = 0,len = arguments.length,target = null;
        if(len === 0){
            return;
        }else if(len === 1){
            target = this;
        }else{
            i++;
            target = arguments[0];
        }
        for(;i<len;i++){
            for(key in arguments[i]){
                target[key] = arguments[i][key];
            }
        }
        return target;
    },
    //简单查询
    simpleQuery:function (){
        var params= window.location.search;//params:?id,date
        var arr = params.substring(1).split(",");
        return arr;
    },
    //查询 返回一个json对象
    querystring: function(){//获取URL查询字符串参数值的通用函数
        var str = window.location.search.substring(1);//获取查询字符串，即"id=1&name=location"的部分
        var arr = str.split("&");//以&符号为界把查询字符串分割成数组
        var json = {};//定义一个临时对象
        for(var i=0;i<arr.length;i++)//遍历数组
        {
            var c = arr[i].indexOf("=");//获取每个参数中的等号小标的位置
            if(c==-1) continue;//如果没有发现测跳到下一次循环继续操作
            var d = arr[i].substring(0,c);//截取等号前的参数名称，这里分别是id和name
            var e = arr[i].substring(c+1);//截取等号后的参数值
            json[d] = e;//以名/值对的形式存储在对象中
        }
        return json;//返回对象
    },
    //两个数组拼接
    addArray: function(arr1,arr2){
        return Array.prototype.push.apply(arr1,arr2);
    },
    getEvent: function(e){
        return e?e:window.event;
    },
    getTarget: function(e){
        var event = this.getEvent(e);
        return event.target || event.srcElement;
    }
}
$F = new $F();

