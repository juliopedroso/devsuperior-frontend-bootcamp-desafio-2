import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {

    return (
        <div className="home-container">
            <h1>Desafio Github API</h1>
            <h2>DevSuperior - Escola de programação</h2>
            <div>
            <Link to="/products">
              <button className = "btn btn-primary" > Começar</button>
            </Link>
          </div>
        </div>
    );

}

export default Home;
