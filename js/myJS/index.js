$(function(){
	var $chooseAdd = $("#chooseAdd");
	var $defaultCity = $chooseAdd.parent().prev().children();
	//选择地址
	$chooseAdd.on("click","li",function(){
		// alert($(this).text());
		$(this).children().addClass("selected").end()
			.siblings().children().removeClass("selected");
		var city = $(this).text();
		$defaultCity.text(city);
	});
	// 秒杀区倒计时
	timeOut('#seckill_cd',2*60*60*1000);
	/*--秒杀区商品--*/
	//利用ajax获取数据并添加商品
	$F.myAjax('http://localhost/test/模仿京东/data/skdata.json',function(e){
		//console.log(typeof e);
		var data = JSON.parse(e);
		//console.log(data);
		var sk_products = $('.sk-prod-wrapper');
		//var arr = [];
		for(var i=0;i<data.products.length;i++){
			var sk_product = new SeckillProduct(data.products[i],i);
			//arr.push(sk_product);
			//console.log(sk_product);//对象
			sk_products.append(sk_product.dom);
		}
	});
	//伪商品数据
	/*var sk_productData = [
		{
			name:'清风（APP）抽纸 原木纯品金装系列 3层150抽软抽*20包纸巾 中规格（整箱销售）',
			price:59.80,
			o_price:118.00,
			images:'images/sk-prod-picture1.jpg'
		},
		{
			name:'清风（APP）抽纸 原木纯品金装系列 3层150抽软抽*20包纸巾 中规格（整箱销售）',
			price:59.80,
			o_price:118.00,
			images:'images/sk-prod-picture2.jpg'
		},
		{
			name:'清风（APP）抽纸 原木纯品金装系列 3层150抽软抽*20包纸巾 中规格（整箱销售）',
			price:59.80,
			o_price:118.00,
			images:'images/sk-prod-picture3.jpg'
		},
		{
			name:'清风（APP）抽纸 原木纯品金装系列 3层150抽软抽*20包纸巾 中规格（整箱销售）',
			price:59.80,
			o_price:118.00,
			images:'images/sk-prod-picture4.jpg'
		},
		{
			name:'清风（APP）抽纸 原木纯品金装系列 3层150抽软抽*20包纸巾 中规格（整箱销售）',
			price:59.80,
			o_price:118.00,
			images:'images/sk-prod-picture5.jpg'
		}
	];*/
	//依次创建商品信息
	/*var sk_product1 = new SeckillProduct();
	sk_product1.name = '清风（APP）抽纸 原木纯品金装系列 3层150抽软抽*20包纸巾 中规格（整箱销售）';
	sk_product1.price = '59.80';
	sk_product1.o_price = '118.00';
	sk_product1.picture = 'images/sk-prod-picture1.jpg';
	var sk_product2 = new SeckillProduct();
	sk_product2.name = '清风（APP）抽纸 原木纯品金装系列 3层150抽软抽*20包纸巾 中规格（整箱销售）';
	sk_product2.price = '59.80';
	sk_product2.o_price = '118.00';
	sk_product2.picture = 'images/sk-prod-picture2.jpg';
	var sk_product3 = new SeckillProduct();
	sk_product3.name = '清风（APP）抽纸 原木纯品金装系列 3层150抽软抽*20包纸巾 中规格（整箱销售）';
	sk_product3.price = '59.80';
	sk_product3.o_price = '118.00';
	sk_product3.picture = 'images/sk-prod-picture3.jpg';
	var sk_product4 = new SeckillProduct();
	sk_product4.name = '清风（APP）抽纸 原木纯品金装系列 3层150抽软抽*20包纸巾 中规格（整箱销售）';
	sk_product4.price = '59.80';
	sk_product4.o_price = '118.00';
	sk_product4.picture = 'images/sk-prod-picture4.jpg';
	var sk_product5 = new SeckillProduct();
	sk_product5.name = '清风（APP）抽纸 原木纯品金装系列 3层150抽软抽*20包纸巾 中规格（整箱销售）';
	sk_product5.price = '59.80';
	sk_product5.o_price = '118.00';
	sk_product5.picture = 'images/sk-prod-picture5.jpg';
	var sk_products = [sk_product1,sk_product2,sk_product3,sk_product4,sk_product5];*/
	//多个li以字符串形式添加到ul中
	/*var str = '';
	for(var i=0;i<sk_products.length;i++){
		str += sk_products[i].init();
	}
	$('.sk-prod-wrapper').html(str);*/
	//用ajax获取数据 不能直接返回数据
	/*var sk_productsData = JSON.parse($F.myAjax('http://localhost/test/模仿京东/data/skdata.json'));
	console.log(sk_productsData);*/
	//添加秒杀区商品li
	/*var sk_products = $('.sk-prod-wrapper');
	var arr = [];
	for(var i=0;i<sk_productData.length;i++){
		var sk_product = new SeckillProduct(sk_productData[i],i);
		arr.push(sk_product);
		//console.log(sk_product);//对象
		sk_products.append(sk_product.dom);
	}
	console.log(arr[0].prototype == arr[1].prototype);*/
	/*--秒杀商品 end--*/
	//秒杀区小轮播图
	slideshow('.sk-special-pics-list','.sk-special-dots-list','.sk-special-pics-item','.dots-item');
	
});