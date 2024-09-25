function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ZPW5sUc7fG":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bySongku');
audio.src="mpi.mp3";
audio.load();
audio.play();
audio.volume=0.5;

}

