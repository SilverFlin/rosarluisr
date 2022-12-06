//Lo que representa cada Nodo
const vertex = new Map([
    ['(a) Puebla'],
    ['(b) Tehuacan'],
    ['(c) Cholula de Rivadavia'],
    ['(d) Atlixco'],
    ['(e) Amozoc'],
    ['(f) San Martin'],
    ['(g) Teziutlan'],
    ['(h) Huauchinango'],
    ['(i) Tlaxcalancingo'],
    ['(j) Izúcar'],
    ['(k) San Andres Cholula'],
    ['(l) Xicotepec'],
    ['(m) Zacatlan'],
    ['(n) Tecamachalco'],
    ['(o) Ajalpan'],
    ['(p) Sanctórum'],
    ['(q) Tepeaca'],
    ['(r) Moyotzingo'],
    ['(s) Acatzingo'],
    ['(t) Huejotzingo'],
    ['(u) Cuautlancingo'],
    ['(v) Ciudad Serdán'],
    ['(w) Acajete'],
])

//Esto de aqui es el grafo junto el peso de las aristas
const G = new Map([
    [{source: '(o) Ajalpan', target: '(b) Tehuacan'}, 22],
    [{source: '(b) Tehuacan', target: '(n) Tecamachalco' }, 63.7],
    [{source: '(n) Tecamachalco', target: '(q) Tepeaca'}, 22.1],
    [{source: '(n) Tecamachalco', target: '(s) Acatzingo'}, 26.3],
    [{source: '(s) Acatzingo', target: '(e) Amozoc' }, 30.3],
    [{source: '(s) Acatzingo', target: '(g) Teziutlan'}, 133],
    [{source: '(s) Acatzingo', target: '(q) Tepeaca' }, 20.8],
    [{source: '(g) Teziutlan', target: '(m) Zacatlan' }, 199],
    [{source: '(m) Zacatlan', target: '(h) Huauchinango' }, 57.5],
    [{source: '(h) Huauchinango', target: '(l) Xicotepec' }, 21.5],
    [{source: '(q) Tepeaca', target: '(e) Amozoc' }, 18.7],
    [{source: '(q) Tepeaca', target: '(a) Puebla' }, 41.2],
    [{source: '(e) Amozoc', target: '(a) Puebla'}, 25],
    [{source: '(j) Izúcar', target: '(d) Atlixco' }, 39.4],
    [{source: '(d) Atlixco', target: '(f) San Martin' }, 55.1],
    [{source: '(f) San Martin', target: '(r) Moyotzingo' }, 6.2],
    [{source: '(r) Moyotzingo', target: '(t) Huejotzingo' }, 21.9],
    [{source: '(r) Moyotzingo', target: '(a) Puebla' }, 44.6],
    [{source: '(t) Huejotzingo', target: '(c) Cholula de Rivadavia' }, 16.5],
    [{source: '(t) Huejotzingo', target: '(k) San Andres Cholula' }, 19.9],
    [{source: '(c) Cholula de Rivadavia', target: '(k) San Andres Cholula' }, 3],
    [{source: '(c) Cholula de Rivadavia', target: '(p) Sanctórum'}, 12.8],
    [{source: '(p) Sanctórum', target: '(a) Puebla'}, 13.9],
    [{source: '(p) Sanctórum', target: '(k) San Andres Cholula'}, 14],
    [{source: '(k) San Andres Cholula', target: '(a) Puebla'}, 11.3],
    [{source: '(d) Atlixco', target: '(i) Tlaxcalancingo'}, 24.5],
    [{source: '(i) Tlaxcalancingo', target: '(a) Puebla'}, 10.2],
    [{ source: '(c) Cholula de Rivadavia', target: '(u) Cuautlancingo'}, 5],
    [{source: '(p) Sanctórum', target: '(u) Cuautlancingo'}, 10],
    [{source: '(e) Amozoc', target: '(w) Acajete'}, 13.5],
    [{source: '(v) Ciudad Serdán', target: '(s) Acatzingo'}, 58],
    [{source: '(v) Ciudad Serdán', target: '(b) Tehuacan'}, 68.8]
])







