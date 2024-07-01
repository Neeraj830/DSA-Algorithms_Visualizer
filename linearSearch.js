function linearSearchVisualization() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 400;

    let array = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
    const searchValue = array[Math.floor(Math.random() * array.length)];
    const delay = 50;

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

    function linearSearchStep(index) {
        if (index < array.length) {
            drawArray(array, index);
            if (array[index] === searchValue) {
                alert(`Value ${searchValue} found at index ${index}`);
                drawArray(array, -1);
                return;
            }
            setTimeout(() => linearSearchStep(index + 1), delay);
        } else {
            alert(`Value ${searchValue} not found`);
            drawArray(array, -1);
        }
    }

    drawArray(array, -1);
    setTimeout(() => linearSearchStep(0), delay);
}
