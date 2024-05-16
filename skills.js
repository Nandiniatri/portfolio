export class Skills{
    constructor(data){
        this.data = data; 
    }

renderSkillsData(){ 
    const skillsTpl = this.data.map((itms) =>{
        return `<div id="skills-container">
        
        <div class="skill-div">
        <h2 class="skill-h2">${itms.skill}</h2>
        <div class="two"></div>
        </div>

        <div class="skill-img">
        <div class="skill-html">
        <img class="html-div" src="${itms.html}"/>
        <p class="skill-para">HTML</p>
        </div>

        <div class="skill-css">
        <img class="css-div" src="${itms.css}"/>
        <p class="skill-para">CSS</p>
        </div>

        <div class="skill-js">
        <img class="js-div" src="${itms.JS}"/>
        <p class="skill-para">JAVASCRIPT</p>
        </div>

        <div class="skill-github">
        <img class="github-div" src="${itms.git}"/>
        <p class="skill-para">GITHUB</p>
        </div>
        </div>

        <div class="skill-sec-section">
        <h1 class="skill-my-h1">${itms.my}</h1>
        <p class="skill-p">Hello I'am Front-End Developer. My Skills are....</p>
        <div class="one"></div>
        </div>

        </div>`
    })
    const create = document.createElement('div');
    app.append(create);
    create.innerHTML = skillsTpl;
}
}

const data =[
    {
        skill:'skills',
        html:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png',
        css:'https://banner2.cleanpng.com/20180420/xwe/kisspng-web-development-cascading-style-sheets-css3-comput-css-5ada20be146fc2.8807141415242446700837.jpg',
        JS:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png',
        git:'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU',
        my:'My Skills'
    }
]

const skill = new Skills(data);
skill.renderSkillsData();