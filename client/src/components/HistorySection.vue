<template>
  <div class="officers-page">
    <main>
      <!-- History -->
      <section class="history-section">
        <h2 class="section-title">[Our History]</h2>
        <p class="section-desc">
          From a small group of passionate IT students to a thriving organization
          at Jose Rizal Memorial State University — here's how the Creatives Society
          has grown across the years.
        </p>
      </section>

      <!-- Founder -->
      <section class="founder-section">
        <div class="founder-text">
          <h2 class="section-title left-aligned">[Our Founder]</h2>
          <p class="section-desc left-aligned">
            The Creatives Society was founded by Sheenlee, a visionary IT student
            at Panthers College of Computing Studies, who believed that creativity
            and technology go hand in hand. Under her leadership, the organization
            took its first steps toward becoming a premier student tech community
            at Jose Rizal Memorial State University.
          </p>
        </div>
        <div class="founder-images">
          <div class="founder-photo">
            <img :src="founderPhoto" alt="Founder" />
          </div>
          <div class="founder-placeholder"></div>
        </div>
      </section>

      <!-- Journey -->
      <section class="journey-section">
        <h2 class="section-title">[Our Journey]</h2>
        <p class="journey-subtitle">
          Milestones and accomplishments year by year, from SY 2023–2024 to present.
        </p>

        <!-- Timeline -->
        <div class="timeline">
          <div class="timeline-line"></div>

          <div
            v-for="(item, index) in timelineItems"
            :key="index"
            class="timeline-row"
          >
            <!-- Year marker -->
            <div class="year-marker">
              <div class="year-line top"></div>
              <span class="year-label">{{ item.year }}</span>
              <div class="year-line bottom"></div>
            </div>

            <!-- Left card -->
            <div class="timeline-half left">
              <div v-if="item.side === 'left'" class="timeline-card">
                <h3 class="card-title">{{ item.title }}</h3>
                <p class="card-text">{{ item.context }}</p>
                <div class="card-project-label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Activities</span>
                </div>
                <div class="project-grid">
                  <a
                    v-for="(p, i) in item.projects"
                    :key="i"
                    class="project-tile"
                    :class="{ empty: !p.image }"
                    href="#"
                    @click.prevent
                  >
                    <img v-if="p.image" :src="p.image" :alt="p.name || 'Activity'" />
                    <span v-if="p.name" class="project-tile-label">{{ p.name }}</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Right card -->
            <div class="timeline-half right">
              <div v-if="item.side === 'right'" class="timeline-card">
                <h3 class="card-title">{{ item.title }}</h3>
                <p class="card-text">{{ item.context }}</p>
                <div class="card-project-label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Activities</span>
                </div>
                <div class="project-grid">
                  <a
                    v-for="(p, i) in item.projects"
                    :key="i"
                    class="project-tile"
                    :class="{ empty: !p.image }"
                    href="#"
                    @click.prevent
                  >
                    <img v-if="p.image" :src="p.image" :alt="p.name || 'Activity'" />
                    <span v-if="p.name" class="project-tile-label">{{ p.name }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- End dot -->
          <div class="timeline-end-dot"></div>
        </div>
      </section>

      <!-- Content Footer -->
      <section class="content-footer">
        <h2 class="section-title">[Our Pillars]</h2>
        <p class="footer-desc">
          Everything we do is rooted in four core principles that guide every
          project, event, and initiative we take on as an organization.
        </p>

        <div class="footer-grid">
          <div v-for="item in contentItems" :key="item.title" class="footer-item">
            <h3 class="footer-item-title">{{ item.title }}</h3>
            <p class="footer-item-desc">{{ item.description }}</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import founderPhoto from '../assets/sheen.png'
import pic1 from '../assets/pics.png'
import pic2 from '../assets/pics (1).png'
import pic3 from '../assets/pics (2).png'
import pic4 from '../assets/pics (3).png'
import historyPhoto from '../assets/history-photo.png'
import eventPhoto from '../assets/event-photo.png'

const timelineItems = [
  {
    year: '2023',
    side: 'left',
    title: 'SY 2023–2024',
    context:
      'The Creatives Society launched its first major initiative — SSAAM V 1.0 Development — a student-built system that marked the beginning of the organization\'s journey into real-world software development. The team also competed in the DICT Philippine Startup Challenge 8, gaining national exposure and invaluable startup experience.',
    projects: [
      { name: 'SSAAM V 1.0', image: pic1 },
      { name: 'DICT PSC 8', image: pic2 },
      { name: 'Startup 101', image: pic3 },
    ],
  },
  {
    year: '2024',
    side: 'right',
    title: 'SY 2024–2025',
    context:
      'A year of growth and wider reach. The organization developed SSAAM V 2.0, competed in the DICT Philippine Startup Challenge 9, and represented JRMSU at the Zambasulta Business and Innovation Summit. The year concluded with the electrifying CCS IT Day "Techtopia" — a celebration of technology, creativity, and student talent.',
    projects: [
      { name: 'SSAAM V 2.0', image: pic4 },
      { name: 'DICT PSC 9', image: historyPhoto },
      { name: 'Zambasulta Summit', image: eventPhoto },
    ],
  },
  {
    year: '2025',
    side: 'left',
    title: 'SY 2025–2026 (Part 1)',
    context:
      'The Creatives Society stepped up with SSAAM V 3.0 Development and joined the Mugna Startup Pitching Competition, showcasing student-built innovations on a regional stage. The team also competed in the DICT Philippine Startup Challenge 10, continuing its streak of national-level participation.',
    projects: [
      { name: 'SSAAM V 3.0', image: pic1 },
      { name: 'Mugna Startup', image: pic2 },
      { name: 'DICT PSC 10', image: pic3 },
    ],
  },
  {
    year: '2026',
    side: 'right',
    title: 'SY 2025–2026 (Part 2)',
    context:
      'The organization took on a broader campus role — serving as the College Attendance Committee for the University Week, the CCS General Assembly, and the Intercollegiate Students\' Festival. These responsibilities reflected the growing trust and recognition the Creatives Society has earned within Jose Rizal Memorial State University.',
    projects: [
      { name: 'University Week', image: pic4 },
      { name: 'CCS General Assembly', image: historyPhoto },
      { name: 'Intercollegiate Festival', image: eventPhoto },
    ],
  },
]

const contentItems = [
  {
    title: 'Community',
    description: 'A vibrant community of IT students united by creativity and a drive to make a difference.',
  },
  {
    title: 'Learning',
    description: 'Continuous skill-building through workshops, seminars, and hands-on project development.',
  },
  {
    title: 'Innovation',
    description: 'Building real-world solutions like SSAAM that create impact within and beyond the campus.',
  },
  {
    title: 'Collaboration',
    description: 'Working together across disciplines — design, development, and strategy — to achieve shared goals.',
  },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap');

.officers-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  position: relative;
  min-height: 100vh;
  color: #111827;
}

h1, h2, h3, h4, h5, h6,
.section-title,
.card-title,
.footer-item-title {
  font-family: 'Unbounded', sans-serif;
  font-weight: 600;
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 18px;
  letter-spacing: 0.2px;
}

.section-title.left-aligned {
  text-align: left;
}

main {
  padding-top: 0;
  position: relative;
  z-index: 0;
}

.section-desc {
  font-size: 15px;
  font-weight: 400;
  color: #94a3b8;
  line-height: 1.7;
  text-align: center;
}

.section-desc.left-aligned {
  text-align: left;
}

/* ============ HEADER ============ */
.history-section {
  padding: 64px 32px 24px;
  text-align: center;
  max-width: 620px;
  margin: 0 auto;
}

/* ============ FOUNDER ============ */
.founder-section {
  padding: 24px 64px 64px;
  max-width: 860px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 48px;
}

.founder-text {
  flex: 1;
  max-width: 380px;
}

.founder-images {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
}

.founder-photo {
  width: 136px;
  height: 172px;
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(135deg, #b30b1c 0%, #7a0712 100%);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.18);
}

.founder-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.founder-placeholder {
  width: 136px;
  height: 172px;
  border-radius: 14px;
  background: #f1f3f6;
  border: 1px solid #e7eaf0;
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.05);
}

/* ============ JOURNEY / TIMELINE ============ */
.journey-section {
  padding: 48px 32px 64px;
}

.journey-section .section-title {
  text-align: center;
}

.journey-subtitle {
  font-size: 13px;
  color: #94a3b8;
  text-align: center;
  margin-bottom: 48px;
  font-weight: 400;
}

.timeline {
  position: relative;
  max-width: 920px;
  margin: 0 auto;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  background: #d1d5db;
  transform: translateX(-50%);
}

.timeline-row {
  position: relative;
  display: flex;
  align-items: flex-start;
}

.year-marker {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 28px;
  z-index: 2;
}

.year-line {
  width: 1px;
  height: 18px;
  background: #d1d5db;
}

.year-label {
  font-size: 11px;
  font-weight: 600;
  color: #6b7280;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 4px 10px;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.4px;
}

.timeline-half {
  width: 50%;
  padding-bottom: 70px;
  padding-top: 28px;
}

.timeline-half.left {
  padding-right: 40px;
}

.timeline-half.right {
  padding-left: 40px;
}

.timeline-card {
  background: #ffffff;
  border: 1px solid #ececf2;
  border-radius: 16px;
  padding: 22px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.05);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.timeline-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.08);
}

