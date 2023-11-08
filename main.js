const btns = document.querySelectorAll(".list li");
console.log(btns);

// for(let i=0;i<btns.length;i++){
//     btns[i].addEventListener("click",e=>{
//         e.preventDefault();
//         console.log(i);
//     })
// }

// for(let btn of btns){
// btn.addEventListener("click",e=>{
//     console.log(e.currentTarget);
// })
// }

btns.forEach((btn,index)=>{
    btn.addEventListener("click",e=>{
        //만약에 클릭한 버튼에 on이 있다면 return(종료시킨다)
        let isOn = e.currentTarget.classList.contains("on");
        if(isOn)return;
            // 함수 내부의 기능을 바깥으로 내보내준다. 
            //함수 실행을 강제로 종료해준다.
        for(let item of btns)item.classList.remove("on");
        btns[index].classList.add("on");
    })
})
