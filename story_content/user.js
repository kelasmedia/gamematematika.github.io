function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5g6ejd49l5K":
        Script1();
        break;
      case "5kiHknEEsEX":
        Script2();
        break;
      case "5bidqnXQHtK":
        Script3();
        break;
      case "6BpvNuFV0qd":
        Script4();
        break;
      case "6EM70gBTUxe":
        Script5();
        break;
      case "5VYnAT3XlWQ":
        Script6();
        break;
      case "5e7mwCd2V5R":
        Script7();
        break;
      case "6BgP8bzszdB":
        Script8();
        break;
      case "5eesxX2aoyk":
        Script9();
        break;
      case "5tiLGDzwLlU":
        Script10();
        break;
      case "6jyd76UFwFS":
        Script11();
        break;
      case "5rSQ7eiV9GN":
        Script12();
        break;
      case "5pCLU08axaG":
        Script13();
        break;
      case "6jsTICLG9aL":
        Script14();
        break;
      case "6BFP26RQ6Wa":
        Script15();
        break;
      case "6Ic3o89bVuP":
        Script16();
        break;
      case "6OtYe3NITHf":
        Script17();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="1.mp3";
audio.load();
audio.play();
audio.volume = 0.3;
}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.src="1.mp3";
audio.load();
audio.play();
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.src="2.mp3";
audio.load();
audio.play();
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.src="3.mp3";
audio.load();
audio.play();
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.src="4.mp3";
audio.load();
audio.play();
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script8()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script9()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

function Script10()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

function Script11()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}

function Script12()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.6;
}

function Script13()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.7;
}

function Script14()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.8;
}

function Script15()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.9;
}

function Script16()
{
  var audio = document.getElementById('bgSong');
audio.volume = 1.0;
}

function Script17()
{
  let player = GetPlayer();

function myFunction() {
     if (confirm("You are about to exit the course!")) {
     player.SetVar("Exit_Course",true);
    } else {
    console.log("User Cancelled Exit!");
    }
};
myFunction();
}

