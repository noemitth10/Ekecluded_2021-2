# Bevezető

A webalkalmazás célja, hogy felhasználói több kiadó által publikált könyvek hatalmas választékából megtalálhasssa a számára legérdekesebbet és könyedén megrendelhesse azt akár nagy példányszámban is. Weboldalunk igyekszik minnél bővebb és mélyrehatóbb információt szolgáltatni az elérhető könyvekről és azok íróiról, hogy ezáltal is könnyebb legyen a választás. Ezen felül felhasználóknak lehetőségük lesz regisztrálni, szállítási adataik mentésére ezzel is gyorsítani jövőbeli reneléseki folyamatát.

# Jelenlegi helyzet leírása

Manapság az online vásárlás egyre jobban hódít. Egyre több webáruház jön létre, aminek köszönhetően kényelmesebben lehet vársárolni, így az emberek otthonról, sorban állás nélkül megtudják venni azt, amire szükségük van. Az interneten rengeteg webáruház található, ahol különböző dolgokat is árulnak. A mai világban az emberek, már a könyveket is nagy részben online vásárolják meg. Minket is azzal bíztak meg, hogy egy webáruházat hozzunk létre, ahol könyveket árulnának. A megbízonk üzletét teljes mértékben online akarja működtetni. Mivel ez az első webáruháza lenne, így csak az országon belül szeretné működtetni. Ezzel megszűne a helyhez kötöttség és így az országban bárki, bármikor, bárhol széttud nézni a webshopban és megtudja rendelni azt a könyvet vagy könyveket, amiket szeretne megvenni. Így a vársálóknak, nem kell személyesen bemenni az üzletben és sokáig keresgélni, majd sorban állni, hanem egész egyszerűen felmenni weboldalra és ott különböző értékek alapján megkeresni a kívánt könyvet vagy könyveket. A rendelést is egész egyszerűen, pár kattintással le tudja adni. Ehhez persze az illetőnek rendelkeznie kell felhasználói fiókkal. Valamint még a weboldal létrehozásával megszűnnek a felesleges utazgatások is. Ugyanis a váráslók a csomagjaikat házhoz szállítva készhez kapják.

# Vágyálom rendszer leírása
A cél egy könyves webáruház létrehozása, aminek létrehozásához a Node.js-et használjuk. Backend részen az express-t, az adatbázishoz pedig a mysql-t használjuk. A webáruházban lesznek adminisztrátorok és felhasználókat. Az adminisztrátorok fogják kezelni mind a könyveket, mind pedig a felhasználókat. Fel vesznek, illetve törölnek újabb könyveket és felhasználókat. Aktuális akciókat jelenítnek meg  a főoldalon. A felhasználók regisztrálni tudnak a webáruházban, amelynek következtében létrejön a fiókjuk. Kijelentkezve csak böngészni tudnak, bejelentkezve viszont a böngészésen kívül tudnak majd vásárolni. Bele tudják helyezni a kívánt könyvet/könyveket a kosárba. Kosárba helyezés előtt megadthatják, hogy hány darabot akarnak az adott könyvből venni. Rendelésüket letudják adni. A könyveket cím, szerző, kategória, ár … stb. azaz az összes lehetséges módon tudják majd ki listázni. A felhasználókról tárolni kell, majd a nevet, lakcímet,emailt, jelszót, az adott felhasználó hűségpontjait, ami kezdetben 0 kell hogy legyen, a telefonszámot és az adott felhasználó nemét. Mivel könyves webáruházról van szó, így a különböző kategóriájú és árú könyveket kell tárolni az adtbázban és azokat megjeleníteni a főoldalon. A könyveknél a címet, ISBN számát, egy szöveges leírást a könyvről, képet, a könyv árát, az oldalak számát, a nyelvet, a típusát, tehát e-book vagy esetleg nyomtatott könyvről van-e szó és a borító típusát, azaz kemény fedeles, puha fedeles, illetve díszitett kötésű könyvről van-e szó. Tehát a könyveknél ezeket kell tárolni. Valamint ezek mellet el kell tárolni az írókat és be kell őket sorolni kategóriákba. Az íróknál a nevet, születési időt, kortárs íróról van-e szó, az országot ahol születet és leírást az adott íróról kell tárolni képpel együtt. A szerepköröket is tárolni kell, azaz azt hogy adminisztrátorról van-e szó vagy esetleg felhasználóról. A felhasználó által le adott rendeléseknél tárolni kell a felhasználó id-jét, a rendelés számot, a felhasználó lakcímét, a rendelt könyvek számát, illetve a rendelés végösszegét. A kosár tartalmát lehessen ki listázni, illetve annak tartalmát módosítani. Tehát a törölni könyveket a listáról. A felhasználók regisztrációkor kapnak egy igazoló email-t, valamint a jelszavukat email címmel tudják módosítani. Valamint a felhazsnálók tudjanak értékeléseket leadni a könyvekről.

