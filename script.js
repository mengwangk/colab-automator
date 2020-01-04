function ClickConnect(){
    console.log("Working"); 
    document.querySelector("colab-toolbar-button#connect").click() 
}
setInterval(ClickConnect,60000)

function ClickRefresh(){
    console.log("Refreshed"); 
    document.querySelector("body > div.notebook-vertical.colab-left-pane-open > div.notebook-horizontal > colab-left-pane > colab-resizer > div.resizer-contents > iron-pages > colab-file-browser > colab-file-tree > div.file-tree-buttons > div > colab-toolbar-button:nth-child(2) > paper-button > span").click() 
}
setInterval(ClickRefresh,30000)

