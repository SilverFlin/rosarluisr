//Lo que representa cada Nodo
const vertex = new Map(verticesArr)

//Esto de aqui es el grafo junto el peso de las aristas
const G = new Map(edgesArr)

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
        let v1 = element.source;
        let v2 = element.target;
        helper2.add(v1);
        helper2.add(v2);
    })

    helper2.forEach(function(value){
        let newSet = new Set()
        newSet.add(value)
        helperset.add(newSet)
    })

    for(let i = 0; i<G.size; i++){
        let ars = FIND_AR(G, w[i])
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



let allValues = A.entries(); //Iterador
let mstKey1, mstKey2 // Llaves para crear los id de las aristas, e.g. "qa"
let delayMST = 250

/*En base al recorrido del algoritmo ilumina el grafo por orden*/
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
    await sleep(delayMST)
    cy.elements().getElementById(getSetValueByIndex(currentNode.value[0],1)).addClass('highlighted')
    // currentNode = allValues.next()
    cy.edges().getElementById(mstKey1+mstKey2).addClass('highlighted')
    cy.edges().getElementById(mstKey2+mstKey1).addClass('highlighted')
    await sleep(delayMST)
    if(!isRunning) return
    startMST()
}


// startMST()





