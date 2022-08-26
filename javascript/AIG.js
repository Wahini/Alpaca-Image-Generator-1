// Primary Buttons select
const background_btn = document.getElementById('background');
const skintone_btn = document.getElementById('skintone');
const blush_btn = document.getElementById('blush');
const cloth_btn = document.getElementById('cloth');
const shorts_btn = document.getElementById('shorts');
const hair_btn = document.getElementById('hair');
const mouth_btn = document.getElementById('mouth');
const eyes_btn = document.getElementById('eyes');
const collar_btn = document.getElementById('collar');

//heading select
const seconday_heading = document.getElementById('secondary-heading-2');

//section select
const background_section = document.getElementById('section_background');
const skintone_section = document.getElementById('section_skintone');
const blush_section = document.getElementById('section_blush');
const cloth_section = document.getElementById('section_cloth');
const shorts_section = document.getElementById('section_shorts');
const hair_section = document.getElementById('section_hair');
const mouth_section = document.getElementById('section_mouth');
const eyes_section = document.getElementById('section_eyes');
const collar_section = document.getElementById('section_collar');           
const style_section = document.getElementById('section-style');


//All secondary buttons select acc to section
const bgBtnAll = document.querySelectorAll('.btn-bg');
const skintoneBtnAll = document.querySelectorAll('.btn-skintone');
const blushBtnAll = document.querySelectorAll('.btn-blush');
const clothBtnAll = document.querySelectorAll('.btn-cloth');
const shortsBtnAll = document.querySelectorAll('.btn-shorts');
const hairBtnAll =document.querySelectorAll('.btn-hair');
const mouthBtnAll = document.querySelectorAll('.btn-mouth');
const eyesBtnAll = document.querySelectorAll('.btn-eyes');
const collarBtnAll = document.querySelectorAll('.btn-collar');

//display & hide sections on primary button click

function hide(ids){
    ids.forEach(id => {
      id.style.display ='none';
    });
  }
  
  function show(ids){
    ids.forEach(id => {
      id.style.display ='block';
    });
  }

background_btn.onclick = function() {

    show([
        style_section, 
        seconday_heading, 
        background_section 
    ]);

    hide([
    skintone_section,
    blush_section,
    cloth_section,
    shorts_section,
    hair_section,
    mouth_section,
    eyes_section,
    collar_section
        ]);
}

skintone_btn.onclick = function() {

    show([style_section,
        seconday_heading,
        skintone_section,
    ]);

    hide([background_section,
        blush_section,
        cloth_section,
        shorts_section,
        hair_section,
        mouth_section,
        eyes_section,
        collar_section]);

}

blush_btn.onclick = function() {

    show([style_section,
        seconday_heading,
        blush_section,]);

    hide([skintone_section,
        background_section,
        cloth_section,
        shorts_section,
        hair_section,
        mouth_section,
        eyes_section,
        collar_section,]);

}

cloth_btn.onclick = function() {

    show([style_section,
        seconday_heading,
        cloth_section,]);

    hide([skintone_section,
        blush_section,
        background_section,
        shorts_section,
        hair_section,
        mouth_section,
        eyes_section,
        collar_section,]);

}

shorts_btn.onclick = function() {

  show([style_section,
      seconday_heading,
      shorts_section,]);

  hide([skintone_section,
      blush_section,
      background_section,
      cloth_section,
      hair_section,
      mouth_section,
      eyes_section,
      collar_section,]);

}

hair_btn.onclick = function() {
    
    show([style_section,
        seconday_heading,
        hair_section,]);

    hide([skintone_section,
        blush_section,
        cloth_section,
        shorts_section,
        background_section,
        mouth_section,
        eyes_section,
        collar_section,]);

}

mouth_btn.onclick = function() {

    show([style_section,
        seconday_heading,
        mouth_section,]);

    hide([skintone_section,
        blush_section,
        cloth_section,
        shorts_section,
        hair_section,
        background_section,
        eyes_section,
        collar_section,]);

}

