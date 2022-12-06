
let btnCaminoCorto = document.createElement('button')
btnCaminoCorto.innerText = "Iniciar Camino mas corto"
btnCaminoCorto.addEventListener("click",  async()=>{
    curNodeIndex = 0;
    
    let inicio = document.getElementById('inicio').value
    let fin = document.getElementById('fin').value
    console.log(inicio,fin)
    if(!vertex.has(inicio) ||!vertex.has(fin)) return
  shortestPath = graph.Dijkstra(inicio,fin) 
  console.log(shortestPath)
  drawShortestPath()
})
btnCaminoCorto.classList.add('btn', 'btn-primary')

let btnMST = document.createElement('button')
btnMST.innerText = "Iniciar MST"
btnMST.addEventListener("click",()=>{
    startMST()
})
btnMST.classList.add('btn', 'btn-primary')

let btnReset = document.createElement('button')
btnReset.innerText = "Reiniciar"
btnReset.addEventListener("click",()=>{
    isRunning = false
    let vertexEntries = vertex.entries()
    allValues = A.entries();
    for (const v of vertex) {
        let currentV = vertexEntries.next().value
        cy.elements().getElementById(currentV[0]).removeClass('highlighted')
    }
})
btnReset.classList.add('btn', 'btn-danger')

document.getElementsByTagName('nav')[0].prepend(btnCaminoCorto)
document.getElementsByTagName('nav')[0].prepend(btnMST)
document.getElementsByTagName('nav')[0].prepend(btnReset)

 let loadSelectors  = ()=>{
    let vertexEntries = vertex.entries()
    
    let newOption
    for (const v of vertex) {
        let currentV = vertexEntries.next().value
        
    
        newOption = document.createElement('option')
        newOption.innerText = currentV[0]
        newOption.setAttribute("value",currentV[0])
        document.getElementById('fin').append(newOption)
        newOption = document.createElement('option')
        newOption.innerText = currentV[0]
        newOption.setAttribute("value",currentV[0])
        document.getElementById('inicio').append(newOption)
    }


 }

 loadSelectors()
