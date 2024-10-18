import Slider from "./slider/page";
import Our_Services from "./services/page";
import Fruit_cover from "./fruits/page";
import Contact_Us from "./contact/page";

export default function Home() {
  return (
    <div>
    <Slider/>
    <Our_Services/>
    <Fruit_cover/>
    <Contact_Us/>
    </div>
  );
}
