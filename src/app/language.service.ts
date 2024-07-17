import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  open: boolean = false;
  langMode = "en";
  isGerman = false;

  private translations: { [key: string]: { [lang: string]: string } } = {
    'i': {
      'en': `I am`,
      'de': `Ich bin`
    },
    'talk': {
      'en': `Let's talk!`,
      'de': `Lass uns reden!`
    },
    'Header_me': {
      'en': 'About me',
      'de': 'Über mich'
    },
    'Header_contact': {
      'en': 'Contact',
      'de': 'Kontakt'
    },
    'me-txt': {
      'en': 'Hi, I am a Front-end Developer based in Ingolstadt, Germany. My journey into programming began with introductory courses at university. As I progressed, my passion for front-end development grew, particularly through hands-on projects during my training at the Developer Academy. Throughout my career, I have honed my skills with various web development technologies and have carefully curated a portfolio of my work. Please take a moment to check it out!',
      'de': 'Hallo, ich bin ein Frontend-Entwickler aus Ingolstadt, Deutschland. Mein Weg in die Programmierung begann mit Einführungskursen an der Universität. Im Laufe der Zeit entdeckte ich meine Leidenschaft für Frontend-Entwicklung, insbesondere durch praktische Projekte während meiner Ausbildung an der Developer Academy. Im Verlauf meiner Karriere habe ich meine Fähigkeiten mit verschiedenen Webentwicklungstechnologien verfeinert und ein sorgfältig zusammengestelltes Portfolio meiner Arbeiten erstellt. Bitte werfen Sie einen Blick darauf!'
    },
    'point1': {
      'en': 'One of my favorite aspects of working as a front-end developer is the freedom to bring my own ideas to life, limited only by my imagination. I can turn these ideas into reality through code, receiving instant visual feedback on my work and seeing the value I have created.',
      'de': 'Eines der Dinge, die ich an der Arbeit als Frontend-Entwickler am meisten liebe, ist die Freiheit, meine eigenen Ideen zu verwirklichen, begrenzt nur durch meine Vorstellungskraft. Ich kann diese Ideen durch Code in die Realität umsetzen und erhalte sofort visuelles Feedback zu meiner Arbeit und dem Wert, den ich geschaffen habe.'
    },
    'point2': {
      'en': "For me, time flies when I'm coding, and every problem I solve feels like fitting a puzzle piece into its perfect spot. The satisfaction is greatest when the problem has been particularly challenging to overcome.",
      'de': 'Für mich vergeht die Zeit wie im Flug, wenn ich code, und jedes gelöste Problem fühlt sich an, als würde ein Puzzleteil seinen richtigen Platz finden. Die Befriedigung ist am größten, wenn das Problem besonders knifflig war.'
    },
    'skill-txt': {
      'en': 'I have grown my frontend developments skills that have allowed me to create different real projects.',
      'de': 'Ich habe meine Fähigkeiten in der Frontend-Entwicklung ausgebaut, wodurch ich verschiedene reale Projekte umsetzen konnte.'
    },
    'kont': {
      'en': `Get in touch`,
      'de': `Kontaktieren Sie mich`
    },

    // Portfolio

    'port-txt': {
      'en': 'Explore a selection of my work here - Interact with projects to see my skills in action.',
      'de': 'Entdecken Sie ein Teil meiner Arbeit hier - Interagieren Sie mit den Projekten um meine Fähigkeiten in Aktion zu sehen.'
    },
    'join': {
      'en': 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      'de': 'Ein Taskmanager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, und weisen Sie Benutzer und Kategorien zu.'
    },
    'elp': {
      'en': 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      'de': 'Spring-, Lauf- und Wurfspiel basierend auf einem objektorientierten Ansatz. Helfen Sie Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.'
    },
    'simple': {
      'en': 'A very Simple Customer Relationship Management system working with CRUD functionality.',
      'de': 'Ein sehr einfaches Kundenbeziehungsmanagement-System, das mit CRUD-Funktionalität arbeitet.',
    },
    'pokedex': {
      'en': 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      'de': 'Basierend auf der PokéAPI ist dies eine einfache Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.'
    },

    // Contact


    'problem': {
      'en': 'Got a problem to solve?',
      'de': 'Haben Sie ein Problem das gelöst werden muss?'
    },
    'kontaktieren': {
      'en': 'Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.',
      'de': 'Kontaktieren Sie mich über dieses Formular, gerne komme ich auf Sie zu, um über eine mögliche gemeinsame Arbeit zu reden.'
    },
    'kontakt2': {
      'en': 'Need a Frontend developer? <strong>Contact me!</strong>',
      'de': 'Brauche Sie einen Front-End Developer? <strong style="background-color: transparent;">Kontaktieren Sie mich!</strong>'
    },
    'name': {
      'en': `Your name`,
      'de': `Ihr Name`
    },
    'nameWarn': {
      'en': `Please enter a valid name`,
      'de': `Bitte geben Sie einen gültigen Namen ein`
    },
    'mail': {
      'en': `Your email`,
      'de': `Ihre E-mail`
    },
    'mailWarn': {
      'en': `Please enter a valid email`,
      'de': `Bitte geben Sie eine gültige Email ein`
    },
    'text': {
      'en': `Your message`,
      'de': `Ihre Nachricht`
    },
    'textWarn': {
      'en': `Please enter a valid message`,
      'de': `Bitte geben Sie eine gültige Nachricht ein`
    },
    'privacy': {
      'en': `I've read the <a href="privacy" style="color: rgba(255, 71, 71, 1); text-decoration: none; background-color: transparent;"
          onmouseover="this.style.textDecoration='underline';" 
          onmouseout="this.style.textDecoration='none';">privacy policy</a> and agree to the processing of my data as outlined.`,
      'de': `Ich habe die <a href="privacy" style="color: rgba(255, 71, 71, 1); text-decoration: none; background-color: transparent;"
          onmouseover="this.style.textDecoration='underline';" 
          onmouseout="this.style.textDecoration='none';">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.`
    },
    'privacyWarn': {
      'en': `Please agree to the privacy policy`,
      'de': `Bitte stimmen Sie der Datenschutzerklärung zu`
    },
    'message': {
      'en': `Send message :)`,
      'de': `Nachricht senden :)`
    },
    // Footer
    'imprint': {
      'en': `Imprint`,
      'de': `Impressum`
    },

    // Imprint
    'imprintContent': {
      'en': `
      <div>
        <h1 style="color: rgba(255, 71, 71, 1)">Imprint</h1>

        <h2 style="color: rgba(255, 71, 71, 1)">Information according to § 5 TMG</h2>
        <p>
          <strong>Ufuk Özsahin</strong><br>
          Jurastraße 15<br>
          85129 Oberdolling<br>
          Germany
        </p>

        <h2 style="color: rgba(255, 71, 71, 1)">Contact:</h2>
        <p>
          Phone: <a style="color: rgba(250, 121, 2, 1); text-decoration: none; background-color: transparent;" onmouseover="this.style.textDecoration='underline';" 
          onmouseout="this.style.textDecoration='none';" href="tel:+4915236253545">+4915236253545</a><br>
          Email: <a style="color: rgba(250, 121, 2, 1); text-decoration: none; background-color: transparent;" onmouseover="this.style.textDecoration='underline';" 
          onmouseout="this.style.textDecoration='none';" href="mailto:oezsahin95@icloud.com">oezsahin95@icloud.com</a><br>
          Web: <a style="color: rgba(250, 121, 2, 1); text-decoration: none; background-color: transparent;" onmouseover="this.style.textDecoration='underline';" 
          onmouseout="this.style.textDecoration='none';" href="http://ufuk-oezsahin.de">ufuk-oezsahin.de</a>
        </p>

        <h2 style="color: rgba(255, 71, 71, 1)">Responsible for content according to § 55 Abs. 2 RStV:</h2>
        <p>
          <strong>Ufuk Özsahin</strong><br>
          Jurastraße 15<br>
          85129 Oberdolling<br>
          Germany
        </p>

        <h2 style="color: rgba(255, 71, 71, 1)">Disclaimer:</h2>

        <h3 style="color: rgba(255, 71, 71, 1)">Liability for contents</h3>
        <p>
          As a service provider, we are responsible for our own contents on these pages according to § 7 Abs.1 TMG according to the general laws. According to §§ 8 to 10 TMG, we as service providers are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information according to the general laws remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific infringement. If we become aware of such infringements, we will remove these contents immediately.
        </p>

        <h3 style="color: rgba(255, 71, 71, 1)">Liability for links</h3>
        <p>
          Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, a permanent content control of the linked pages is not reasonable without concrete evidence of a violation of the law. If we become aware of legal violations, we will remove such links immediately.
        </p>

        <h3 style="color: rgba(255, 71, 71, 1)">Copyright</h3>
        <p>
          The contents and works created by the site operators on these pages are subject to German copyright law. The duplication, processing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the contents on this site were not created by the operator, the copyrights of third parties are respected. In particular, third-party contents are marked as such. Should you nevertheless become aware of a copyright infringement, we ask for a corresponding note. If we become aware of legal violations, we will remove such contents immediately.
        </p>

        <h3 style="color: rgba(255, 71, 71, 1)">Dispute Resolution</h3>
        <p>
          The European Commission provides a platform for online dispute resolution (ODR): <a style="color: rgba(250, 121, 2, 1); text-decoration: none; background-color: transparent;" onmouseover="this.style.textDecoration='underline';" 
          onmouseout="this.style.textDecoration='none';" href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</a>. You can find our email address in the imprint above.
        </p>
        <p>
          We are not willing or obliged to participate in dispute resolution procedures before a consumer arbitration board.
        </p>
      </div>
    `,
      'de': `
      <div>
        <h1 style="color: rgba(255, 71, 71, 1)">Impressum</h1>

        <h2 style="color: rgba(255, 71, 71, 1)">Angaben gemäß § 5 TMG</h2>
        <p>
          <strong>Ufuk Özsahin</strong><br>
          Jurastraße 15<br>
          85129 Oberdolling<br>
          Deutschland
        </p>

        <h2 style="color: rgba(255, 71, 71, 1)">Kontakt:</h2>
        <p>
          Telefon: <a style="color: rgba(250, 121, 2, 1); text-decoration: none; background-color: transparent;" onmouseover="this.style.textDecoration='underline';" 
          onmouseout="this.style.textDecoration='none';" href="tel:+4915236253545">+4915236253545</a><br>
          E-Mail: <a style="color: rgba(250, 121, 2, 1); text-decoration: none; background-color: transparent;" onmouseover="this.style.textDecoration='underline';" 
          onmouseout="this.style.textDecoration='none';" href="mailto:oezsahin95@icloud.com">oezsahin95@icloud.com</a><br>
          Web: <a style="color: rgba(250, 121, 2, 1); text-decoration: none; background-color: transparent;" onmouseover="this.style.textDecoration='underline';" 
          onmouseout="this.style.textDecoration='none';" href="http://ufuk-oezsahin.de">ufuk-oezsahin.de</a>
        </p>

        <h2 style="color: rgba(255, 71, 71, 1)">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
        <p>
          <strong>Ufuk Özsahin</strong><br>
          Jurastraße 15<br>
          85129 Oberdolling<br>
          Deutschland
        </p>

        <h2 style="color: rgba(255, 71, 71, 1)">Haftungsausschluss (Disclaimer):</h2>

        <h3 style="color: rgba(255, 71, 71, 1)">Haftung für Inhalte</h3>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>

        <h3 style="color: rgba(255, 71, 71, 1)">Haftung für Links</h3>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>

        <h3 style="color: rgba(255, 71, 71, 1)">Urheberrecht</h3>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </p>

        <h3 style="color: rgba(255, 71, 71, 1)">Streitschlichtung</h3>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a style="color: rgba(250, 121, 2, 1); text-decoration: none; background-color: transparent;" onmouseover="this.style.textDecoration='underline';" 
          onmouseout="this.style.textDecoration='none';" href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</a>. Unsere E-Mail-Adresse findest du oben im Impressum.
        </p>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>`
    },

    // privacy policy

    'privacyPolicy': {
      'en': `
        <div>
          <h1 style="color: rgba(255, 71, 71, 1)">Privacy Policy</h1>
  
          <h2 style="color: rgba(255, 71, 71, 1)">1. Data protection at a glance</h2>
  
          <h3 style="color: rgba(255, 71, 71, 1)">General information</h3>
          <p>
            The following information provides a simple overview of what happens to your personal data when you visit our
            website. Personal data is any data with which you could be personally identified. Detailed information on the
            subject of data protection can be found in our privacy policy listed below this text.
          </p>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Data collection on our website</h3>
          <p>
            <strong>Who is responsible for data collection on this website?</strong><br>
            The data processing on this website is carried out by the website operator. You can find the operator's contact details
            in the website's imprint.
          </p>
          <p>
            <strong>How do we collect your data?</strong><br>
            Some data is collected when you provide it to us. This could, for example, be data you enter on a contact form.
          </p>
          <p>
            Other data is collected automatically by our IT systems when you visit the website. This data is primarily technical
            data (e.g., the browser and operating system you are using or when you accessed the page). This data is collected
            automatically as soon as you enter our website.
          </p>
  
          <h3 style="color: rgba(255, 71, 71, 1)">What do we use your data for?</h3>
          <p>
            Part of the data is collected to ensure the proper functioning of the website. Other data can be used to analyze how
            visitors use the site.
          </p>
  
          <h3 style="color: rgba(255, 71, 71, 1)">What rights do you have regarding your data?</h3>
          <p>
            You always have the right to request information about your stored data, its origin, its recipients, and the purpose
            of its collection at no charge. You also have the right to request that it be corrected, blocked, or deleted. You can
            contact us at any time using the address given in the imprint if you have further questions about the issue of
            privacy and data protection. You may also, of course, file a complaint with the competent regulatory authorities.
          </p>
  
          <h2 style="color: rgba(255, 71, 71, 1)">2. General information and mandatory information</h2>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Data protection</h3>
          <p>
            The operators of this website take the protection of your personal data very seriously. We treat your personal data
            as confidential and in accordance with the statutory data protection regulations and this privacy policy.
          </p>
          <p>
            If you use this website, various pieces of personal data will be collected. Personal information is any data with
            which you could be personally identified. This privacy policy explains what information we collect and what we use it
            for. It also explains how and for what purpose this happens.
          </p>
          <p>
            Please note that data transmitted via the internet (e.g., via email communication) may be subject to security
            breaches. Complete protection of your data from third-party access is not possible.
          </p>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Notice concerning the party responsible for this website</h3>
          <p>
            The party responsible for processing data on this website is:
          </p>
          <p>
            <strong>Ufuk Özsahin</strong><br>
            Jurastraße 15<br>
            85129 Oberdolling<br>
            Germany<br>
            Phone: <a style="color: rgba(250, 121, 2, 1); text-decoration: none; background-color: transparent;" onmouseover="this.style.textDecoration='underline';" 
          onmouseout="this.style.textDecoration='none';" href="tel:+4915236253545">+4915236253545</a><br>
            Email: <a style="color: rgba(250, 121, 2, 1); text-decoration: none; background-color: transparent;" onmouseover="this.style.textDecoration='underline';" 
          onmouseout="this.style.textDecoration='none';" href="mailto:oezsahin95@icloud.com">oezsahin95@icloud.com</a>
          </p>
          <p>
            The responsible party is the natural or legal person who alone or jointly with others decides on the purposes and
            means of processing personal data (names, email addresses, etc.).
          </p>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Revocation of your consent to the processing of your data</h3>
          <p>
            Many data processing operations are only possible with your express consent. You may revoke your consent at any time
            with future effect. An informal email making this request is sufficient. The data processed before we receive your
            request may still be legally processed.
          </p>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Right to data portability</h3>
          <p>
            You have the right to have data which we process based on your consent or in fulfillment of a contract automatically
            delivered to yourself or to a third party in a standard, machine-readable format. If you require the direct transfer
            of data to another responsible party, this will only be done to the extent technically feasible.
          </p>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Information, blocking, deletion</h3>
          <p>
            As permitted by law, you have the right to be provided at any time with information free of charge about any of your
            personal data that is stored as well as its origin, the recipient and the purpose for which it has been processed.
            You also have the right to have this data corrected, blocked or deleted. You can contact us at any time using the
            address given in our legal notice if you have further questions on the topic of personal data.
          </p>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Opposition to promotional emails</h3>
          <p>
            We hereby expressly prohibit the use of contact data published in the context of website legal notice requirements
            with regard to sending promotional and informational materials not expressly requested. The website operator reserves
            the right to take specific legal action if unsolicited advertising material, such as email spam, is received.
          </p>
  
          <h2 style="color: rgba(255, 71, 71, 1)">3. Data collection on our website</h2>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Cookies</h3>
          <p>
            Some of our web pages use cookies. Cookies do not harm your computer and do not contain any viruses. Cookies help
            make our website more user-friendly, efficient, and secure. Cookies are small text files that are stored on your
            computer and saved by your browser.
          </p>
          <p>
            Most of the cookies we use are so-called "session cookies." They are automatically deleted after your visit. Other
            cookies remain in your device's memory until you delete them. These cookies make it possible to recognize your browser
            when you next visit the site.
          </p>
          <p>
            You can configure your browser to inform you about the use of cookies so that you can decide on a case-by-case basis
            whether to accept or reject a cookie. Alternatively, your browser can be configured to automatically accept cookies
            under certain conditions or to always reject them, or to automatically delete cookies when closing your browser.
            Disabling cookies may limit the functionality of this website.
          </p>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Server log files</h3>
          <p>
            The website provider automatically collects and stores information that your browser automatically transmits to us in
            "server log files". These are:
          </p>
          <ul>
            <li>Browser type and browser version</li>
            <li>Operating system used</li>
            <li>Referrer URL</li>
            <li>Hostname of the accessing computer</li>
            <li>Time of the server request</li>
            <li>IP address</li>
          </ul>
          <p>
            This data will not be combined with data from other sources.
          </p>
          <p>
            The basis for data processing is Art. 6 (1) (b) DSGVO, which allows the processing of data to fulfill a contract or
            for measures preliminary to a contract.
          </p>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Contact form</h3>
          <p>
            Should you send us questions via the contact form, we will collect the data entered on the form, including the
            contact details you provide, to answer your question and any follow-up questions. We do not share this information
            without your permission.
          </p>
          <p>
            We will, therefore, process any data you enter onto the contact form only with your consent per Art. 6 (1) (a) DSGVO.
            You may revoke your consent at any time. An informal email making this request is sufficient. The data processed
            before we receive your request may still be legally processed.
          </p>
          <p>
            We will retain the data you provide on the contact form until you request its deletion, revoke your consent for its
            storage, or the purpose for its storage no longer pertains (e.g., after fulfilling your request). Any mandatory
            statutory provisions, especially those regarding mandatory data retention periods, remain unaffected by this
            provision.
          </p>
  
          <h2 style="color: rgba(255, 71, 71, 1)">4. Plugins and tools</h2>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Google Web Fonts</h3>
          <p>
            For uniform representation of fonts, this page uses web fonts provided by Google. When you open a page, your browser
            loads the required web fonts into your browser cache to display texts and fonts correctly.
          </p>
          <p>
            For this purpose, your browser has to establish a direct connection to Google's servers. Google thus becomes aware
            that our web page was accessed via your IP address. The use of Google Web fonts is done in the interest of a uniform
            and attractive presentation of our website. This constitutes a justified interest pursuant to Art. 6 (1) (f) DSGVO.
          </p>
          <p>
            If your browser does not support web fonts, a standard font is used by your computer.
          </p>
          <p>
            Further information about handling user data, can be found at
            <a style="color: rgba(250, 121, 2, 1); text-decoration: none; background-color: transparent;" onmouseover="this.style.textDecoration='underline';" 
          onmouseout="this.style.textDecoration='none';" href="https://developers.google.com/fonts/faq">https://developers.google.com/fonts/faq</a> and in Google's
            privacy policy at <a style="color: rgba(250, 121, 2, 1); text-decoration: none; background-color: transparent;" onmouseover="this.style.textDecoration='underline';" 
          onmouseout="this.style.textDecoration='none';" href="https://www.google.com/policies/privacy/">https://www.google.com/policies/privacy/</a>.
          </p>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Google Maps</h3>
          <p>
            This site uses the Google Maps map service via an API. It is operated by Google Inc., 1600 Amphitheatre Parkway,
            Mountain View, CA 94043, USA.
          </p>
          <p>
            To use Google Maps, it is necessary to save your IP address. This information is generally transmitted to a Google
            server in the USA and stored there. The provider of this site has no influence on this data transfer.
          </p>
          <p>
            The use of Google Maps is in the interest of making our website appealing and to facilitate the location of places
            specified by us on the website. This constitutes a justified interest pursuant to Art. 6 (1) (f) DSGVO.
          </p>
          <p>
            More information about handling user data can be found in the data protection declaration of Google at
            <a style="color: rgba(250, 121, 2, 1); text-decoration: none; background-color: transparent;" onmouseover="this.style.textDecoration='underline';" 
          onmouseout="this.style.textDecoration='none';" href="https://www.google.de/intl/de/policies/privacy/">https://www.google.de/intl/de/policies/privacy/</a>.
          </p>
        </div>
      `,
      'de': `
        <div>
          <h1 style="color: rgba(255, 71, 71, 1)">Datenschutzerklärung</h1>
  
          <h2 style="color: rgba(255, 71, 71, 1)">1. Datenschutz auf einen Blick</h2>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
            wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
            werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
            aufgeführten Datenschutzerklärung.
          </p>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Datenerfassung auf unserer Website</h3>
          <p>
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem
            Impressum dieser Website entnehmen.
          </p>
          <p>
            <strong>Wie erfassen wir Ihre Daten?</strong><br>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten
            handeln, die Sie in ein Kontaktformular eingeben.
          </p>
          <p>
            Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
            technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser
            Daten erfolgt automatisch, sobald Sie unsere Website betreten.
          </p>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Wofür nutzen wir Ihre Daten?</h3>
          <p>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten
            können zur Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
          <p>
            Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten
            personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten
            zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im
            Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
            Aufsichtsbehörde zu.
          </p>
  
          <h2 style="color: rgba(255, 71, 71, 1)">2. Allgemeine Hinweise und Pflichtinformationen</h2>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
            personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerklärung.
          </p>
          <p>
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind
            Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert,
            welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
          </p>
          <p>
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
            Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
            möglich.
          </p>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p>
            <strong>Ufuk Özsahin</strong><br>
            Jurastraße 15<br>
            85129 Oberdolling<br>
            Deutschland<br>
            Telefon: <a style="color: rgba(250, 121, 2, 1); text-decoration: none; background-color: transparent;" onmouseover="this.style.textDecoration='underline';" 
          onmouseout="this.style.textDecoration='none';" href="tel:+4915236253545">+4915236253545</a><br>
            E-Mail: <a style="color: rgba(250, 121, 2, 1); text-decoration: none; background-color: transparent;" onmouseover="this.style.textDecoration='underline';" 
          onmouseout="this.style.textDecoration='none';" href="mailto:oezsahin95@icloud.com">oezsahin95@icloud.com</a>
          </p>
          <p>
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
            die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.)
            entscheidet.
          </p>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p>
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits
            erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die
            Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Recht auf Datenübertragbarkeit</h3>
          <p>
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
            automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen
            zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt
            dies nur, soweit es technisch machbar ist.
          </p>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Auskunft, Sperrung, Löschung</h3>
          <p>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über
            Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und
            ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
            personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
          </p>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Widerspruch gegen Werbe-Mails</h3>
          <p>
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht
            ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der
            Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
            Werbeinformationen, etwa durch Spam-E-Mails, vor.
          </p>
  
          <h2 style="color: rgba(255, 71, 71, 1)">3. Datenerfassung auf unserer Website</h2>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Cookies</h3>
          <p>
            Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an
            und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu
            machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
          </p>
          <p>
            Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies“. Sie werden nach Ende Ihres
            Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese
            Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
          </p>
          <p>
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur
            im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das
            automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann
            die Funktionalität dieser Website eingeschränkt sein.
          </p>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Server-Log-Dateien</h3>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die
            Ihr Browser automatisch an uns übermittelt. Dies sind:
          </p>
          <ul>
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p>
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
          </p>
          <p>
            Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung
            eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
          </p>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive
            der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen
            bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer
            Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine
            formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
            Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
          </p>
          <p>
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern,
            Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach
            abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere
            Aufbewahrungsfristen – bleiben unberührt.
          </p>
  
          <h2 style="color: rgba(255, 71, 71, 1)">4. Plugins und Tools</h2>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Google Web Fonts</h3>
          <p>
            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google
            bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache,
            um Texte und Schriftarten korrekt anzuzeigen.
          </p>
          <p>
            Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch
            erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse unsere Website aufgerufen wurde. Die Nutzung von
            Google Web Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote.
            Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
          </p>
          <p>
            Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.
          </p>
          <p>
            Weitere Informationen zu Google Web Fonts finden Sie unter
            <a style="color: rgba(250, 121, 2, 1); text-decoration: none; background-color: transparent;" onmouseover="this.style.textDecoration='underline';" 
          onmouseout="this.style.textDecoration='none';" href="https://developers.google.com/fonts/faq">https://developers.google.com/fonts/faq</a> und in der
            Datenschutzerklärung von Google:
            <a style="color: rgba(250, 121, 2, 1); text-decoration: none; background-color: transparent;" onmouseover="this.style.textDecoration='underline';" 
          onmouseout="this.style.textDecoration='none';" href="https://www.google.com/policies/privacy/">https://www.google.com/policies/privacy/</a>.
          </p>
  
          <h3 style="color: rgba(255, 71, 71, 1)">Google Maps</h3>
          <p>
            Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Inc., 1600 Amphitheatre
            Parkway, Mountain View, CA 94043, USA.
          </p>
          <p>
            Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen
            werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser
            Seite hat keinen Einfluss auf diese Datenübertragung.
          </p>
          <p>
            Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an
            einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes
            Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
          </p>
          <p>
            Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google:
            <a style="color: rgba(250, 121, 2, 1); text-decoration: none; background-color: transparent;" onmouseover="this.style.textDecoration='underline';" 
          onmouseout="this.style.textDecoration='none';" href="https://www.google.de/intl/de/policies/privacy/">https://www.google.de/intl/de/policies/privacy/</a>.
          </p>
        </div>
      `
    }
  };

  translateElement(element: HTMLElement, lang: string): void {
    const translationKey = element.getAttribute('data-translate-key');
    if (translationKey && this.translations[translationKey]) {
      const translation = this.translations[translationKey][lang];
      if (element.hasAttribute('placeholder')) {
        element.setAttribute('placeholder', translation);
      } else {
        element.innerHTML = translation;
      }
    }
  }

  translatePage(lang: string): void {
    const elements = document.querySelectorAll('[data-translate-key]');
    elements.forEach(element => this.translateElement(element as HTMLElement, lang));
    this.langMode = lang;
    if(lang == "de"){
      this.isGerman = true;
    }
    else{
      this.isGerman = false;
    }
  }

  getLanguage(): string {
    return this.langMode;
  }

}