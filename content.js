
function ClockButton()
{
    var buttonlist = document.getElementsByClassName("ytp-ad-skip-button ytp-button")
    
    if (buttonlist.length > 0)
    {
        buttonlist[0].click();
        return;
    }
    buttonlist = document.getElementsByClassName("ytp-ad-overlay-close-button")
    if (buttonlist.length > 0)
    {
        buttonlist[0].click();
        return;
    }
    buttonlist = document.getElementsByClassName("style-scope yt-confirm-dialog-renderer style-blue-text size-default")
    if (buttonlist.length > 0)
    {
        buttonlist[0].click();
        return;
    }
    
    //2回広告がウザイのでリロードして無理やりやめさせる
    var buttonlist = document.getElementsByClassName("ytp-ad-text")
    for (let i = 0; i< buttonlist.length; i++) {
      if(buttonlist[i].textContent.indexOf("2 本中 2 本目")  !== -1)
      {
        location.reload();
      }
    }
    
}
setInterval('ClockButton()',500);