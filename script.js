const acc = document.querySelectorAll(".accordionQuestion");
//let isActive = false;

//const openAnswer = (el) => {
//     if(!isActive){
//         el.classList.remove('accordionAnswer');
//         el.classList.add('accordionAnswer.selected');
//         isActive = true;
//     }else{
//         console.log('true');
//     }

//};
acc.forEach(item => item.addEventListener("click", (e) => {
    const target = e.target;
    console.log(target);
       // acc.forEach(el => el.classList.remove('selected'));
            //e.target.classList.add('selected');
            // e.target.parent.classList.toggle('active');
            // const answers = document.querySelectorAll('.accordionAnswer');
            // let answer = [...answers].filter(el => el.parentElement.classList.contains('active'));
            // openAnswer(...answer);
    }));
