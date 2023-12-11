export class Contact{
    constructor(data){
        this.data = data; 
    }

renderContactData(){
    const contactTpl = this.data.map((data) =>{
        return `<div id="contact-main-container">
        <h2 class="cont-h2">${data.name}</h2>
        <div class="contact-four"></div>
        <form>
        <div class="inside">
        <div class="form1">
        <label class="cont-label">Name</label><br>
        <input class="inp1" id="name" type="text" placeholder="Enter Your Name" required/> 
        </div>

        <div class="form2">
        <label class="cont-label1">Email</label><br>
        <input class="inp2" id="email" type="email" placeholder="Enter Your Email" required/> 
        </div>

        <div class="form3">
        <label class="cont-label2">Message</label><br>
        <input class="inp3" id="message" type="text" placeholder="Enter Your Message" required/> 
        </div>

        <div><button class="cont-btn">SUBMIT</button></div>
        </div>
        </form>
      
        </div>`
    });
    const create = document.createElement('div');
    app.append(create);
    create.innerHTML = contactTpl;

    const submitbtn1 = document.querySelector('.cont-btn');
    submitbtn1.addEventListener('click', (event) =>{
        event.preventDefault();
        this.sendEmail();
    })
}

sendEmail(){
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "ns1409936@gmail.com",
    Password : "A879411B2B4742C312728D075F8F1AE2E74A",
    To : 'atrinandini8@gmail.com',
    From : document.getElementById('email').value,
    Subject : "Subject",
    Body : document.getElementById("name").value +
    "<br> Email:" + document.getElementById('email').value +
    "<br> Message:" + document.getElementById('message').value
}).then(
  message => alert(message)
);
}
    }

const data = [
    {
        name:'CONTACT',
    }
]
const contact = new Contact(data);
contact.renderContactData();
// contact.sendEmail();


