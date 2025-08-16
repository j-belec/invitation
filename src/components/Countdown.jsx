import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import countdownImg from "../assets/countdown-img.jpeg";

export default function Countdown() {
  return (
    <div className="countdown-container">
      <h4 className="section-title">Faltan</h4>
      <FlipClockCountdown
        to={new Date(2025, 11, 6, 19, 0, 0).getTime()}
        labels={["Dias", "HORAS", "MIN", "SEG"]}
        labelStyle={{
          fontSize: 15,
          fontWeight: 500,
          textTransform: "lowercase",
        }}
        digitBlockStyle={{ width: 23.3, height: 35, fontSize: 18 }}
      ></FlipClockCountdown>
      <img src={countdownImg} className="countdown-img" />
    </div>
  );
}
