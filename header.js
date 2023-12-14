export class Header{
    constructor(data){ 
        this.data = data;
    }

renderHeader(){
    const tpl = this.data.map((item) =>{ 
        return `<div id="header-container">
        <div class="nandu">
        <p>${item.nandini}</p>
        </div>
        <a href="#" id="menu-icon"><i style="font-size:35px" class="fa">&#xf0c9;</i></a>
        <div class="right-side">
        <a class="header-A" href="#home-container">${item.home}</a>
        <a class="header-A" href="#about-main-container">${item.about}</a>
        <a class="header-A" href="#skills-container">${item.skill}</a>
        <a class="header-A" href="#project-container">${item.project}</a>
        <a class="header-A" href="#contact-main-container">${item.contact}</a>
        </div>
        </div>`
    })
    document.getElementById('app').innerHTML = tpl;
}
}

const data = [
    {
        nandini:'NANDINI ATRI',
        home:'HOME',
        about:'ABOUT',
        skill:'SKILL',
        project:'PROJECT',
        contact:'CONTACT'
    }
]
const header = new Header(data);
header.renderHeader();