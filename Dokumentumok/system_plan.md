# Bevezető
A webalkalmazás célja, hogy felhasználók több kiadó által publikált számos könyv hatalmas választékából megtalálhasssa a számára legérdekesebbet és könnyedén megrendelhesse azt akár nagy példányszámban is. Weboldalunk igyekszik minél bővebb és mélyrehatóbb információt szolgáltatni az elérhető könyvekről és azok íróiról, hogy ezáltal is könnyebb legyen a választás. Ezen felül felhasználóknak lehetőségük lesz regisztrálni, szállítási adataik mentésével is gyorsíthatják jövőbeli reneléseik folyamatát.

# A rendszer célja

A cél egy Node.js segítségével létrehozott Express backendel és MySQL adatbázissal összekötött webáruház. Az oldal adminisztrátorokkal és felhasználókkal fog rendelkezni, az adminisztrátorok kezelik a könyveket és a felhasználókat is. Főoldalunkon friss hírek, akciók és kínálatunk jelenik meg. A felhasználók saját fiókot hozhatnak létre mely szükséges lesz a rendeléshez és könyvek/oldalunk véleményezéséhez. Sikeres regisztrációról visszaigazoló emailt kapnak. Nem regisztrált felhasználóknak is lehetősége lesz böngészni kínálatunk. Kosárba helyezés előtt darabszám megadására is lesz lehetősége a felhasználóknak. Kínálatunkat különböző tulajdonság alapján szűrhetik pl.: cím, író, ár, ISBN szám, kategória stb. A felhasználókról nevüket, lakcímüket, email címüket, jelszavukat opcionálisan képet tárolunk, ezeknek megváltoztatására is lesz lehetőségük. Vásárlásukat hűségpontokkal jutalmazzuk melyeket későbiekben felhasználhatnak, hogy olcsóbban rendelhessenek könyvet. Rendelésükről visszaigazoló emailt kapnak.

# Projekt terv

A projekt nem más, mint egy könyves webáruház létrehozása. Ennek elkészítésére összesen 14 hét áll rendelkezésre. A projekt elkészítéséhez Node.js-t használunk, backend részen Express-t, frontend részen pedig React-ot. Adatbázishoz pedig MySQL-t használunk. A projekt elkészítésére rendelkezésre áll egy csapat, amely 3 főből áll, plusz még két projekt vezetőből. A csapat feladata a webáruház időben való elkészítése és annak egy megadott időpontban történő bemutatása. A csapatból mindenki felelősséggel tartozik azért, hogy a webáruház időben elkészüljön és hogy az általuk elvállalt feladatok, melyek az oldal, a webáruház működését biztosítják jól, megfelelően működjenek. A projekt menedzserek leellenőrzik a tagok által elkészített feladatokat, hogy azok tényleg ellátják-e a funkcióikat, ha nem, akkor annak a csapattagnak a figyelmét felhívják arra, hogy nem az elvárt módon működik az adott feladat. Ezen kívül még tanáccsal látják el a tagokat, valamint újabb feladatokat adnak ki.

Mérföldkővek:
- Követelmény specifikáció elkészítése
- Funkcionális specifikáció elkészítése
- UML ábrák elkészítése
- Rendszerterv elkészítése
- Felhasználók létrehozása
- Felhasználói adatok megjelenítése
- Felhasználó adatok szerkesztése
- Könyvek adatainak megjelenítése
- Könyv keresési lehetőség megadása (Pl.: cím, ár, író, kategória stb.)
- Rendelési lehetőség biztosítása (könyvek darab számának megadása, kosárba helyezés, rendelés leadása)
- Kosár tartalmának ki listázása
- Kosár tartalmának szerkesztése
- Főoldal tartalmának elkészítése (könyvek ki listázása, hírek, cikkek megjelenítése)
- Tesztelés

# Üzleti folyamatok modellje

