const hearts = document.getElementsByClassName("heart");
const copys = document.getElementsByClassName("copy");
let a=0,b=0;

for(let heart of hearts){
    heart.addEventListener("click",function(e){
        e.preventDefault();
        a++;
        document.getElementById("heart").innerText = a;
    });
}

for(let copy of copys){
    copy.addEventListener("click",function(e){
        e.preventDefault();

        const parentDiv = this.closest("div.bg-white");

        const hotlineNumber = parentDiv.getElementsByClassName("hotline-number")[0].innerText;

        navigator.clipboard.writeText(hotlineNumber);

        alert(`Copied: ${hotlineNumber}`);
        b++;
        document.getElementById("copy").innerText = b;
    })
}

function call(serviceName,number){
    let callPointTotal = parseInt(document.getElementById("call").innerText);
    callPointTotal = callPointTotal -  20;
    if(callPointTotal < 0){
        alert("Not enough call points");
        return;

    }
    document.getElementById("call").innerText = callPointTotal;
    
    const historyDiv = document.getElementById("history");
    const time = new Date().toLocaleTimeString();
    const div = document.createElement("div");

    div.innerHTML = `
        <div class="inter flex justify-between items-center mt-[10px] bg-[#87FFA1]/15 p-[10px] rounded-[15px]">
            <div>
                <p class="font-bold">${serviceName}</p>
                <p class="">${number}</p>
            </div>
            <p>${time}</p>
        </div>
    `;
    historyDiv.prepend(div);
}

document.getElementById("clear-btn").addEventListener("click",function(e){
    document.getElementById("history").innerText = "";
})

document.getElementById("call-1").addEventListener("click",function(e){
    e.preventDefault();
    alert("calling National Emergency Number 999...");
    call("National Emergency Number", "999");
})
document.getElementById("call-2").addEventListener("click",function(e){
    e.preventDefault();
    alert("calling Police Helpline Number 999...");
    call("Police Helpline Number", "999");
})
document.getElementById("call-3").addEventListener("click",function(e){
    e.preventDefault();
    alert("calling Fire Service Number 999...");
    call("Fire Service Number", "999");
})
document.getElementById("call-4").addEventListener("click",function(e){
    e.preventDefault();
    alert("calling Ambulance Service 1994-999999...");
    call("Ambulance Service", "1994-999999");
})
document.getElementById("call-5").addEventListener("click",function(e){
    e.preventDefault();
    alert("calling Women & Child Helpline 109...");
    call("Women & Child Helpline", "109");
})
document.getElementById("call-6").addEventListener("click",function(e){
    e.preventDefault();
    alert("calling Anti-Corruption Helpline 106...");
    call("Anti-Corruption Helpline", "106");
})
document.getElementById("call-7").addEventListener("click",function(e){
    e.preventDefault();
    alert("calling Electricity Helpline 16216...");
    call("Electricity Helpline", "16216");
})
document.getElementById("call-8").addEventListener("click",function(e){
    e.preventDefault();
    alert("calling Brac Helpline 16445...");
    call("Brac Helpline", "16445");
})
document.getElementById("call-9").addEventListener("click",function(e){
    e.preventDefault();
    alert("calling Bangladesh Railway Helpline 163...");
    call("Bangladesh Railway Helpline", "163");
})