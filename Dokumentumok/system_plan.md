#Bevezető
#A rendszer célja
#Projekt terv
#Üzleti folyamatok modellje
#Követelmények

#Funkcionális terv

##Rendszerszereplők
	A rendszerünkben három rendszerszerszereplő csoportot különbözetünk meg, Az egyik a regisztrációval rendelkező vásárlók csoportja. A másik a regisztrációval nem rendelkező vendég felhasználók csoportja. A harmadik pedig az adminisztrátorok csoportja. A regisztrációval rendelkező vásárlók igénybe vehetik a webshop által nyújtott összes szolgáltatást, míg a regisztrációval nem rendelkező vendégek csak a webshop korlátozott részéhez férnek hozzá. Az adminisztrátorok szintén használhatják azokat a szolgáltatásokat amit a regisztrációval rendelkező vásárlók, viszont az adminisztrátorok több jogosultsággal rendelkeznek, mint az előbb említett felhasználók csoportja. Az adminisztrátorok hozzá férhetnek a felhasználók listájához, lehetőségük van rendszerüzenetet küldeni a felhasználók részére hiba esetén.

##Rendszerhasználati esetek
	###A rendszer felhasználói a következők:

	-Vendég ( nem bejelentkezett felhasználó )
	-Vásárló
	-Adminisztrátor

	###A rendszernek a következő funkciókat kell ellátnia:

	-az adminisztrátorok tudjanak könyveket felvenni,törölni illetve módosítani
	-az adminisztrátorok tudjanak felhasználó adatokat módosítani
	-az adminisztrátorok tudjanak felhasználókat és könyveket kilistázni
	-a vásárálók tudjanak a navigációs menüvel az oldalon belül navigálni
	-a vásárálók tudjanak a Katalóguson belül keresni
	-a vásárálók tudjanak a Katalóguson belül könyveket várásolni
	-a vásárálók tudjanak személyes adatokat változtatni ( e-mail, telefonszám )
	-a vendégek tudjanak a navigációs menüvel az oldalon belül navigálni
	-a vendégek tudjanak a Katalóguson belül keresni

	###Előfeltételek:

	-adminisztrátorok részére a rendszer használatához jogosultság, azaz kelszó szükséges
	-a vásárlóknak a vásárláshoz regisztráció szükséges

	###Ábra: 

##Menühierarchiák
	A menürendszer, egy a weboldal fejléce alatt található vizszintes, lenyíló füleket is tartalmazó navigációs sávban építettünk fel.

	A rendszerbe való bejelentkezés előtt Kezdőlap, Tájékoztató, Katalógus, valamint Belépés menüpontok találhatók a navigációs sávban. Ezek közül egyedül a katalógus tartalmaz lenyíló menüt, lehetővé téve az egyszerű keresés valamint a részletes keresés műveletek kezdeményezését a könyves bolt katalógusban a webshop látogatói számára.

	**Bármilyen felhasználóként** - regisztrációval nem rendelkező vendég felhasználó, regisztrációval rendelkezó vásárló vagy adminisztrátorként - belépve a rendszerbe a navigációs sáv jobb oldalán helyezkedik el a Belépve: felhasználónév ( vendég felhasználó esetén Belépés opció ), kiemelve ezzel, hogy adott pillanatban ki használja a rendszert az adott böngészőböl. A menüpont egy lenyíló menüt tartalmaz, mely a Jelszócsere, Személyes adatok és Kilépés menüpontokból áll. Ez egységes minden felhasználó esetén, a személyes adatok mindegyike megtekinthető, azonban csak a telefonszám és e-mail cím módosítható.

	**Váráslóként** belépve a rendszerbe a Kezdőlap, Katalógus, Kosár menüpontok jelennek meg a sáv baloldalán. A katalógus megegyezik a fentiekben leírt lenyíló menüvel, az olvasóknak csak keresési lehetőséget biztosít a rendszer a katalógusban. A kosár menüpont a kosárba helyezett könyveket listázza ki a vásárló számára.

	**Vendég felhasználóként** belépve a rendszerbe a Kezdőlap, Katalógus menüpontok jelennek meg a sáv baloldalán. A katalógus megegyezik a vásárlóként belépett felhasználók által használható katalógussal.

	**Adminisztrátorként** belépve a rendszerbe a Kezdőlap, Vásárlók, Katalógus menüpontok találhatóka  navigációs sávban, melyek közül a Katalógus lenyíló menürendszer. A főmenü felosztása a különboző adminisztratív funkciókhoz kapcsolódik, pl.: várásló nyilvántartás, könyv katalógus műveletek, vásárlási adminisztráció.
	A Vásárlók menüpont tartalmazza a regisztrált vásárlók listáját, ahol az adminisztrátorok bizonyos információkat kérhetnek le a felhasználóról példáúl a regisztráció dátumát vagy az utolsó belépés időpontját.
	A Katalógus lenyiló menü tartalmazza a katalógusban való kereséshez és a könyvek katalogizálásához szükséges műveletek menüpontjait, melyek név szerint: Egyzerű keresés, Részletes keresés, Új könyv felvétele, Könyv módosítása, Könyv törlése. A menü két főbb tevékenység köré szerveződik, a keresés, könyvek katalógusba való felvétele, módosítása vagy törlése.
	
#Fizikai környezet

#Adatbázis terv

#Tesztterv