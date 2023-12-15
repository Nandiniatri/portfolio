export class Project{
    constructor(data){
        this.data = data;
    }

renderProjectData(){ 
    const projectTpl = this.data.map((itmm) =>{
        return `<div id="project-container">
        <h2 class="proj-h1">${itmm.top}</h2>
        <div class="project-three"></div>

        <div class="project-div1">
        <img class="proj-img" src="${itmm.img}"/>
        <p class="proj-para">${itmm.h}</p>
        <div class="proj-span-div"><span class="proj-span">${itmm.line}</span></div>
        <div class="proj-btn-div1">

        <button class="proj-btn1"><a class="project-A" target="_blank" href="https://pinterest-clone-nandini.netlify.app/">Source <i class="fa fa-github" style="font-size:20px"></i></a></button>

        <button class="proj-btn2"><a class="project-A"  target="_blank" href="https://pinterest-clone-nandini.netlify.app/">Live <i class="fa fa-external-link" style="font-size:18px"></i></a></button>
        </div>
        </div> 

        <div class="project-div2">
        <img class="proj-img1" src="${itmm.img2}"/>
        <p class="proj-para1">${itmm.h1}</p>
        <div class="proj-span-div1"><span class="proj-span1">${itmm.line1}</span></div>

        <div class="proj-btn-div2">

        <button class="proj-btn3"><a class="project-A" target="_blank"  href="https://github.com/Nandiniatri/Restaurant-App">Source <i class="fa fa-github" style="font-size:20px"></i></a></button>

        <button class="proj-btn4"><a class="project-A" target="_blank"  href="https://laddurestaurant-nandini.netlify.app/#service-Id">Live <i class="fa fa-external-link" style="font-size:18px"></i></a></button>
        </div>
        </div>

        </div>`
    })
    const create = document.createElement('div');
    app.append(create);
    create.innerHTML = projectTpl;
} 
}


const data =[
    {
        top:'projects',
        img:'https://s.pinimg.com/images/facebook_share_image.png',
        h:'Pinterest Clone',
        line:'Social Media App where users can <br>interact with each other through posts.',

        img2:'https://media-cdn.tripadvisor.com/media/photo-s/18/6e/89/89/bbq-dinner.jpg',
        h1:'Laddu Restaurant',
        line1:'Crafting delectable digital experiences <br>for restaurants, where every click is a journey into culinary delight.'

    }
]
const project = new Project(data);
project.renderProjectData();