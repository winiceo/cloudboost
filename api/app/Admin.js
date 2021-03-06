module.exports = function() {   

    //Change MasterKey/ClientKey
    global.app.put('/admin/:appId/clientkey',function(req, res) { 
        console.log("++++ Change ClientKey ++++++");

        try{          

            var appId = req.params.appId;   

            if (global.keys.secureKey === req.body.secureKey) {
                console.log("Secure Key Valid. Changing ClientKey...");

                global.appService.changeAppClientKey(appId).then(function (app){
                    console.log("Success : Changing ClientKey.");
                    res.status(200).json(app);
                }, function (err){
                    console.log("Error : Changing ClientKey.");
                    console.log(err);
                    res.status(500).send("Error");
                });

            } else {
                console.log("Unauthorized: Invalid Secure Key ");
                res.status(401).send("Unauthorized");
            }        
            

        }catch(e){
            console.log(e);
        }
    });

    //Change MasterKey/ClientKey
    global.app.put('/admin/:appId/masterkey',function(req, res) { 
        console.log("++++ Change Masterkey ++++++");

        try{          

            var appId = req.params.appId;   

            if (global.keys.secureKey === req.body.secureKey) {
                console.log("Secure Key Valid. Changing Masterkey...");

                global.appService.changeAppMasterKey(appId).then(function (app){
                    console.log("Success : Changing Masterkey.");
                    res.status(200).json(app);
                }, function (err){
                    console.log("Error : Changing Masterkey.");
                    console.log(err);
                    res.status(500).send("Error");
                });

            } else {
                console.log("Unauthorized: Invalid Secure Key ");
                res.status(401).send("Unauthorized");
            }        
            

        }catch(e){
            console.log(e);
        }
    });
};
