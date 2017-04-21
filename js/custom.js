   (function () {
   "use strict";
    // Hard coded Data. 
    // In real life scnario, all this interaction will take place with the server
    var chatInfo = {
        server: "Mary",
        replies: ["Hi Nicholas this is Mary from Abank. How may I help you today?",
            "To reset your password just click on the My details menu. Once you have clicked the menu a new page will appear. Select the link change password. From this link it will take you to a screen where you can change your password"
        ],
        client: "Nicholas",
        queries: []
    };
    var chatBall = document.getElementById("chat-bubble");
    var chatNow = document.getElementById("chat-now");
    var errorMsg = document.getElementById("error-msg");
    chatNow.addEventListener("click", function() {
        chatNow.style.display = 'none';
        document.getElementById("chat-inputs").style.display = "block";
        setTimeout(function() {
            chatBall.innerHTML = "<p><b>" + chatInfo.server + ": </b> \"" + chatInfo.replies[0] + "\"</p>";
        }, 1000);
    });


    document.getElementById("send-btn").addEventListener("click", function() {
        var query = document.getElementById("chat-text");
        if (query.value === "") {
            errorMsg.innerHTML = "Please enter your query !";
        } else {
            chatInfo.queries.push(query.value);
            chatBall.innerHTML += "<p class=\"sender-msg\"><b>" + chatInfo.client + " : </b> \"" + query.value + "\"</p>";
            query.value = "";
            setTimeout(function() {
                chatBall.innerHTML += "<p><b>" + chatInfo.server + " : </b> \"" + chatInfo.replies[1] + "\"</p>";
            }, 3000);
        }
    });

    document.getElementById("chat-text").addEventListener("focus", function() {
        errorMsg.innerHTML = "";
    });
}());
   
   
    