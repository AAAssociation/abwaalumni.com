
function createUpdates() {
    var select = [];
    var items = [];
    $.each(a, function (key, val) {
        select.push(val);
    });
    for(var i = select.length - 1; i >= 0; i--){
        items.push();
        $("<div />", {
        "id": "name" + i,
        "class": "stuff",
        html: "<b>" + "Posted By: " + "</b>" + select[i]["Name"],
        }).hide().appendTo("#dataMess").fadeIn();
        $("<br />", {
        }).appendTo("body");
        $("<div />", {
        "id": "topic" + i,
        "class": "stuff",
        html: "<b>" + "Topic: " + "</b>" + select[i]["Topic"],
        }).hide().appendTo("#dataMess").fadeIn();
        $("<br />", {
        }).appendTo("body");	
        $("<div />", {
        "id": "message" + i,
        "class": "stuff",
        html: "<b>" + "Details: " + "</b> <br />" + select[i]["Message"],
        }).hide().appendTo("#dataMess").fadeIn();
        $("<hr />", {
        "class": "line",
        }).appendTo("#dataMess");
        $("<div />", {
            "class": "box",
            "id": parameter[0],
            html: items.join("")
        }).hide().appendTo("#updates").fadeIn(1000);
        items = [];
    }


}