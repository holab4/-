$(function(){
	var $input = $(".reg-form input");
	var $txt = $(".reg-form txt");
	$input.focus(function(){//每个文本框获得焦点需要执行的操作
		$(this).prev().addClass("hide"); //隐藏输入框中的提示文字
		$span = $(this).parent().next().children("span");
		$parent = $(this).parent();
		$next = $(this).next();
		tipTxt = $(this).attr("default");//获取到input中的default属性
		var input_value = $(this).val();
		if( !input_value ){			
			//将获得的defalut值添加到 本没有内容的 提示部分
			$span.empty();
			$span.removeClass("error");
			$span.append(tipTxt);
			$parent.removeClass("form-int-error");			
		}		
		if( $(this).is("#autoCode") ){
			$span.empty();
			$span.append(tipTxt);
		}
		$(this).on("input change keydown",function(){
			$next.hide();
			var input_value = $(this).val();
			//用户名判断
			if( $(this).is("#username") ){
				var regName = /(^[\w,\u4e00-\u9fa5,_,-]+$)/; //检查用户名的正则式
				//var regName = /^[\\x00-\\xFF]+$/;
				var input_value = $(this).val();
				// console.log(input_value);
				if( !input_value ){
					$span.empty();
					$span.removeClass("error");
					$parent.removeClass("form-int-error");
					$span.append(tipTxt);
				}else if( !regName.test(input_value) ){ //或者!input_value.match(regName)
					$span.empty();
					var errorMsg = "格式错误，仅支持汉字、字母、数字、“-”“_”的组合";
					$span.append("<i class='i-error'></i>" + errorMsg);
					$span.addClass("error");
					$parent.addClass("form-int-error");
				}else{
					$span.empty();
					$parent.removeClass("form-int-error");
					$span.removeClass("i-error");
					$span.removeClass("error");
					$span.append(tipTxt);
				}
			}
			//密码
			if( $(this).is("#password") ){
				var regNum = /^[0-9]+$/;
				var regChar = /^[a-zA-Z]+$/; 
				// input_value = $(this).val();
				var length = input_value.length;
				if( length < 6 ){
					$span.empty();
					$span.removeClass("error");
					$parent.removeClass("form-int-error");
					$span.append(tipTxt);
				}else if( (length <= 10 &&  regNum.test(input_value)) || (length <= 10 && regChar.test(input_value))){
					$span.empty();
					var errorMsg = "有被盗风险,建议使用字母、数字和符号两种及以上组合";
					$span.append("<i class='pwd-error'></i>" + errorMsg);
					// $span.addClass("error");
					$parent.addClass("form-int-error");
				}else if( (length <= 20 && regNum.test(input_value)) || (length <= 20 && regChar.test(input_value)) ){
					$span.empty();
					var tipMsg = "安全强度适中，可以使用三种以上的组合来提高安全强度";
					$span.append("<i class='pwd-tip-medium'></i>" + tipMsg);
					$parent.removeClass("form-int-error");
					$(this).next().show();
				}
				else{
					$span.empty();
					var tipMsg = "你的密码很安全";
					$span.append("<i class='pwd-tip-strong'></i>" + tipMsg);
					$parent.removeClass("form-int-error");
					$(this).next().show();
				}
			}
			/*//确认密码
			if( $(this).is("#pwdRepeat") ){

			}*/
			//邮箱
			if( $(this).is("#email") ){
				$span.empty();
				$parent.removeClass("form-int-error");
				$span.removeClass("i-error");
				$span.removeClass("error");
				$span.append(tipTxt);
			}
			//手机号
			if( $(this).is("#phoneNumber") ){
				$span.empty();
				$parent.removeClass("form-int-error");
				$span.removeClass("i-error");
				$span.removeClass("error");
				$span.append(tipTxt);
			}
			//验证码
			if( $(this).is("#autoCode") ){
				$next.show();
			}
			//手机验证码
			if( $(this).is("#phoneCode") ){
				$next.show();
			}
		});
	}).blur(function(){//失去焦点		
		var input_value = $(this).val();
		var length = input_value.length;
		if( !input_value ){
			$span.empty();
			$(this).prev().removeClass("hide"); //显示输入框中的提示文字
			$parent.removeClass("form-int-error");
			$next.hide();
		}else if( input_value ){
			//用户名
			if($(this).is("#username")){
				var error = $span.is(".error");
				if( !error ){
					if( length < 4 || length > 20){
						$span.empty();
						var errorMsg = "请输入4-20位的用户名";
						$span.append("<i class='i-error'></i>" + errorMsg);
						$span.addClass("error");
						$parent.addClass("form-int-error");
						$next.hide();
					}else{
						$span.empty();
						$parent.removeClass("form-int-error");
						$next.show();
					}
				}				
			}
			//密码
			if( $(this).is("#password") ){
				if( length < 6 || length > 20 ){
					$span.empty();
					var errorMsg = "长度只能在6-20个字符之间";
					$span.append("<i class='i-error'></i>" + errorMsg);
					$span.addClass("error");
					$parent.addClass("form-int-error");
				}
				password = $(this).val();
			}
			//确认密码
			if( $(this).is("#pwdRepeat") ){
				// console.log(password);
				if( input_value == password ){
					$next.show();
					$span.empty();
					$parent.removeClass("form-int-error");
				}else{
					$span.empty();
					var errorMsg = "两次密码输入不一致";
					$span.append("<i class='i-error'></i>" + errorMsg);
					$span.addClass("error");
					$parent.addClass("form-int-error");
				}
			}
			//邮箱
			if( $(this).is("#email") ){
				var regEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
				//console.log(input_value);
				if( !regEmail.test(input_value) ){
					$span.empty();
					var errorMsg = "格式错误";
					$span.append("<i class='i-error'></i>" + errorMsg);
					$span.addClass("error");
					$parent.addClass("form-int-error");
				}else{
					$next.show();
					$span.empty();
					$parent.removeClass("form-int-error");
				}
			}
			//手机号
			if( $(this).is("#phoneNumber") ){
				var regPhone = /^0?(13|15|17|18|14)[0-9]{9}$/;
				if( !regPhone.test(input_value) ){
					$span.empty();
					var errorMsg = "格式错误";
					$span.append("<i class='i-error'></i>" + errorMsg);
					$span.addClass("error");
					$parent.addClass("form-int-error");
				}else{
					$next.show();
					$span.empty();
					$parent.removeClass("form-int-error");
				}
			}
			
		}
		//验证码
		if( $(this).is("#autoCode") ){
			$span.empty();
			$next.show();
		}
		if( $(this).is("#phoneCode") ){
			$next.show();
		}		
	});
	$txt.click(function(){
		//输入框中的原有的提示文字，点击它时该输入框获得焦点
		//(上面有在输入框获取焦点时进行文字隐藏，所以没有必要再次隐藏文字)
		$(this).next().focus();
	});
});