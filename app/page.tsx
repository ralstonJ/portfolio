import Reveal from "./components/Reveal";
import Screenshot from "./components/Screenshot";
import VideoPoster from "./components/VideoPoster";
import { capabilities, demo, profile, projects } from "./data";

const initials = profile.name.split(" ").map((w) => w[0]).join("");

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="brand">
            <span className="brand-mark">{initials}</span>
            <span className="brand-name">{profile.name}</span>
          </a>
          <nav className="nav-links">
            <a href="#work">Work</a>
            <a href="#demo">Demo</a>
            <a href="#about">About</a>
          </nav>
          <a href="#contact" className="btn btn-dark btn-sm">Get in touch</a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero-grid-bg" aria-hidden />
          <div className="container hero-inner">
            <div className="hero-copy">
              {profile.available && (
                <span className="pill"><span className="pulse" />Available for new opportunities</span>
              )}
              <h1>{profile.headline}</h1>
              <p className="lede">{profile.intro}</p>
              <div className="cta-row">
                <a href="#work" className="btn btn-primary">View selected work</a>
                <a href="#demo" className="btn btn-ghost">
                  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden><path fill="currentColor" d="M8 5v14l11-7z" /></svg>
                  Watch demo
                </a>
              </div>
              <dl className="meta">
                <div><dt>Role</dt><dd>{profile.role}</dd></div>
                <div><dt>Based in</dt><dd>{profile.location}</dd></div>
                <div><dt>Focus</dt><dd>Web products &amp; SaaS</dd></div>
              </dl>
            </div>

            <div className="hero-stack" aria-hidden>
              {projects.map((p, i) => (
                <div key={p.name} className={`stack-card s${i}`}>
                  <Screenshot {...p} />
                </div>
              ))}
            </div>
          </div>

          <div className="container worked-on">
            <span>Products I&rsquo;ve worked on</span>
            <ul>
              {projects.map((p) => (
                <li key={p.name}><a href={p.url} target="_blank" rel="noopener noreferrer">{p.name}</a></li>
              ))}
            </ul>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="section">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Selected work</p>
              <h2>Products shipped to real users</h2>
            </div>

            <div className="cases">
              {projects.map((p, i) => (
                <Reveal key={p.name}>
                  <article className={`case ${i % 2 ? "flip" : ""}`} style={{ "--accent": p.accent } as React.CSSProperties}>
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="case-media">
                      <Screenshot {...p} />
                    </a>
                    <div className="case-copy">
                      <span className="case-cat"><span className="dot" />{p.category}</span>
                      <h3>{p.name}</h3>
                      <p className="case-tag">{p.tagline}</p>
                      <p className="case-desc">{p.description}</p>
                      <ul className="chips">
                        {p.tags.map((t) => <li key={t}>{t}</li>)}
                      </ul>
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="link-arrow">
                        Visit {p.domain}
                        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden><path fill="none" stroke="currentColor" strokeWidth="2" d="M7 17 17 7M8 7h9v9" /></svg>
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* DEMO */}
        <section id="demo" className="section section-tint">
          <div className="container">
            <div className="section-head split">
              <div>
                <p className="kicker">Demo</p>
                <h2>{demo.title}</h2>
              </div>
              <p className="section-sub">{demo.description}</p>
            </div>
            <Reveal>
              <VideoPoster id={demo.youtubeId} start={demo.start} title={demo.title} />
            </Reveal>
            <a href={demo.watchUrl} target="_blank" rel="noopener noreferrer" className="link-arrow center">
              Open on YouTube
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden><path fill="none" stroke="currentColor" strokeWidth="2" d="M7 17 17 7M8 7h9v9" /></svg>
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container about">
            <div className="section-head">
              <p className="kicker">What I do</p>
              <h2>Engineering with a product mindset</h2>
            </div>
            <div className="caps">
              {capabilities.map((c, i) => (
                <Reveal key={c.title} delay={i * 80}>
                  <div className="cap">
                    <span className="cap-n">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{c.title}</h3>
                    <p>{c.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <div className="container contact-inner">
            <p className="kicker light">Contact</p>
            <h2>Have a product to build? Let&rsquo;s talk.</h2>
            <p className="contact-sub">I&rsquo;m open to full-time roles and selected freelance projects.</p>
            <div className="cta-row center">
              <a href={`mailto:${profile.email}`} className="btn btn-light">{profile.email}</a>
              {profile.links.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">{l.label}</a>
              ))}
            </div>
          </div>
          <footer className="container footer">
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <span>{profile.location}</span>
          </footer>
        </section>
      </main>
    </>
  );
}
