import { bubbleSortVisualization } from "./bubbleSort.js";
import { selectionSortVisualization } from "./selectionsort.js";
import { insertionSortVisualization } from "./insertionSort.js";
import { mergeSortVisualization } from "./mergesort.js";
import { quickSortVisualization } from "./quickSort.js";
import { linearSearchVisualization } from "./linearSearch.js";
import { binarySearchVisualization } from "./binarySearch.js";

function clearCanvas() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Function to start Bubble Sort visualization
function startBubbleSort() {
  clearCanvas();
  bubbleSortVisualization();
}

// Function to start Selection Sort visualization
function startSelectionSort() {
  clearCanvas();
  selectionSortVisualization();
}

// Function to start Insertion Sort visualization
function startInsertionSort() {
  clearCanvas();
  insertionSortVisualization();
}

// Function to start Merge Sort visualization
function startMergeSort() {
  clearCanvas();
  mergeSortVisualization();
}

// Function to start Quick Sort visualization
function startQuickSort() {
  clearCanvas();
  quickSortVisualization();
}

// Function to start Linear Search visualization
function startLinearSearch() {
  clearCanvas();
  linearSearchVisualization();
}

// Function to start Binary Search visualization
function startBinarySearch() {
  clearCanvas();
  binarySearchVisualization();
}
