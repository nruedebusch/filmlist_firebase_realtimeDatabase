<script lang="t">
  import { push } from "firebase/database";
  import { moviesInDB } from "./firebase.js";
  let inputValue = "";
  let movies: string[] = [];

  const addToDatabase = () => {
    if (inputValue.trim() !== "") {
      push(moviesInDB, inputValue);
      console.log(`${inputValue} added to database`);
      movies = [...movies, inputValue];
      inputValue = "";
    }
  };

  const checkForEnter = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      addToDatabase();
    }
  };
</script>

<body>
  <div class="container">
    <h1>Reel Time</h1>
    <div class="field">
      <input
        type="text"
        id="input-field"
        placeholder="Pulp Fiction"
        bind:value={inputValue}
        on:keydown={checkForEnter}
      />
      <button on:click={addToDatabase}>+</button>
    </div>
    <ul>
      {#each movies as movie (movie)}
        <li>{movie}</li>
      {/each}
    </ul>
  </div>
</body>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    background-color: #2f4f4f;
    color: #fbfbfb;
    height: 100vh;
    display: grid;
    place-items: center;
  }

  .container {
    max-width: 380px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin: 30px auto;
  }

  h1 {
    font-size: 45px;
    font-family: "Ultra", serif;
    margin: 0;
    text-align: center;
    display: block;
  }

  .field {
    display: flex;
    column-gap: 10px;
  }

  input[type="text"] {
    background-color: #6c3932;
    font-size: 25px;
    padding: 15px;
    border: 0;
    border-radius: 10px;
    text-align: center;
    font-family: "Inter", sans-serif;
    width: 100%;
    color: #fbfbfb;
  }

  input[type="text"]::placeholder {
    color: #371f1b;
  }

  button {
    background-color: #a57042;
    color: #260f0f;
    font-size: 25px;
    padding: 15px;
    border: 0;
    border-radius: 10px;
    width: 70px;
  }

  button:hover {
    cursor: pointer;
    background-color: #d3945d;
  }

  ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    text-align: center;
  }

  li {
    list-style: none;
    background-color: #531616;
    font-size: 25px;
    padding: 15px;
    box-shadow: 0px 4px 5px #000;
  }
</style>
