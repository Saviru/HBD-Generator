let cmlabel = document.querySelectorAll('.contlabel');
//let progress = document.querySelector('.linkgen');
let flinkField = document.querySelector('.outputcont');
flinkField.readOnly = true;

for(var ctmi=0; ctmi<cmlabel.length; ctmi++) {
  cmlabel[ctmi].innerHTML = cmlabel[ctmi].innerText.split('').map((cmlet, cml)=>`<span class="inputword" style="transition-delay: ${cml*30}ms;filter: hue-rotate(${cml*25}deg)";>${cmlet}</span>`).join('');
}


function convertToUrlFormat(str) {
    return str.replace(/ /g, '%20');
}

async function shortURL(finalResult) {
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(finalResult)}`);
    //progress.innerHTML="Link&nbsp;Generating...";
    flinkField.classList.add('vdOut');
    if (response.ok) {
        const shURL = await response.text();
        console.log(shURL);
        //progress.innerHTML="Your&nbsp;Link:";
        flinkField.value = convertToGift(shURL);
    }
    else{
        console.log(finalResult);
        //progress.innerHTML="Your&nbsp;Link:";
        flinkField.value = finalResult;
    }
}

function convertToGift(flink) {
    const userID =  flink.replace("https://tinyurl.com/", "?uid=");
    const giftLink = `http://127.0.0.1:5500/gift/Gift.html${userID}`;
    return giftLink;
}

function linkGenerate() {
    //progress.innerHTML="Link&nbsp;Generating.";
    flinkField.value = "";
    flinkField.classList.remove('vdOut');

    var name = document.querySelector("#name").value;
    var ln1 = document.querySelector("#ln1").value;
    var ln2 = document.querySelector("#ln2").value;
    var ln3 = document.querySelector("#ln3").value;

    console.log(name);
    console.log(ln1);
    console.log(ln2);
    console.log(ln3);

    const genLink = convertToUrlFormat(`http://127.0.0.1:5500/gift/Wish/Wish.html?nm=${name}&l1=${ln1}&l2=${ln2}&l3=${ln3}`);
    //progress.innerHTML="Link&nbsp;Generating..";
    
    shortURL(genLink);
    

}