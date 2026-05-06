<template>
  <div class="achievements-page">
    <!-- HEADER -->
    <header class="section-header">
      <h2>[Our Achievements]</h2>
      <p class="intro-text">
        Milestones, events, and recognitions earned by the Creatives Society
        and our members through dedication, craft and collaboration — year by year.
      </p>
    </header>

    <!-- STATS BAND -->
    <section class="stats-band">
      <div class="stats-band-inner">
        <template v-for="(stat, i) in stats" :key="stat.label">
          <div class="stat-tile">
            <div class="stat-value">{{ stat.value }}<span>+</span></div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
          <div v-if="i < stats.length - 1" class="stat-divider"></div>
        </template>
      </div>
    </section>

    <!-- PHOTO GALLERY BY YEAR -->
    <section
      v-for="yearGroup in galleryByYear"
      :key="yearGroup.year"
      class="year-section"
    >
      <div class="year-heading">
        <span class="year-pill">{{ yearGroup.year }}</span>
        <span class="year-line-rule"></span>
      </div>

      <div
        v-for="event in yearGroup.events"
        :key="event.title"
        class="event-block"
      >
        <h4 class="event-title">{{ event.title }}</h4>
        <div class="photo-grid" :class="`photo-grid--${Math.min(event.photos.length, 4)}`">
          <div
            v-for="(photo, i) in event.photos"
            :key="i"
            class="photo-card"
          >
            <img :src="photo.src" :alt="photo.caption || event.title" />
            <div v-if="photo.caption" class="photo-caption">{{ photo.caption }}</div>
          </div>
        </div>
      </div>
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
  </div>
</template>

<script setup>
import pic1         from '../assets/pics.png'
import pic2         from '../assets/pics (1).png'
import pic3         from '../assets/pics (2).png'
import pic4         from '../assets/pics (3).png'
import historyPhoto from '../assets/history-photo.png'
import eventPhoto   from '../assets/event-photo.png'
import orgChart     from '../assets/Organization chart.png'
import misionVision from '../assets/Mission Vision.png'
import sheen        from '../assets/Sheen.png'

const stats = [
  {
    value: '10',
    label: 'Competitions Joined',
  },
  {
    value: '3',
    label: 'SSAAM Versions Built',
  },
  {
    value: '6',
    label: 'Major Events Hosted',
  },
  {
    value: '3',
    label: 'School Years Active',
  },
]

const galleryByYear = [
  {
    year: '2023',
    events: [
      {
        title: 'SSAAM V 1.0 Development',
        photos: [
          { src: pic3, caption: 'Development session' },
          { src: pic4, caption: 'Team collaboration' },
          { src: pic1, caption: 'System demo' },
          { src: pic2, caption: 'Project review' },
        ],
      },
      {
        title: 'DICT Philippine Startup Challenge 8',
        photos: [
          { src: sheen, caption: 'Team leader' },
          { src: pic3, caption: 'Pitch day' },
          { src: pic4, caption: 'Team presentation' },
          { src: orgChart, caption: 'Org structure' },
        ],
      },
    ],
  },
  {
    year: '2024',
    events: [
      {
        title: 'Startup 101 Workshop',
        photos: [
          { src: pic1, caption: 'Workshop proper' },
          { src: pic2, caption: 'Speaker session' },
          { src: pic3, caption: 'Group activity' },
          { src: pic4, caption: 'Participants' },
        ],
      },
      {
        title: 'SSAAM V 2.0 Development',
        photos: [
          { src: pic3, caption: 'Development sprint' },
          { src: pic4, caption: 'Feature testing' },
          { src: misionVision, caption: 'Mission & Vision' },
          { src: pic1, caption: 'Launch preparation' },
        ],
      },
      {
        title: 'DICT Philippine Startup Challenge 9',
        photos: [
          { src: pic2, caption: 'Pitch presentation' },
          { src: sheen, caption: 'Team on stage' },
          { src: pic3, caption: 'Competition day' },
          { src: pic4, caption: 'Team effort' },
        ],
      },
      {
        title: 'Zambasulta Business and Innovation Summit',
        photos: [
          { src: pic1, caption: 'Summit venue' },
          { src: pic2, caption: 'Innovation showcase' },
          { src: orgChart, caption: 'Team representation' },
          { src: pic3, caption: 'Networking' },
        ],
      },
    ],
  },
  {
    year: '2025',
    events: [
      {
        title: 'CCS IT Day "Techtopia"',
        photos: [
          { src: pic4, caption: 'Opening program' },
          { src: pic1, caption: 'Tech showcase' },
          { src: pic2, caption: 'Student exhibits' },
          { src: pic3, caption: 'Closing ceremony' },
        ],
      },
      {
        title: 'SSAAM V 3.0 Development',
        photos: [
          { src: sheen, caption: 'Project lead' },
          { src: pic4, caption: 'Planning phase' },
          { src: misionVision, caption: 'Mission alignment' },
          { src: pic1, caption: 'Testing session' },
        ],
      },
      {
        title: 'Mugna Startup Pitching Competition',
        photos: [
          { src: pic2, caption: 'Pitch day' },
          { src: pic3, caption: 'Judges\' panel' },
          { src: pic4, caption: 'Team on stage' },
          { src: orgChart, caption: 'Post-pitch' },
        ],
      },
      {
        title: 'DICT Philippine Startup Challenge 10',
        photos: [
          { src: pic1, caption: 'Competition proper' },
          { src: sheen, caption: 'Team representative' },
          { src: pic2, caption: 'Pitch presentation' },
          { src: pic3, caption: 'Team preparation' },
        ],
      },
      {
        title: 'University Week — College Attendance Committee',
        photos: [
          { src: pic4, caption: 'University Week event' },
          { src: pic1, caption: 'Attendance duty' },
          { src: pic2, caption: 'Team in action' },
          { src: misionVision, caption: 'Event proper' },
        ],
      },
    ],
  },
  {
    year: '2026',
    events: [
      {
        title: 'CCS General Assembly — College Attendance Committee',
        photos: [
          { src: pic3, caption: 'General assembly proper' },
          { src: pic4, caption: 'Committee at work' },
          { src: sheen, caption: 'Assembly session' },
          { src: orgChart, caption: 'Team coordination' },
        ],
      },
      {
        title: 'Intercollegiate Students\' Festival — College Attendance Committee',
        photos: [
          { src: pic1, caption: 'Festival opening' },
          { src: pic2, caption: 'Attendance committee' },
          { src: pic3, caption: 'Festival activities' },
          { src: misionVision, caption: 'Team representation' },
        ],
      },
    ],
  },
]

