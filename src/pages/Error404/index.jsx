import { Link } from "react-router-dom";

function Error404() {
  return (
   
    <div className="error">
        <div className="error__description">
            <p className="error__code">404</p>
            <p className="error__message">
            Oups! La page que vous demandez n'existe pas.
            </p>
        </div>
        <Link to="/" className="error__link">
            Retourner sur la page d'accueil
        </Link>
    </div>

  );
}

export default Error404;