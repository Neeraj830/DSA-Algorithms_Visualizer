function selectionSortVisualization() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 400;

    let array = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
    let i = 0, j = 0, minIndex = 0;
    const delay = 50;

    function drawArray(arr, compareIndex1, compareIndex2) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        arr.forEach((val, index) => {
            ctx.fillStyle = (index === compareIndex1 || index === compareIndex2) ? 'red' : 'blue';
            ctx.fillRect(index * 15, canvas.height - val * 3, 10, val * 3);

            ctx.fillStyle = 'black';
            ctx.font = '12px Arial';
            ctx.fillText(val, index * 15, canvas.height - val * 3 - 5);
        });
    }

    function selectionSortStep() {
        if (i < array.length) {
            if (j < array.length) {
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
                drawArray(array, j, minIndex);
                j++;
            } else {
                [array[i], array[minIndex]] = [array[minIndex], array[i]];
                i++;
                j = i + 1;
                minIndex = i;
            }
            setTimeout(selectionSortStep, delay);
        } else {
            drawArray(array, -1, -1); // Final drawing
        }
    }

    drawArray(array, -1, -1);
    setTimeout(selectionSortStep, delay);
}
