/*商品基础类*/
function Product(data) {
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
}
// 秒杀区商品
/*function SeckillProduct(data,num){
	this.data = data;
	this.num = num;
	this.dom = $('<li></li>').addClass('sk-prod-item sk-prod-item' + num);
	/!*this.name = data.name;
	this.price = data.price;
	this.o_price = data.o_price;
	this.picture = data.picture;*!/
	this.init();
}
SeckillProduct.prototype = {
	init:function(){
		this.bindDOMFormat();
		this.bindEvents();
	},
	bindDOMOld:function(){
		var str = '';
		str = '<li class="sk-prod-item">';
		str += '<a href="javascript:;" class="sk-prod-link">';
		str += '<img class="sk-prod-picture" src="' + this.picture + '" alt="' + this.name + '">';
		str += '<p class="sk-prod-name">' + this.name + '</p>';
		str += '</a>';
		str += '<p class="sk-prod-price">';
		str += '<span class="new-price"><i>¥</i><span>' + this.price + '</span></span>';
		str += '<span class="origin-price"><i>¥</i><del>' + this.o_price + '</del></span>';
		str += '</p>';
		str += '</li>';
		return str;
	},
	bindDOMFormat:function(){
		var str = '';
		//str = '<li class="sk-prod-item sk-prod-item@(num)">';
		str += '<a href="javascript:;" class="sk-prod-link">';
		str += '<img class="sk-prod-picture" src="@(picture)" alt="@(name)">';
		str += '<p class="sk-prod-name">@(name)</p>';
		str += '</a>';
		str += '<p class="sk-prod-price">';
		str += '<span class="new-price"><i>¥</i><span>@(price)</span></span>';
		str += '<span class="origin-price"><i>¥</i><del>@(o_price)</del></span>';
		str += '</p>';
		//str += '</li>';
		str = $F.formateString(str,this.data);
		this.dom.html(str);
	},
	bindDOMTemplate:function(){
		var str = '';
		str = '<li class="sk-prod-item">';
		str += '<a href="javascript:;" class="sk-prod-link">';
		str += '<img class="sk-prod-picture" src="{{picture}}" alt="{{name}}">';
		str += '<p class="sk-prod-name">{{name}}</p>';
		str += '</a>';
		str += '<p class="sk-prod-price">';
		str += '<span class="new-price"><i>¥</i><span>{{price}}</span></span>';
		str += '<span class="origin-price"><i>¥</i><del>{{o_price}}</del></span>';
		str += '</p>';
		str += '</li>';
		str = $F.bindTemplate(str,this);
		return str;
	},
	bindEvents:function(){
		var that = this;
		//鼠标移入移出 添加动画
		that.dom.children('.sk-prod-link').on('mouseenter',function(){
			console.log(this);
			$(this).children('.sk-prod-picture').addClass('sk-prod-picture-current');
			$(this).children('.sk-prod-name').addClass('sk-prod-name-current');
		});
		that.dom.children('.sk-prod-link').on('mouseleave',function(){
			$(this).children('.sk-prod-picture').removeClass('sk-prod-picture-current');
			$(this).children('.sk-prod-name').removeClass('sk-prod-name-current');
		});
	}
}*/
