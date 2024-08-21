import { DeviceMobile, Envelope, MapPinArea } from "@phosphor-icons/react";
import "../styles/components/informationcontainer.sass";
export default function InformationContainer() {
  return (
    <section id="information">
      <div className="info-card">
        <DeviceMobile size={32} color="#dd24bc" />
        <div>
          <h3>Telefone</h3>
          <p>(77)99817-0735</p>
        </div>
      </div>
      <div className="info-card">
        <Envelope size={32} color="#dd24bc" />
        <div>
          <h3>E-mail</h3>
          <p>larimlisboa@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <MapPinArea size={32} color="#dd24bc" />
        <div>
          <h3>Localização</h3>
          <p>Vitória da Conquista/BA</p>
        </div>
      </div>
    </section>
  );
}
