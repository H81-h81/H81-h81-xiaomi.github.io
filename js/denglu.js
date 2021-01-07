$('.smdl').click(function(){
    $('.content_b').css('display','block');
})
$('.zhdl').click(function(){
    $('.content_b').css('display','none');
})


$('.nav>a').click(function(){
    $(this)
    .addClass('color')
    .siblings()  // 选择当前li的所有兄弟元素
    .removeClass('color') //移除color
    .parent()  //找到父元素
    .next()   // 下一个兄弟
    .children()  // 下面所有的
    .removeClass('color') // 移除color
    .eq($(this).index()) //找到索引和我点击的li对应的那一个
    .addClass('color') //添加类名 color         
})

        // 注册
        $('#zc').click(function(){
            if($('#un').val()&&$('#pw').val()!=null){
                $.ajax({
                    url:"./api/dl.json",
                    data:{
                        un:$('#un').val(),
                        pw:$('#pw').val()
                    },
                    dataType:'json',
                    success:function(res){
                        if(res.code==1){
                            // 注册成功，信息添加到本地存储，方便同域名下的其他页面访问
                            localStorage.setItem('name',$('#un').val());
                            location.href = "./denglu.html"
                        }
                    }
                })    
            }else{
                alert('账号不能为空')
            }
        })

        //登录
    $('#dl').click(function(){
        console.log($('#un').val());
        console.log($('#pw').val());
        if($('#un').val()&&$('#pw').val()!=null){
            $.ajax({
                url:"./api/dl.json",
                data:{
                    un:$('#un').val(),
                    pw:$('#pw').val()
                },
                dataType:"json",
                success:function(res){
                    if(res.code==1){
                        // 登录成功，信息添加到本地存储，方便同域名下的其他页面访问
                        localStorage.setItem('name',$('#un').val());
                        location.href = "./xiaomi.html"
                    }
                }
            })
        }else{
            alert("账号不能为空")
        }

       
    })