## A rendszerre vonatkozó pályázat, törvények, rendeletek, szabványok és ajánlások leírása
A felhasználó által megadott személyes adatok bizalmasan lesznek kezelve, nem lesznek át adtva harmadik félnek. Ezekkel az adatokkat az adminisztrátorok és a weblap készítői nem felhasználni saját céljaikra. A felhasználó által nyújtott bizalommal nem fognak vissza élni. Sohasem fog kapni a felhasználó olyan email-t, amiben kérik őt arra, hogy a jelszavát adja meg. Az oldalon mindig az aktuális, friss információk lesznek megjelenítve. A felhaszáló megfelelően lesz tájékoztatva, azaz az oldalon az összes olyan információ fenn lesz, amelyre szüksége van. Mivel webáruházról van szó ezért hiteles temékek és árak lesznek fel tüntetve. Rendelésnél fel lesz tünteve a vásárolt könyvek darab száma, valamint a rendelés végösszege.

# Jelenlegi üzleti folyamatok modellje
A megrendelőnek jelenleg csak egy könyvesboltja van Egerben, amit szeretné teljesen online működtetni. Ezért is bízott meg minket a weboldal elkészítésével. A weboldal létrehozásával, nem lesz helyhez kötve a könyvek elérése, hanem az országban bárhonnan tudnak rendelni a vásárlók. Ezzel pedig a felesleges utazgatás megszűnik, illetve a vevőkenek nem kell a hosszú sorban állniuk azért, hogy megtudják venni a könyveiket. Mivel a webáruház létrehozásával pár kattintással el tudják intézni a vásárlást.

# Igényelt üzleti folyamatok modellje
A webáruháznak lesznek vásárlói, illetve adminisztrátorai. A követelmény listában feltüntetett funkciónális és nem funkcionális követeményeknek megfelelően fog majd elkészülni. Regisztrációs, illetve bejelentkezési felületek lesznek. Szerepkör szerint lesznek felosztva a felhasználók. Azaz lesznek adminiszrrátorok és sima egyszerű felhasználók, azaz vásárlók. Az adminisztrátorok kezelik a felhasználókat, illetve a könyveket. A vásárlók, pedig böngésznek a könyvek között, a könyveket ki listázhatják különböző értékek szerint. Vásárolhatnak, egy könyvbőll több példányt is. A kosár tartalmát megnézhetik, illetve módosíthatják azt. Valamint a saját adataikat is szerkeszthetik. Mivel folyamatosan új könyvek jelennek meg, ezért az áruházban vásárolható könyvek listája ennek megfelelően fog folyamatosan bővülni. Ennél a webáruháznál nyomtatott könyvek mellet, e-book-kat is vehetnek a vásárlók. A webáruház mindig naprakész, friss információkkal fog szolgálni a felhasználók számára.

# Követelmény lista

