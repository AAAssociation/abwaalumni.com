
function createUpdates(typeNews, limit) {
    var items = [];
    var destroy = document.getElementById('updates');
    while(destroy.hasChildNodes()){
        destroy.removeChild(destroy.lastChild);
    }
    var max = 0;
    $.getJSON("/news/"+ typeNews + ".js", function (data) {
        console.log(data);
        var tag = typeNews.charAt(0).toUpperCase() + typeNews.substring(1)  ;
        if(limit > 0){
            max = data.length -3;
        }
        for(var i = data.length-1; i >= max; i--){
             items.push("<heading>" + data[i]["title"] + "</heading><poster>" + "By:  " + data[i]["name"] + " <tag type='" + typeNews + "'>" + tag + "</tag>"+ "</poster><div type=" + "message" +">" + data[i]["message"] + "</div>" );
            $("<div />", {
           "class": "box news",
           "id": typeNews,
           html: items.join("")
        }).appendTo("#updates");
            items=[];
        }
        
        
    });
    
}