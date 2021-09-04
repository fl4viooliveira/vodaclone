import "./LifeEasier.css";

export default function LifeEasier() {
  return (
    <div className="life-container">
      <h2>Making life easier</h2>
      <ul>
        <li>
          <span></span>
          <h3>Online assistance</h3>
          <p>
            Our virtual chat assistant
            <br />
            available to help
          </p>
          <button>Chat now</button>
        </li>
        <li>
          <span></span>
          <h3>Free home delivery</h3>
          <p>
            Paid for same day
            <br />
            delivery options
          </p>
          <button>Delivery options</button>
        </li>
        <li>
          <span></span>
          <h3>14-day returns</h3>
          <p>
            Hassle-free returns with no
            <br />
            cancellation fee
          </p>
          <button>Returns info</button>
        </li>
        <li>
          <span></span>
          <h3>Our best ever network</h3>
          <p>
            So you can keep connected
            <br />
            to the things that matter
          </p>
          <button>Discovery our networks</button>
        </li>
      </ul>
    </div>
  );
}
