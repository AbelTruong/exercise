import express from "express";
import fileUpload from "express-fileupload";
import path from "path";

// link preference: https://github.com/gitdagray/node_file_uploader/blob/main/app.js
// youtube: https://www.youtube.com/watch?v=4pmkQjsKJ-U&ab_channel=DaveGray

const app = express();

const PORT = process.env.PORT || 5000;

console.log(process.cwd());
// import module syntax in es6
// __dirname, __filename is not working in es6, just working in es5 module scope

app.get("/", (req, res) => {
  const filepath = path.join(process.cwd(), "index.html");
  return res.status(200).set("Content-Type", "text/html").sendFile(filepath);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
