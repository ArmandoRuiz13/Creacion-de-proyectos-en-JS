const MissionCommander = require('../app/missionCommander')

describe("Pruebas de unidad de Mission commander", () =>{
    test("Caso de prueba 1: Creacion de un objeto", () =>{
        // Aqui se puede usar este espacio para utlizarlo como se desea
        const Armando = new MissionCommander("Armando")
        // Validar que nos de un resultado esperado
        expect(Armando.name).toBe('Armando')
    })
})