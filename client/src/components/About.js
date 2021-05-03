import '../App.css';
import "./About.css";

function About() {
  return (
    <>
        <h2>Csapatunk tagjai</h2>
        <ul>
        <li>Alexa Kornél junior</li>
        <li>Horváth István junior</li>
        <li>Török Gabriella junior</li>
        <li>Barkóczi Martin senior</li>
        <li>Tóth Noémi Evelin senior</li>
        </ul>
        <h2>A webalkalmazás célja</h2>
        <p className="tartalom">Felhasználók több kiadó által publikált számos könyv hatalmas választékából megtalálhasssa a számára legérdekesebbet és könyedén megrendelhesse azt akár nagy példányszámban is. Weboldalunk igyekszik minnél bővebb és mélyrehatóbb információt szolgáltatni az elérhető könyvekről és azok íróiról, hogy ezáltal is könnyebb legyen a választás. Ezen felül felhasználóknak lehetőségük lesz regisztrálni, szállítási adataik mentésével ezzel is gyorsíthatják jövőbeli rendeléseik folyamatát.</p>
    </>
  );
}

export default About;