|Modul           |ID     |Név                                |Verziószám |Kifejtés                                                                                                                                                                                                                |
|:--------------:|:-----:|:---------------------------------:|:---------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|Regisztrálás    |K1     |Regisztráció                       |0.1 verzió |A felhasználó az adatai megadásával regisztrálhat a rendszerben. Meg kell neki adnia a nevét, lakcímét, email címét, jelszavát, telefonszámát és a nemét.                                                               |
|Regisztrálás    |K2     |Visszaigazoló email                |0.1 verzió |A felhasználónak kapnia kell egy visszaigazoló emailt a regisztrálása után.                                                                                                                                             |
|Bejelentkezés   |K3     |Belépés                            |0.1 verzió |A felhasználó az email címével és a jelszavával léphet majd be.                                                                                                                                                         |
|Könyv           |K4     |Könyv adatai                       |0.1 verzió |A könyvek adatai jelenjenek meg a kíválasztott könyv mellett. Jelenjen meg a cím, ISBN szám, szöveges leírás a könyvről, kép, ár, a könyv oldalainak a száma, az adott könyv nyelve, a könyv típusa és a borító típusa. |
|Felhasználó     |K5     |Profil megjelenítése               |0.2 verzió |A adott felhasználó adatainak kilistázása.                                                                                                                                                                              |
|Felhasználó     |K6     |Hűségpont                          |0.2 verzió |Minden felhasználónak legyen hűségpontja, melyet a vásárlások során gyarapíthat. Ez kezdetben 0 legyen.                                                                                                                 |
|Felhasználó     |K7     |Profil szerkesztése                |0.3 verzió |A felhasználó tudja módosítani az adatit.                                                                                                                                                                               |
|Felhasználó     |K8     |Jelszó módosítás                   |0.3 verzió |A felhasználó a jelszavát csak email címmel tudja módosítani.                                                                                                                                                           |
|Könyv           |K9     |Keresés                            |0.4 verzió |A felhasználó különböző értékek alapján tudja ki listázni a könyveket, mint pl.: cím, ár, író, kategória … stb.                                                                                                         |
|Rendelés        |K10    |Könyvek darabszámának megadása     |0.5 verzió |A felhasználó egy adott könyvből több példányt is rendelhet. Ekkor a darabszámot még a kosárba helyezés előtt megtudja adni.                                                                                            |
|Rendelés        |K11    |Kosárba helyezés                   |0.5 verzió |A felhasználó a kiválasztott könyvet vagy könyveket beletudja tenni a kosárba.                                                                                                                                          |
|Kosár           |K12    |Kosár tartalmának megjelenítése    |0.6 verzió |A felhasználó meg tudja nézni a kosár tartalmát. Tehát annak ki listázása, valamint a végösszeg feltüntetése.                                                                                                           |
|Kosár           |K13    |Kosár tartalmának módosítása       |0.6 verzió |A felhasználó tudjon könyveket törölni a megvenni kívánt könyvek listájáról.                                                                                                                                            |
|Rendelés        |K14    |Rendelés végelegsítése             |0.7 verzió |A rendelés leadás agomb megnyomásával a felhasználó végelegsíteni tudja a rendelését.                                                                                                                                   |
|Rendelés        |K15    |Visszaigazoló email a rendelésről  |0.7 verzió |A rendelés leadása után a felhasználó visszaigazoló emailt kap a rendeléséről, amiben fellegyenek tűnteve a rendelés adatai, a végösszeggel együtt.                                                                     |
|Főoldal         |K16    |A főoldal tartalma                 |0.8 verzió |A főoldalon a könyvek ki legyenek listázva, valamint jelenjenek meg ott hírek, illetve az aktuális akciókról szóló információk.                                                                                         |
|Felhasználó     |K17    |Profil kép megadása                |0.9 verzió |A felhasználó a profiljához beállíthassa a profil képét, illetve azt módosíthassa.                                                                                                                                      |
|Felhasználó     |K18    |Értékelés                          |0.9 verzió |A felhasználó tudja értékelni a könyveket külön-külön, illetve az áruházat is.                                                                                                                                          |

# Használati esetek

## A rendszer felhasználói a következők:

- Vendég ( nem bejelentkezett felhasználó )
- Vásárló
- Adminisztrátor

## A rendszernek a következő funkciókat kell ellátnia:

- az adminisztrátorok tudjanak könyveket felvenni,törölni illetve módosítani
- az adminisztrátorok tudjanak felhasználó adatokat módosítani
- az adminisztrátorok tudjanak felhasználókat és könyveket kilistázni
- a vásárálók tudjanak a navigációs menüvel az oldalon belül navigálni
- a vásárálók tudjanak a Katalóguson belül keresni
- a vásárálók tudjanak a Katalóguson belül könyveket várásolni
- a vásárálók tudjanak személyes adatokat változtatni ( e-mail, telefonszám )
- a vendégek tudjanak a navigációs menüvel az oldalon belül navigálni
- a vendégek tudjanak a Katalóguson belül keresni

## Előfeltételek:

- adminisztrátorok részére a rendszer használatához jogosultság, azaz kelszó szükséges
- a vásárlóknak a vásárláshoz regisztráció szükséges

## Ábra:

