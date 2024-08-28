document.querySelector(".button").addEventListener('click',()=> {
    let w1 = [parseFloat(document.querySelector(".dim1").value)/1000];
    let w2 = [parseFloat(document.querySelector(".dim2").value)/1000];
    let den = [parseFloat(document.querySelector(".den").value)];
    let res_el = document.querySelector(".result")

    let vol = (w1*w2)
    let wt = (vol*den).toFixed(3);
    res_el.innerHTML=`The Weight is ${wt}`;
})