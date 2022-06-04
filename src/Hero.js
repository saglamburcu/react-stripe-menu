import herophoto from "./images/hero.svg";
import phone from "./images/phone.svg";

function Hero() {

  return (
    <main className="hero-container">
      <img src={herophoto} alt="hero" />

      <div className="hero-context">
        <h1>Payments infrastructure for the internet</h1>
        <p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
        <button type="button">Start now</button>
      </div>

      <div className="phone">
        <img src={phone} alt="phone" />
      </div>

    </main>
  )
};

export default Hero;