import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {

  return (
    <div className="home-container">
      <div className="home-content-container">
        <div>
          <h1>Desafio Github API</h1>
          <p>DevSuperior - Escola de programação</p>
        </div>
        <div>
          <Link to="/">
            <button className="btn btn-primary" > Começar</button>
          </Link>
        </div>
      </div>
    </div>
  );

}

export default Home;
