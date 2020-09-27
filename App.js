const send = document.getElementById("send");
const receive = document.getElementById("receive");
const history = document.getElementById("history");
const heading = document.getElementById("heading");
const navigate = document.getElementById("navigate");
const AppName = document.getElementById("AppName");
const main = document.body;
const result = document.getElementById("result");
const receiveAction = document.getElementById("receiveAction");
const search = document.getElementById("search");
const searches = document.getElementById("searches");
const sendAction = document.getElementById("sendAction");
const upload = document.getElementById("upload");
const sendIt = document.getElementById("sendIt");
const Close = document.getElementById("close");
const Closed = document.getElementById("closed");
const Alert = document.getElementById("alert");
const filelist = document.getElementById("filelist");
const filesrec = document.getElementById("filesrec");

filelist.style.margin = "auto";
filelist.style.padding = "0";
filelist.style.backgroundColor = "#DCDCDC";
filelist.style.backgroundColor = "#DCDCDC";
filelist.style.position = "relative";
filelist.style.top = "4";
filelist.style.alignItems = "center";
filelist.style.margin = "auto";
filelist.style.marginBottom = "200px"
filelist.style.zIndex = "5";
filelist.style.width = "100%";
filelist.style.height = "220px";
filelist.style.borderRadius = "10px";
filelist.style.borderStyle = "solid";
filelist.style.borderColor = "#06004F";
filelist.style.borderWidth = "2px";
filelist.style.overflow = "auto";
filelist.style.color = "#000";
filelist.style.display = "none";

main.style.backgroundColor = "#04002A";
main.style.color = "#ffffff";
main.style.overflow = "none";
main.style.backgroundAttachment = "scroll";
main.style.fontStyle = "italic";
main.style.zIndex = "-1";
main.style.opacity = "0.9";
main.style.fontFamily = "Roboto Mono, monospace";

AppName.style.backgroundAttachment = "scroll";
AppName.style.position = "relative";
AppName.style.top = "0";
AppName.style.color = "#96AFFF"
AppName.style.fontFamily = "Roboto Mono, monospace";


navigate.style.color = "#fff";
navigate.style.fontStyle = "italic";
navigate.style.fontFamily = "sans-serif";
navigate.style.backgroundAttachment = "scroll";
navigate.style.marginBottom = "0px";
navigate.style.fontSize = "30px";
navigate.style.marginBottom = "40px";
navigate.style.position = "relative"

send.style.backgroundColor = "#FF6E00";
send.style.color = "#fff";
send.style.fontStyle = "italic";
send.style.height = "50px";
send.style.borderRadius = "3px"
send.style.fontWeight = "150px";
send.style.borderStyle = "solid";
send.style.borderColor = "#06004F";
send.style.zIndex = "4";
send.style.fontSize = "25px";
send.style.display = "block"
send.style.position = "absolute";
send.style.left = "50px";
send.onclick = function() {
    send.style.opacity = "0.4"
    sendAction.style.display = "block";
    receiveAction.style.display = "none";
    Loading.style.display = "none";
}

receive.style.backgroundColor = "#FF6E00";
receive.style.color = "#fff";
receive.style.fontStyle = "italic";
receive.style.height = "50px";
receive.style.borderRadius = "3px"
receive.style.fontWeight = "150px";
receive.style.borderStyle = "solid";
receive.style.borderColor = "#06004F";
receive.style.zIndex = "4";
receive.style.fontSize = "25px";
receive.style.display = "block"
receive.style.position = "absolute";
receive.style.right = "50px";
receive.onclick = function() {
    receive.style.opacity = "0.4";
    receiveAction.style.display = "block";
    sendAction.style.display = "none";
}

Close.style.padding = "15px";
Close.style.borderStyle = "solid";
Close.style.borderColor = "#FF0004";
Close.style.color = "#DCDCDC";
Close.style.backgroundColor = "#FF0004";
Close.style.borderRadius = "3px";
Close.style.outlineStyle = "hidden";
Close.style.marginLeft = "225px";
Close.style.marginTop = "44px";
Close.style.fontFamily = "Roboto Mono, monospace";
Close.addEventListener("click", function() {
    receiveAction.style.display = "none";
    receive.style.opacity = "1";
})

