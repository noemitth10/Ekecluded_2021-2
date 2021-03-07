#Bevezető
A webalkalmazás célja, hogy felhasználói több kiadó által publikált könyvek hatalmas választékából megtalálhasssa a számára legérdekesebbet és könyedén megrendelhesse azt akár nagy példányszámban is. Weboldalunk igyekszik minnél bővebb és mélyrehatóbb információt szolgáltatni az elérhető könyvekről és azok íróiról, hogy ezáltal is könnyebb legyen a választás. Ezen felül felhasználóknak lehetőségük lesz regisztrálni, szállítási adataik mentésére ezzel is gyorsítani jövőbeli reneléseki folyamatát.

#Jelenlegi helyzet leírása
Manapság az online vásárlás egyre jobban hódít. Egyre több webáruház jön létre, aminek köszönhetően kényelmesebben lehet vársárolni, így az emberek otthonról, sorban állás nélkül megtudják venni azt, amire szükségük van. Az interneten rengeteg webáruház található, ahol különböző dolgokat árulnak. A mai világban az emberek, már a könyveket is nagy részben online vásárolják meg. Minket is azzal bíztak meg, hogy egy webáruházat hozzunk létre, ahol könyveket árulnának. A megbízonk üzletét teljes mértékben online akarja működtetni. Mivel ez az első webáruháza lenne, így csak az országon belül szeretné működtetni. Ezzel megszűne a helyhez kötöttség és így az országban bárki, bármikor, bárhol széttud nézni a webshopban és megtudja rendelni azt a könyvet vagy könyveket, amiket szeretne megvenni. Így a vársálóknak, nem kell személyesen bemenni az üzletben és sokáig keresgélni, majd sorban állni, hanem egész egyszerűen felmenni weboldalra és ott különböző értékek alapján megkeresni a kívánt könyvet vagy könyveket. A rendelést is egész egyszerűen, pár kattintással le tudja adni. Ehhez persze az illetőnek rendelkeznie kell felhasználói fiókkal. Valamint még a weboldal létrehozásával megszűnnek a felesleges utazgatások is. Ugyanis a váráslók a csomagjaikat házhoz szállítva készhez kapják.

#Vágyálom rendszer leírása
A cél egy könyves webáruház létrehozása, aminek létrehozásához a Node.js-et használjuk. Backend részen az express-t, az adatbázishoz pedig a mysql-t használjuk. A webáruházban lesznek adminisztrátorok és felhasználókat. Az adminisztrátorok fogják kezelni mind a könyveket, mind pedig a felhasználókat. Fel vesznek, illetve törölnek újabb könyveket és felhasználókat. Aktuális akciókat jelenítnek meg  a főoldalon. A felhasználók regisztrálni tudnak a webáruházban, amelynek következtében létrejön a fiókjuk. Kijelentkezve csak böngészni tudnak, bejelentkezve viszont a böngészésen kívül tudnak majd vásárolni. Bele tudják helyezni a kívánt könyvet/könyveket a kosárba. Kosárba helyezés előtt megadthatják, hogy hány darabot akarnak az adott könyvből venni. Rendelésüket letudják adni. A könyveket cím, szerző, kategória, ár … stb. azaz az összes lehetséges módon tudják majd ki listázni. A felhasználókról tárolni kell, majd a nevet, lakcímet,emailt, jelszót, az adott felhasználó hűségpontjait, ami kezdetben 0 kell hogy legyen, a telefonszámot és az adott felhasználó nemét. Mivel könyves webáruházról van szó, így a különböző kategóriájú és árú könyveket kell tárolni az adtbázban és azokat megjeleníteni a főoldalon. A könyveknél a címet, ISBN számát, egy szöveges leírást a könyvről, képet, a könyv árát, az oldalak számát, a nyelvet, a típusát, tehát e-book vagy esetleg nyomtatott könyvről van-e szó és a borító típusát, azaz kemény fedeles, puha fedeles, illetve díszitett kötésű könyvről van-e szó. Tehát a könyveknél ezeket kell tárolni. Valamint ezek mellet el kell tárolni az írókat és be kell őket sorolni kategóriákba. Az íróknál a nevet, születési időt, kortárs íróról van-e szó, az országot ahol születet és leírást az adott íróról kell tárolni képpel együtt. A szerepköröket is tárolni kell, azaz azt hogy adminisztrátorról van-e szó vagy esetleg felhasználóról. A felhasználó által le adott rendeléseknél tárolni kell a felhasználó id-jét, a rendelés számot, a felhasználó lakcímét, a rendelt könyvek számát, illetve a rendelés végösszegét. A kosár tartalmát lehessen ki listázni, illetve annak tartalmát módosítani. Tehát a törölni könyveket a listáról. A felhasználók regisztrációkor kapnak egy igazoló email-t, valamint a jelszavukat email címmel tudják módosítani. Valamint a felhazsnálók tudjanak értékeléseket leadni a könyvekről.

A rendszerre vonatkozó pályázat, törvények, rendeletek, szabványok és ajánlások leírása
A felhasználó által megadott személyes adatok bizalmasan lesznek kezelve, nem lesznek át adtva harmadik félnek. Ezekkel az adatokkat az adminisztrátorok és a 
weblap készítői nem felhasználni saját céljaikra. A felhasználó által nyújtott bizalommal nem fognak vissza élni. Sohasem fog kapni a felhasználó olyan email-t, 
amiben kérik őt arra, hogy a jelszavát adja meg. Az oldalon mindig az aktuális, friss információk lesznek megjelenítve. A felhaszáló megfelelően lesz tájékoztatva,
azaz az oldalon az összes olyan információ fenn lesz, amelyre szüksége van. Mivel webáruházról van szó ezért hiteles temékek és árak lesznek fel tüntetve. 
Rendelésnél fel lesz tünteve a vásárolt könyvek darab száma, valamint a rendelés végösszege.

