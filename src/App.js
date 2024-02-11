import './App.css';
import Cards from './Componentes/Cards.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Fauna del Mundo</h1>
      <Cards
        nombre='Leopardo'
        imagen='leopardo'
        zona='tailandia, suezia, mexico, australia'
        texto=' Es un mamífero de la familia de los félidos. Al igual que tres de los demás félidos del género Panthera: el león, el tigre y el jaguar, están caracterizados por una modificación en el hueso hioides que les permite rugir. También se lo conoce como pantera parda y, cuando presenta un pelaje completamente oscuro como pantera negra (melánico).'
      />
      <Cards
        nombre='Loro'
        imagen='loros'
        zona='tailandia, suezia, mexico, australia'
        texto='los loros típicos se agrupaban en una sola familia (Psittacidae), que se dividía en dos subfamilias: Psittacinae (donde se incluía a todos los loros menos a los loris) y Loriinae (los loris). Actualmente el grupo se ha reestructurado, pasando a ser una superfamilia que se divide en tres familias: Psittacidae (loros de América y África), Psittrichasiidae (loro aguileño y afines) y Psittaculidae (loros de Asia y Oceanía, además de las especies pequeñas de África.'
      />
      <Cards
        nombre='Sapo'
        imagen='sapo'
        zona='tailandia, suezia, mexico, australia'
        texto=' Muchas de sus especies se conocen con el nombre común de sapos; no obstante, numerosas especies pertenecientes a otras familias también son comúnmente denominados sapos. Esto es así porque las características que popularmente se utilizan para distinguir a las ranas de los sapos no son las mismas que se utilizan en la clasificación científica. Según la cultura popular, se diferencian en que las ranas tienen la piel lisa y húmeda, mientras que los sapos tienen la piel áspera y seca y son más caminadores que saltadores, de ahí que sus patas sean más cortas.'
      />
      </div>
    </div>
  );
}

export default App;
