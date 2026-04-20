import './BootSequence.css';
import ratImg from '../assets/bootRAT2.png';

export default function BootSequence() {
  return (
    <div className="boot">
      <header className="boot-header">
        <div className="boot-bars">
          <p>-------------------------------------</p>
          <p>-------------------------------------</p>
        </div>

        <div className="boot-header-text">
          <div className="boot-logo-row">
            <div className="boot-rat-wrapper">
              <img src={ratImg} alt="RAT" className="boot-rat" />
            </div>
            <div className="boot-titles">
              <p className="boot-title">RATTR0 OS</p>
              <p className="boot-version">v10.3.1</p>
              <p className="boot-tagline">"Old tech, New Hands"</p>
            </div>
          </div>
        </div>

        <div className="boot-bars">
          <p>-------------------------------------</p>
          <p>-------------------------------------</p>
        </div>
      </header>

      <section className="boot-sequence">
        <p className="boot-init">&gt;Initializing system</p>

        <div className="boot-log">
          <p><span className="boot-ok">[OK]</span> Kernel loaded</p>
          <p><span className="boot-ok">[OK]</span> Disk mounted: /dev/rat0</p>
          <p><span className="boot-ok">[OK]</span> Input devices detected</p>
        </div>

        <div className="boot-auth-start">
          <p>system online</p>
          <p>handshake established</p>
        </div>
      </section>

      <section className="boot-select">
        <p className="boot-select-label">SELECT VERIFICATION:</p>
        <div className="boot-select-options">
          <a className="boot-option" href="#login">&gt;Login</a>
          <a className="boot-option" href="#register">&gt;Register</a>
        </div>
      </section>
    </div>
  );
}