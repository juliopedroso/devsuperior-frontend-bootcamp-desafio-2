import './styles.css';

const Profile = () => {
    return (
        <div className="container-fluid profile-container">
            <div className="profile-content-container">

                <h1>Encontre um perfil Github</h1>
                <div className="search-container">
                    <form>
                        <div className="form-container">
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Usuário Github"
                                onChange={() => { }}
                            />
                            <button type="submit" className="btn btn-primary search-button">
                                Encontrar
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Profile;