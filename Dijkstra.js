class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
    Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [] 
        let smallest;
        
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            

            if(smallest === finish){
                
                
                while(previous[smallest]){

                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            } 
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    

                    
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        
                        distances[nextNeighbor] = candidate;
                        
                        previous[nextNeighbor] = smallest;
                        
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();     
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}
  
  var graph = new WeightedGraph()


  let vertexEntries = vertex.entries()
for (const v of vertex) {
    let currentV = vertexEntries.next().value
    graph.addVertex(currentV[0])
}
  let graphEntries = G.entries()

for (let i = 0; i < G.size; i++) {
    let currentEntry = graphEntries.next().value
    graph.addEdge(currentEntry[0].source,currentEntry[0].target,currentEntry[1])
}


  
  
let shortestPath,curNodeIndex, key1,key2
let drawShortestPath = async () => {
    isRunning = true;
    if(curNodeIndex === shortestPath.length) {
        isRunning = false;
        return
    }
    key1 = shortestPath[curNodeIndex].substring(1,2)
    cy.elements().getElementById(shortestPath[curNodeIndex]).addClass('highlighted')
    

    await sleep(1000)
    curNodeIndex++
    cy.elements().getElementById(shortestPath[curNodeIndex]).addClass('highlighted')
    
    key2 = shortestPath[curNodeIndex]?.substring(1,2)
    

    console.log(key1+key2)
    cy.edges().getElementById(key1+key2).addClass('highlighted')
    cy.edges().getElementById(key2+key1).addClass('highlighted')
    // curNodeIndex++
    await sleep(1000)
    if(!isRunning) return
    drawShortestPath()
}


let btn2 = document.createElement('button')
btn2.innerText = "Iniciar Camino mas corto"
btn2.addEventListener("click",  async()=>{
    curNodeIndex = 0;
    
    let inicio = document.getElementById('inicio').value
    let fin = document.getElementById('fin').value
    console.log(inicio,fin)
    if(!vertex.has(inicio) ||!vertex.has(fin)) return
  shortestPath = graph.Dijkstra(inicio,fin) 
  console.log(shortestPath)
  drawShortestPath()
})

let btn1 = document.createElement('button')
btn1.innerText = "Iniciar MST"
btn1.addEventListener("click",()=>{
    startMST()
})

let btn3 = document.createElement('button')
btn3.innerText = "Reiniciar"
btn3.addEventListener("click",()=>{
    isRunning = false
    let vertexEntries = vertex.entries()
    allValues = A.entries();
    for (const v of vertex) {
        let currentV = vertexEntries.next().value
        cy.elements().getElementById(currentV[0]).removeClass('highlighted')
    }
})






  
  document.getElementsByTagName('body')[0].prepend(btn2)
  document.getElementsByTagName('body')[0].prepend(btn1)
  document.getElementsByTagName('body')[0].prepend(btn3)

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

//  cy.nodes().forEach((a)=>{
    
//     console.log(`cy.nodes().getElementById('${a.data().id}').position(${JSON.stringify(a.position())})`)
    
//  })
cy.nodes().getElementById('(a) Puebla').position({x:-40.83939792299752,y:569.1209626145677}) 

cy.nodes().getElementById('(b) Tehuacan').position({x:421.90975150717793,y:822.156156302873}) 

cy.nodes().getElementById('(c) Cholula de Rivadavia').position({x:-30.42479315557061,y:289.38216972712377}) 

cy.nodes().getElementById('(d) Atlixco').position({x:-370.13033243896757,y:662.9682948089309}) 

cy.nodes().getElementById('(e) Amozoc').position({x:191.94415328097477,y:445.08246701947934}) 

cy.nodes().getElementById('(f) San Martin').position({x:-474.1452666026657,y:322.8582513696341}) 

cy.nodes().getElementById('(g) Teziutlan').position({x:318.2506498025209,y:204.7298801958279}) 

cy.nodes().getElementById('(h) Huauchinango').position({x:434.3636188861349,y:50.240192234371}) 

cy.nodes().getElementById('(i) Tlaxcalancingo').position({x:-194.0207820440041,y:593.0225741769359}) 

cy.nodes().getElementById('(j) Izúcar').position({x:-518.7095611264509,y:726.768571386702}) 

cy.nodes().getElementById('(k) San Andres Cholula').position({x:-94.39488756353452,y:455.1786416900409}) 

cy.nodes().getElementById('(l) Xicotepec').position({x:523.5692488222824,y:-47.78581034004362}) 

cy.nodes().getElementById('(m) Zacatlan').position({x:362.5711067711787,y:131.03278262499427}) 

cy.nodes().getElementById('(n) Tecamachalco').position({x:316.48656513131675,y:747.1609153063257}) 

cy.nodes().getElementById('(o) Ajalpan').position({x:522.3235872937835,y:902.6747172819993}) 

cy.nodes().getElementById('(p) Sanctórum').position({x:169.5568900711017,y:232.5280968362401}) 

cy.nodes().getElementById('(q) Tepeaca').position({x:168.79476704467257,y:634.6732741300638}) 

cy.nodes().getElementById('(r) Moyotzingo').position({x:-363.20747175893183,y:377.26821144953647}) 

cy.nodes().getElementById('(s) Acatzingo').position({x:381.07456267700206,y:529.6740427937517}) 

cy.nodes().getElementById('(t) Huejotzingo').position({x:-197.07363357723028,y:305.6538476677725}) 

cy.nodes().getElementById('(u) Cuautlancingo').position({x:63.98856123947088,y:124.00642267894268}) 

cy.nodes().getElementById('(v) Ciudad Serdán').position({x:556.6689592715719,y:708.3850988740289}) 

cy.nodes().getElementById('(w) Acajete').position({x:235.43853270650948,y:323.5331212715504})