//La lista por separado de los pesos de las aristas
let w = [
    22, 63.7, 21.9, 26.3, 30.3, 133, 20.8, 199,
    57.5, 21.5, 18.7, 41.2, 25, 39.4, 55.1, 6.2,
    22.1, 44.6, 16.5, 19.9, 3, 12.8, 13.9, 14, 11.3,
    24.5, 10.2,5,10,13.5,58,68.8
]

//Conjunto de aristas conectadas
const A = new Set()
//Al ser un conjunto guarda solo una vez cada vertice
const helperset = new Set()
//Guarda los vertices repetidos
const helper2 = new Set()
//Metodo que crea un arbol de esparcimiento minimo en base a un grafo
function MST_KRUSKAL(G, w) {

    w.sort(function(a, b){
        return a -b
    })

    G.forEach(function(value, element){
        // console.log(element)
        let v1 = element.source;
        let v2 = element.target;
        helper2.add(v1);
        helper2.add(v2);
    })

    helper2.forEach(function(value){
        let newSet = new Set()
        newSet.add(value)
        // console.log(newSet)
        helperset.add(newSet)
    })

    for(let i = 0; i<G.size; i++){
        let ars = FIND_AR(G, w[i])
        // console.log(ars)
        let v1 = ars.source;
        let v2 = ars.target;
        if(FIND_SET(v1) != FIND_SET(v2)){
            A.add(new Set([v1, v2]))
            UNION(v1, v2)
        }

    }

}
/**
 * Este metodo busca el vector V en el conjunto helpertset
 * @param {Vector que quieres buscar} V 
 * @returns regresa el conjunto en el que esta el vector que buscas
 */
function FIND_SET(V) {
    // console.log(V)
    // console.log(helperset)
    let s = null
    helperset.forEach(function(value){
        // console.log(value)
        if(value.has(V)){
            s = value
        }
    })
    return s
}
/**
 * Este metodo junta dos vectores que esten en conjuntos separados y elimina los conjuntos
 * donde no esten juntos y donde pertenecian
 * @param {Vector que uniras en conjunto con el V2} V1 
 * @param {Vector que uniras en conjunto con el V1} V2 
 */
function UNION(V1, V2) {
    
    const set1 = FIND_SET(V1)
    const set2 = FIND_SET(V2)
    
    set1.forEach(function(values){
        set2.add(values)
    })

    helperset.add(set2)
    helperset.delete(set1)

}
/**
 * Metodo para conseguir una arista en particular segun su peso
 * @param {El grafo donde quieres buscar la arista} G 
 * @param {El peso de la arista que buscas} weight 
 * @returns Regresa la primera concidencia de una arista que tenga el peso que tiene el parametro
 */
function FIND_AR(G, weight) {
    let ars = null
    G.forEach(function(value, element) {
        
        if(value===weight && ars === null){
            ars = element
        }
    });

    if(ars === null){
        throw "No se encontro dicha arista con el peso dado peso"    
    }

    return ars
}




MST_KRUSKAL(G, w)


function getSetValueByIndex(setObj, index) {
    return [...setObj][index]
}



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let allValues = A.entries();

let mstKey1, mstKey2
let startMST = async () => {
    isRunning = true;
    let currentNode = allValues.next()
    if(!currentNode.value) {
        isRunning = false
        return
    }
    mstKey1 = getSetValueByIndex(currentNode.value[0],0).substring(1,2)
    mstKey2 = getSetValueByIndex(currentNode.value[0],1).substring(1,2)
    cy.elements().getElementById(getSetValueByIndex(currentNode.value[0],0)).addClass('highlighted')
    await sleep(1000)
    cy.elements().getElementById(getSetValueByIndex(currentNode.value[0],1)).addClass('highlighted')
    // currentNode = allValues.next()
    cy.edges().getElementById(mstKey1+mstKey2).addClass('highlighted')
    cy.edges().getElementById(mstKey2+mstKey1).addClass('highlighted')
    await sleep(1000)
    if(!isRunning) return
    startMST()
}


// startMST()