Closed.style.padding = "15px";
Closed.style.borderStyle = "solid";
Closed.style.borderColor = "#FF0004";
Closed.style.color = "#DCDCDC";
Closed.style.backgroundColor = "#FF0004";
Closed.style.borderRadius = "3px";
Closed.style.outlineStyle = "hidden";
Closed.style.marginLeft = "300px";
Closed.style.marginTop = "44px";
Closed.style.fontFamily = "Roboto Mono, monospace";
Closed.addEventListener("click", function() {
    sendAction.style.display = "none";
    send.style.opacity = "1";
})

sendAction.style.backgroundColor = "#DCDCDC";
sendAction.style.position = "relative";
sendAction.style.top = "4";
sendAction.style.alignItems = "center";
sendAction.style.margin = "auto";
sendAction.style.marginBottom = "200px"
sendAction.style.zIndex = "5";
sendAction.style.width = "430px";
sendAction.style.height = "220px";
sendAction.style.borderRadius = "10px";
sendAction.style.borderStyle = "solid";
sendAction.style.borderColor = "#06004F";
sendAction.style.borderWidth = "2px";
sendAction.style.display = "none";

upload.style.padding = "10px";
upload.style.borderStyle = "solid";
upload.style.borderColor = "#06004F";
upload.style.color = "#06004F";
upload.style.borderRadius = "3px";
upload.style.outlineStyle = "hidden";
upload.style.fontFamily = "Roboto Mono, monospace";

const connectionText = document.getElementById("connectionText");
connectionText.innerHTML = "no";
connectionText.style.backgroundColor = "#DF8300";
connectionText.style.width = "1%";
connectionText.style.height = "40px";
connectionText.style.textAlign = "center"
connectionText.style.borderRadius = "1px";
connectionText.style.fontFamily = "Roboto Mono, monospace";

Alert.style.backgroundColor = "#8C8C8C";
Alert.style.margin = "auto";
Alert.style.marginTop = "25px";
Alert.style.borderStyle = "solid";
Alert.style.borderWidth = "1px";
Alert.style.OutlineStyle = "none";
Alert.style.borderRadius = "4px";
Alert.style.height = "40px";
Alert.style.display = "none";

sendIt.style.padding = "15px";
sendIt.style.borderStyle = "solid";
sendIt.style.borderColor = "#06004F";
sendIt.style.color = "#DCDCDC";
sendIt.style.backgroundColor = "#06004F";
sendIt.style.borderRadius = "3px";
sendIt.style.outlineStyle = "hidden";
sendIt.style.fontFamily = "Roboto Mono, monospace";

receiveAction.style.backgroundColor = "#DCDCDC";
receiveAction.style.position = "relative";
receiveAction.style.top = "4";
receiveAction.style.alignItems = "center";
receiveAction.style.margin = "auto"
receiveAction.style.marginBottom = "200px"
receiveAction.style.zIndex = "5";
receiveAction.style.width = "360px";
receiveAction.style.height = "220px";
receiveAction.style.borderRadius = "10px";
receiveAction.style.borderStyle = "solid";
receiveAction.style.borderColor = "#06004F";
receiveAction.style.borderWidth = "2px";
receiveAction.style.display = "none";

searches.style.padding = "10px";
searches.style.borderStyle = "solid";
searches.style.borderColor = "#06004F";
searches.style.color = "#06004F";
searches.style.borderRadius = "3px";
searches.style.outlineStyle = "hidden";
searches.style.fontFamily = "Roboto Mono, monospace";

search.style.padding = "15px";
search.style.borderStyle = "solid";
search.style.borderColor = "#06004F";
search.style.color = "#DCDCDC";
search.style.backgroundColor = "#06004F";
search.style.borderRadius = "3px";
search.style.outlineStyle = "hidden";
search.style.fontFamily = "Roboto Mono, monospace";

const Upload = document.getElementById("upload");
const load = document.getElementById("load");
const Loading = document.getElementById("progression");

