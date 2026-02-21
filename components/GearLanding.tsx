"use client";

import { useEffect } from "react";

const landingHtml = `
<nav role="navigation" aria-label="Main navigation">
  <a href="#" class="nav-logo" aria-label="GEAR home">
    <svg width="38" height="38" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="nGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#F3C66E"/>
          <stop offset="100%" style="stop-color:#E8A830"/>
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r="34" fill="none" stroke="url(#nGrad)" stroke-width="3" stroke-dasharray="8 4"/>
      <path d="M26 20 L54 20 Q58 20 58 24 L58 46 Q58 62 40 70 Q22 62 22 46 L22 24 Q22 20 26 20 Z" fill="#991E1E" opacity="0.9"/>
      <path d="M28 23 L52 23 Q55 23 55 26 L55 45 Q55 59 40 66 Q25 59 25 45 L25 26 Q25 23 28 23 Z" fill="none" stroke="rgba(243,198,110,0.4)" stroke-width="1"/>
      <rect x="36" y="30" width="8" height="24" rx="2" fill="url(#nGrad)"/>
      <rect x="28" y="38" width="24" height="8" rx="2" fill="url(#nGrad)"/>
    </svg>
    <span class="nav-wordmark"><span class="g">G</span>EAR</span>
  </a>

  <ul class="nav-links">
    <li><a href="#about">Mission</a></li>
    <li><a href="#platform">Platform</a></li>
    <li><a href="#market">Market</a></li>
    <li><a href="#model">Model</a></li>
    <li><a href="#invest">Invest</a></li>
    <li><a href="#contact" class="nav-cta">Get Started</a></li>
  </ul>
</nav>

<section class="hero" aria-label="Hero section" style="padding:0;max-width:100%">
  <div class="hero-bg" aria-hidden="true"></div>
  <div class="hero-grid" aria-hidden="true"></div>

  <div class="hero-inner">
    <div class="hero-left">
      <div class="hero-eyebrow">
        <div class="hero-eyebrow-dot" aria-hidden="true"></div>
        Now Seeking Strategic Partners
      </div>

      <h1 class="hero-h1">
        <span class="g">G</span>LOBAL<br>
        EMERGENCY<br>
        AID RESPONSE
      </h1>
      <div class="hero-tagline">Response. Relief. Rescue.</div>
      <div class="gold-rule" aria-hidden="true"></div>
      <p class="hero-body">
        GEAR builds the emergency infrastructure the world needs — <strong>coordinated, accessible, and operational</strong> when traditional systems fail. Powered by AERA, our mobile command platform for communities, institutions, and first responders.
      </p>
      <div class="hero-btns">
        <a href="#platform" class="btn-primary">Explore the Platform</a>
        <a href="#invest" class="btn-secondary">Investment Overview</a>
      </div>
    </div>

    <div class="hero-right" aria-label="GEAR brand logo">
      <div class="ring ring-1" aria-hidden="true"></div>
      <div class="ring ring-2" aria-hidden="true"></div>
      <div class="ring ring-3" aria-hidden="true"></div>

      <svg class="hero-emblem" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="GEAR shield emblem">
        <defs>
          <linearGradient id="heroGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#F3C66E"/>
            <stop offset="50%" style="stop-color:#E8A830"/>
            <stop offset="100%" style="stop-color:#C88820"/>
          </linearGradient>
          <radialGradient id="heroShieldFill" cx="40%" cy="30%">
            <stop offset="0%" style="stop-color:#C82828"/>
            <stop offset="100%" style="stop-color:#5A0A0A"/>
          </radialGradient>
        </defs>

        <circle cx="100" cy="100" r="88" fill="none" stroke="url(#heroGold)" stroke-width="4" opacity="0.6"/>
        <g fill="url(#heroGold)" opacity="0.75">
          <rect x="94" y="4" width="12" height="14" rx="3" transform="rotate(0 100 100)"/>
          <rect x="94" y="4" width="12" height="14" rx="3" transform="rotate(30 100 100)"/>
          <rect x="94" y="4" width="12" height="14" rx="3" transform="rotate(60 100 100)"/>
          <rect x="94" y="4" width="12" height="14" rx="3" transform="rotate(90 100 100)"/>
          <rect x="94" y="4" width="12" height="14" rx="3" transform="rotate(120 100 100)"/>
          <rect x="94" y="4" width="12" height="14" rx="3" transform="rotate(150 100 100)"/>
          <rect x="94" y="4" width="12" height="14" rx="3" transform="rotate(180 100 100)"/>
          <rect x="94" y="4" width="12" height="14" rx="3" transform="rotate(210 100 100)"/>
          <rect x="94" y="4" width="12" height="14" rx="3" transform="rotate(240 100 100)"/>
          <rect x="94" y="4" width="12" height="14" rx="3" transform="rotate(270 100 100)"/>
          <rect x="94" y="4" width="12" height="14" rx="3" transform="rotate(300 100 100)"/>
          <rect x="94" y="4" width="12" height="14" rx="3" transform="rotate(330 100 100)"/>
        </g>

        <path d="M54 50 L146 50 Q154 50 154 58 L154 112 Q154 156 100 174 Q46 156 46 112 L46 58 Q46 50 54 50 Z" fill="url(#heroShieldFill)"/>
        <path d="M58 54 L142 54 Q148 54 148 60 L148 111 Q148 151 100 168 Q52 151 52 111 L52 60 Q52 54 58 54 Z" fill="none" stroke="url(#heroGold)" stroke-width="2" opacity="0.6"/>
        <rect x="88" y="68" width="24" height="72" rx="5" fill="url(#heroGold)"/>
        <rect x="60" y="96" width="80" height="24" rx="5" fill="url(#heroGold)"/>
      </svg>
    </div>
  </div>
</section>

<div class="stats-strip" role="region" aria-label="Key statistics">
  <div class="stat-item fade-up"><span class="stat-n">380K+</span><span class="stat-lbl">Faith Organizations<br>in North America</span></div>
  <div class="stat-item fade-up"><span class="stat-n">100M+</span><span class="stat-lbl">Addressable<br>End Users</span></div>
  <div class="stat-item fade-up"><span class="stat-n">$300K</span><span class="stat-lbl">Current<br>Capital Raise</span></div>
  <div class="stat-item fade-up"><span class="stat-n">$2.5M</span><span class="stat-lbl">Valuation<br>Cap</span></div>
</div>

<div id="about" class="about-section">
  <div class="about-left">
    <div class="sec-eyebrow">Our Mission</div>
    <h2 class="sec-h2">Building the <em>infrastructure</em> that works when systems fail.</h2>
    <p class="sec-body">Global Emergency Accelerated Response LLC (GEAR) is a Michigan-based emergency technology company closing systemic gaps in crisis coordination. We are not simply an app developer — we are building emergency response infrastructure at national scale.</p>
    <div style="margin-top:32px"><a href="#platform" class="btn-primary">See the Platform →</a></div>
  </div>
  <div class="about-right">
    <div class="values-list">
      <div class="value-item fade-up"><div class="value-icon">⚙</div><div class="value-text"><div class="value-title">Preparedness Over Reaction</div><div class="value-body">Emergency readiness must be proactive, structured, and continuously maintained — not improvised under fire.</div></div></div>
      <div class="value-item fade-up"><div class="value-icon">🛡</div><div class="value-text"><div class="value-title">Clarity in Crisis</div><div class="value-body">Confusion costs time. Time costs lives. Systems must be intuitive, role-specific, and ready to deploy instantly.</div></div></div>
      <div class="value-item fade-up"><div class="value-icon">🌐</div><div class="value-text"><div class="value-title">Accessibility for All</div><div class="value-body">Emergency technology must not be limited by cost, language, or institutional size. Available in EN, ES, and FR.</div></div></div>
      <div class="value-item fade-up"><div class="value-icon">🔒</div><div class="value-text"><div class="value-title">Operational Integrity</div><div class="value-body">Security, reliability, and compliance are foundational requirements — not optional enhancements.</div></div></div>
    </div>
  </div>
</div>

<div id="platform" class="platform-section">
  <div class="platform-inner">
    <div class="platform-header">
      <div>
        <div class="sec-eyebrow">The Platform</div>
        <h2 class="sec-h2">AERA — <em>Accelerated</em><br>Emergency Response Application</h2>
      </div>
      <p class="sec-body" style="max-width:400px;">AERA transforms emergency protocols into structured, mobile-based action frameworks. Native iOS &amp; Android. Role-specific interfaces. Offline operational capability.</p>
    </div>

    <div class="caps-grid" role="list">
      <div class="cap-card fade-up" role="listitem"><span class="cap-num">01</span><span class="cap-icon" aria-hidden="true">📱</span><div class="cap-title">Mobile-First Infrastructure</div><p class="cap-body">Native iOS and Android deployment. Built for real-world field use, not desktop administration.</p></div>
      <div class="cap-card fade-up" role="listitem"><span class="cap-num">02</span><span class="cap-icon" aria-hidden="true">🎯</span><div class="cap-title">Scenario-Based Response</div><p class="cap-body">Pre-structured workflows for medical events, security incidents, natural disasters, and multi-agency coordination.</p></div>
      <div class="cap-card fade-up" role="listitem"><span class="cap-num">03</span><span class="cap-icon" aria-hidden="true">👤</span><div class="cap-title">Role-Specific Interfaces</div><p class="cap-body">Separate dashboards for leadership, staff, community members, and first responders — no confusion, no overload.</p></div>
      <div class="cap-card fade-up" role="listitem"><span class="cap-num">04</span><span class="cap-icon" aria-hidden="true">📡</span><div class="cap-title">Offline Operational Mode</div><p class="cap-body">Critical features remain functional during connectivity disruptions — when networks fail, AERA still works.</p></div>
      <div class="cap-card fade-up" role="listitem"><span class="cap-num">05</span><span class="cap-icon" aria-hidden="true">🏠</span><div class="cap-title">Household Code System</div><p class="cap-body">Family-level accountability via shared household codes. Children and seniors auto-flagged for priority triage.</p></div>
      <div class="cap-card fade-up" role="listitem"><span class="cap-num">06</span><span class="cap-icon" aria-hidden="true">🏛</span><div class="cap-title">Multi-Location Command</div><p class="cap-body">Unified oversight for organizations operating across campuses, districts, or jurisdictions — one command view.</p></div>
    </div>
  </div>
</div>

<div id="market" class="market-section">
  <div class="sec-eyebrow">Market Opportunity</div>
  <h2 class="sec-h2">A large, underserved,<br>and <em>growing</em> market.</h2>

  <div class="market-grid">
    <div class="market-card fade-up"><span class="mcard-n">380K+</span><div class="mcard-right"><div class="mcard-title">Faith-Based Organizations</div><p class="mcard-body">Churches, mosques, synagogues, temples — frontline community responders with no coordinated platform today.</p></div></div>
    <div class="market-card fade-up"><span class="mcard-n">130K+</span><div class="mcard-right"><div class="mcard-title">K–12 Schools</div><p class="mcard-body">Federally required emergency plans with no unified mobile coordination standard in place.</p></div></div>
    <div class="market-card fade-up"><span class="mcard-n">6,000+</span><div class="mcard-right"><div class="mcard-title">Hospitals &amp; Healthcare</div><p class="mcard-body">High-stakes environments where coordination failures carry direct patient risk and legal liability.</p></div></div>
    <div class="market-card fade-up"><span class="mcard-n">∞</span><div class="mcard-right"><div class="mcard-title">Municipal &amp; State Agencies</div><p class="mcard-body">Emergency management offices seeking scalable, compliant mobile response infrastructure at every level.</p></div></div>
  </div>

  <div class="market-total"><span class="mt-label">Total Addressable Market — North America</span><span class="mt-val">100M+ End Users</span></div>
</div>

<div id="model" class="model-section">
  <div class="model-inner">
    <div class="sec-eyebrow">Business Model</div>
    <h2 class="sec-h2">Three-phase <em>revenue architecture</em>.</h2>
    <div class="phases">
      <div class="phase-card fade-up"><div class="phase-glow" aria-hidden="true"></div><div class="phase-num">Phase 01</div><div class="phase-progress" aria-hidden="true"></div><div class="phase-title">Mass Adoption</div><p class="phase-body">Low-cost annual mobile subscription. Reduces adoption friction. Builds the community network effect across individual and organizational users.</p></div>
      <div class="phase-card fade-up"><div class="phase-glow" aria-hidden="true"></div><div class="phase-num">Phase 02</div><div class="phase-progress" aria-hidden="true"></div><div class="phase-title">Institutional Expansion</div><p class="phase-body">Tiered enterprise subscriptions with admin dashboards, expanded analytics, deployment management, and dedicated support infrastructure.</p></div>
      <div class="phase-card fade-up"><div class="phase-glow" aria-hidden="true"></div><div class="phase-num">Phase 03</div><div class="phase-progress" aria-hidden="true"></div><div class="phase-title">Strategic Licensing</div><p class="phase-body">School district deployments, healthcare system integrations, public sector contracts, and customized white-label agreements at scale.</p></div>
    </div>
  </div>
</div>

<div id="invest" class="raise-section">
  <div class="sec-eyebrow">Investment Opportunity</div>
  <h2 class="sec-h2">Raise <em>$300,000</em> to build<br>the national standard.</h2>

  <div class="raise-card">
    <div class="raise-glow" aria-hidden="true"></div>
    <div>
      <h3 class="raise-headline">Join GEAR.<br>Build the <em>infrastructure</em><br>that saves lives.</h3>
      <div class="raise-terms">
        <div class="term"><span class="term-lbl">Structure</span><span class="term-val">SAFE</span></div>
        <div class="term"><span class="term-lbl">Raise Goal</span><span class="term-val">$300K</span></div>
        <div class="term"><span class="term-lbl">Valuation Cap</span><span class="term-val">$2.5M</span></div>
        <div class="term"><span class="term-lbl">Discount / Min.</span><span class="term-val">20% / $10K</span></div>
      </div>
    </div>
    <div>
      <span class="use-label">Use of Funds</span>
      <div class="use-items">
        <div class="use-item"><div class="use-bullet" aria-hidden="true"></div>MVP finalization &amp; security testing</div>
        <div class="use-item"><div class="use-bullet" aria-hidden="true"></div>App store distribution launch</div>
        <div class="use-item"><div class="use-bullet" aria-hidden="true"></div>Server infrastructure build-out</div>
        <div class="use-item"><div class="use-bullet" aria-hidden="true"></div>Institutional outreach expansion</div>
        <div class="use-item"><div class="use-bullet" aria-hidden="true"></div>Intellectual property protection</div>
        <div class="use-item"><div class="use-bullet" aria-hidden="true"></div>Operational continuity buffer</div>
      </div>
    </div>
  </div>
</div>

<div class="quote-section" role="region" aria-label="Mission statement">
  <div class="quote-bg" aria-hidden="true"></div>
  <blockquote>
    "We are not improving existing systems.<br>We are replacing <em>fragmentation</em> with structure."
  </blockquote>
  <div class="quote-attr">Global Emergency Accelerated Response LLC · Michigan, USA</div>
</div>

<div id="contact" class="cta-section">
  <div class="cta-bg" aria-hidden="true"></div>
  <h2 class="cta-h">Ready to <span>Respond</span>?</h2>
  <p class="cta-sub">Whether you're a community leader, institutional partner, or qualified investor —<br>GEAR has a role for you in the future of emergency response.</p>
  <div class="cta-btns">
    <a href="mailto:info@gear-aera.com" class="btn-primary">Contact GEAR</a>
    <a href="#platform" class="btn-secondary">Explore the Platform</a>
  </div>
  <span class="cta-url">gear-aera.com · Michigan, USA</span>
</div>

<footer role="contentinfo">
  <div class="foot-logo"><span>G</span>EAR</div>
  <span class="foot-copy">© 2025 Global Emergency Accelerated Response LLC · All Rights Reserved</span>
  <ul class="foot-links">
    <li><a href="#about">Mission</a></li>
    <li><a href="#platform">AERA</a></li>
    <li><a href="#invest">Invest</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</footer>
`;

export default function GearLanding() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".fade-up").forEach((element) => {
      observer.observe(element);
    });

    const nav = document.querySelector("nav");

    const handleScroll = () => {
      if (!nav) {
        return;
      }

      if (window.scrollY > 60) {
        (nav as HTMLElement).style.background = "rgba(12,12,13,0.97)";
        (nav as HTMLElement).style.borderBottomColor = "rgba(243,198,110,0.14)";
      } else {
        (nav as HTMLElement).style.background =
          "linear-gradient(180deg,rgba(12,12,13,0.95) 0%,rgba(12,12,13,0) 100%)";
        (nav as HTMLElement).style.borderBottomColor = "rgba(243,198,110,0.08)";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <main dangerouslySetInnerHTML={{ __html: landingHtml }} />;
}
