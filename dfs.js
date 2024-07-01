function dfsVisualization() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 400;

    let graph = {
        A: ['B', 'C'],
        B: ['D', 'E'],
        C: ['F', 'G'],
        D: [],
        E: [],
        F: [],
        G: []
    };

    let positions = {
        A: {x: 400, y: 50},
        B: {x: 250, y: 150},
        C: {x: 550, y: 150},
        D: {x: 150, y: 250},
        E: {x: 350, y: 250},
        F: {x: 450, y: 250},
        G: {x: 650, y: 250}
    };

    let visited = {};

    function drawGraph() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let node in graph) {
            let pos = positions[node];
            ctx.fillStyle = visited[node] ? 'green' : 'blue';
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, 20, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = 'white';
            ctx.fillText(node, pos.x - 5, pos.y + 5);
            ctx.stroke();
        }
        for (let node in graph) {
            let pos = positions[node];
            graph[node].forEach(neighbor => {
                let neighborPos = positions[neighbor];
                ctx.beginPath();
                ctx.moveTo(pos.x, pos.y);
                ctx.lineTo(neighborPos.x, neighborPos.y);
                ctx.stroke();
            });
        }
    }

    function dfs(node) {
        if (!visited[node]) {
            visited[node] = true;
            drawGraph();
            graph[node].forEach(neighbor => {
                setTimeout(() => dfs(neighbor), 500);
            });
        }
    }

    drawGraph();
    dfs('A');
}
