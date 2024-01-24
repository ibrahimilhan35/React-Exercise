const fs = require("fs");

// Reading a file asynchronously
fs.readFile("nodejs/demo.txt", "utf8", (err, data) =>{
    if (err){
        console.log(err);
        return;
    }
    console.log(data);
});

// Reading file - synchronolously
try {
    const data = fs.readFileSync("nodejs/demo.txt","utf8");
    console.log("data");
} catch (err) ;