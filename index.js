// let list = [10,22,50,2,67,43,23];
let list = [874,-32,-10,5,80,33,21,1000]
let ordered_list = quickSort(list)
console.log(ordered_list); //[ -32, -10, 5, 21, 33, 80, 874, 1000 ]
let index_search = binarySearch(ordered_list,33)
console.log("El elemento buscado está en la posición:",index_search + 1); //3

console.log(ordered_list[index_search])

function quickSort(arr) {
    // Valida si el array solo tiene un elemento y lo retorna
    if(arr.length <= 1) {
        return arr
    }

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...quickSort(left),pivot, ...quickSort(right)];
}

function binarySearch(list, search){
    let start = 0;
    let end = list.length - 1;

    while ( start <= end ){
        let mid = Math.floor((start + end) / 2 );
        let mid_element = list[mid];

        if(mid_element === search) {
            return mid
        }
        if(mid_element < search){
            start = mid + 1
        }else{
            end = mid - 1
        }
    }
    return -1 
}

let list_selection = [874,-10,1000,5,80,33,21,-32];

function selectionSort(list_selection) {
    for (let i = 0; i < list_selection.length; i++) {
        let min = i;
        for (let j = i + 1; j < list_selection.length; j++) {
            if (list_selection[j] < list_selection[min]) {
                min = j;
            }   
        }
        if (min !== i) {
            let temp = list_selection[i];
            list_selection[i] = list_selection[min];
            list_selection[min] = temp;
            
        }
    }
}    

selectionSort(list_selection);

console.log(list_selection);
