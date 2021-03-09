# Bevezető
A webalkalmazás célja, hogy felhasználói több kiadó által publikált könyvek hatalmas választékából megtalálhasssa a számára legérdekesebbet és könyedén megrendelhesse azt akár nagy példányszámban is. Weboldalunk igyekszik minnél bővebb és mélyrehatóbb információt szolgáltatni az elérhető könyvekről és azok íróiról, hogy ezáltal is könnyebb legyen a választás. Ezen felül felhasználóknak lehetőségük lesz regisztrálni, szállítási adataik mentésére ezzel is gyorsítani jövőbeli reneléseki folyamatát.
# A rendszer célja
# Projekt terv

A projekt nem más, mint egy könyves webáruház létrehozása. Ennek elkészítésére összesen 14 hét áll rendelkezésre. A projekt elkészítéséhez NodeJS-t használunk, backend részen express-t, frontend részen pedig react-ot. Adatbázishoz pedig mysql-t használunk. A projekt elkészítésére rendelkezésre áll egy csapat, amely 3 főből áll, plusz még két projekt vezetőből. A csapat feladata a webáruház időben való elkészítése és annak egy megadott időpontban történő bemutatása. A csapatból mindenki felelősséggel tartozik azért, hogy a webáruház időben elkészüljön és hogy az általuk elválalt feladatok, melyek az oldal, a webáruház működését biztosítják jól, megfelelően működjenek. A projekt menedzserek le ellenőrzik a tagok által elkészített feladatokat, hogy azok tényleg ellátják-e a funkcióikat, ha nem, akkor annak a csapatagnak a figyelmét, hogy nem az elvárt módon működik az adott feladat. Ezen kívül még tanáccsal látják el a tagokat, valamint újabb feladatokat adnak ki.

Mérföldkővek:
- Követelmény specifikáció elkészítése
- Funkcionális specifikáció elkészítése
- UML ábrák elkészítése
- Rendszerterv elkészítése
- Felhasználók létrehozása
- Felhasználói adatok megjelenítése
- Felhasználó adatok szerkesztése
- Könyvek adatainak megjelenítése
- Könyv keresési lehetőség megadása (pl.: cím, ár, író, kategória … stb.)
- Rendelési lehetőség biztosítása (könyvek darab számának megadása, kosárba helyezés, rendelés leadása)
- Kosár tartalmának ki listázása
- Kosár tartalmának szerkesztése
- Főoldal tartalmának elkészítése (könyvek ki listázása, hírek, cikkek megjelenítése)
- Tesztelés

# Üzleti folyamatok modellje

A projekt egy könyves webáruház, ami a megrendelő igényeinek megfelelően fog el készülni. A webáruház létrehozásánál a NodeJS-t használjuk. Backend részen az express-t, frontend-en pedig a react-ot. Adatbázisnál a mysql-t használjuk. A web áruháznak rendelkeznie kell egy regisztrációs és egy bejelentkezési felülettettel. Itt a  felhasználók adataik megadásával tudnak regisztrálni, ezt követően kapnak egy visszaigazoló email-t a regisztrációról. Mindezek után tudnak csak bejelentkezni. A felhasználók két csoportba tartozhatnak, az egyik az adminisztrátorok csoportja. Az adminisztrátorok kezelik a felhasználókat és könyveket. Újabb felhasználókat vesznek fel vagy esetleg törölnek felhasználókat. Könyveknél pedig újakat vesznek fel, meglévő könyveknél az adatokat módosítják, illetve törölnek könyveket. Mindezeken kívül még az ők feladatuk az, hogy a főoldalon a könyvek ki legyenek listázva, illetve az, hogy feltüntessék a legfrissebb akciókat és híreket. A felhasználók másik csoportja, az egyszerű felhasználók, azaz vásárlók. Ők tudnak böngészni a könyvek között például cím, ár, kategória … stb alapján. Illetve rendeléseket tudjanak leadni, a kosár tartalmát tudják módosítani és a saját adataikat megtudják nézni, illetve azokat módosítani. Mindezek alapján a cél egy olyan webáruház létrehozása, amelyet bárhol, bármikor bárki eltud érni. Ehhez tulajdonképpen internet kapcsolat szükséges és mivel manapság egyre több eszközön lehet nettezni, ezért fontos az is, hogy minden eszközön megfelelően jelenjen meg és jól működjön.

