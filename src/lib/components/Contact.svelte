<script>
</script>

<section class="contact section" id="experience">
  <h2>Contact<h2>
  <p>Voel je vrij om contact met ons op te nemen</p>

<form action="#" method="post">
        <label for="name">Naam</label>
        <input type="text" id="name" name="name" required placeholder="Jan dekkers">

        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" required placeholder="Jandekkers@hotmail.com">

        <label for="message">Notitie</label>
        <textarea id="message" name="message" rows="2" required placeholder="Opmerking..."></textarea>
        <button type="submit">Verstuur</button>
    </form>

</section>

<style>
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
  width: 520px;
  height: 45px;
  padding: .7em;
  border-color: #CCCCCC;
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

input.placeholder{
  opacity: 50%;
  color:aqua;
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


  .contact {
    padding: 4rem 3rem;
    height: auto;
    background-color: var(--lg-bg);
  }
</style>
