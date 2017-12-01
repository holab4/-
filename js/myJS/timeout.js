// 倒计时函数 接收倒计时名称和倒计时时间两个参数
function timeOut(name,sumtime) {
	var $timeout = $(name);
	var $d = $timeout.children('#d');
	var $h = $timeout.children('#h');
	var $m = $timeout.children('#m');
	var $s = $timeout.children('#s');
	var $ms = $timeout.children('#ms');
	var time = new Date();
	// 获取开始时间
	var start_time = time.getTime();
	// 得到结束时间
	var end_time = start_time + sumtime;
	clearInterval(timer);
	countdown();
	// 每隔0.01秒执行一次countdown函数
	var timer = setInterval(countdown,10);
	// 获取日分秒毫秒并赋值
	function countdown(){
		var now_time = new Date();
		now_time = now_time.getTime();
		var remaining = parseInt(end_time - now_time);
		// console.log(remaining);
		if(remaining < 0){
			clearInterval(timer);
		}else{
			// 有待改进
			var sec = parseInt((end_time - now_time)/1000);		
			var d = parseInt(sec / 60 / 60 / 24) < 10 ? '0'+parseInt(sec / 60 / 60 / 24) : parseInt(sec / 60 / 60 / 24);
			var h = parseInt(sec / 60 / 60 % 24) < 10 ? '0'+parseInt(sec / 60 / 60 % 24) : parseInt(sec / 60 / 60 % 24);
			var m = parseInt(sec / 60 % 60) < 10 ? '0'+parseInt(sec / 60 % 60) : parseInt(sec / 60 % 60);
			var s = parseInt(sec % 60) < 10 ? '0'+parseInt(sec % 60) : parseInt(sec % 60);
			var ms = parseInt(remaining % 100) < 10 ? '0'+parseInt(remaining % 100) : parseInt(remaining % 100);
		}
		// 赋值
		$d.text(d);
		$h.text(h);
		$m.text(m);
		$s.text(s);
		$ms.text(ms);
	}
}
