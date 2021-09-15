var one = prompt("請輸入起始年份");  //詢問起始年份
var two = prompt("請輸入結束年份");  //詢問結束年份
let num_yearFrom = parseInt(one);  //將用戶回答定義為數字
let num_yearTo = parseInt(two);    //將用戶回答定義為數字

var text = document.getElementById("6");

i = num_yearFrom //設定起始年份
n = 0 //設定起始月份 ( 啟動後會+1 )
play = true

text.innerText = num_yearFrom + "年到" + num_yearTo + "年的財富月如下"

while(i<=num_yearTo){
    var days = new Date(i , n , 0).getDate();  //取得月份有幾天
    var weeks = new Date(i + "/" + n + "/1").getDay();  //取得該月一號是星期幾
    //偵測結果
    if(days == 31 && weeks == 5){  //偵測該月是否有31天 且 第一天是星期五
        var answer = true;  //是的話，回傳是
    }
    else if(days != 31 || weeks != 5){  //偵測是否不成立
        var answer = false;  //若不成立，回傳否
    }        
    //回傳結果
    if(answer == true){  //如果是財富月
        document.write(i +"年" + n + "月" + "是財富月！");  //告訴使用者是
        document.write("</br>");  //換行
        document.write("</br>");  //換行  
    }
    else if(answer == false){  //如果不是財富月
        //不執行任何動作   
    }
    n++
    if (n == 12){ //如果已經偵測完一年
        i++ //跳到下一年
        n = 0  //重制月份
    }
    
}