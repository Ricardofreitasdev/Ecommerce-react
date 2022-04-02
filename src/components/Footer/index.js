import React from "react";
import useStore from "../../hooks/useStore";

export default function Footer() {
  const { infos, loading } = useStore();
  return (
    <footer className="footer">
      {loading ? (
        "carregando..."
      ) : (
        <>
          <div className="footer__wrapper container">
            <div className="footer__item">
              <h4>Contato</h4>
              <span className="footer__contact">
                <i>icone</i>
                <p>{infos.support}</p>
              </span>
              <span className="footer__contact">
                <i>icone</i>
                <p>{infos.phone}</p>
              </span>
              <span className="footer__contact">
                <i>icone</i>
                <p>{infos.email}</p>
              </span>
            </div>
            <div className="footer__item">
              <h4>Institucional</h4>
              <ul>
                {infos.extraPages.institutional.map((page) => (
                  <li>
                    <a href={page.path}>{page.pageName}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__item">
              <h4>Ajuda</h4>
              <ul>
                {infos.extraPages.help.map((page) => (
                  <li>
                    <a href={page.path}>{page.pageName}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__item">Pagamento</div>
            <div className="footer__item">Siga-nos</div>
          </div>
          <div className="container">{infos.description}</div>
        </>
      )}
    </footer>
  );
}
