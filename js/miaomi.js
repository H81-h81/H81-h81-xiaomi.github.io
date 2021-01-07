//鼠标移入显示.aa
$(".nav_right").hover(function (){
    $(".aa").slideDown(200,'linear',function(){});
    $('.aa').animate({            
        right:0,
        top:40,
    },1000,'linear',function(){})
},function (){
    $(".aa").show();
    $('.aa').slideUp(200,'linear',function(){})
});


//鼠标移入显示.nav-items
$(".nav-item").hover(function (){
    $(".qqnl").slideDown(200,'linear',function(){});
    $('.qqnl').animate({            
        left: -392,
        top: 86,
        },500,'linear',function(){})
},function (){
    $(".qqnl").show().slideDown(200,'linear',function(){});
    $('.qqnl').slideUp(200,'linear',function(){})
});




// $('.nav-item>ul').click(function(){
//     $(this)  // 把dom变成jquery对象集合
//     .addClass('qqnl')  // 给当前li添加类名qqnl
//     .siblings()  // 选择当前li的所有兄弟元素
//     .removeClass('qqnl') //移除qqnl
//     .parent()  //找到父元素ul
//     .next()   // 下一个兄弟ol
//     .children()  // ol下面所有的li
//     .removeClass('qqnl') // 移除qqnl
//     .eq($(this).index()) //找到索引和我点击的li对应的那一个
//     .addClass('qqnl') //添加类名qqnl            

// })





//鼠标移入显示.ewm
$(".ewms").hover(function (){
    $(".ewm").slideDown(200,'linear',function(){});
    $('.ewm').animate({            
        left: 630,
        top: 148,
        },600,'linear',function(){})
},function (){
    $(".ewm").show();
    $('.ewm').slideUp(200,'linear',function(){})
});











//banner轮播图

   

//第一个轮播
var mySwiper1 = new Swiper('#swiper1', {
    loop: true, // 循环模式选项
    autoplay: true,//可自动轮播
    autoplay:{
        delay:1000,},
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})

    // 回到顶部
/*     需求分析
                1 页面滚动到300px的时候，显示回到顶部按钮
                2 点击回到顶部按钮，页面滚动回顶部
 */
    // 1 页面滚动到300px的时候，显示回到顶部按钮
    $(window).scroll(function(){
        if($(this).scrollTop()>300){
            //显示回到顶部按钮
            $('.menu_ab').css('display','block')
        }
        if($(this).scrollTop()<=300){
            // 隐藏回到顶部按钮
            $('.menu_ab').css('display','none')
        }
    })
    // 2 点击回到顶部按钮，页面滚动回顶部
    $('.menu_ab').click(function(){
        $(window).scrollTop(0)
    })


    // 活动倒计时
    var timer = null;
    window.onload = function(){
        //定义倒计时的时间(倒计时1分钟10秒)
        var hour = 23
        var minutes = 59;
        var seconds = 59;
        function show(){
        // 3. 如果在session里面能取到值，说明页面是刷新的，直接获取值
        if(sessionStorage.getItem("countDown")){
            time = sessionStorage.getItem("countDown")
        // 3.1 获取现在的时间，用设置的倒计时时长 - 现在时间 = 还剩时长 
            var time1 = new Date().getTime()
            minute = 59 - Math.floor((time1 - time) / 1000 / 60)  //分
            seconds = 59 - Math.floor((time1 - time) / 1000 % 60)  //秒
        }else{
        // 4. 否则获取当前时间作为开始时间，并存入session
            time = new Date().getTime()
            sessionStorage.setItem('countDown',time)
        }

        //判断时间到了没
            if(hour==0&&seconds==0&&minutes==0){
                clearInterval(timer);//清除定时器
                alert("时间到");
                return;
            }
            seconds--;
            if(seconds<0){
                seconds = 59;
                minutes--;
            }
            if(minutes<0){
                minutes = 59;
                hour--;
    
            }
            hour = (hour+"").length==1?"0"+hour:hour;
            minutes = (minutes+"").length==1?"0"+minutes:minutes;//(minutes+"")是将其数据类型转换成字符串类型
            seconds = (seconds+"").length==1?"0"+seconds:seconds;
            document.getElementById("spanTime").innerHTML =hour+":"+ minutes+":"+seconds;
        }
        //开启定时器
        timer = setInterval(show,1000);
    }
    
 $('.tz').click(function(){
     location.href = "./xqy.html"
 })   
             

