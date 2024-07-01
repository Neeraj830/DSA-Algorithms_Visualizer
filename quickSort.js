function quickSortVisualization() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 400;

    let array = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
    const delay = 50;

    function drawArray(arr, pivotIndex, compareIndex1, compareIndex2) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        arr.forEach((val, index) => {
            if (index === pivotIndex) {
                ctx.fillStyle = 'green';
            } else if (index === compareIndex1 || index === compareIndex2) {
                ctx.fillStyle = 'red';
            } else {
                ctx.fillStyle = 'blue';
            }
            ctx.fillRect(index * 15, canvas.height - val * 3, 10, val * 3);

            ctx.fillStyle = 'black';
            ctx.font = '12px Arial';
            ctx.fillText(val, index * 15, canvas.height - val * 3 - 5);
        });
    }

    async function quickSort(arr, low, high) {
        if (low < high) {
            const pi = await partition(arr, low, high);
            await quickSort(arr, low, pi - 1);
            await quickSort(arr, pi + 1, high);
        }
    }

    async function partition(arr, low, high) {
        const pivot = arr[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            drawArray(array, high, i, j);
            await sleep(delay);
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
                drawArray(array, high, i, j);
                await sleep(delay);
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        drawArray(array, high, i + 1, high);
        await sleep(delay);
        return i + 1;
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    drawArray(array, -1, -1, -1);
    setTimeout(() => quickSort(array, 0, array.length - 1), delay);
}