const awards = [
  {
    year: '2025',
    title: 'DICT Philippine Startup Challenge 10',
    description: 'Represented JRMSU at the national-level DICT startup competition for the third consecutive year.',
    tag: 'Competition',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M17 4h3v3a5 5 0 0 1-5 5M7 4H4v3a5 5 0 0 0 5 5M7 4h10v6a5 5 0 0 1-10 0V4z"/></svg>`,
  },
  {
    year: '2025',
    title: 'Mugna Startup Pitching Competition',
    description: 'Showcased a student-built startup on a regional stage, competing against teams across the region.',
    tag: 'Competition',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  },
  {
    year: '2025',
    title: 'CCS IT Day "Techtopia"',
    description: 'Organized and participated in the college-wide IT celebration showcasing student innovations.',
    tag: 'Event',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  },
  {
    year: '2024',
    title: 'Zambasulta Business & Innovation Summit',
    description: 'Represented the college at the regional business and innovation summit, networking with industry leaders.',
    tag: 'Summit',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  },
  {
    year: '2024',
    title: 'DICT Philippine Startup Challenge 9',
    description: 'Second consecutive year competing at the national DICT startup challenge, building on experience from PSC 8.',
    tag: 'Competition',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M17 4h3v3a5 5 0 0 1-5 5M7 4H4v3a5 5 0 0 0 5 5M7 4h10v6a5 5 0 0 1-10 0V4z"/></svg>`,
  },
  {
    year: '2023',
    title: 'SSAAM V 1.0 — First System Launch',
    description: 'Successfully developed and launched the first version of SSAAM, marking the organization\'s debut in real-world software development.',
    tag: 'Milestone',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="9 15 11 17 15 13"/></svg>`,
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

/* HEADER */
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

/*  STATS BAND */
.stats-band {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  background: rgba(248, 250, 252, 0.4);
  border-top: 1px solid rgba(15, 23, 42, 0.06);
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
  padding: 48px 24px;
  backdrop-filter: blur(8px);
}

.stats-band-inner {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.stat-tile {
  flex: 1;
  min-width: 140px;
  text-align: center;
  padding: 12px 32px;
}

.stat-divider {
  width: 1px;
  height: 52px;
  background: rgba(15, 23, 42, 0.08);
  flex-shrink: 0;
}

.stat-value {
  font-family: 'Unbounded', sans-serif;
  font-size: 2.8rem;
  font-weight: 700;
  color: #0f172a;
  line-height: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2px;
}

.stat-value span {
  font-size: 1.8rem;
  color: #2f9e83;
  margin-top: 4px;
}

.stat-label {
  font-size: 0.72rem;
  color: #64748b;
  margin-top: 8px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
}

/* YEAR SECTIONS */
.year-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.year-heading {
  display: flex;
  align-items: center;
  gap: 20px;
}

.year-pill {
  font-family: 'Unbounded', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  white-space: nowrap;
  flex-shrink: 0;
}

.year-line-rule {
  flex: 1;
  height: 1px;
  background: rgba(15, 23, 42, 0.1);
}

/* EVENT BLOCKS */
.event-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.event-title {
  font-family: 'Unbounded', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #334155;
  margin: 0;
  letter-spacing: 0.01em;
  text-transform: uppercase;
}

/* PHOTO GRID  */
.photo-grid {
  display: grid;
  gap: 12px;
}

.photo-grid--1 { grid-template-columns: 1fr; }
.photo-grid--2 { grid-template-columns: repeat(2, 1fr); }
.photo-grid--3 { grid-template-columns: repeat(3, 1fr); }
.photo-grid--4 { grid-template-columns: repeat(4, 1fr); }

.photo-card {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  background: #e2e8f0;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.07);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.photo-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 32px rgba(15, 23, 42, 0.14);
}

.photo-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.photo-card:hover img {
  transform: scale(1.05);
}

.photo-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.75) 0%, transparent 100%);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 20px 12px 10px;
  letter-spacing: 0.03em;
  opacity: 0;
  transition: opacity 0.25s ease;
}

.photo-card:hover .photo-caption {
  opacity: 1;
}

/* AWARDS GRID */
.awards-section {
  max-width: 1100px;
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

@media (max-width: 960px) {
  .awards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .photo-grid--4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .section-header {
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
  }

  .stats-band-inner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .stat-tile {
    padding: 16px 12px;
    border-bottom: 1px solid rgba(15, 23, 42, 0.08);
  }

  .stat-divider {
    display: none;
  }

  .awards-grid {
    grid-template-columns: 1fr;
  }

  .photo-grid--3,
  .photo-grid--4 {
    grid-template-columns: repeat(2, 1fr);
  }

  .photo-grid--2 {
    grid-template-columns: 1fr;
  }
}
</style>