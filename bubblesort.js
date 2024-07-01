function bubbleSortVisualization() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 400;

    let array = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
    let i = 0, j = 0;
    const delay = 500;

    // Function to draw the array as bars on the canvas
    function drawArray(arr, compareIndex1, compareIndex2) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        arr.forEach((val, index) => {
            // Set the fill color based on the comparison indices
            if (index === compareIndex1 || index === compareIndex2) {
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

    // Function to perform one step of the bubble sort algorithm
    function bubbleSortStep() {
        if (i < array.length) {
            if (j < array.length - i - 1) {
                if (array[j] > array[j + 1]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                }
                drawArray(array, j, j + 1);  // Draw the array with the comparison indices highlighted
                j++;
            } else {
                j = 0;
                i++;
            }
            setTimeout(bubbleSortStep, delay);  // Call bubbleSortStep again after a delay
        }
    }
    drawArray(array, -1, -1);  // Initial drawing of the array with no comparisons
    setTimeout(bubbleSortStep, delay);  // Start the bubble sort algorithm with a delay
}
