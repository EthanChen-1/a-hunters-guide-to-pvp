import "./Guide.css";
import GuideNavMenu from "./components/Header/GuideNavMenu.jsx";
import Header from "./components/Header/Header.jsx";
import Pets from "./components/Pets/Pets.jsx";
import PlayStyle from "./components/PlayStyle/PlayStyle.jsx";
import Race from "./components/Race/Race.jsx";
import MarksmanshipTalents from "./components/Talents/MarksmanshipTalents/MarksmanshipTalents.jsx";
import Talents from "./components/Talents/Talents.jsx";
import Rotation from "./components/Rotation/Rotation.jsx";
import Comps from "./components/Comps/Comps.jsx";
import StatsAndGear from "./components/StatsAndGear/StatsAndGear.jsx";
import NavBar from "./components/Header/NavBar.jsx";

export default function GuideApp() {
  return (
    <div className="container">
      <NavBar />
      <GuideNavMenu />
      <Header />
      <main>
        <section id="race" name="race">
          <Race />
        </section>
        <section id="playstyle" name="playstyle">
          <PlayStyle />
        </section>
        <section id="pets" name="pets">
          <Pets />
        </section>
        <section id="talents" name="talents">
          <Talents />
        </section>
        <section id="marksmantalents" name="marksmantalents">
          <MarksmanshipTalents />
        </section>
        <section id="rotation" name="rotation">
          <Rotation />
        </section>
        <section id="comps" name="comps">
          <Comps />
        </section>
        <section id="statsandgear" name="statsandgear">
          <StatsAndGear />
        </section>
      </main>
    </div>
  );
}
