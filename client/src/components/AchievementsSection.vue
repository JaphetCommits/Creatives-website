<template>
  <div class="achievements-page">
    <!-- ============ HEADER ============ -->
    <header class="section-header">
      <h2>[Our Achievements]</h2>
      <p class="intro-text">
        Milestones, awards and recognitions earned by the Creatives Society
        and our members through dedication, craft and collaboration.
      </p>
    </header>

    <!-- ============ STATS BAND ============ -->
    <section class="stats-band">
      <div class="stats-band-inner">
        <div class="stat-tile" v-for="stat in stats" :key="stat.label">
          <div class="stat-icon" v-html="stat.icon"></div>
          <div class="stat-value">{{ stat.value }}<span>+</span></div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <!-- ============ FEATURED HIGHLIGHT ============ -->
    <section class="highlight-section">
      <div class="bracket-title">[Highlight]</div>
      <article class="highlight-card">
        <div class="highlight-media">
          <img :src="highlightImg" alt="Featured achievement" />
          <span class="highlight-badge">Best Tech Org 2025</span>
        </div>
        <div class="highlight-body">
          <span class="highlight-pill">Featured</span>
          <h3>Recognized as the most outstanding student tech organization</h3>
          <p>
            Awarded by Panthers College of Computing Studies for our consistent
            contributions to campus innovation, open-source projects, and
            developer community building throughout the academic year.
          </p>
          <div class="highlight-meta">
            <span><strong>April 2025</strong> · Annual PCCS Awards</span>
          </div>
        </div>
      </article>
    </section>

    <!-- ============ AWARDS GRID ============ -->
    <section class="awards-section">
      <div class="bracket-title">[Awards & Recognitions]</div>
      <div class="awards-grid">
        <article
          class="award-card"
          v-for="award in awards"
          :key="award.title"
        >
          <div class="award-icon" v-html="award.icon"></div>
          <span class="award-year">{{ award.year }}</span>
          <h4>{{ award.title }}</h4>
          <p>{{ award.description }}</p>
          <span class="award-tag">{{ award.tag }}</span>
        </article>
      </div>
    </section>

    <!-- ============ TIMELINE OF RECOGNITIONS ============ -->
    <section class="recognitions-section">
      <div class="bracket-title">[Recent Recognitions]</div>
      <ul class="recognitions-list">
        <li
          class="recognition-item"
          v-for="item in recognitions"
          :key="item.title"
        >
          <div class="recognition-date">
            <span class="r-month">{{ item.month }}</span>
            <span class="r-year">{{ item.year }}</span>
          </div>
          <div class="recognition-body">
            <h5>{{ item.title }}</h5>
            <p>{{ item.description }}</p>
          </div>
          <span class="recognition-tag">{{ item.tag }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import highlightImg from '../assets/pics.png'

const stats = [
  {
    value: '12',
    label: 'Awards Won',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M17 4h3v3a5 5 0 0 1-5 5M7 4H4v3a5 5 0 0 0 5 5M7 4h10v6a5 5 0 0 1-10 0V4z"/></svg>`,
  },
  {
    value: '24',
    label: 'Competitions Joined',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M9 13.5l-2 8 5-3 5 3-2-8"/></svg>`,
  },
  {
    value: '36',
    label: 'Members Recognized',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  },
  {
    value: '8',
    label: 'Hackathons Hosted',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  },
]

const awards = [
  {
    year: '2025',
    title: 'Best Student Tech Organization',
    description: 'Awarded by PCCS for outstanding contributions to campus technology and innovation.',
    tag: 'Institutional',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M17 4h3v3a5 5 0 0 1-5 5M7 4H4v3a5 5 0 0 0 5 5M7 4h10v6a5 5 0 0 1-10 0V4z"/></svg>`,
  },
  {
    year: '2024',
    title: 'National Hackathon Finalists',
    description: 'Reached the top 10 out of 200+ teams in the National Student Hackathon.',
    tag: 'Competition',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  },
  {
    year: '2024',
    title: 'Open-Source Contributors of the Year',
    description: 'Recognized for our active contributions to public open-source projects.',
    tag: 'Community',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  },
  {
    year: '2023',
    title: 'Campus Innovation Award',
    description: 'Honored for delivering high-impact solutions improving student life on campus.',
    tag: 'Innovation',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26A7 7 0 0 0 12 2z"/></svg>`,
  },
  {
    year: '2023',
    title: 'Community Choice — Dev Conf',
    description: 'Voted as the most engaging student-led booth at the regional Dev Conference.',
    tag: 'Community',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  },
  {
    year: '2022',
    title: 'Founding Charter Approval',
    description: 'Officially recognized as a chartered student organization by PCCS administration.',
    tag: 'Milestone',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="9 15 11 17 15 13"/></svg>`,
  },
]

const recognitions = [
  {
    month: 'Apr',
    year: '2025',
    title: 'Best Student Tech Organization 2025',
    description: 'Annual PCCS Awards · Featured organization of the year.',
    tag: 'Award',
  },
  {
    month: 'Feb',
    year: '2025',
    title: 'Top 10 — National Student Hackathon',
    description: 'Finalist team representing PCCS at the national finals in Manila.',
    tag: 'Competition',
  },
  {
    month: 'Nov',
    year: '2024',
    title: 'Open-Source Spotlight',
    description: 'Featured by the regional dev community for our public repositories.',
    tag: 'Feature',
  },
  {
    month: 'Aug',
    year: '2024',
    title: 'Hackathon Host of the Year',
    description: 'Recognized for hosting the most attended student hackathon in the region.',
    tag: 'Event',
  },
  {
    month: 'May',
    year: '2024',
    title: 'Outstanding Mentor Program',
    description: 'Acknowledged by PCCS faculty for our peer-mentorship initiative.',
    tag: 'Program',
  },
]
</script>

<style scoped>
.achievements-page {
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 0 0 60px 0;
}

/* ============ HEADER ============ */
.section-header {
  text-align: center;
  max-width: 760px;
  margin: 0 auto;
  padding: 60px 20px 0 20px;
}

.section-header h2 {
  font-family: 'Unbounded', sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 18px 0;
  letter-spacing: -0.02em;
}

.intro-text {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #64748b;
  margin: 0;
}

.bracket-title {
  font-family: 'Unbounded', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 28px 0;
  letter-spacing: -0.01em;
}

/* ============ STATS BAND ============ */
.stats-band {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  background: linear-gradient(135deg, #0b1f3a 0%, #0f172a 60%, #1e293b 100%);
  padding: 56px 24px;
  position: relative;
  overflow: hidden;
}

.stats-band::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(47, 158, 131, 0.18), transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(30, 106, 168, 0.18), transparent 50%);
  pointer-events: none;
}

.stats-band-inner {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.stat-tile {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 28px 22px;
  text-align: left;
  backdrop-filter: blur(8px);
  transition: transform 0.25s ease, background 0.25s ease;
}

.stat-tile:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.08);
}

.stat-icon {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: linear-gradient(135deg, #2f9e83 0%, #1e6aa8 100%);
  color: #fff;
  margin-bottom: 16px;
}

.stat-icon :deep(svg) {
  width: 22px;
  height: 22px;
}

.stat-value {
  font-family: 'Unbounded', sans-serif;
  font-size: 2.4rem;
  font-weight: 700;
  color: #fff;
  line-height: 1;
  display: flex;
  align-items: flex-start;
  gap: 4px;
}

.stat-value span {
  font-size: 1.6rem;
  background: linear-gradient(135deg, #2f9e83, #1e6aa8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-top: 6px;
}

.stat-label {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 8px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

/* ============ HIGHLIGHT ============ */
.highlight-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
}

.highlight-card {
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 22px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.12);
}

.highlight-media {
  position: relative;
  background: linear-gradient(135deg, #b30b1c 0%, #7a0712 100%);
  overflow: hidden;
  min-height: 320px;
}

.highlight-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.highlight-badge {
  position: absolute;
  top: 18px;
  left: 18px;
  background: rgba(255, 255, 255, 0.96);
  color: #0f172a;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.18);
}

.highlight-body {
  padding: 38px 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
}

.highlight-pill {
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  background: rgba(47, 158, 131, 0.1);
  color: #2f9e83;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.highlight-body h3 {
  font-family: 'Unbounded', sans-serif;
  font-size: 1.45rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
  line-height: 1.3;
}

.highlight-body p {
  color: #475569;
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;
}

.highlight-meta {
  font-size: 0.88rem;
  color: #64748b;
  padding-top: 8px;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
}

.highlight-meta strong {
  color: #0f172a;
}

/* ============ AWARDS GRID ============ */
.awards-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
}

.awards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.award-card {
  position: relative;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 18px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.05);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.award-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.1);
  border-color: rgba(47, 158, 131, 0.3);
}

.award-icon {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, #2f9e83 0%, #1e6aa8 100%);
  color: #fff;
}

.award-icon :deep(svg) {
  width: 24px;
  height: 24px;
}

.award-year {
  display: inline-flex;
  align-self: flex-start;
  background: rgba(15, 23, 42, 0.06);
  color: #0f172a;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.award-card h4 {
  font-family: 'Unbounded', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
  line-height: 1.35;
}

.award-card p {
  color: #64748b;
  font-size: 0.92rem;
  line-height: 1.6;
  margin: 0;
  flex: 1;
}

.award-tag {
  display: inline-flex;
  align-self: flex-start;
  background: rgba(47, 158, 131, 0.1);
  color: #2f9e83;
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-top: 4px;
}

/* ============ RECOGNITIONS LIST ============ */
.recognitions-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
}

.recognitions-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.recognition-item {
  display: grid;
  grid-template-columns: 80px 1fr auto;
  gap: 24px;
  align-items: center;
  padding: 20px 24px;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 14px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.recognition-item:hover {
  transform: translateX(4px);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
  border-color: rgba(47, 158, 131, 0.25);
}

.recognition-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0b1f3a 0%, #1e293b 100%);
  color: #fff;
  border-radius: 10px;
  padding: 10px 6px;
  text-align: center;
}

.r-month {
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.75;
}

.r-year {
  font-family: 'Unbounded', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  margin-top: 2px;
}

.recognition-body h5 {
  font-family: 'Unbounded', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 4px 0;
}

.recognition-body p {
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}

.recognition-tag {
  background: rgba(47, 158, 131, 0.1);
  color: #2f9e83;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
}

/* ============ RESPONSIVE ============ */
@media (max-width: 960px) {
  .stats-band-inner {
    grid-template-columns: repeat(2, 1fr);
  }
  .highlight-card {
    grid-template-columns: 1fr;
  }
  .highlight-media {
    min-height: 240px;
  }
  .awards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .stats-band-inner {
    grid-template-columns: 1fr;
  }
  .awards-grid {
    grid-template-columns: 1fr;
  }
  .recognition-item {
    grid-template-columns: 64px 1fr;
    gap: 16px;
  }
  .recognition-tag {
    grid-column: 2 / 3;
    justify-self: start;
  }
  .highlight-body {
    padding: 28px 24px;
  }
}
</style>
