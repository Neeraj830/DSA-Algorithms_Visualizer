function clearCanvas() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function startBubbleSort() {
    clearCanvas();
    bubbleSortVisualization();
}

function startDFS() {
    clearCanvas();
    dfsVisualization();
}
