function loadPics(type){
    var destory = document.getElementById('graduation');
    if(destory != null){
        destory.parentNode.removeChild(destory);
        document.getElementById('gallery').style.display = "none";
    }
    console.log(type);
    var parameter = type.split(" ");
    $.getJSON(parameter[1]+".js", function (data) {
        var items = [];
        console.log(parameter[0]);
        var i = 1;
        $.each(data, function (key, val) {
            items.push("<div id='" + i + "tile" + "' class ='" + "block" + "' style= '" + "background: url(" + parameter[0] + "/" + parameter[1] + "/" + key + "%20" + val + ".png) center no-repeat; height: 190px;" + "'>" + "<div  id='" + i + "tile" + "' class = '" + "data" + "'>" + key + " " + val + "</div>" + "</div>");
            i++;
        });
        
        $("<div />", {
           "class": "tile",
           "id": parameter[0],
           html: items.join("")
        }).hide().appendTo("#gallery").fadeIn(1000);
        
        document.getElementById('gallery').style.display = "inline-block";
    });
    
    
}