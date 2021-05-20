let chai = require("chai");
let chaiHttp = require("chai-http");
require("../app");

const API = "http://localhost:3000";
// token just can use for 24 hour, if token is expired just login to get a new token and paste it on the token variabel bellow
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJyaXpxb25tYXVsYW5AZ21haWwuY29tIiwicm9sZSI6Im1haGFzaXN3YSIsImlhdCI6MTYyMTQ5NDE2NiwiZXhwIjoxNjIxNTgwNTY2fQ.18UQCnP4brlv0NFvzlOyXLWULp6cZB8Z-bUcdgaYmWU"

chai.should();
// const expect = chai.expect;

chai.use(chaiHttp);

let noteId;

describe("Nilai API", () => {
    // GET ALL NILAI
    describe("GET /api/nilai/all", () => {
        it("It should GET all data nilai", (done) => {
        chai
            .request(API)
            .get("/api/nilai/all")
            .set({ "Authorization": `Bearer ${token}` })
            .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            done();
            });
        });
    });

    // GET AVERAGE MAHASISWA
    describe("GET /api/nilai/average", () => {
        it("It should GET all average mahasiswa score", (done) => {
          chai
            .request(API)
            .get("/api/nilai/average")
            .set({ "Authorization": `Bearer ${token}` })
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("object");
              done();
            });
        });
      });

    // GET AVERAGE JURUSAN
    describe("GET /api/nilai/average/jurusan", () => {
        it("It should GET all average jurusan score", (done) => {
          chai
            .request(API)
            .get("/api/nilai/average/jurusan")
            .set({ "Authorization": `Bearer ${token}` })
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("object");
              done();
            });
        });
      });

 
});