A projekt egy könyves webáruház, ami a megrendelő igényeinek megfelelően fog el készülni. A webáruház létrehozásánál a Node.js-t használjuk. Backend részen az Express-t, frontend-en pedig a React-ot. Adatbázisnál a MySQL-t használjuk. A webáruháznak rendelkeznie kell egy regisztrációs és egy bejelentkezési felülettettel. Itt a  felhasználók adataik megadásával tudnak regisztrálni, ezt követően kapnak egy visszaigazoló emailt a regisztrációról. Mindezek után tudnak csak bejelentkezni. A felhasználók két csoportba tartozhatnak, az egyik az adminisztrátorok csoportja. Az adminisztrátorok kezelik a felhasználókat és könyveket. Újabb felhasználókat vesznek fel vagy esetleg törölnek felhasználókat. Könyveknél pedig újakat vesznek fel, meglévő könyveknél az adatokat módosítják, illetve törölnek könyveket. Mindezeken kívül még az ő feladatuk az, hogy a főoldalon a könyvek ki legyenek listázva, illetve az, hogy feltüntessék a legfrissebb akciókat és híreket. A felhasználók másik csoportja, az egyszerű felhasználók, azaz vásárlók. Ők tudnak böngészni a könyvek között például cím, ár, kategória stb. alapján. Illetve rendeléseket tudnak leadni, a kosár tartalmát tudják módosítani és a saját adataikat megtudják nézni, illetve azokat módosítani. Mindezek alapján a cél egy olyan webáruház létrehozása, amelyet bárhol, bármikor bárki el tud érni. Ehhez tulajdonképpen internet kapcsolat szükséges és mivel manapság egyre több eszközön lehet nettezni, ezért fontos az is, hogy minden eszközön megfelelően jelenjen meg és jól működjön.

# Követelmények

## Funkcionális követelmények

A felhasználóknak a regisztráció gombra kattintva lehetőségük lesz saját adataik megadásával regisztrálni oldalunkra mely tevékenység sikerességéről visszaigazoló emailt kapnak. Bejelentkezés gombra kattintva eamil cím és jelszó megadását követően bejelentkezhetnek a weboldalra. Profiljukra kattintva megjelennek személyes adataik és profilképük melyeket meg tudnak változtatni az Adatok váltosztatása gombra kattintva. Jelszavukat csak emailen keresztül tudják megváltoztatni. A fő oldalon az árusított könyvek listája jelenik meg aktuális hírekkel és akciókkal egyetemben. Keresés funkcióban a könyveket listázhatja a felhasználó cím, ár, író, kategória és egyéb tulajdonságok alapján. A felhasználó a megvásárolni kívánt könyvet a kosarába tudja helyezni egy, illetve több példányszámban. Kosarának tartalmát is meg tudja nézni és lehetősége van kivenni abból bizonyos tételeket ha úgy dönt hogy mégsem szeretné azokat megrendelni. Rendelés véglegesítését követően visszaigazoló emailt kap rendeléséről és annak adatairól. A felhasználónak lehetősége van értékelni weboldalunk és az azon értékesített könyveket.

## Nem funkcionális követelmények

A weboldal több eszközön is elérhető lesz különböző böngészőkön keresztül. Könnyen átlátható, modern felépítésű felhasználói felülettel. Naprakész információkkal, a leírt funkcókat ellátva, valamint mind a felhasználók, mind az oldal adminisztrátorainak könnyű kezelhetőséget biztosítva.

# Funkcionális terv

## Rendszerszereplők

A rendszerünkben három rendszerszerszereplő csoportot különbözetünk meg, Az egyik a regisztrációval rendelkező vásárlók csoportja. A másik a regisztrációval nem rendelkező vendég felhasználók csoportja. A harmadik pedig az adminisztrátorok csoportja. A regisztrációval rendelkező vásárlók igénybe vehetik a webshop által nyújtott összes szolgáltatást, míg a regisztrációval nem rendelkező vendégek csak a webshop korlátozott részéhez férnek hozzá. Az adminisztrátorok szintén használhatják azokat a szolgáltatásokat amit a regisztrációval rendelkező vásárlók, viszont az adminisztrátorok több jogosultsággal rendelkeznek, mint az előbb említett felhasználók csoportja. Az adminisztrátorok hozzáférhetnek a felhasználók listájához, lehetőségük van rendszerüzenetet küldeni a felhasználók részére hiba esetén.

## Rendszerhasználati esetek

### A rendszer felhasználói a következők:

- Vendég ( nem bejelentkezett felhasználó )
- Vásárló
- Adminisztrátor

### A rendszernek a következő funkciókat kell ellátnia:

- az adminisztrátorok tudjanak könyveket felvenni, törölni illetve módosítani
- az adminisztrátorok tudjanak felhasználó adatokat módosítani
- az adminisztrátorok tudjanak felhasználókat és könyveket kilistázni
- a vásárálók tudjanak a navigációs menüvel az oldalon belül navigálni
- a vásárálók tudjanak a Katalóguson belül keresni
- a vásárálók tudjanak a Katalóguson belül könyveket várásolni
- a vásárálók tudjanak személyes adatokat változtatni ( e-mail, telefonszám )
- a vendégek tudjanak a navigációs menüvel az oldalon belül navigálni
- a vendégek tudjanak a Katalóguson belül keresni