Loading.style.backgroundColor = "#8C8C8C";
Loading.style.margin = "auto";
Loading.style.marginTop = "25px";
Loading.style.borderStyle = "solid";
Loading.style.borderWidth = "1px";
Loading.style.OutlineStyle = "none";
Loading.style.borderRadius = "4px";
Loading.style.height = "40px";
Loading.style.display = "none";
Loading.style.zIndex = "5"

//The Sending function handles every file that`s to be sent to the server for processing
function
Sending() {
    sendAction.style.display = "block";
    //This creates a client side connection  to the server
    const newSocket = new WebSocket("ws://localhost:3000");
    newSocket.binaryType = "blob";
    newSocket.onopen = function() {
        load.style.backgroundColor = "#DF8300";
        load.style.width = "1%";
        load.style.height = "40px";
        load.style.textAlign = "center"
        load.style.borderRadius = "1px";
        load.style.fontFamily = "Roboto Mono, monospace";
        load.innerHTML = "1%  ";
        var loaded = 0;
        const ID = setInterval(loading, 100);

        function loading() {
            if (loaded >= 100) {
                clearInterval(ID);
            } else {
                loaded++;
                load.style.width = loaded + "%";
                load.innerHTML = "Uploading Files " + loaded + "%";
                if (load.style.width == "100%") {
                    Loading.style.display = "none";
                    alert("File Transfer Successful");
                    send.style.opacity = "0.9";
                }
            }
        }
        if (Upload.files === "") {
            Loading.style.display = "none";
        }
        sendAction.style.display = "none";
        Loading.style.display = "block";
        const reader = new FileReader();
        reader.onload = function() {
            const ObjectFile = {
                FileName: Upload.files[0].name,
                Content: reader.result,
                type: Upload.files[0].type
            }
            const Parsed = JSON.stringify(ObjectFile);
            newSocket.send(Parsed)
        }

        reader.readAsDataURL(Upload.files[0]);
    }
}

//The Receiving function handles every files and message sent by the server.
function Receiving() {
    if (searches.value === "") {
        alert("Enter File Name!")
    }
    const newSocket = new WebSocket("ws://localhost:3000");
    newSocket.onopen = function() {
        newSocket.onmessage = function({ data }) {
            console.log(typeof data)
            const Message = JSON.parse(data);
            console.log(Message)

            const input1 = new String(searches.value)
            const input2 = new String(Message.FileName)
            const rezults = input2.search(input1)
            if (rezults >= 0) {
                const fileSent = document.createElement("li");
                const FILE = "<span>" + Message.FileName + "</span>"
                const save = "<button id='press' style='padding:5px; border-style:solid;  border-color:#06004F; color:#DCDCDC; background-color:#06004F; border-radius:3px; outline-style: hidden; font-family:Roboto mono, monospace'>Save</button><br>"

                FILE.innerText = Message.FileName;
                fileSent.innerHTML = FILE + "      " + save;
                fileSent.style.display = "inline";
                fileSent.style.boxShadow = "1px 1px grey"
                filesrec.appendChild(fileSent);
                filesrec.style.width = "75%";
                filelist.style.display = "block";
                receiveAction.style.display = "none";
                document.getElementById("press").onclick = proceed;
                console.log(rezults)
            } else {
                alert("File Doesn't Exits")
            }

            function proceed() {
                receiveAction.style.display = "none";
                var connected = 0;
                const check = setInterval(Connect, 100);

                function Connect() {
                    if (connected >= 100) {
                        clearInterval(check);
                    } else {
                        connected++;
                        connectionText.style.width = connected + "%";
                        connectionText.innerHTML = "Downloading " + connected + "%";
                        if (connectionText.style.width == "100%") {
                            Alert.style.display = "none";
                            alert("Download Complete");
                            receive.style.opacity = "0.9";
                        }
                    }
                }
                filelist.style.display = "none";
                Alert.style.display = "block"
                const ank = document.createElement("a");
                ank.href = Message.Content;
                ank.download = Message.FileName;
                ank.click();
            }
        }
    }
}

sendIt.onclick = Sending;
search.onclick = Receiving;