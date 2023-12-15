export class Footer{
    constructor(data){
        this.data = data;
    }

renderfooterData(){ 
    const footerTpl = this.data.map((h) =>{
        return`<div id="footer-main-div">

        <div class="first-div-foot">
        <h2 class="footer-h2">${h.name}</h2>
        <p class="foot-p">${h.oneLine}</p>
        </div>

        <div class="first-div-foot1">
        <div>
        <h2 class="foot-span">${h.social}</h2>
        </div>

        <div class="foot-icon">
        <a id="a-foot" target="_blank" href="https://www.linkedin.com/in/nandini-atri-494881232/" <i class="fa fa-linkedin"></i></a>
        <a id="a-foot" target="_blank" href="https://github.com/" <i class="fa fa-github"></i></a>
        <a id="a-foot" target="_blank" href="https://www.instagram.com/nandiniatri/?igshid=MTNiYzNiMzkwZA%3D%3D" < <i class="fa fa-instagram"></i></a>
        <a id="a-foot" target="_blank" href="https://youtube.com/@nandiniatri?si=XgAjcKfQ-Rw0FpiX" <i class="fa fa-youtube-play"></i></a>
        </div>

        </div>

        <div class="footer-five"></div>
        <div><p class="footer-lower">© Copyright 2023. Made by <a class="footer-A" href="#header-container">Nandini Atri</a></p></div>
        </div>
        `
    });

    const create = document.createElement('div');
    app.append(create);
    create.innerHTML = footerTpl;
}
}

const data = [
    {
        name:'NANDINI ATRI',
        oneLine:'A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product',
        social:'SOCIAL',
        
    }
]

const footer = new Footer(data);
footer.renderfooterData();