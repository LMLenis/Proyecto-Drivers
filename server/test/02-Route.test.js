const {server} = require('../src/app');
const session = require('supertest');
const agent = session(server);



describe("Test de RUTAS", () => {


    describe('GET /drivers/:id', () => {
        it("Responde con status: 200", async () => {
            await agent.get('/drivers/1').expect(200);
        });

        it("si hay un error responde con el status 500", async() => {
            await agent.get('/drivers/700').expect(500);
        });

        it('Responde un objeto con las propiedades:"id", "driverRef", "number", "code", "name", "image", "dob", "nationality", "url", "teams" y "description"',
            async () => {
            const {body} = await agent.get('/drivers/1');
            const propiedades = [
                "id",
                "driverRef", 
                "number", 
                "code", 
                "name", 
                "image",
                "dob",
                "nationality",
                "url",
                "teams",
                "description"
            ];

            propiedades.forEach(prop=>{
                expect(body).toHaveProperty(prop)
            });
        });
    });



    describe("GET / drivers/name", () => {
        it("informacion correcta pase usted", async () =>{
            const {body} = await agent.get("/drivers/name?name=Lewis");
            const valores = [
                "1",
                "hamilton",
                "44", 
                "HAM", 
                ["Lewis", "Hamilton"],
                ["https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg", 
                "By Morio - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=52060566"],
                "1985-01-07",
                "British",
                "http://en.wikipedia.org/wiki/Lewis_Hamilton",
                "McLaren, Mercedes",
                "Sir Lewis Carl Davidson Hamilton MBE HonFREng (born 7 January 1985) is a British racing driver currently competing in Formula One, driving for Mercedes-AMG Petronas Formula One Team. In Formula One, Hamilton has won a joint-record seven World Drivers' Championship titles (tied with Michael Schumacher), and holds the records for the most wins (103), pole positions (103), and podium finishes (191), among many others. He is statistically considered as the most successful driver in Formula One history."
                
            ];

            valores.forEach(prop=>{
                expect(body).toHaveProperty(prop)
            });








        it("informacion incorrecta 'You shall not pass'", async () => {
            const {body} = await agent.get("/rickandmorty/login?email=llenis73@gmail.com&password=elmalo");
            expect(body.access).toEqual(false);
        })
    })

    describe("POST /rickandmorty/fav", () => {
        const testCharA = {id:1, name:"TEST A"}
        const testCharB = {id:2, name:"TEST B"}

        it("Devuelve un array con la información enviada", async() => {
            const {body} = await agent.post("/rickandmorty/fav").send(testCharA);

            expect(body).toContainEqual(testCharA);
        });

        it("Devuelve un array con la información enviada", async() => {
            const {body} = await agent.post("/rickandmorty/fav").send(testCharB);

            expect(body).toContainEqual(testCharA);
            expect(body).toContainEqual(testCharB);
        });
    });

    describe("DELETE / rickandmorty/fav/:id", () =>{
        const testCharA = {id:1, name:"TEST A"}
        const testCharB = {id:2, name:"TEST B"}

        it("Si no se elimina ningun personaje devuelve el mismo array", async()=>{
        const {body} = await agent.delete("/rickandmorty/fav/3312")

        expect(body).toContainEqual(testCharA);
        expect(body).toContainEqual(testCharB);

        });

        it("Elimina al personaje recibido por ID", async()=>{
            const {body} = await agent.delete("/rickandmorty/fav/2")
    
            expect(body).not.toContainEqual(testCharB);
        });
    });

});