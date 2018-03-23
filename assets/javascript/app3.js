authorizeUser = function(){    

    var results = $.ajax({

        // The URL to process the request
        url : 'https://www.udemy.com/api-2.0/courses/?category=technology&price=price-free',
        type : 'GET',
        data : {
            client_id : "yrZxSJRHsOGNhmUVDnn36Oq1JyrT8xg2gjs6UZHz",
            client_secret : "bcnRgwgP50La1MfKbdTfQEyzRL9z2nsmD21hXvl5TTLwWfdAyhv0pIIda2JtwukP68RwFpdD2OpSVZdmsFGTj3eg8LIMjtC7M9dqV3alS625vh81UYINxbkJSzVx17HU"
        },
        beforeSend: function (xhr) {
xhr.setRequestHeader("Authorization", "Bearer $token")
},
        dataType: "json",
        success: function(response) {
           console.log(response);
           
        }

    });


};

authorizeUser(); 