function insertionSortVisualization() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 400;

    let array = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
    let i = 1, j = 0;
    const delay = 500;

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

    function insertionSortStep() {
        if (i < array.length) {
            let key = array[i];
            j = i - 1;
            function innerStep() {
                if (j >= 0 && array[j] > key) {
                    array[j + 1] = array[j];
                    drawArray(array, j, i);
                    j--;
                    setTimeout(innerStep, delay);
                } else {
                    array[j + 1] = key;
                    i++;
                    setTimeout(insertionSortStep, delay);
                }
            }
            innerStep();
        } else {
            drawArray(array, -1, -1); 
        }
    }

    drawArray(array, -1, -1);
    setTimeout(insertionSortStep, delay);
}
