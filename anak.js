let arr = [];
let trtb = document.getElementById("tb1")
fetch("data.json")
    .then(r => r.json())
    .then(o => {
        arr.push(o[0].rates);

        let obj = arr[0];

        let headArr = [];
        let bodyArr = [];

        Object.keys(obj).forEach(m=> headArr.push("EUR"+ m));
        Object.values(obj).forEach(m=> bodyArr.push(m));


        // for (let i = 0; i < headArr.length; i++) {
        //     trth.innerHTML+=`<td>${headArr[i]}</td>`
        //     trtb.innerHTML+=`<td>${bodyArr[i]}</td>`
        // }

        for (let i = 0; i < headArr.length; i++) {
            trtb.innerHTML+=`<tr><td>${headArr[i]}</td> <td>${bodyArr[i]}</td> </tr>`
        }


    });



