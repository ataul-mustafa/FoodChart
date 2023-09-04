import foodData from './food.json' assert { type: "json"};


const fetchOneCateData = (category) => {
    return foodData.filter(filterData => filterData.category == category);
}

const highToLowProtien = () => {
    let originalData = foodData;
    let temp;
    for (let i = 0; i < originalData.length; i++) {
        for (let j = 0; j < originalData.length - 1; j++) {
            if (parseInt(originalData[j].protiens * 10) < parseInt(originalData[j + 1].protiens * 10)) {
                temp = originalData[j];
                originalData[j] = originalData[j + 1];
                originalData[j + 1] = temp;
            }
        }
    }

    return originalData;
}

const caloryAbove100 = () => {
    return foodData.filter(filterData => filterData.calorie > 100);
}

const caloryBelow100 = () => {
    return foodData.filter(filterData => filterData.calorie < 100);
}

const lowToHighCab = () => {
    let originalData = foodData;
    let temp;
    for (let i = 0; i < originalData.length; i++) {
        for (let j = 0; j < originalData.length - 1; j++) {
            if (originalData[j].cab > originalData[j + 1].cab) {
                temp = originalData[j];
                originalData[j] = originalData[j + 1];
                originalData[j + 1] = temp;
            }
        }
    }

    return originalData;
}





const all = foodData;
const cat1 = fetchOneCateData("Vegetable");
const cat2 = fetchOneCateData("Fruit");
const cat3 = fetchOneCateData("Protein");
const cat4 = fetchOneCateData("Nuts");
const cat5 = fetchOneCateData("Grain");
const cat6 = fetchOneCateData("Dairy");
const cat7 = caloryAbove100();
const cat8 = caloryBelow100();
const cat9 = highToLowProtien();
const cat10 = lowToHighCab();

const cateData = [all, cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10];

for (let j = 0; j < cateData.length; j++) {

    let ul1 = document.getElementById(`ul${j+1}`);

    for (let i = 0; i < cateData[j].length; i++) {
        let list = document.createElement('li');
        list.textContent = cateData[j][i].foodname;
        ul1.appendChild(list);

    }
}
