
var line_no, lineCount = 0, num;

screen.orientation.onchange = function () {
    var type = screen.orientation.type;
    if (type.match(/portrait/)) {
        alert('Please flip to landscape, to view simulation!');
    }
}


function executeServerBtn1(){
    var ser1=document.getElementById('executeServer1').value;
    var letters='start rmiregistery';
    if(ser1.match(letters))
    {
        alert("Enter Command to run AddServer application");
        document.getElementById('executeServer2').style.background='lightgreen';
        document.getElementById('executeCmd').style.visibility = "hidden";
        document.getElementById('executeCmd1').style.visibility = "visible";

    }
    else
    {
        alert("Enter valid Command");
    }
}

 function executeServerBtn2(){
    var ser2=document.getElementById('executeServer2').value;
    var letters='java AddServer';
    if(ser2.match(letters))
    {
        //document.getElementById('executeServer1').style.visibility = "hidden";
        //document.getElementById('executeServer2').style.visibility='hidden';
        document.getElementById('executeCmd1').style.visibility = "hidden";

        document.getElementById('client').style.visibility='visible';
        document.getElementById('executeClient').style.visibility='visible';

        document.getElementById('executeCmd3').style.visibility='visible';


    }
    else
    {
        alert("Enter valid Command");
    }
}

function executeClient1(){
    var ser3=document.getElementById('executeClient').value;
    var letters='java Client 127.0.0.1';
    if(ser3.match(letters))
    {
      document.getElementById('req').style.visibility="visible";
    }
    else
    {
        alert("Enter valid Command");
    }

}



//code for RPC1
function startClient() {
    document.getElementById('commented').style.visibility = "visible";
    document.getElementById('startbtn1').innerHTML = "<b>Next</b>";
    executeCode1();
}

function executeCode1(){
    if(lineCount != 0)
        document.getElementById(line_no).style.color = "white";
    lineCount += 1;
    num = parseInt(num);

    line_no = 'line' + lineCount;

    document.getElementById(line_no).style.color = "red";
    if(line_no=='line5')
    {
        num=0;
        document.getElementById('line5Comment').style.visibility = 'visible';
    }
   
    
    if(line_no=='line6')
    {
        document.getElementById('line5Comment').style.visibility='hidden';
       // document.getElementById('line13Comment').style.visibility='visible';


    }
    if(line_no=='line7')
    {
        document.getElementById('line7Comment').style.visibility='visible';

    }
    if(line_no=='line8')
    {
        document.getElementById('line7Comment').style.visibility='hidden';

    }
    if(line_no=='line9')
    {
        document.getElementById('line9Comment').style.visibility='visible';


    }
    if(line_no=='line10')
    {
        document.getElementById('line9Comment').style.visibility='hidden';


    }   

}


function startServer() {
    document.getElementById('commented').style.visibility = "visible";
    document.getElementById('startbtn2').innerHTML = "<b>Next</b>";
    executeCode2();
}

function executeCode2(){
    if(lineCount != 0)
        document.getElementById(line_no).style.color = "white";
    lineCount += 1;
    num = parseInt(num);

    line_no = 'server' + lineCount;

    document.getElementById(line_no).style.color = "red";
    if(line_no=='server2')
    {
        num=0;
        document.getElementById('server2Comment').style.visibility = 'visible';
    }
    if(line_no=='server3')
    {
        document.getElementById('server2Comment').style.visibility = 'hidden';
        document.getElementById('server3Comment').style.visibility='visible';
    }
    if(line_no=='server4')
    {
        
        document.getElementById('server3Comment').style.visibility='hidden';
        document.getElementById('server4Comment').style.visibility='visible';

    }
    if(line_no=='server5')
    {
        
        document.getElementById('server4Comment').style.visibility='hidden';
    }
    if(line_no=='server7')
    {
        
        document.getElementById('server7Comment').style.visibility='visible';
    }

    if(line_no=='server8')
    {
        
        document.getElementById('server7Comment').style.visibility='hidden';
        document.getElementById('server8Comment').style.visibility='visible';

    }
    if(line_no=='server9')
    {
        
        document.getElementById('server9Comment').style.visibility='hidden';
    }
    if(line_no=='server14')
    {
        alert("At End...")
    }
}

