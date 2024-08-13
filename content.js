function ClockYtpSkipAdButtonn()
{
    var buttonlist = document.getElementsByClassName("ytp-skip-ad-button")
    
    if (buttonlist.length > 0)
    {
        buttonlist[0].click();
    }
}

function ClockButton()
{
    //var buttonlist = document.getElementsByClassName("ytp-ad-skip-button-modern")
    
    //if (buttonlist.length > 0)
    //{
    //    setTimeout(function() {
    //      }, 5000);
    //    buttonlist[0].click();
    //    return;
    //}
    var buttonlist = document.getElementsByClassName("ytp-skip-ad-button")
    
    if (buttonlist.length > 0)
    {
        setTimeout(function() {
            ClockYtpSkipAdButtonn();
        }, 5500);
    }
    // buttonlist = document.getElementsByClassName("ytp-ad-overlay-close-button")
    // if (buttonlist.length > 0)
    // {
    //    buttonlist[0].click();
    //    return;
    // }
    // buttonlist = document.getElementsByClassName("style-scope yt-confirm-dialog-renderer style-blue-text size-default")
    // if (buttonlist.length > 0)
    // {
    //   buttonlist[0].click();
    //    buttonlist[0].remove();
    //    return;
    //}

    //confirm-button
    //2回広告がウザイのでリロードして無理やりやめさせる
    //var buttonlist = document.getElementsByClassName("ytp-ad-text")
    //for (let i = 0; i< buttonlist.length; i++) {
    //  if(buttonlist[i].textContent.indexOf("2 本中 2 本目")  !== -1)
    //  {
    //    location.reload();
    //  }
    //}
    //buttonlist = document.getElementById("confirm-button")
    //if (buttonlist != null)
    //{
    //  buttonlist.click();
    //  buttonlist.remove(); 
    //}   
}
setInterval('ClockButton()',1000);