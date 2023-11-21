<script src="https://smtpjs.com/v3/smtp.js">

  function sendEmail(){
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "Maaike.verplancke@hotmail.com",
      Password : "DECAC525C1E46933CB1FA696F5443DF3038F",
      To : 'verplanckemaaike@gmail.com',
      From : document.getElementById("email").value,
      Subject : "Nieuw Contactformulier van SPATwater",
      Body : "Name : " + document.getElementById("name").value
              + "<br> Email: " + document.getElementById("email").value
              + "<br> Message: " + document.getElementById("message").value

  }).then(
    message => alert("Message Sent Succesfully")
  );
  }
  export let data
  console.log(data)
</script>


<section class="contact section" id="experience">
  <h2>Contact</h2>
  <p>Voel je vrij om contact met ons op te nemen</p>

<div class="main-container">
  <div class="child-container">

<form>
        <label for="name">Voor- en achternaam*</label>
        <input type="text" id="name" name="name" required placeholder="Jan dekkers">

        <label for="email">E-mail*</label>
        <input type="email" id="email" name="email" required placeholder="Jandekkers@hotmail.com">

        <label for="message">Notitie*</label>
        <textarea id="message" name="message" rows="4" required placeholder="Opmerking..."></textarea>
        <button type="submit">Verstuur</button>
    </form>
  <img src="assets/tree.png" alt="afbeelding boom naast invulformulier">
</div>
</div>
</section>

<style>
.main-container {
  container: card / inline-size;
}

.child-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@container (max-width: 500px) {
.child-container {
  display: grid;
  grid-template-columns: 1fr;
}
img{
  display: none;
}
}

/* @media (min-width: 500px) {
img{
  width: 10em;
}
} */

@media (max-width: 500px) {
img{
  width: 5em;
}
}

img{
  width: 31em;
  /* margin-left: -1em; */
  margin-top: -2.5em;
}

h2{
    padding-top: 2rem;
    color: var(--spat);
  }

p {
    margin-bottom: 1rem;
    color: var(--darkblue);
    font-size: 0.8rem;
}

/* FORMULIER */
form{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

label{
    margin-top: 1rem;
    margin-bottom: .5rem;
    color: var(--darkblue);
    font-size: 0.8rem;
}

input, textarea{
  width: 500px;
  height: 45px;
  padding: .7em;
  border-color: #CCCCCC;
  border-top: #CCCCCC;
  border-left: #CCCCCC;
  border-radius: 10px;
  border-width:1px;
}

input:focus,
textarea:focus {
  opacity: 1;
  border-radius: 10px;
  border: 10px;
  transform: scale(1.01, 1.01);
  outline: none;
  box-shadow: 0 0 0 2px var(--darkblue);
}

input::placeholder,
textarea::placeholder{
  opacity: 80%;
  color:#CCCCCC;
  font-style: italic;
}

button {
    display: inline-block;
    background-color: var(--green);
    color: white;
    padding: 0.5rem 1rem;
    margin-top: 2em;
    border-radius: 5px;
    font-weight: var(--font-semi-bold);
    transition: 0.3s;
    text-decoration: none;
    width: 100px;
    border: none;
}

/* form:valid {
  opacity: 1;
  transform: translateX(0);
  border-color: var(--green);
}

form:invalid {
  border-color: orange;
} */

  .contact {
    padding: 4rem 8rem;
    height: auto;
    background-color: var(--lg-bg);
  }

@media (max-width: 500px){
.contact {
  padding: 4rem 2rem;
  height: auto;
  background-color: var(--lg-bg);
}

input, textarea {
  width: 400px;
}
}


@media (max-width: 450px){
.contact {
  padding: 4rem 2rem;
  height: auto;
  background-color: var(--lg-bg);
}

input, textarea {
  width: 320px;
  height: 45px;
  padding: .7em;
  border-color: #CCCCCC;
  border-top: #CCCCCC;
  border-left: #CCCCCC;
  border-radius: 10px;
  border-width:1px;
}
}

@media (min-width: 600px){
input, textarea {
  width: 540px;
  height: 45px;
  padding: .7em;
  border-color: #CCCCCC;
  border-top: #CCCCCC;
  border-left: #CCCCCC;
  border-radius: 10px;
  border-width:1px;
}
img{
  display: flex;
}


}

@media (min-width: 500px){
.contact {
  padding: 4rem 2rem;
  height: auto;
  background-color: var(--lg-bg);
}
}

</style>
