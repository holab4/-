$(function(){
	var $logQrcode = $("#logQrcode");
	var $logAccount = $("#logAccount");
	var $qrImg = $("#qrImg");
	var $username = $("#username");
	var $password = $("#password");
	var $logBtn = $("#logBtn");
	var $nameParent = $username.parent();
	var $pwdParent = $password.parent();
	var $nameLabel = $username.prev();
	var $pwdLabel = $password.prev();
	// 登录方式切换
	//扫描登录
	$logQrcode.click(function(){
		var $logBox = $(this).parents(".log-box");
		$(this).parent().next().children("a").removeClass("current");
		$(this).addClass("current");
		$logBox.children(".qrcode-log").removeClass("hide");
		$logBox.children(".account-log").addClass("hide");
	});
	//账户登录
	$logAccount.click(function(){
		var $logBox = $(this).parents(".log-box");
		$(this).parent().prev().children("a").removeClass("current");
		$(this).addClass("current");
		$logBox.children(".qrcode-log").addClass("hide");
		$logBox.children(".account-log").removeClass("hide");
	});
	//二维码动画
	$qrImg.parent().hover(function(){
		$qrImg.stop().animate({"left":"0"},400,function(){
			$(this).next().css("display","block");
		});
	},function(){
		$qrImg.next().css("display","none");		
		$qrImg.stop().animate({"left":"64px"},400);
	});
	function nameAddError(){
		$nameParent.addClass("int-error");
		$nameLabel.addClass("label-error name-label-error");
	}
	function pwdAddError(){
		$pwdParent.addClass("int-error");
		$pwdLabel.addClass("label-error pwd-label-error");
	}
	function nameRemoveError(){
		$nameParent.removeClass("int-error");
		$nameLabel.removeClass("label-error name-label-error");
	}
	function pwdRemoveError(){
		$pwdParent.removeClass("int-error");
		$pwdLabel.removeClass("label-error pwd-label-error");
	}
	// 初始化 用户名输入框获得焦点
	$username.focus();
	// 登录按钮点击验证
	$logBtn.click(function(){
		var nameText = $username.val();
		var pwdText = $password.val();
		// 用户名密码为空
		if( (nameText == "") && (pwdText == "") ){
			var errorMsg = "请输入账户名和密码";
			$(".error-msg span").remove();
			$(".error-msg").removeClass("hide").append("<span class='onError'>" + errorMsg + "</span>");
			nameAddError();
			pwdAddError();			
			$username.focus(function(){
				nameRemoveError();
			}).blur(function(){
				nameAddError();
			});
			$password.focus(function(){
				pwdRemoveError();
			}).blur(function(){
				pwdAddError();
			});
			$username.focus();
			return false;
		}
		//用户名为空
		if( nameText == "" ){
			var errorMsg  = "请输入账户名";
			$(".error-msg span").remove();
			$(".error-msg").removeClass("hide").append("<span class='onError'>" + errorMsg + "</span>");
			nameAddError();
			pwdRemoveError();
			$username.focus(function(){
				nameRemoveError();
			}).blur(function(){
				nameAddError();
			});
			$password.focus(function(){
				pwdRemoveError();
			}).blur(function(){
				pwdRemoveError();
			})
			$username.focus();
			return false;
		}
		//密码为空
		if( pwdText == "" ){
			var errorMsg  = "请输入密码";
			$(".error-msg span").remove();
			$(".error-msg").removeClass("hide").append("<span class='onError'>" + errorMsg + "</span>");
			pwdAddError();
			nameRemoveError();
			$username.focus(function(){
				nameRemoveError();
			}).blur(function(){
				nameRemoveError();
			});
			$password.focus(function(){
				pwdRemoveError();
			}).blur(function(){
				pwdAddError();
			});			
			$password.focus();
			return false;
		}
		// 未连接数据库 无法验证登录 直接跳到首页
		if( nameText && pwdText ){
			nameRemoveError();
			pwdRemoveError();			
			$(".error-msg span").remove();
			$(".error-msg").addClass("hide");
			$(this).text("正在登录...");
			setTimeout(function(){
				//$logBtn.attr("href","index.html");
				//var name = $username.val();
				window.location.href = 'index.html?username=' + nameText;
			},2000);
		}
		/*var numError = $("form .onError").length;
		if(numError){
			return false;
		}else{
			$(this).text("正在登录...");
			setTimeout(function(){
				//$logBtn.attr("href","index.html");
				var name = $username.val();
				window.location.href="index.html?username=" + name;
			},2000);
		}*/
	});
	//enter键快捷跳到下一个
	$username.on("keypress",function(event){
		// alert(event.which);
		var nameText = $(this).val();
		if( (event.which == 13) && nameText ){
			$password.focus();
		}
	});
	$password.on("keypress",function(event){
		// alert(event.which);
		var pwdText = $(this).val();
		if( (event.which == 13) && pwdText ){
			$logBtn.click();
		}
	});
});
	