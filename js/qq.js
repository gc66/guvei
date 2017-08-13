function _Callback(msg){
  	console.log(msg);
  	var info = document.getElementById("info");
  	info.innerHTML = '<h3>查询结果</h3><p>昵称:'+msg.nickname+'</p><p>头像:</p><img src="'+msg.avatarUrl+'"/>
生日天数：'+msg.offsetBirth;
  	}
 
  function getInfo(){
  	var url = "http://r.qzone.qq.com/cgi-bin/user/cgi_personal_card?uin=";
  	var uin = document.getElementById("uin");
  	if(uin.value=="" || uin.value == null){
 
      var info = document.getElementById("info");
      info.innerHTML = "请输入qq号";
      return;
  	}
  	url += uin.value;
 
  	var script =document.createElement("script");      // 动态创建script标签
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src",url);
    document.body.appendChild(script);
  }
