/**
 * 秒杀区商品类
 */

//SeckillProduct.prototype = new Product();
//this.bindDOMFormat();
/*function Product(data) {
    //console.log(data);
    this.name = data.name;
    this.images = data.images;
    this.price = data.price;
    this.o_price = data.o_price;
    //this.description = data.description;
}
Product.prototype = {
    init:function(){},
    bindDOMImages:function(){},
    bindDOM:function(){},
    bindEvents:function(){}
}*/
function SeckillProduct(data,num){
    //this.data = data;
    Product.call(this,data);
    this.num = num;
    this.dom = $('<li></li>').addClass('sk-prod-item sk-prod-item' + num);
    this.init();
}
$F.extendI(SeckillProduct,Product);
//为啥不行，当参数是对象时
//SeckillProduct.prototype = new Parent();
SeckillProduct.prototype.bindDOM = function(){
    var str = '';
    //str = '<li class="sk-prod-item">';
    str += '<a href="javascript:;" class="sk-prod-link">';
    str += '<img class="sk-prod-picture" src="' + this.images + '" alt="' + this.name + '">';
    str += '<p class="sk-prod-name">' + this.name + '</p>';
    str += '</a>';
    str += '<p class="sk-prod-price">';
    str += '<span class="new-price"><i>¥</i><span>' + this.price + '</span></span>';
    str += '<span class="origin-price"><i>¥</i><del>' + this.o_price + '</del></span>';
    str += '</p>';
    //str += '</li>';
    //return str;
    this.dom.html(str);
}
SeckillProduct.prototype.bindDOMFormat = function(){
    var str = '';
    //str = '<li class="sk-prod-item sk-prod-item@(num)">';
    str += '<a href="javascript:;" class="sk-prod-link">';
    str += '<img class="sk-prod-picture" src="@(images)" alt="@(name)">';
    str += '<p class="sk-prod-name">@(name)</p>';
    str += '</a>';
    str += '<p class="sk-prod-price">';
    str += '<span class="new-price"><i>¥</i><span>@(price)</span></span>';
    str += '<span class="origin-price"><i>¥</i><del>@(o_price)</del></span>';
    str += '</p>';
    //str += '</li>';
    str = $F.formateString(str,this.data);
    this.dom.html(str);
};
SeckillProduct.prototype.init = function(){
    console.log('seckillProduct init');
    this.bindDOM();
}