# Követelmények

# Funkcionális terv

## Rendszerszereplők

A rendszerünkben három rendszerszerszereplő csoportot különbözetünk meg, Az egyik a regisztrációval rendelkező vásárlók csoportja. A másik a regisztrációval nem rendelkező vendég felhasználók csoportja. A harmadik pedig az adminisztrátorok csoportja. A regisztrációval rendelkező vásárlók igénybe vehetik a webshop által nyújtott összes szolgáltatást, míg a regisztrációval nem rendelkező vendégek csak a webshop korlátozott részéhez férnek hozzá. Az adminisztrátorok szintén használhatják azokat a szolgáltatásokat amit a regisztrációval rendelkező vásárlók, viszont az adminisztrátorok több jogosultsággal rendelkeznek, mint az előbb említett felhasználók csoportja. Az adminisztrátorok hozzá férhetnek a felhasználók listájához, lehetőségük van rendszerüzenetet küldeni a felhasználók részére hiba esetén.

## Rendszerhasználati esetek

### A rendszer felhasználói a következők:

- Vendég ( nem bejelentkezett felhasználó )
- Vásárló
- Adminisztrátor

### A rendszernek a következő funkciókat kell ellátnia:

- az adminisztrátorok tudjanak könyveket felvenni,törölni illetve módosítani
- az adminisztrátorok tudjanak felhasználó adatokat módosítani
- az adminisztrátorok tudjanak felhasználókat és könyveket kilistázni
- a vásárálók tudjanak a navigációs menüvel az oldalon belül navigálni
- a vásárálók tudjanak a Katalóguson belül keresni
- a vásárálók tudjanak a Katalóguson belül könyveket várásolni
- a vásárálók tudjanak személyes adatokat változtatni ( e-mail, telefonszám )
- a vendégek tudjanak a navigációs menüvel az oldalon belül navigálni
- a vendégek tudjanak a Katalóguson belül keresni

### Előfeltételek:

- adminisztrátorok részére a rendszer használatához jogosultság, azaz kelszó szükséges
- a vásárlóknak a vásárláshoz regisztráció szükséges

### Ábra:

![Image of usecase](https://raw.githubusercontent.com/noemitth10/Ekecluded_2021-2/main/Dokumentumok/%C3%81br%C3%A1k/USE_CASE_UML.png)

## Menühierarchiák
A menürendszer, egy a weboldal fejléce alatt található vizszintes, lenyíló füleket is tartalmazó navigációs sávban építettünk fel.

A rendszerbe való bejelentkezés előtt Kezdőlap, Tájékoztató, Katalógus, valamint Belépés menüpontok találhatók a navigációs sávban. Ezek közül egyedül a katalógus tartalmaz lenyíló menüt, lehetővé téve az egyszerű keresés valamint a részletes keresés műveletek kezdeményezését a könyves bolt katalógusban a webshop látogatói számára.

**Bármilyen felhasználóként** - regisztrációval nem rendelkező vendég felhasználó, regisztrációval rendelkezó vásárló vagy adminisztrátorként - belépve a rendszerbe a navigációs sáv jobb oldalán helyezkedik el a Belépve: felhasználónév ( vendég felhasználó esetén Belépés opció ), kiemelve ezzel, hogy adott pillanatban ki használja a rendszert az adott böngészőböl. A menüpont egy lenyíló menüt tartalmaz, mely a Jelszócsere, Személyes adatok és Kilépés menüpontokból áll. Ez egységes minden felhasználó esetén, a személyes adatok mindegyike megtekinthető, azonban csak a telefonszám és e-mail cím módosítható.

**Váráslóként** belépve a rendszerbe a Kezdőlap, Katalógus, Kosár menüpontok jelennek meg a sáv baloldalán. A katalógus megegyezik a fentiekben leírt lenyíló menüvel, az olvasóknak csak keresési lehetőséget biztosít a rendszer a katalógusban. A kosár menüpont a kosárba helyezett könyveket listázza ki a vásárló számára.

**Vendég felhasználóként** belépve a rendszerbe a Kezdőlap, Katalógus menüpontok jelennek meg a sáv baloldalán. A katalógus megegyezik a vásárlóként belépett felhasználók által használható katalógussal.

**Adminisztrátorként** belépve a rendszerbe a Kezdőlap, Vásárlók, Katalógus menüpontok találhatóka  navigációs sávban, melyek közül a Katalógus lenyíló menürendszer. A főmenü felosztása a különboző adminisztratív funkciókhoz kapcsolódik, pl.: várásló nyilvántartás, könyv katalógus műveletek, vásárlási adminisztráció.
A Vásárlók menüpont tartalmazza a regisztrált vásárlók listáját, ahol az adminisztrátorok bizonyos információkat kérhetnek le a felhasználóról példáúl a regisztráció dátumát vagy az utolsó belépés időpontját.
A Katalógus lenyiló menü tartalmazza a katalógusban való kereséshez és a könyvek katalogizálásához szükséges műveletek menüpontjait, melyek név szerint: Egyzerű keresés, Részletes keresés, Új könyv felvétele, Könyv módosítása, Könyv törlése. A menü két főbb tevékenység köré szerveződik, a keresés, könyvek katalógusba való felvétele, módosítása vagy törlése.
	
# Fizikai környezet

Maga a projekt egy webáruház létrehozása, ahol könyveket árulnak. Mivel webáruházról van szó így online fog megjelenni. Ezzel pedig az emberek bárhol, bármikor eltudják érni. Ehhez pedig internet kapcsolatra van szükségük. A megvalósítás során a javasscript programozási nyelv lesz használva, így a fejlesztői környezet a NodeJS lesz. A projekt elkészítésénél, mind a backend, mind pedig a frontend-et elkészítjük. A backend-nél az express-t fogjuk használni, míg a frontedn-nél pedig a react-ot. Mivel manapság az emberek már nem csak a pc-ken, hanem más egyéb eszközön is interneteznek, mint például mobiltelefon vagy tablet. Így kifejezetten fontos az, hogy a weboldal bármilyen eszközön megfelelően jelenjen meg. Ezt a készítés során fegyelembe vesszük és ennek megfelelően készítjük el a webáruházat. Adatbázis kezelésnél a mysql-t fogjuk használni.

# Adatbázis terv

# Tesztterv
A rendszerterv szerint implementált szoftver tesztelésének célja, hogy ellenőrizze az üzleti folyamaok modellje című pontban meghatározott helyes, specifikáció szerinti lefutását, valamint hogy a kliens webes felület felhasználóbarát módon jelenik meg, és használható különböző hardver és szoftverkörnyezetben.

A tesztelés során használt kiszolgáló hardver koonfigurációja a telepítés során használt hardverrel kompatibilis, teljesítményben (processzor, operatív memória, háttértár) nem tér el jelentősen. A telepítéshez természtesen az általunk alánlott konfiguráció kerül beszerzésre a felhasználó bolt által.

A tesztelés során a használt hardverek a napjainkban elterjedt hardverkonfigurációjú PC-k illetve laptopok, melyeken a leggyakrabban használt böngészőkön (Google Chrome, Mozzila Firefox, Microsoft Edge) teszteljük a rendszert az alábbiakban részletezettek szerint. 

**A teszthez használt hardverkonfiguráció:**

- Intel i7 7700hq
- 8GB RAM
- 1000GB HDD
- a képrenyők felbontása: 1920x1080

A tesztelés során az üzleti folyamatokhoz tartozó különböző forgatókönyvek eredményét vizsgáljuk. Amennyiben az elvártnak megfelelő eredményt kapjuk, a teszteset sikeresnek tekinthető, ellentkező esetben a hibát rögzítjük a tesztjegyzőkönyvben. Ezt követően a feljegyzett hibákat javítjuk a szoftverben, és újnóli tesztelésnek vetjük alá a rendszert.

A rendszer alábbiakban leírt tesztelésnek előfeltétele, hogy az adatbázisban phpMyAdmin segítségével felvegyünk egy első adminisztrátori jogosultsággal rendelkező felhasználót a felhasználók táblába. Felhasználónév: admin, a további adatok a fejlesztő-tesztelő személyes adatai lesznek. Ezzel belépve tudjuk tesztelni az adminisztrátori jogosultsággal rendelkező felhasználók kivételes funkciójait.