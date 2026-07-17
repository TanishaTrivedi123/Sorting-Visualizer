const bubbleSort = (inputArr) => {
    const arr = [...inputArr];
    const sortedIndexes = [];
    const n = arr.length;

    const steps = [];

    let stepNumber = 1;

    for(let i = 0; i<n-1; i++){

        for(let j = 0; j<n-i-1; j++){
            
            const isSwap = arr[j] > arr[j+1];

            steps.push({
                id: stepNumber,
                title: `Step ${stepNumber}`,
                line1: `Comparing ${arr[j]} and ${arr[j+1]}`,
                line2: isSwap ? `Since ${arr[j]} > ${arr[j + 1]}, swap needed.` : `Since ${arr[j]} <= ${arr[j + 1]}, no swap needed.`,
                compareIndexes: [j, j + 1],
                status: isSwap ? "Swap" : "No Swap",
                success: false,
                sortedIndexes: [...sortedIndexes],
                array: [...arr]
            })

            stepNumber++;

            if(isSwap){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];

                steps.push({
                    id: stepNumber,
                    title: `Step ${stepNumber}`,
                    line1: `Swapping ${arr[j + 1]} and ${arr[j]}`,
                    line2: `Array after swap: ${arr.join(", ")}`,
                    compareIndexes: [j, j + 1],
                    status: "Swapped",
                    success: false,
                    sortedIndexes: [...sortedIndexes],
                    array: [...arr]
                })

                stepNumber++;
            }
        }

        sortedIndexes.push(n-i-1);

        steps.push({
            id: stepNumber,
            title: `Step ${stepNumber}`,
            line1: `End of Pass ${i + 1}`,
            line2: `${arr[n - i - 1]} is now in its correct position.`,
            compareIndexes: [],
            status: `${arr[n - i - 1]} is in place`,
            success: true,
            sortedIndexes: [...sortedIndexes],
            array: [...arr]
        })

        stepNumber++;
    }

    sortedIndexes.push(0);

steps.push({
    id: stepNumber,
    title: `Step ${stepNumber}`,
    line1: "Sorting Complete",
    line2: "All elements are now in their correct positions.",
    compareIndexes: [],
    sortedIndexes: [...sortedIndexes],
    status: "Completed",
    success: true,
    array: [...arr]
});

    return {steps, totalSteps: steps.length, currStep: 1, arrLength: n}
}

export default bubbleSort;