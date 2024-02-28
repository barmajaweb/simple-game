let img = document.querySelector('.img1');
let img1=document.querySelector('.ava');
let adams = document.querySelector('.aka');
let adamss = document.querySelector('.aga');
let adamsss = document.querySelector('.ala');

const object ={
    wins : 0,
    ties : 0,
    losses: 0
};

function onklick(x){
    img.src = x;
    const randomnumber = Math.random();
    if (randomnumber >= 0 && randomnumber < 1/3) {
        img1.src= 'img/rock.png';
        object.ties += 1;
        adamss.innerHTML=`ties:${object.ties}`;
    }else if (randomnumber >= 1/3 && randomnumber < 2/3){
        img1.src='img/paper.png';
        object.losses += 1;
        adamsss.innerHTML=`losses:${object.losses}`;

    }else if (randomnumber >=2/3 && randomnumber < 1){
        img1.src = 'img/scissors.png';
        object.wins += 1;
        adams.innerHTML=`wins:${object.wins}`;
    }
}

function onklickk(c){
    img.src=c;
    const randomnumber = Math.random();
    if (randomnumber >= 0 && randomnumber < 1/3) {
        img1.src= 'img/rock.png';
        object.wins += 1;
        adams.innerHTML=`wins:${object.wins}`;
    }else if (randomnumber >= 1/3 && randomnumber < 2/3){
        img1.src='img/paper.png';
        object.ties += 1;
        adamss.innerHTML=`ties:${object.ties}`;

    }else if (randomnumber >=2/3 && randomnumber < 1){
        img1.src = 'img/scissors.png';
        object.losses += 1;
        adamsss.innerHTML=`losses:${object.losses}`;
    }
}

function onklickkk(k){
    img.src =k;
    const randomnumber = Math.random();
    if (randomnumber >= 0 && randomnumber < 1/3) {
        img1.src= 'img/rock.png';
        object.losses += 1;
        adamsss.innerHTML=`losses:${object.losses}`;
    }else if (randomnumber >= 1/3 && randomnumber < 2/3){
        img1.src='img/paper.png';
        object.wins += 1;
        adams.innerHTML=`wins:${object.wins}`;

    }else if (randomnumber >=2/3 && randomnumber < 1){
        img1.src = 'img/scissors.png';
        object.ties += 1;
        adamss.innerHTML=`ties:${object.ties}`;
    }
}

function gamegame(){
    img.src='img/black.jpeg';
    img1.src='img/black.jpeg';
    object.losses =0;
    object.wins = 0;
    object.ties =0;
    adamss.innerHTML=`ties:${object.ties}`;
    adams.innerHTML=`wins:${object.wins}`;
    adamsss.innerHTML=`losses:${object.losses}`;
}