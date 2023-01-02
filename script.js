
const menuOpen = document.getElementById('menu');
const navbar = document.querySelector('.navbar');
const menuClose = document.querySelector('.close');
const menuList = document.querySelectorAll('.navbars a');

menuOpen.addEventListener('click', () => {
  navbar.style.top = "0"
})

menuClose.addEventListener('click', () => {
  navbar.style.top = "-110vh"
});

for (let i = 0; i < 3; i++) {
  menuList[i].addEventListener('click', () => {
    navbar.style.top = "-110vh";
  })
}

// Modal DOM


const style = document.createElement('style');
style.innerHTML = `
.popup {
  position:fixed;
  top:0%;
  z-index: 2;
  padding: 0;
  background: rgba(193,199,208, 0.9);
  min-width: 100vw;
  min-height: 100vh;
  overflow-y: scroll !important;
  blur(3px);
}

.popup .content {
   position: absolute;
   margin: 20px;
   background-color: #fff;
   border: 1px solid #dfe1e6;
   box-sizing: border-box;
   border-radius: 16px;
   min-height: 80vh;
   width: 90%;
   display: flex;
   flex-direction: column;
}
.content .thumbnail {
  background-image: url(images/image-details-1.png););
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 100%;
  min-height: 60vw;
  min-width: 90%;
  margin: 4vw auto;
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
}

img.modal-close{
  right: 9.7%;
  top: 5.2%;
  position: absolute;
}

.content-description {
   margin: 0 16px 16px 16px;
}

.content-description h2 {
 font-size: 4.5vw;
 line-height: 6vw;
 top: 0;
 position: relative;
 margin: 0;
}

.content-description ul {
   list-style: none;
   display: flex;
   padding: 0;
   gap: 8px;
}

.content-description ul li {
   background-color:#ebf0ee;
   border-radius: 4px;
   padding: 1.5% 3%;
   font-size: 3.5vw;
}

.content-description p {
   color: #344563;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
}

.live-project {
   display: flex;
   gap:12px;
   justify-content: flex-start;
}

.live-project button {
   background: #36b37F;
   border-radius: 4px;
   color: #ebf0ee;
   border: none;
   padding: 2% 4%;
   display: flex;
   align-items: center;
   gap:12px;
   font-weight: 500;
   font-size: 3vw;
   line-height: 24px;
   text-align: center;
}

.modal-close img,
.deskstop-display .live-project,
.content-description .deskstop-list {
   display: none;
}

@media (min-width: 699px) {
.thumbnail img {
  display: none;
}  
.popup {
  position:fixed;
  top:0%;
  z-index: 2;
  padding: 0;
  background: rgba(193,199,208, 0.9);
  min-width: 100vw;
  min-height: 100vh;
  display:flex;
  justify-content: center;
}

.popup .content {
   position: absolute;
   background-color: #fff;
   border: 1px solid #dfe1e6;
   box-sizing: border-box;
   border-radius: 16px;
   min-height: 80vh;
   width: 70%;
   display: flex;
   flex-direction: column;
   padding:0;
}

.modal-close img{
   top:2%;
   position: absolute;
   right: 5%;
   display:block;
   cursor:pointer;
   height: 5vw;
}

.content .thumbnail {
  background-image: url(images/Snapshoot.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  min-height:45vw;
  border-radius: 8px;
  position: relative;
  min-width: 95%;
  margin: 8vw auto 0 auto;
}

.content-description {
   margin: 24px 24px 0 24px;
}

.content-description h2 {
   font-weight: 700;
   font-size: 2.7vw;
   line-height: 4vw;
   color: #172B4D;
   width:65%;
}

.content-description .deskstop-display {
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0;
}

.content-description .deskstop-list {
  display: flex;
}

.content-description ul li {
   background-color:#ebf0ee;
   border-radius: 4px;
   padding: 0.5vw 1vw;
   margin: 0px 0.3vw;
   font-weight: 600;
   font-size: 1.3vw;
   line-height: 2vw;
}

.content-description p {
   color: #344563;
   font-weight: 400;
   font-size: 16px;
   line-height: 30px;
   padding-bottom: 20px;
}

.content-description .deskstop-display .live-project {
   display: flex;
   gap:12px;
   justify-content: flex-start;
}

.live-project button {
   background: #36b37F;
   border-radius: 4px;
   color: #ebf0ee;
   border: none;
   padding: 2% 4%;
   display: flex;
   align-items: center;
   justify-content: center;
   gap:12px;
   font-weight: 600;
   font-size: 1.1vw;
   line-height: 1.5vw;
   height: 3.7vw;
   width:11vw;
}

.live-project button > img {
  height:1.5vw;
  width:1.5vw;
}

.content-description .mobile-list,
.live-project {
   display: none;
}
}`;