### Előfeltételek:

- adminisztrátorok részére a rendszer használatához jogosultság, azaz jelszó szükséges
- a vásárlóknak a vásárláshoz regisztráció szükséges

### Ábra:

![Image of usecase](https://raw.githubusercontent.com/noemitth10/Ekecluded_2021-2/main/Dokumentumok/%C3%81br%C3%A1k/USE_CASE_UML.png)

## Menühierarchiák
A menürendszer, egy a weboldal fejléce alatt található vízszintes, lenyíló füleket is tartalmazó navigációs sávban építettünk fel.

A rendszerbe való bejelentkezés előtt Kezdőlap, Tájékoztató, Katalógus, valamint Belépés menüpontok találhatók a navigációs sávban. Ezek közül egyedül a katalógus tartalmaz lenyíló menüt, lehetővé téve az egyszerű keresés, valamint a részletes keresés műveletek kezdeményezését a könyves bolt katalógusban a webshop látogatói számára.

**Bármilyen felhasználóként** - regisztrációval nem rendelkező vendég felhasználó, regisztrációval rendelkezó vásárló vagy adminisztrátorként - belépve a rendszerbe a navigációs sáv jobb oldalán helyezkedik el a Belépve: felhasználónév ( vendég felhasználó esetén Belépés opció ), kiemelve ezzel, hogy adott pillanatban ki használja a rendszert az adott böngészőböl. A menüpont egy lenyíló menüt tartalmaz, mely a Jelszócsere, Személyes adatok és Kilépés menüpontokból áll. Ez egységes minden felhasználó esetén, a személyes adatok mindegyike megtekinthető, azonban csak a telefonszám és e-mail cím módosítható.

**Váráslóként** belépve a rendszerbe a Kezdőlap, Katalógus, Kosár menüpontok jelennek meg a sáv baloldalán. A katalógus megegyezik a fentiekben leírt lenyíló menüvel, az olvasóknak csak keresési lehetőséget biztosít a rendszer a katalógusban. A kosár menüpont a kosárba helyezett könyveket listázza ki a vásárló számára.

**Vendég felhasználóként** belépve a rendszerbe a Kezdőlap, Katalógus menüpontok jelennek meg a sáv baloldalán. A katalógus megegyezik a vásárlóként belépett felhasználók által használható katalógussal.

**Adminisztrátorként** belépve a rendszerbe a Kezdőlap, Vásárlók, Katalógus menüpontok találhatóka  navigációs sávban, melyek közül a Katalógus lenyíló menürendszer. A főmenü felosztása a különböző adminisztratív funkciókhoz kapcsolódik, pl.: vásárló nyilvántartás, könyv katalógus műveletek, vásárlási adminisztráció.
A Vásárlók menüpont tartalmazza a regisztrált vásárlók listáját, ahol az adminisztrátorok bizonyos információkat kérhetnek le a felhasználóról például a regisztráció dátumát vagy az utolsó belépés időpontját.
A Katalógus lenyíló menü tartalmazza a katalógusban való kereséshez és a könyvek katalogizálásához szükséges műveletek menüpontjait, melyek név szerint: Egyszerű keresés, Részletes keresés, Új könyv felvétele, Könyv módosítása, Könyv törlése. A menü két főbb tevékenység köré szerveződik, a keresés, könyvek katalógusba való felvétele, módosítása vagy törlése.
	
# Fizikai környezet
<<<<<<< Updated upstream

Maga a projekt egy webáruház létrehozása, ahol könyveket árulnak. Mivel webáruházról van szó így online fog megjelenni. Ezzel pedig az emberek bárhol, bármikor eltudják érni. Ehhez pedig internet kapcsolatra van szükségük. A megvalósítás során a JavaScript programozási nyelv lesz használva, így a fejlesztői környezet a Node.js lesz. A projekt elkészítésénél, mind a backend, mind pedig a frontend-et elkészítjük. A backend-nél az Express-t fogjuk használni, míg a frontend-nél pedig a React-ot. Mivel manapság az emberek már nem csak a pc-ken, hanem más egyéb eszközön is interneteznek, mint például mobiltelefon vagy tablet. Így kifejezetten fontos az, hogy a weboldal bármilyen eszközön megfelelően jelenjen meg. Ezt a készítés során fegyelembe vesszük és ennek megfelelően készítjük el a webáruházat. Adatbázis kezelésnél a MySQL-t fogjuk használni.
=======
![Image of database_plan](https://raw.githubusercontent.com/noemitth10/Ekecluded_2021-2/main/Dokumentumok/%C3%81br%C3%A1k/database_plan.png)
Maga a projekt egy webáruház létrehozása, ahol könyveket árulnak. Mivel webáruházról van szó így online fog megjelenni. Ezzel pedig az emberek bárhol, bármikor eltudják érni. Ehhez pedig internet kapcsolatra van szükségük. A megvalósítás során a javasscript programozási nyelv lesz használva, így a fejlesztői környezet a NodeJS lesz. A projekt elkészítésénél, mind a backend, mind pedig a frontend-et elkészítjük. A backend-nél az express-t fogjuk használni, míg a frontedn-nél pedig a react-ot. Mivel manapság az emberek már nem csak a pc-ken, hanem más egyéb eszközön is interneteznek, mint például mobiltelefon vagy tablet. Így kifejezetten fontos az, hogy a weboldal bármilyen eszközön megfelelően jelenjen meg. Ezt a készítés során fegyelembe vesszük és ennek megfelelően készítjük el a webáruházat. Adatbázis kezelésnél a mysql-t fogjuk használni.
>>>>>>> Stashed changes

# Adatbázis terv

![Image of database_plan](https://raw.githubusercontent.com/noemitth10/Ekecluded_2021-2/main/Dokumentumok/%C3%81br%C3%A1k/adatbázisterv.png)
![Image of database_plan](https://raw.githubusercontent.com/noemitth10/Ekecluded_2021-2/main/Dokumentumok/%C3%81br%C3%A1k/BOOKSTORE_ER_UML.png)

Felhasználóink és az általunk árusított könyvek adatait PostgreSQL-ben tároljuk mely egy nyílt forráskódú adatbázis. A könyvekről tároljuk címét rövid leírását oldalszámát borítóképét és árát. Az írókról nevüket, születési idejüket, rövid leírást róluk. Egyébiránt tároljuk a rendelési információkat is mint, hogy honnan rendeltek mennyi könyvet és a rendeléshez fűzött egyéni megjegyzést is.

# Tesztterv
A rendszerterv szerint implementált szoftver tesztelésének célja, hogy ellenőrizze az üzleti folyamatok modellje című pontban meghatározott helyes, specifikáció szerinti lefutását, valamint hogy a kliens webes felület felhasználóbarát módon jelenik meg, és használható különböző hardver és szoftverkörnyezetben.

A tesztelés során használt kiszolgáló hardver koonfigurációja a telepítés során használt hardverrel kompatibilis, teljesítményben (processzor, operatív memória, háttértár) nem tér el jelentősen. A telepítéshez természtesen az általunk ajánlott konfiguráció kerül beszerzésre a felhasználó bolt által.

A tesztelés során a használt hardverek a napjainkban elterjedt hardverkonfigurációjú PC-k illetve laptopok, melyeken a leggyakrabban használt böngészőkön (Google Chrome, Mozzila Firefox, Microsoft Edge) teszteljük a rendszert az alábbiakban részletezettek szerint. 

**A minimum hardverkonfiguráció:**

- Intel Celeron processzor
- 4GB RAM
- 128GB HDD
- a képernyők felbontása: 1280x1024 vagy 1920x1080

A tesztelés során az üzleti folyamatokhoz tartozó különböző forgatókönyvek eredményét vizsgáljuk. Amennyiben az elvártnak megfelelő eredményt kapjuk, a teszteset sikeresnek tekinthető, ellentkező esetben a hibát rögzítjük a tesztjegyzőkönyvben. Ezt követően a feljegyzett hibákat javítjuk a szoftverben, és újbóli tesztelésnek vetjük alá a rendszert.

A rendszer alábbiakban leírt tesztelésének előfeltétele, hogy az adatbázisban phpMyAdmin segítségével felvegyünk egy első adminisztrátori jogosultsággal rendelkező felhasználót a felhasználók táblába. Felhasználónév: admin, a további adatok a fejlesztő-tesztelő személyes adatai lesznek. Ezzel belépve tudjuk tesztelni az adminisztrátori jogosultsággal rendelkező felhasználók kivételes funkciójait.