eyes_btn.onclick = function() {

    show([style_section,
        seconday_heading,
        eyes_section,]);

    hide([skintone_section,
        blush_section,
        cloth_section,
        shorts_section,
        hair_section,
        mouth_section,
        background_section,
        collar_section,]);

}
collar_btn.onclick = function() {

    show([style_section,
        seconday_heading,
        collar_section,]);

    hide([skintone_section,
        blush_section,
        cloth_section,
        shorts_section,
        hair_section,
        mouth_section,
        eyes_section,
        background_section]);   

}

// Button state Active 


//Image Change Js

bgBtnAll.forEach(item => {

    item.addEventListener('click', (event) => {

        document.getElementById('back_img').src = "/assets/kid/Background/" + event.target.value + ".png";
      
        bgBtnAll.forEach(e => {
            e.classList.remove('active-bg');});

            event.target.classList.add('active-bg');

  })
  })

  skintoneBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('skintone_img').src = "/assets/kid/Skintone/" + event.target.value + ".png";
      
      skintoneBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');
  })
  })

  blushBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('blush_img').src = "/assets/kid/Blush/" + event.target.value + ".png";
        
      blushBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');
  
    })
  })

  clothBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('cloth_img').src = "/assets/kid/Cloth/" + event.target.value + ".png";

      clothBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');


  })
  })

  shortsBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('shorts_img').src = "/assets/kid/Shorts/" + event.target.value + ".png";

      clothBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');


  })
  })

  hairBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('hair_img').src = "/assets/kid/Hair/" + event.target.value + ".png";

      hairBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');


  })
  })

  mouthBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('mouth_img').src = "/assets/kid/Mouth/" + event.target.value + ".png";

      mouthBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');


  })
  })

  eyesBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('eyes_img').src = "/assets/kid/Eyes/" + event.target.value + ".png";

      eyesBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');


  })
  })

  collarBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('collar_img').src = "/assets/kid/Collar/" + event.target.value + ".png";

      collarBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');


  })
  })

  document.querySelectorAll('.btn-acc').forEach(item => {
    item.addEventListener('click', (event) => {
      document.querySelectorAll('.btn-acc').forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');

    });
  });

//random image style & button color and confetti on random button click

loadConfettiPreset(tsParticles);

let confettiContainer;

tsParticles
  .load("tsparticles", {
    particles: {
      shape: {
        type: "character",
        character: {
          value: ["⭐"]
        }
      }
    },
    preset: "confetti",
    emitters: []
  })
  .then((container) => (confettiContainer = container));

const random = document.getElementById('random');

  function randomBtnClick(x){
    x[Math.floor(Math.random() * x.length)].click();
 }

 random.onclick = function(){ 
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  random.style.backgroundColor = "#" + randomColor;
 randomBtnClick(bgBtnAll);
 randomBtnClick(skintoneBtnAll);
 randomBtnClick(blushBtnAll);
 randomBtnClick(clothBtnAll);
 randomBtnClick(shortsBtnAll);
 randomBtnClick(hairBtnAll);
 randomBtnClick(mouthBtnAll);
 randomBtnClick(eyesBtnAll);
 randomBtnClick(collarBtnAll);
 confettiContainer.addEmitter({
  size: {
    width: 0,
    height: 0
  },
  startCount: 10,
  rate: {
    delay: 0,
    quantity: 0
  },
  life: {
    duration: 0,
    count: 1
  },
  position : {
    x: 15,
    y: 25
  },
});
}

random.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);

//Download button html to canvas

const downloadBtn = document.getElementById('download');

downloadBtn.addEventListener('click', function () {

  html2canvas( document.getElementById('aig') ).then((canvas) => {
    let a = document.createElement("a");
    a.href = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    a.download = "kid.png";
    a.click();
  });

});







