export class About{
    constructor(data){
        this.data = data;
    }
 
renderAboutSection(){ 
    const aboutTpl = this.data.map((itm) =>{
        return `<div id="about-main-container">

        <div class="abut">
        <h1 class="about-h1">${itm.about}</h1>
        </div> 

        <div class="about-para">
        <p class="p1">Hey, I'm Nandini Atri, a highly skilled web developer with expertise in:<br><br>
        🎨 HTML5 <br>
        🖌️ CSS3 <br>
        🌐 JavaScript <br>
        🌐 AJAX <br>
        📋 JSON <br>
        🔌 APIs <br><br>
    
        I'm on the lookout for exciting web development roles and eager to discuss how I can supercharge your team.
        </p>
        </div>

        <div>
        <img class="about-img" src="${itm.img}">
        </div>

        <button id="about-btn-id" class="about-btn1"><a href="#contact-main-container" class="abt-A"</a>${itm.btn}</button>

        </div>`
    })
    const create = document.createElement('div');
    app.append(create);
    create.innerHTML = aboutTpl;
}
}
const data=[
    {
        about:'LET’S <br>INTRODUCE ABOUT<br> MYSELF',
        img:'https://img.freepik.com/premium-vector/girl-with-laptop_373887-1702.jpg?w=360',
        btn:'contact'
    }
]

const about = new About(data);
about.renderAboutSection();



// img:'https://i.pinimg.com/1200x/8f/48/7c/8f487c4ac1e1e847e70f4a32536bc2be.jpg',
// img:'https://storage.googleapis.com/pai-images/da002fae83c246c29d94efe922c92473.jpeg',