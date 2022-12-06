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


  
  
let shortestPath;

let curNodeIndex;
let drawShortestPath = async () => {
    isRunning = true;
    if(curNodeIndex === shortestPath.length) {
        isRunning = false;
        return
    }
    
    cy.elements().getElementById(shortestPath[curNodeIndex]).addClass('highlighted')
    await sleep(1000)
    curNodeIndex++
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

 