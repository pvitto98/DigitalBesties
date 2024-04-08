import { FunctionComponent, useEffect, useRef, useState, FormEvent } from "react";
import styles from "./ContattaciNew.module.css";
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContattaciNew: FunctionComponent = () => {
  const form = useRef<HTMLFormElement>(null);
  const [result, showResult] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const name = form.current.elements.namedItem('name') as HTMLInputElement;
    const email = form.current.elements.namedItem('email') as HTMLInputElement;
    const numero = form.current.elements.namedItem('numero') as HTMLInputElement;
    const messaggio = form.current.elements.namedItem('messaggio') as HTMLTextAreaElement;

    if (!name.value || !email.value || !numero.value || !messaggio.value) {
      alert('Ehilà! Compila tutti i campi!');
      return;
    }

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const userId = process.env.REACT_APP_USER_ID;

    if (!serviceId || !templateId || !userId) {
      throw new Error('Environment variables are not set');
    }

    emailjs.sendForm(serviceId, templateId, form.current, userId)
      .then(
        result => console.log(result.text),
        error => console.log(error.text) // Fix: Change result.text to error.text
      );
    form.current.reset(); // Fix: Reset the form directly
  }

  useEffect(() => {
    // Your existing code for scroll animation
  }, []);

  return (
    <div className={styles.contattaciNew}>
      <div className={styles.contattacicontent}>
        <div className={styles.contattacititle}>
          <div className={styles.title} >
            Contattaci
          </div>
        </div>
        <div className={styles.parentDiv}>

          <div className={styles.contattaciform} >
            <div className={styles.subtitle}>
              <div className={styles.perchNonCi}>
                Perché non ci mandi un messaggio?
              </div>
            </div>
            <form ref={form} className={styles.form} onSubmit={sendEmail}>
  <div className={styles.form_group}>
    <div className={styles.formContainer}>
      <label htmlFor="name" className={`resizable ${styles.resizable}`}>Nome</label>
      <input className={`resizable ${styles.resizable} ${styles.limitedWidth}`} id="name" name="name" placeholder="Inserisci il tuo nome" />
    </div>
    <div className={styles.formContainer}>
      <label htmlFor="email" className={`resizable ${styles.resizable}`}>Email</label>
      <input className={`resizable ${styles.resizable} ${styles.limitedWidth}`} id="email" name="email" placeholder="Inserisci la tua email" />
    </div>
    <div className={styles.formContainer}>
      <label htmlFor="numero" className={`resizable ${styles.resizable}`}>Numero di telefono</label>
      <input className={`resizable ${styles.resizable} ${styles.limitedWidth}`} type="tel" id="number" name="numero" placeholder="Inserisci il tuo numero di telefono" />
    </div>
    <div className={styles.formContainer}>
      <label htmlFor="messaggio" className={`resizable ${styles.resizable}`}>Messaggio</label>
      <textarea className={`resizable ${styles.resizable}`} id="messaggio" name="messaggio" placeholder="Inserisci un messaggio"
        onInput={e => {
          const target = e.target as HTMLTextAreaElement;
          const words = target.value.split(/\s+/).filter(word => word.length > 0);
          if (words.length > 200) {
            target.value = words.slice(0, 200).join(' ');
          }
        }}
      />
    </div>
  </div>
  <button className={`btn ${styles.btn}`} type="submit">
    Invia Messaggio!
  </button>
</form>
          </div>
          <div className={styles.social} >
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', gap: '20px' }}>

              <div className={styles.subtitle}>
                <div className={styles.perchNonCi}>
                  o mandaci direttamente una mail
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', height: 'auto', marginBottom: '20px' }}>
                <a href="mailto:digitalbestiesagency@gmail.com" className={styles.email}>
                  <b>{`digitalbestiesagency@gmail.com`}</b>
                </a>
              </div>
            </div>
            {/* <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }}>
              <div className={styles.subtitle}>
                <div className={styles.perchNonCi}>
                  o seguici su Instagram
                </div>
              </div>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} className="icon" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContattaciNew;
