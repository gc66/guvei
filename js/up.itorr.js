UP(图片文件,function(pid){  //图片 pid 部分
    console.log(/上传成功，图片地址:/,'http://ww2.sinaimg.cn/large/'+pid)
},function(error){ //错误回调，返回错误原因文本
    console.log(/上传文件出错了！/,error)
},function(进度){ //进度回调，返回进度 0-1
    console.log(/进度/,进度*100+'%')
})
