import React from "react";
import useStore from "../../hooks/useStore";

export default function Footer() {
  const { infos, loading } = useStore();
  return (
    <>
      <footer className="footer">
        {loading ? (
          "carregando..."
        ) : (
          <div className="footer__wrapper container">
            <div className="footer__item">
              <h4>Contato</h4>
              <span className="footer__contact">
                <img
                  loading="lazy"
                  src={infos.supportIcon}
                  alt="icon de rodapé"
                />
                <p>{infos.support}</p>
              </span>
              <span className="footer__contact">
                <img
                  loading="lazy"
                  src={infos.phoneIcon}
                  alt="icon de rodapé"
                />
                <p>{infos.phone}</p>
              </span>
              <span className="footer__contact">
                <img
                  loading="lazy"
                  src={infos.emailIcon}
                  alt="icon de rodapé"
                />
                <p>{infos.email}</p>
              </span>
            </div>
            <div className="footer__item">
              <h4>Institucional</h4>
              <ul>
                {infos.extraPages.institutional.map((page) => (
                  <li key={page.pageName}>
                    <a href={page.path}>{page.pageName}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__item">
              <h4>Ajuda</h4>
              <ul>
                {infos.extraPages.help.map((page) => (
                  <li key={page.pageName}>
                    <a href={page.path}>{page.pageName}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__item">
              <h4>Pagamento</h4>
            </div>
            <div className="footer__item">
              <h4>Siga-nos</h4>
              <div className="footer__social-list">
                <img
                  loading="lazy"
                  src={infos.facebookIcon}
                  alt="facebook icon"
                />
                <img
                  loading="lazy"
                  src={infos.instagramIcon}
                  alt="instagram icon"
                />
                <img loading="lazy" src={infos.phoneIcon} alt="whatsApp icon" />
              </div>
            </div>
          </div>
        )}
      </footer>
      <div className="footer__message container">
        <p>{infos.description}</p>
      </div>
    </>
  );
}
