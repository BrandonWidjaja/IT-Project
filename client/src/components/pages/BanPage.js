import { useNavigate } from "react-router-dom";

const BanPage = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <div style = {{textAlign : "center"}}>
            <h1>Banned</h1>
            <br />
            <p>You are banned from this website.</p>
            <div>
                <button onClick={goBack}>Go Back</button>
            </div>
        </div>
    )
}

export default BanPage