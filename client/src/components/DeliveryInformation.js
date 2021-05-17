import '../App.css';

function DeliveryInformation() {
  return (
      <div className="delivery_information">
          <h3>Szállítási információ</h3>
          <hr/>
          <br/>
          <h4>Szállítási határidő</h4>
          <p>Az oldalon megrendelt könyvek szállítási határideje általában 3-4 munkanap. Ez változhat a leadott rendelések 
              mennyiségétől.
              Amint átadtuk a futárnak a megrendelt könyveket emailben értesítjük, illetve amint átvehetőek a könyvek 
              úgyszintén emailben értesítjük, az átvétel helyéről, valamint arról, hogy meddig veheti át a könyveket.
              Ha házhoz szállítással rendel akkor, még az nap a futár felveszi önnel a kapcsolatot és értesítő őt, hogy aznap,
              milyen idő intervallumban érkezhet meg a rendelése.
          </p>
          <h4>Rendelés módosítása, lemondása </h4>
          <p>
              Amennyiben megrendelését módosítani vagy lemondani akarja, úgy kérem vegye fel a kapcsolatott velünk az oldalon 
              megtalálható elérhetőségek egyikén keresztül.
          </p>
          <h4>Átvételi pontok</h4>
          <ul>
              <li>Foxpost csomagautomaták</li>
              <li>Átvétel Pick Pack Ponton</li>
              <li>Átvétel postán vagy csomagautomatából, MOL kúton, Coop üzletekben</li>
          </ul>
          <h4>Házhoz szállítás</h4>
          <ul>
              <li>GLS futárszolgálat</li>
              <li>Express futárszolgálat</li>
          </ul>
      </div>
  );
}

export default DeliveryInformation;