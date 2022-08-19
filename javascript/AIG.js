// Primary Buttons select
const background_btn = document.getElementById('background');
const mayo_btn = document.getElementById('mayo');
const nose_btn = document.getElementById('nose');
const clot_btn = document.getElementById('cloth');

//heading select
const seconday_heading = document.getElementById('secondary-heading-2');

//section select
const background_section = document.getElementById('section_background');
const mayo_section = document.getElementById('section_mayo');
const nose_section = document.getElementById('section_nose');
const cloth_section = document.getElementById('section_cloth');

//All secondary buttons select acc to section
const bgBtnAll = document.querySelectorAll('.btn-bg');
const mayoBtnAll = document.querySelectorAll('.btn-mayo');
const noseBtnAll = document.querySelectorAll('.btn-nose');
const clothBtnAll = document.querySelectorAll('.btn-cloth');

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

//   neck_btn.onclick = function() {

//     show([style_section,
//         seconday_heading,
//         neck_section,
//     ]);

//     hide([
//         background_section,
//         ears_section,
//         leg_section,
//         hair_section,
//         mouth_section,
//         eyes_section,
//         accessories_section
//       ]);

// }

  background_btn.onclick = function() {
    show([
        style_section, 
        seconday_heading, 
        background_section 
    ]);

    hide([
    mayo_section,
    nose_section,
    cloth_section,
        ]);
}

mayo_btn.onclick = function() {
  show([style_section,
      seconday_heading,
      mayo_section,
  ]);

  hide([
    background_section,
    nose_section,
    cloth_section,
    ]);
}

nose_btn.onclick = function() {
  show([style_section,
      seconday_heading,
      nose_section,
  ]);

  hide([
    background_section,
    mayo_section,
    cloth_section,
    ]);
}

cloth_btn.onclick = function() {
  show([style_section,
      seconday_heading,
      cloth_section,
  ]);

  hide([
    background_section,
    mayo_section,
    nose_section,
    ]);
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

  noseBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('nose_img').src = "/assets/mayo/nose/" + event.target.value + ".png";
      
      mayoBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');
  })
  })

  // neckBtnAll.forEach(item => {
  //   item.addEventListener('click', (event) => {
  //     document.getElementById('neck_img').src = "/assets/alpaca/neck/" + event.target.value + ".png";
      
  //     neckBtnAll.forEach(e => {
  //       e.classList.remove('active-bg');});
        
  //       event.target.classList.add('active-bg');
  // })
  // })

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
 randomBtnClick(noseBtnAll);
 randomBtnClick(clothBtnAll);

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
      .toDataURL("image/jpeg")
      .replace("image/jpeg", "image/octet-stream");

    a.download = "mayopixel.jpg";
    a.click();
  });

});







