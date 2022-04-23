const Ajolonauta =  require('./../app/Ajolonauta')

describe("Pruebas de unidad de Ajolonauta", () =>{
    test("Caso de prueba 1: Creacion de un objeto", () =>{
        // Aqui se puede usar este espacio para utlizarlo como se desea
        const woopa = new Ajolonauta("Woopa")
        // Validar que nos de un resultado esperado
        expect(woopa.name).toBe('Woopa')
    })
})