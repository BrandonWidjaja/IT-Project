import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <div style = {{textAlign : "center"}}>
            <h1>Not Found</h1>
            <br />
            <p>This website does not exist</p>
            <div>
                <button onClick={goBack}>Go Back</button>
            </div>
        </div>
    )
}

export default NotFound