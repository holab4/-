function slideshow(pics_list,dots_list,pics,dots) {
	var $pics_list = $(pics_list);
	// 创建点
	createDots(pics,dots_list);
	// 通过点击焦点改变显示图片
	changeCurrent(pics,dots);
	// 自动播放
	autoPlay();
}
// 创建焦点函数
function createDots(pics,dots_list){
	var $dots_list = $(dots_list);
	var $pics = $(pics);
	// console.log($pics);
	for(var i=0;i<$pics.length;i++){
		var li = document.createElement('li');
		li.className = 'dots-item';
		$(li).attr('data-target','.pic'+(i+1));
		$dots_list.append(li);
	}
	var dots = $dots_list.children();
	$(dots[0]).addClass('dots-current');
	// $dots_list.children[0].addClass('dots-current');
}
// 改变焦点函数
function changeCurrent(pics,dots){
	var $dots = $(dots);
	$dots.mouseenter(function(){
		var $this = $(this);
		// 获取到对应的图片
		var $target = $($this.data('target'));
		$this.addClass('dots-current').siblings().removeClass('dots-current');
		$target.addClass('pics-current').siblings().removeClass('pics-current');
	});
}
// 自动播放函数
function autoPlay(pics){
	var $pics = $(pics);
}