* {
  box-sizing: border-box;
}

body{
  background-color: rgb(255, 0, 162);
}

/* HEADER */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  position: sticky;
  top: 0;
}

.headerLogo {
  padding: 8px;
  border: 2px solid black;
  border-radius: 50%;
}

.navigation {
  display: flex;
  justify-content: end;
  gap: 15px;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

/* MAIN */
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
}

.pokeCard,
.displayCatFact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  width: 800px;
  background-color: blanchedalmond;
}

.pokeCard img {
  width: 100%;
}

/* FOOTER */
footer {
  display: flex;
  justify-content: center;
}
