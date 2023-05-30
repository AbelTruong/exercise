import csv from "csv-parser";
import fs from "fs";
const results = [];

fs.createReadStream("nhanvien.csv")
  .pipe(
    csv({
      raw: false, // neu true thi khong convert dữ liệu sang UTF-8, log lỗi luôn á, nên chưa biết sài chổ nào hợp lý
      mapValues: ({ header, index, value }) => value.toUpperCase(), // tuy chinh value|content
      mapHeaders: ({ header, index }) => header.toUpperCase(), // tuy chinh tieu de
      // separator: "\t", // phan cach dong
      skipComments: true, // loai bo phan tu bi comment trong file, mac dinh la sau dau #, neu la string thi truyen truc tiep gia tri do vao
      skipLines: 2, // chi dinh so dong ở đầu tệp mà lệnh này sẽ bỏ qua, mặc định là 0
    })
  )
  //   .pipe(csv(['name', "age"] | false)) //tuy chinh tieu de va hien thi tieu de neu co hoac khong
  .on("headers", (headers) => {
    console.log("handle headers: >>", headers);
  })
  .on("data", (data) => {
    results.push(data);
  })
  .on("end", () => {
    console.log(results);
  });
