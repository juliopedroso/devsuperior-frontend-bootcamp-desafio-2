import { useState } from 'react';
import './styles.css';


type FormData = {
    gitUserName: string;
}

const Profile = () => {

    const [formData, setFormData] = useState<FormData>({
        gitUserName: ''
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({...formData, [name]:value});
    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        console.log(formData);

    }

    return (
        <div className="container-fluid profile-container">
            <div className="profile-content-container">

                <h1>Encontre um perfil Github</h1>
                <div className="search-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-container">
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Usuário Github"
                                name='gitUserName'
                                value={formData.gitUserName}
                                onChange={handleChange}
                            />
                            <button type="submit" className="btn btn-primary search-button" >
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