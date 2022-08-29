// Primary Buttons select
const background_btn = document.getElementById('background');
const mayo_btn = document.getElementById('mayo');
const ears_btn = document.getElementById('ears');
const cloth_btn = document.getElementById('cloth');
const hat_btn = document.getElementById('hat');
const mouth_btn = document.getElementById('mouth');
const ear_btn = document.getElementById('ear');

//heading select
const seconday_heading = document.getElementById('secondary-heading-2');

//section select
const background_section = document.getElementById('section_background');
const mayo_section = document.getElementById('section_mayo');
const ears_section = document.getElementById('section_ears');
const cloth_section = document.getElementById('section_cloth');
const hat_section = document.getElementById('section_hat');
const mouth_section = document.getElementById('section_mouth');
const ear_section = document.getElementById('section_ear');           
const style_section = document.getElementById('section-style');


//All secondary buttons select acc to section
const bgBtnAll = document.querySelectorAll('.btn-bg');
const mayoBtnAll = document.querySelectorAll('.btn-mayo');
const earsBtnAll = document.querySelectorAll('.btn-ears');
const clothBtnAll = document.querySelectorAll('.btn-cloth');
const hatBtnAll =document.querySelectorAll('.btn-hat');
const mouthBtnAll = document.querySelectorAll('.btn-mouth');
const accBtnAll = document.querySelectorAll('.btn-ear');

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
    mayo_section,
    ears_section,
    cloth_section,
    hat_section,
    mouth_section,
    ear_section
        ]);
}

mayo_btn.onclick = function() {

    show([style_section,
        seconday_heading,
        mayo_section,
    ]);

    hide([background_section,
        ears_section,
        cloth_section,
        hat_section,
        mouth_section,
        ear_section]);

}

ears_btn.onclick = function() {

    show([style_section,
        seconday_heading,
        ears_section,]);

    hide([mayo_section,
        background_section,
        cloth_section,
        hat_section,
        mouth_section,
        ear_section,]);

}

cloth_btn.onclick = function() {

    show([style_section,
        seconday_heading,
        cloth_section,]);

    hide([mayo_section,
        ears_section,
        background_section,
        hat_section,
        mouth_section,
        ear_section,]);

}

hat_btn.onclick = function() {
    
    show([style_section,
        seconday_heading,
        hat_section,]);

    hide([mayo_section,
        ears_section,
        cloth_section,
        background_section,
        mouth_section,
        ear_section,]);

}

mouth_btn.onclick = function() {

    show([style_section,
        seconday_heading,
        mouth_section,]);

    hide([mayo_section,
        ears_section,
        cloth_section,
        hat_section,
        background_section,
        ear_section,]);

}

ear_btn.onclick = function() {

    show([style_section,
        seconday_heading,
        ear_section,]);

    hide([mayo_section,
        ears_section,
        cloth_section,
        hat_section,
        mouth_section,
        background_section]);   

}

// Button state Active 


//Image Change Js

bgBtnAll.forEach(item => {

    item.addEventListener('click', (event) => {

        document.getElementById('back_img').src = "/assets/mayo/backgrounds/" + event.target.value + ".png";
      
        bgBtnAll.forEach(e => {
            e.classList.remove('active-bg');});

            event.target.classList.add('active-bg');

  })
  })

  mayoBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('mayo_img').src = "/assets/mayo/mayo/" + event.target.value + ".png";
      
      mayoBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');
  })
  })

  earsBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('nose_img').src = "/assets/mayo/nose/" + event.target.value + ".png";
        
      earsBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');
  
    })
  })

  clothBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('cloth_img').src = "/assets/mayo/cloth/" + event.target.value + ".png";

      clothBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');


  })
  })

  hatBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('hat_img').src = "/assets/mayo/hat/" + event.target.value + ".png";

      hatBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');


  })
  })

  mouthBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('mouth_img').src = "/assets/mayo/mouth/" + event.target.value + ".png";

      mouthBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');


  })
  })

  
  accBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('ear_img').src = "/assets/mayo/ear/" + event.target.value + ".png";

      accBtnAll.forEach(e => {
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
 randomBtnClick(mayoBtnAll);
 randomBtnClick(mouthBtnAll);
 randomBtnClick(earsBtnAll);
 randomBtnClick(clothBtnAll);
 randomBtnClick(hatBtnAll);
 randomBtnClick(accBtnAll);
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

  html2canvas( document.getElementById('wahini') ).then((canvas) => {
    let a = document.createElement("a");
    a.href = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    a.download = "iki.png";
    a.click();
  });

});







