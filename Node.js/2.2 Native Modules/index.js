const fs = require("fs");

//fs.writeFile (file_name, string_data, callbacl_function)
fs.writeFile("message.txt", "Hello Node by Aaditya Mittal!", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

//fs.readFile (file_name, encoding, callback_function)
fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});