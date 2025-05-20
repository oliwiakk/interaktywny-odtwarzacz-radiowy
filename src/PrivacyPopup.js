import React, { useEffect, useState } from "react";
import "./App.css";

const PrivacyPopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("privacyAccepted");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("privacyAccepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="privacy-popup">
      <div className="privacy-popup-content">
        <h3>Polityka prywatności i cookies</h3>
        <p>
          Ta strona wykorzystuje pliki cookies oraz zbiera dane geolokalizacyjne
          w celu poprawnego działania aplikacji radiowej i statystyk.
          Korzystając z serwisu, wyrażasz zgodę na ich przetwarzanie zgodnie z{" "}
          <a
            href="/polityka-prywatnosci"
            target="_blank"
            rel="noopener noreferrer"
          >
            Polityką prywatności
          </a>{" "}
          i{" "}
          <a href="/polityka-cookie" target="_blank" rel="noopener noreferrer">
            Polityką cookies
          </a>
          .
        </p>
        <button onClick={handleAccept}>Akceptuję</button>
      </div>
    </div>
  );
};

export default PrivacyPopup;
