import PurpleButton from "../../shared/components/UiElements/PurpleButton";
import WhiteButton from "../../shared/components/UiElements/WhiteButton";
import "./firstsec.css";

function FirstSec(props) {
  const imgsrc = "https://images.ctfassets.net/q8mvene1wzq4/1V7KEdm8GVuIRx1fHaCovZ/eafdba3bb2b13c73c0f79f2533a4fb6e/home_pinkpaint_hero.jpg?w=2500&q=60&fm=webp"
  return (
    <div className="first-sec-container">
      <div className="firstsec-img-container">
        <img src={imgsrc} alt="A lyft ride" />
      </div>
      <div className="firstsec-text-and-btn-container">
        <h1>Let's ride</h1>
        <div>
          <PurpleButton text="Apply to drive" />
          <WhiteButton text="Sign up to drive" />
        </div>
      </div>
    </div>
  );
}

export default FirstSec;