.card-title {
  font-size: 18px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 10px;
}

.card-text {
  font-size: 13px;
  color: #94a3b8;
  line-height: 1.7;
  margin-bottom: 16px;
  font-family: 'Inter', sans-serif;
}

.card-project-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 12px;
  color: #475569;
  background: #f5f6f8;
  border: 1px solid #ebedf1;
  border-radius: 999px;
  padding: 4px 10px;
  font-family: 'Inter', sans-serif;
}

.card-project-label svg {
  flex-shrink: 0;
}

.card-project-label span {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}

/* ============ PROJECTS GRID ============ */
.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 4px;
}

.project-tile {
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: 8px;
  overflow: hidden;
  background: #e5e7eb;
  text-decoration: none;
  display: block;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.project-tile.empty {
  background: linear-gradient(135deg, #e8eaee 0%, #d6d9df 100%);
  cursor: default;
}

.project-tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.project-tile:not(.empty):hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 22px rgba(15, 23, 42, 0.18);
}

.project-tile:not(.empty):hover img {
  transform: scale(1.06);
}

.project-tile-label {
  position: absolute;
  left: 6px;
  bottom: 6px;
  background: rgba(15, 23, 42, 0.78);
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  padding: 3px 7px;
  border-radius: 4px;
  letter-spacing: 0.3px;
  font-family: 'Inter', sans-serif;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.project-tile:not(.empty):hover .project-tile-label {
  opacity: 1;
  transform: translateY(0);
}

.timeline-end-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #d1d5db;
  border: 2px solid #ffffff;
  box-shadow: 0 0 0 1px #d1d5db;
  margin: 8px auto 0;
  position: relative;
  z-index: 2;
}

/* ============ CONTENT FOOTER ============ */
.content-footer {
  padding: 64px 32px 80px;
  text-align: center;
  color: #111827;
}

.footer-desc {
  font-size: 14px;
  font-weight: 400;
  color: #94a3b8;
  line-height: 1.7;
  max-width: 520px;
  margin: 0 auto 40px;
  font-family: 'Inter', sans-serif;
}

.footer-grid {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 22px;
  text-align: left;
}

.footer-item {
  background: #1f2434;
  padding: 24px;
  border-radius: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.04);
}

.footer-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.18);
}

.footer-item-title {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 10px;
  letter-spacing: -0.2px;
}

.footer-item-desc {
  font-size: 13px;
  line-height: 1.65;
  color: #94a3b8;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
}

/* ============ RESPONSIVE ============ */
@media (max-width: 768px) {
  .founder-section {
    flex-direction: column;
    padding: 30px 20px 50px;
    align-items: center;
    text-align: center;
  }

  .founder-text {
    max-width: 100%;
    text-align: center;
  }

  .founder-text .section-title.left-aligned,
  .founder-text .section-desc.left-aligned {
    text-align: center;
  }

  .founder-images {
    justify-content: center;
  }

  .journey-section {
    padding: 30px 20px 40px;
  }

  .timeline-line {
    left: 18px;
    transform: none;
  }

  .timeline-row {
    flex-direction: column;
    align-items: stretch;
    padding-left: 40px;
  }

  .year-marker {
    position: relative;
    left: -22px;
    transform: none;
    flex-direction: row;
    align-items: center;
    margin-bottom: 12px;
    top: 0;
    background: #fff;
    padding: 4px 0;
  }

  .year-line {
    display: none;
  }

  .timeline-half {
    width: 100%;
    padding: 0 0 24px 0;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
