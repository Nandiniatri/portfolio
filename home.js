export class Home{
    constructor(data){
        this.data = data;
    } 

renderHomeData(){
    const html = this.data.map((items) =>{
        return `<div id="home-container">
        <div class="hello"><h3>${items.hello}</h3></div>
        <div class="name"><h1 class="home-h1">${items.name}</h1></div>
        <div class="deve"><h5>${items.developer}</h5></div>
        <div class="line">${items.softwareline}</div>
        <button class="hire-btn">Hire Me</button>
        <button class="get-btn"><a class="home-A" target="_blank" download href="https://drive.google.com/file/d/1G5QXVOIfR1NOVgZprCrye-WvLs87dani/view?usp=drive_link" download >download cv</a></button>
        <div class="img-container">
        <img class="img1" src="${items.img}">
        </div>
        </div>`
    })
    const create = document.createElement('div');
    app.append(create);
    create.innerHTML = html;
}
}

const data = [
    {
        hello:'hello',
        name:'i am nandini atri',
        developer:'front-end developer',
        img:'https://img.freepik.com/premium-vector/programmer-work-laptop-computer-website-code-program-concept_133260-5402.jpg',
        softwareline:'A Front-End Developer is someone who creates websites and web applications.',
        img:'https://img.pikbest.com/origin/09/20/30/89epIkbEsTmIb.png!w700wp'

    }
]
const home = new Home(data);
home.renderHomeData();