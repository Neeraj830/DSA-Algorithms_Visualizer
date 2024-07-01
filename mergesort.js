function mergeSortVisualization() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 400;

    let array = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
    const delay = 50;

    function drawArray(arr, mergeIndices) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        arr.forEach((val, index) => {
            ctx.fillStyle = mergeIndices.includes(index) ? 'red' : 'blue';
            ctx.fillRect(index * 15, canvas.height - val * 3, 10, val * 3);

            ctx.fillStyle = 'black';
            ctx.font = '12px Arial';
            ctx.fillText(val, index * 15, canvas.height - val * 3 - 5);
        });
    }

    function mergeSort(arr, l, r) {
        if (l < r) {
            const m = Math.floor((l + r) / 2);
            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    }

    function merge(arr, l, m, r) {
        const n1 = m - l + 1;
        const n2 = r - m;

        const L = new Array(n1);
        const R = new Array(n2);

        for (let i = 0; i < n1; i++) L[i] = arr[l + i];
        for (let i = 0; i < n2; i++) R[i] = arr[m + 1 + i];

        let i = 0, j = 0, k = l;
        const mergeIndices = [];

        while (i < n1 && j < n2) {
            mergeIndices.push(k);
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            mergeIndices.push(k);
            arr[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            mergeIndices.push(k);
            arr[k] = R[j];
            j++;
            k++;
        }

        drawArray(array, mergeIndices);
        setTimeout(() => {}, delay);
    }

    drawArray(array, []);
    setTimeout(() => mergeSort(array, 0, array.length - 1), delay);
}
