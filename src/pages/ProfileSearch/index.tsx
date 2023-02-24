import axios from 'axios';
import { useState } from 'react';
import './styles.css';


type FormData = {
    gitUserName: string;
}

type GithubProfile = {

    avatar_url: string,
    url: string,
    followers: number,
    location: string,
    name: string,

}

const Profile = () => {

    const [formData, setFormData] = useState<FormData>({
        gitUserName: ''
    })

    const [githubProfile, setGithubProfile] = useState<GithubProfile>();


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({ ...formData, [name]: value });
    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        axios.get(`https://api.github.com/users/${formData.gitUserName}`)
            .then((response) => {
                setGithubProfile(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                setGithubProfile(undefined)
                console.log(error)
            });

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
            {githubProfile &&
                <div className="github-profile-container">
                    <img src={githubProfile.avatar_url} alt='' />
                    <div className="profile-info-container">
                        <h3 className='profile-info-container-title'>Informações</h3>
                        <div className="profile-field">
                            <h3 className="profile-field-title">Perfil:</h3>
                            <a href={githubProfile.url}>{githubProfile.url}</a>
                        </div>
                        <div className="profile-field">
                            <h3 className="profile-field-title">Seguidores:</h3>
                            <p className="profile-field-description">{githubProfile.followers}</p>
                        </div>
                        <div className="profile-field">
                            <h3 className="profile-field-title">Localidade:</h3>
                            <p className="profile-field-description">{githubProfile.location}</p>
                        </div>
                        <div className="profile-field">
                            <h3 className="profile-field-title">Nome:</h3>
                            <p className="profile-field-description">{githubProfile.name}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Profile;