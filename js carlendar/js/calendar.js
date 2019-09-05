	function updateDate(){
			var myDate = document.getElementById("span").innerHTML;
			var year = parseInt(myDate.substring(0,4));	
			var month = parseInt(myDate.substring(5,7));	//9
			var oldYear = 0;	
			var oldMonth = 0;	
			if(month == 1){
				oldYear = year - 1;
				oldMonth = 12;
			} else {
				oldYear = year;
				oldMonth = month - 1;
			}
			// 前一个月的日期 oldDate Date里的参数必须为整数 月份从 0 开始 天数从 1 开始
			var oldDate = new Date(oldYear,oldMonth - 1,1);	//8 1
			// 先把月份加1 变成当前月份  在设置一个超出范围的 0 使其号最为前一个月的最后一天 （比如 9 月最后一天是 30 号）
			oldDate.setMonth(oldDate.getMonth() + 1);	//9 1
			oldDate.setDate(0);	//8 31

			var html = '<tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>';
			
			// 设置当前显示的日期
			var presentDate = new Date(year,month - 1);

			// 这个同理
			var previousDay = oldDate.getDate() - presentDate.getDay() + 1; //30
			presentDate.setMonth(presentDate.getMonth() + 1); //9
			presentDate.setDate(0); //8

			// 当前要加的天数
			var day = 0;
			// 下一个月要加的天数
			var newDay = 0;
			for(var tr = 0; tr < 6; tr++){
				html += '<tr>';
				for(var td = 0; td < 7; td++){
					if(previousDay <= oldDate.getDate()){
						// 前一个月加的天数
						html += '<td class = "gray">' + previousDay + '</td>';
						previousDay++;
					}else if(day < presentDate.getDate()){
						// 当前加的天数
						day++;
						html += '<td>' + day + '</td>';
					}else{
						// 下一个月加的天数
						newDay++;
						html += '<td class = "gray">' + newDay + '</td>';
					}
				}
				html += '</tr>';
			}
			document.getElementById('dateTable').innerHTML = html;
		}

		document.getElementById("input").onclick=function(){
			document.getElementById("inside").style.display="block";
			var myDate = new Date();
			var year=myDate.getFullYear();
			var month=myDate.getMonth()+1;
			var day=myDate.getDate();
			if(month<10){
				month = '0' + month;
			}
			if(day < 10){
				day = '0' + day;
			}
			var date=year+"-"+ month+"-"+day;
			var datenew=year+"-"+ month;
			document.getElementById("input").placeholder=date;
			document.getElementById("text").placeholder=date;
			document.getElementById("span").innerHTML=datenew;	
			updateDate();
		}
		document.getElementById("today").onclick=function(){
			var myDate = new Date();
			var year=myDate.getFullYear();
			var month=myDate.getMonth()+1;
			var day=myDate.getDate();
			var date=year+"-"+ month+"-"+day;
			document.getElementById("input").placeholder=date;
			document.getElementById("text").placeholder=date;
			updateDate();
		}
		document.getElementById("left").onclick=function(){
			var myDate = new Date();
			var year=myDate.getFullYear();
			var month=myDate.getMonth()+1;
			var day=myDate.getDate();			
			var now=document.getElementById("span").innerHTML.toString();
			var presentmonth=parseInt(now.slice(5));
			var presentyear=parseInt(now.substr(0,4));
			if(presentmonth==1){
				presentyear=presentyear-1;
				presentmonth=13;
			}
			presentmonth -= 1;
			if(presentmonth < 10){
				presentmonth = '0' + presentmonth;
			}
			var last=presentyear+"-"+presentmonth;
			document.getElementById("span").innerHTML=last;
			updateDate();
		}
		document.getElementById("right").onclick=function(){
			var myDate = new Date();
			var year=myDate.getFullYear();
			var month=myDate.getMonth()+1;
			var day=myDate.getDate();
			var now=document.getElementById("span").innerHTML.toString();
			var presentmonth=parseInt(now.slice(5));
			var presentyear=parseInt(now.substr(0,4));
			if(presentmonth==12){
				presentyear=presentyear+1;
				presentmonth=0;
			}
			presentmonth += 1;
			if(presentmonth < 10){
				presentmonth = '0' + presentmonth;
			}
			var next=presentyear+"-"+presentmonth; 
			document.getElementById("span").innerHTML=next;
			updateDate();
		}