#Jelenlegi üzleti folyamatok modellje
A megrendelőknek jelenleg csak egy könyvesboltja van Egerben, amit szeretné teljesen online működtetni. Ezért is bízott meg minket a weboldal elkészítésével. A 
weboldal létrehozásával, nem lesz helyhez kötve a könyvek elérése, hanem így az országban bárhonnan tudnak rendelni a vásárlók.

#Igényelt üzleti folyamatok modellje
A webáruháznak lesznek vásárlói, illetve adminisztrátorai. A követelmény listában feltüntetett funkciónális és nem funkcionális követeményeknek megfelelően fog
majd elkészülni. Regisztrációs, illetve bejelentkezési felületek lesznek. Szerepkör szerint lesznek felosztva a felhasználók. Azaz lesznek adminiszrrátorok és sima
egyszerű felhasználók, azaz vásárlók. Az adminisztrátorok kezelik a felhasználókat, illetve a könyveket. A vásárlók, pedig böngésznek a könyvek között, a könyveket
ki listázhatják különböző értékek szerint. Vásárolhatnak, egy könyvbőll több példányt is. A kosár tartalmát megnézhetik, illetve módosíthatják azt. Valamint a saját
adataikat is szerkeszthetik. Mivel folyamatosan új könyvek jelennek meg, ezért az áruházban vásárolható könyvek listája ennek megfelelően fog folyamatosan bővülni.
Ennél a webáruháznál nyomtatott könyvek mellet, e-book-kat is vehetnek a vásárlók. A webáruház mindig naprakész, friss információkkal fog szolgálni a felhasználók
számára.

#Követelmény lista

##Funkcionális követelmények:
- Regisztráció: regisztráció felület, ahol a felhasználó megtduja adni az adatit.
- Regisztrációt visszaigazoló email: a felhasználó kap egy igazoló emailt a regisztrációjáról.
- Bejelentkezés: bejelentkezési felület, ahol a felhasználó az email címe és a jelszava megadásával tud be lépni.
- Profi megjelenítése: az adott felhasználó adatainak ki listázása.
- Profil szerkesztése: a felhasználó tudja módosítani az adatit, jelszó módosítása, csak email címmel lehet.
- Főoldal: a főoldalon a könyvek ki legyenek listázva, valamint jelenjenek meg ott hírek, illetve az aktuális akciókról szóló információk.
- Keresési lehetőség: a felhasználó különböző értékek alapján tudja ki listázni a könyveket, mint pl.: cím, ár, író, kategória … stb.
- Kosárba helyezés: a felhasználó kosárba tudja rakni a megvenni kivánt könyvet vagy könyveket.
- Darab szám megadása: a felhasználó a könyv kosárba tétele előtt, lehetőséget kell biztosítani számára, arr, hogy a megadja azt, hogy hány darabot kíván venni az adott könyvből.
- Kosár tartalmának megjelenítése: a felhasználó a rendelés le adása során meg tudja nézni a kosár tartalmát. Tehát annak ki listázása, valamint a végösszeg feltüntetése.
- Kosár tartalmának módosítása: a felhasználó tudjon könyveket törölni a megvenni kívánt könyvek listájáról.
- Értékelés: a felhasználók tudjanak értékelések leadni az adott könyvekről.

##Nem funkcionális követelmények:
- A weboldalt interneten lhet elérni és akkor is megfelelően jelenik meg.
- Különböző eszközökön megfelelően jelenjen meg a weblap.
- A témára vonatkozó adatokat tartalmazza, azaz ne jelenjenek meg oda nem illő tartamak.
- A felhasználók könnyen eltudjanak benne igazodni.
- A felhasználók könnyedén kitudják keresni az őket érdeklő könyveket.
- A főoldalon minden friss információnak meg kell jelenie.
- A funkciók a leírtaknak megfelelően működjenek.
- A felhasználók tudják szerkeszteni a profiljuk adatait, tudjanak vásárolni, böngészni, kosár tartalmát ki listázni, valamint azt módosítani, megvenni kívánt könyvek számát megadni, illetve rendelést leadni. Viszont az összes olyan cselekvést, amit csak is az adminisztrátorok tehetnek meg azt ne tudják meg tenni. Pl.: új könyvet felvenni, vagy egy adott könyv adatait szerkeszteni.
- Az adminisztrátorok tudják kezelni a felhasználókat, illetve a könyveket.

#Irányított és szabad szöveges riportok szövege

#Fogalomszótár
- **Node.js:** Szoftverrendszer, melyet skálázható internetes alkalmazások, mégpedig webszerverek készítésére hoztak létre.
- **Express:** Back end keretrendszer a Node.js-hez, amely ingyenes és nyílt forráskódú szoftverként jelent meg az MIT licenc alatt.
- **MySql:** Egy többfelhasználós, többszálú, SQL-alapú relációs adatbázis-kezelő szerver.
- **E-book:** Az e-book (magyarul e-könyv) az elektronikus formában létrehozott és terjesztett szöveget és egyes esetekben képet tartalmazó fájl, amely digitális megfelelője a nyomtatott könyvnek.
- **ISBN szám:** Az ISBN vagy ISBN-szám (International Standard Book Number) 13 jegyű (a 2007. január 1. előtt kiadott könyveknél 10 jegyű) azonosítószám, a könyvek és egyéb monografikus jellegű művek nyilvántartására szolgáló nemzetközi szabványos számrendszerhez tartozó kód.