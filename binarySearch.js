function binarySearchVisualization() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 400;

    let array = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100)).sort((a, b) => a - b);
    const searchValue = array[Math.floor(Math.random() * array.length)];
    const delay = 500;

    function drawArray(arr, compareIndex) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        arr.forEach((val, index) => {
            ctx.fillStyle = (index === compareIndex) ? 'red' : 'blue';
            ctx.fillRect(index * 15, canvas.height - val * 3, 10, val * 3);

            ctx.fillStyle = 'black';
            ctx.font = '12px Arial';
            ctx.fillText(val, index * 15, canvas.height - val * 3 - 5);
        });
    }

    function binarySearchStep(low, high) {
        if (low <= high) {
            const mid = Math.floor((low + high) / 2);
            drawArray(array, mid);
            setTimeout(() => {
                if (array[mid] === searchValue) {
                    alert(`Value ${searchValue} found at index ${mid}`);
                    drawArray(array, -1);
                } else if (array[mid] > searchValue) {
                    binarySearchStep(low, mid - 1);
                } else {
                    binarySearchStep(mid + 1, high);
                }
            }, delay);
        } else {
            alert(`Value ${searchValue} not found`);
            drawArray(array, -1);
        }
    }

    drawArray(array, -1);
    setTimeout(() => binarySearchStep(0, array.length - 1), delay);
}
