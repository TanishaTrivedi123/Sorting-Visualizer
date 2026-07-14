const bubbleSort = (inputArr) => {
    const arr = [...inputArr];
    const n = arr.length;

    const steps = [];

    let stepNumber = 1;

    for(let i = 0; i<n-1; i++){

        for(let j = 0; j<n-1; j++){
            
            const isSwap = arr[j] > arr[j+1];

            steps.push({
                id: stepNumber,
                title: `Step ${stepNumber}`,
                line1: `Comparing ${arr[j]} and ${arr[j+1]}`,
                line2: isSwap ? `Since ${arr[j]} > ${arr[j + 1]}, swap needed.` : `Since ${arr[j]} <= ${arr[j + 1]}, no swap needed.`,
                status: isSwap ? "Swap" : "No Swap",
                success: false,
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
                    status: "Swapped",
                    success: false,
                    array: [...arr]
                })

                stepNumber++;
            }
        }

        steps.push({
            id: stepNumber,
            title: `Step ${stepNumber}`,
            line1: `End of Pass ${i + 1}`,
            line2: `${arr[n - i - 1]} is now in its correct position.`,
            status: `${arr[arr.length - 1]} is in place`,
            success: true
        })

        stepNumber++;
    }

    return {steps, totalSteps: steps.length, currStep: 1, arrLength: n}
}

export default bubbleSort;