function displayPortfolio(id) {
  const portfolio = [
    {
      id: 1,
      title: 'Keeping track of hundreds of components',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      techMobile: ['Ruby on rails', 'css', 'Javascript'],
      techDeskstop: ['Codekit', 'Github','Javascript','Bootstrap','Terminal','Codepen'],
      liveLink: '#',
      srcLink: '#',
      images: '.',
    },
    {
    id: 2,
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    techMobile: ['Ruby on rails', 'css', 'Javascript'],
    techDeskstop: ['Codekit', 'Github','Javascript','Bootstrap','Terminal','Codepen'],
    liveLink: '#',
    srcLink: '#',
    images: '.',
  },
  {
  id: 3,
  title: 'Keeping track of hundreds of components',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  techMobile: ['Ruby on rails', 'css', 'Javascript'],
  techDeskstop: ['Codekit', 'Github','Javascript','Bootstrap','Terminal','Codepen'],
  liveLink: '#',
  srcLink: '#',
  images: '.',
  },
  {
    id: 4,
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    techMobile: ['Ruby on rails', 'css', 'Javascript'],
    techDeskstop: ['Codekit', 'Github','Javascript','Bootstrap','Terminal','Codepen'],
    liveLink: '#',
    srcLink: '#',
    images: '.',
    },
    {
      id: 5,
      title: 'Keeping track of hundreds of components',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      techMobile: ['Ruby on rails', 'css', 'Javascript'],
      techDeskstop: ['Codekit', 'Github','Javascript','Bootstrap','Terminal','Codepen'],
      liveLink: '#',
      srcLink: '#',
      images: '.',
      },
      {
        id: 6,
        title: 'Keeping track of hundreds of components',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        techMobile: ['Ruby on rails', 'css', 'Javascript'],
        techDeskstop: ['Codekit', 'Github','Javascript','Bootstrap','Terminal','Codepen'],
        liveLink: '#',
        srcLink: '#',
        images: '.',
        }
  ]

  const portfolioPopUp = document.createElement('div'); // Create popup div
portfolioPopUp.className = 'popup';
const num = portfolio[id]
portfolioPopUp.innerHTML = `
<div class="content">
<div class="modal-close"><img src="images/modal-close.png" alt=""></div>
<div class="thumbnail"><img class="modal-close" src="images/mobile-close-modal.png" alt="close-modal"> </div>
<div class="content-description"> 
    <div class="deskstop-display">
    <h2>${num.title}</h2>
    <div class="live-project"><button>See Live <img src="images/live-icon.png" alt=""> </button>
        <button>See Source <img src="images/source-icom.png" alt=""> </button>

     </div>
     </div>
    <ul class="mobile-list"><li>${num.techMobile[0]}</li>
        <li>${num.techMobile[1]}</li>
        <li>${num.techMobile[2]}</li>
    </ul>
    <ul class="deskstop-list">
        <li>${num.techDeskstop[0]}</li>
        <li>${num.techDeskstop[1]}</li>
        <li>${num.techDeskstop[2]}</li>
        <li>${num.techDeskstop[3]}</li>
        <li>${num.techDeskstop[4]}</li>
        <li>${num.techDeskstop[5]}</li>
    </ul>
    <p>${num.description}</p>
         <div class="live-project"><button>See Live <img src="images/live-icon.png" alt=""> </button>
            <button>See Source <img src="images/source-icom.png" alt=""> </button>

         </div>
</div>
</div>
`;
document.body.appendChild(portfolioPopUp);
  document.body.style.overflow = 'hidden';
  document.head.appendChild(style);
 
  function closeModal () {
    portfolioPopUp.style.top = '-110%';
    document.body.style.overflow = 'scroll';   
  }
  
  const portfolioclose = document.querySelectorAll('.modal-close');
  portfolioclose.forEach((item) => {
   item.addEventListener('click', closeModal);
  });
  

  
} //each close



// window.onclick = (e) => {
//   if (e.target == portfolioPopUp) {
//     portfolioPopUp.style.top = '-110%';
//     document.body.style.overflow = 'scroll';
// }
// }
// display close


// displayProject();



// const portfoliobtn = document.querySelectorAll('.see-project');
// portfoliobtn.forEach((item) => {
//   item.addEventListener('click', () => {
//     // displayPortfolio(this.id);
//     console.log(this.id);
//   }); //display event
// });

//form validation

const form = document.querySelector('.form-layout');
const email = document.getElementById('email-address');
const errorMsg = document.querySelector('.validationMessage');
const fullName = document.getElementById('full-name');
const userMessage = document.getElementById('message');

form.addEventListener('submit', (e)=> {
  if (/[A-Z]/.test(email.value)) {
    errorMsg.innerHTML = `Kindly change your email address to lowercase. <br> for example ${email.value.toLowerCase()}` ;
    e.preventDefault();
  }
})

function localSave() {
  const setData = {
    name: fullName.value,
    Email: email.value,
    Comment: userMessage.value,
  };
  localStorage.setItem('SavedData', JSON.stringify(setData));
}

function getSave(){
  const getData = JSON.parse(localStorage.getItem('SavedData'));
  email.value = getData.Email;
  fullName.value = getData.name;
  userMessage.value = getData.Comment;
}

if (!localStorage.getItem('SavedData')) {
  const SavedData = { name: '', Email: '', Comment: '' };
  localStorage.setItem('SavedData', JSON.stringify(SavedData));
} else {
  getSave()
}

form.addEventListener('submit', localSave)




