(()=>{var t=document.getElementById("installBtn");window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),t.style.visibility="visible",textHeader.textContent="Click the button to install",t.addEventListener("click",(function(){e.prompt(),t.setAttribute("disabled",!0),t.textContent="installed"}))})),window.addEventListener("appinstalled",(function(t){textHeader.textContent="Successfully installed!",console.log("appinstalled",t)}))})();