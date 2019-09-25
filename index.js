/** csv file
a,b,c
1,2,3
4,5,6
*/
const csvFilePath='Q210Cc1-25092018.csv'
const csv=require('csvtojson')
const fs = require('fs');

csv().fromFile(csvFilePath).then((jsonObj)=>{
    //console.log(jsonObj);
	fs.writeFile("js/Q210Cc1-25092018.json",  JSON.stringify( jsonObj ) , function(err) {
		if(err) {
			return console.log(err);
		}

		console.log("The file was saved!");
	}); 

    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */ 
})
 
// Async / await usage
//const jsonArray=await csv().fromFile(csvFilePath);