![Image of usecase](https://raw.githubusercontent.com/noemitth10/Ekecluded_2021-2/main/Dokumentumok/%C3%81br%C3%A1k/USE_CASE_UML.png)

# Képernyőtervek

# Forgatókönyvek

A kezdőlap oldal jelenik meg minden felhasználó számára legelőször, tartalmazza a Webshopra vonatkozó legfontosabb információkat. A navigációs sáv a Kezdőlap, Tájékoztató, Katalógus és Belépés/Regisztráció menüpontokat tartalmazza, ezek a rendszerbe való belépés előtt minden esetben megjelennek, a felhasználó bármelyik megjelenített oldalon kezdeményezheti az alábbi műveleteket vagy oldalak megjelenítését.

- A tájékoztató oldal a kölcsönzőkre vonatkozó általános, és az adatkezelési szabályokkal kapcsolatos tájékoztatást tartalmaz.
- A katalógus menüpont kiválasztása esetén lehetőség van belépés nélküli kersésre. A felhasználó a keresés esetén kulcsszavak illetve a köny bármilyen adatja alapján képes keresni. A keresés után vagy egy találati lista vagy egy "Nincs a keresésnek megfelelő könyv." üzenet az eredmény.
- A Belépés/Regisztrációt választva vásárló illetve adminisztrátorként lehet belépni a rendszerbe. Hibás felhasználó név vagy jelszó megadása esetén újból meg kell adni az adatokat.

Amennyiben a felhasználó adminisztrátori jogosultsággal rendelkezik, a következő műveleteket hajthatja végre:
- A bejelnkezett felhasználók kilistázása, amelyett a navigációs sávon megjelent, csak az adminisztrátori jogosultsággal rendelkező felhasználók láthatnak illetve használhatnak. Ezzel a menüponttal kilistázhatják a jelenleg bejelentkezett felhasználókat.
- A katalógusba új könyvek felvételére lehetősége van, az új könyv hozzáadása gomb használatával, illetve könyveket el is távolíthat a katalógusból a könyv törlése gombra kattintva. Ezeket az opciókat csak az adminisztrátori jogosultsággal rendelkező felhasználók láthatnak
- A katalógusban lévő könyvek adatait illetve leírásainak módosítására is lehetőségük van az adminisztrátori jogosultsággal rendelkező felhasználóknak.

Vásárló ként történő belépés esetén a felhasználó navigációs sávjában a Kezdőlap, Katalógus, Tájékozató valamint a felhasználó név látható. Lehetőség van a kezdőlapra visszatérni, továbbá a katalógusra történő navigáció után keresésre van lehetőség, egy adott könyvet kiválasztva látható a könyv adatai illetve leírása is, lehetősége van a köny megvásárlására. A navigációs sáv jobb oldalán megjelenő felhasználó névre ( pl. Belépve: xy ) kattintva lehetőség adódik a személyes adatok megváltoztatására ( telefonszám, e-mail cím ) illetve a kijelentkezésre.

Bejelentkezés nélkül a felhasználó navigációs sávjában a Kezdőlap, Katalógus, Tájékozató található. Lehetőség van a kezdőlapra visszatérni, továbbá a katalógusra történő navigáció után keresésre van lehetőség, egy adott könyvet kiválasztva látható a könyv adatai illetve leírása is, de vásárlása nincs lehetősége.

# Funkció - követelmény megfeleltetés
K1, K2, K3: A weboldalon a felhasználók a regisztráció/bejelentkezés gombra kattintva név, lakcím, email, jelszó, telefonszám illetve nemük megadását követve regisztrálhatnak, mely esemény után visszaigazoló emailt kapnak a sikeres regisztrációról. Regisztrációt követően email cím és jelszó megadásával jelentkezhetnek be az oldalon.
K4, K9, K18: A listázott könyvekből egyet kiválasztva a következő adatok jelennek meg a borítóképe mellett cím, ár, oldalak száma, ISBN száma, nyelve illetve típusa és egy rövid leírás a könyvről. Ugyan itt a felhasználó értékelheti a könyvet. A könyveket különböző módon lesz lehetőség listázni pl.: cím, ár, író, kategória.
K5, K7, K8, K17: Saját profiljára kattintva megjelennek majd a felhasználó adatai és profilképe lehetőséget kap azok módosítására illetve a kép cseréjére/megadására. Jelszavát csak emailen keresztül tudja majd változtatni a felhasználó.
K6, K10, K11, K12, K13: A felhasználóknak lehetőségük lesz egszerre több könyv rendelésére is ezt olya módon biztosítva, hogy kosarukhoz egyszerre több példányt is hozzá adhatnak, illetve a kosár ikonjára kattintanak listázza a már abban lévő tételeket és a végösszeget illetve lehetőségük nyílik azok esetleges törlésére.
K14, K15: A rendelést a rendelés leadása gombal tudják majd véglegesíteni, ekkor egy visszaigazoló emailt kapnak a rendelésükről, melyben feltüntetésre kerülnek a rendelés adatai illetve a végösszeg.
# Fogalomszótár

- **Node.js:** Szoftverrendszer, melyet skálázható internetes alkalmazások, mégpedig webszerverek készítésére hoztak létre.
- **Express:** Back end keretrendszer a Node.js-hez, amely ingyenes és nyílt forráskódú szoftverként jelent meg az MIT licenc alatt.
- **MySql:** Egy többfelhasználós, többszálú, SQL-alapú relációs adatbázis-kezelő szerver.
- **E-book:** Az e-book (magyarul e-könyv) az elektronikus formában létrehozott és terjesztett szöveget és egyes esetekben képet tartalmazó fájl, amely digitális megfelelője a nyomtatott könyvnek.
- **ISBN szám:** Az ISBN vagy ISBN-szám (International Standard Book Number) 13 jegyű (a 2007. január 1. előtt kiadott könyveknél 10 jegyű) azonosítószám, a könyvek és egyéb monografikus jellegű művek nyilvántartására szolgáló nemzetközi szabványos számrendszerhez tartozó kód.