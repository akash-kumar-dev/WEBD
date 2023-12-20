function savetoDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}

savetoDb(
    "apna college",
    () => {
        console.log("success : Data was saved");
        savetoDb(
            "Data 2",
            () => {
                
            console.log("success2 : Data2 saved...");
            savetoDb(
                "data 3",
                () => {
                    console.log("success3 : Data 3 saved..");
                },
                () => {
                    console.log("failur3 : Data3 not saved...!");
                }
            );
        },
        () => {
            console.log("failure2 : data not Saved...!")
        });
    },
    () => {
        console.log("failure: weak insternet..!");
    }
);