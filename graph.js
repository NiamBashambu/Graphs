class Graph{
    constructor(noOfVertices){
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();

    }
    addVertex(v){
        this.AdjList.set(v,[]);
    }
    addEdge(v,e){
        this.AdjList.get(v).push(e);
        this.AdjList.get(e).push(v);
    }
    printGraph(){
        let get_keys = this.AdjList.keys;
        for(let i of get_keys){
            let get_values = this.AdjList.get(i);
            let conc = "";
            for(let j of get_values){
                conc += j +"";
                console.log(i + " -> " + conc);
            }
        }
    }
    //probably not gonna use this but found on geek geeks, honestly don't know all the nodes were are visiting are being stored in a queue
   /* bfs(startingnode){

        let visited = [];
        let q = new Queue(); 

        visited[startingnode] = true;
        q.enqueue(startingnode);

        while(!q.isEmpty()){
            let getQueueElement = q.dequeue();

            let get_List = this.AdjList.get(getQueueElement);

            for(let i in get_List){
                let neigh = get_List[i];

                if(!visited[neigh]){
                    visited[neight] = true;
                    q.enqueue(neigh);
                }
            }
        }

    }
    */
}