import styles from "./index.module.scss";
import Navbar from "../../components/navbar";

export default function Copyright() {
  return (
    <>
      <Navbar />
      <div className={styles.copyright}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            Copyright © 2024 - Tutti i diritti riservati.
          </h1>
          <div className={styles.info}>
            <p>
              Il presente sito web e tutti i suoi contenuti, compresi testi,
              immagini, grafica, loghi, icone, video, audio e altri materiali,
              sono di proprietà esclusiva di Elena Faraci e sono protetti dalle
              leggi sul copyright e dai trattati internazionali. È vietata
              qualsiasi riproduzione, distribuzione, modifica, trasmissione,
              pubblicazione o utilizzo dei contenuti di questo sito web senza
              l'espresso consenso scritto.
            </p>
            <p>
              Qualsiasi uso non autorizzato dei materiali presenti su questo
              sito costituirà una violazione del copyright e potrà comportare
              azioni legali. Tutti i marchi, nomi commerciali e altri segni
              distintivi presenti su questo sito sono di proprietà dei
              rispettivi titolari e sono protetti dalle leggi sul marchio
              registrato. L'uso non autorizzato di tali marchi è espressamente
              vietato e può costituire una violazione dei diritti di proprietà
              intellettuale. Gli utenti sono autorizzati a visualizzare e
              scaricare i materiali da questo sito solo per uso personale e non
              commerciale. L'uso dei materiali per qualsiasi altro scopo è
              espressamente vietato e può comportare la revoca dei diritti di
              utilizzo.
            </p>
            <p>
              Ci riserviamo il diritto di modificare o aggiornare i presenti
              termini e condizioni di copyright in qualsiasi momento senza
              preavviso. L'uso continuato di questo sito dopo eventuali
              modifiche costituirà accettazione delle stesse. Per qualsiasi
              domanda o richiesta riguardante i diritti d'autore o l'utilizzo
              dei materiali presenti su questo sito, si prega di contattarci
              all'indirizzo questamail@questoindirizzo.it . Grazie per
              rispettare i nostri diritti di proprietà intellettuale.
            </p>
          </div>
        </div>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Punti chiave dell'informativa sui dati personali e sui cookie
          </h1>
          <ul className={styles.keypoints}>
            <li className={styles.point}>
              <img
                className={styles.icon}
                src="https://img.icons8.com/ios/50/3a724f/doughnut-chart--v1.png"
                alt="icon1"
              />
              <h3 className={styles.point__title}>Dati Raccolti</h3>
              <p className={styles.point__info}>
                Raccogliamo informazioni su di te quando visiti il Sito,
                interagisci con noi o fai acquisti in negozio. Oltre alle
                informazioni da te dichiarate (ad es. creazione di un account,
                sottoscrizione di una carta fedeltà), le informazioni vengono
                raccolte, generate o dedotte automaticamente dai nostri sistemi
                (ad es. dati di matching/merging al fine di creare un profilo di
                marketing per te).
              </p>
            </li>
            <li className={styles.point}>
              <img
                className={styles.icon}
                src="https://img.icons8.com/ios/50/3a724f/cookie.png"
                alt="icon2"
              />
              <h3 className={styles.point__title}>Finalità</h3>
              <p className={styles.point__info}>
                Queste informazioni ci permettono di conoscervi meglio e ci
                permettono di utilizzare le vostre scelte per farvi offerte
                personalizzate sui nostri prodotti e su quelli dei nostri
                partner. L'uso dei cookie ci consente di migliorare le
                specifiche del sito e di visualizzare annunci pubblicitari sul
                sito e su altri siti. Vengono inoltre effettuati controlli per
                garantire la sicurezza del Sito e delle transazioni.
              </p>
            </li>
            <li className={styles.point}>
              <img
                className={styles.icon}
                src="https://img.icons8.com/ios/50/3a724f/collaborating-in-circle.png"
                alt="icon3"
              />
              <h3 className={styles.point__title}>Destinatari</h3>
              <p className={styles.point__info}>
                Queste informazioni vengono trasmesse ai nostri affiliati
                nell'ambito della gestione del nostro programma di
                fidelizzazione, nonché ai nostri fornitori di servizi, quando
                ciò è necessario per fornirvi il servizio richiesto. Alcune di
                queste informazioni (inclusi lo storico degli acquisti e il
                profilo) possono, a seconda delle scelte di condivisione, essere
                trasmesse ai nostri partner commerciali, che possono inviarvi
                offerte personalizzate
              </p>
            </li>
            <li className={styles.point}>
              <img
                className={styles.icon}
                src="https://img.icons8.com/ios/50/3a724f/database--v1.png"
                alt="icon4"
              />
              <h3 className={styles.point__title}>Trasferimenti</h3>
              <p className={styles.point__info}>
                I trasferimenti di dati al di fuori dell'Unione Europea possono
                avvenire a causa di fattori organizzativi o dell'ubicazione di
                alcuni dei nostri fornitori (società di consegna, società di
                hosting, fornitori di servizi di pagamento o di sicurezza).
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
