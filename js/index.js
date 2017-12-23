var Geetest = {
	init:function(){
     this.bind();
	},
	bind:function() {
		
		$('#ipEmail').on('focus',this.showBule);
		$('#ipEmail').on('blur',this.colorEven);
		$('#ipPsw').on('focus',this.showBuletoo);
		$('#ipPsw').on('blur',this.colorEventoo);
		$('#btnLogin').on('click',this.loginEven);
	},
	showBule:function(){
		$('#ipEmail').css("border-color","#4488ff");
		$('.error').hide()	;
	},
	showBuletoo:function(){
		$('#ipPsw').css("border-color","#4488ff");
		$('.error').hide()	;
	},
	colorEven:function(){
		var $emailNum =$('#ipEmail');
		var emailNum = $emailNum.val();

		if(!emailNum){
			$('#ipEmail').css("border-color","#F00");
			return
		}else {
			$('#ipEmail').css("border-color","#EBEDED");
		}
	
		
	},
	colorEventoo:function(){
		var $pswNum =$('#ipPsw');
		var pswNum = $pswNum.val();
		if(!pswNum){
			$('#ipPsw').css("border-color","#F00");
			return
		}else{
			$('#ipPsw').css("border-color","#EBEDED");
		}
	},
	loginEven:function(){
		var $emailNum =$('#ipEmail');
		var emailNum = $emailNum.val();
		var tureEmail =Geetest.isEmail(emailNum);
		if(!tureEmail){
			$('.error').show();
			console.log(emailNum)
			return
		}

    
	},
	isEmail:function(source){
		return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(source);
	}


};

	$(function(){
		Geetest.init();
	});
