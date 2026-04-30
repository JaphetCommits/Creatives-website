<template>
  <div class="officers-page">
    <main>
      <!-- History -->
      <section class="history-section">
        <h2 class="section-title">[Our History]</h2>
        <p class="section-desc">
          The Campus Developers Organization is a community of passionate students
          dedicated to learning, building, and innovating through technology.
        </p>
      </section>

      <!-- Founder -->
      <section class="founder-section">
        <div class="founder-text">
          <h2 class="section-title left-aligned">[Our Founder]</h2>
          <p class="section-desc left-aligned">
            The Campus Developers Organization is a community of passionate
            students dedicated to learning, building, and innovating through
            technology.
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
          The Campus Developers Organization is a community of passionate students.
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
                <h3 class="card-title">Context</h3>
                <p class="card-text">{{ item.context }}</p>
                <div class="card-project-label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Project</span>
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
                    <img v-if="p.image" :src="p.image" :alt="p.name || 'Project'" />
                    <span v-if="p.name" class="project-tile-label">{{ p.name }}</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Right card -->
            <div class="timeline-half right">
              <div v-if="item.side === 'right'" class="timeline-card">
                <h3 class="card-title">Context</h3>
                <p class="card-text">{{ item.context }}</p>
                <div class="card-project-label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Project</span>
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
                    <img v-if="p.image" :src="p.image" :alt="p.name || 'Project'" />
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
        <h2 class="section-title">[Content]</h2>
        <p class="footer-desc">
          Our organization brings together aspiring programmers, designers, and tech
          enthusiasts who share a common goal of developing skills and creating impactful
          digital solutions.
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
import founderPhoto from '../assets/d8135965-490e-4bf4-9144-bfbf783f7f5b_removalai_preview.png'
import pic1 from '../assets/pics.png'
import pic2 from '../assets/pics (1).png'
import pic3 from '../assets/pics (2).png'
import pic4 from '../assets/pics (3).png'

const timelineItems = [
  {
    year: '2020',
    side: 'left',
    context:
      'The Campus Developers Organization was founded in 2020 as a group of passionate students dedicated to learning, programming, technology, and innovation. The goal is to create a supportive platform that enables our students to meet their learning development needs.',
    projects: [
      { name: 'CodeBase', image: pic1 },
      { name: 'Pulse UI', image: pic2 },
      { name: 'NightOwl', image: pic3 },
    ],
  },
  {
    year: '2021',
    side: 'right',
    context:
      'In 2021 we kicked off our first internal hackathon and shipped tooling to support member onboarding, team formation, and collaborative development across multiple curriculums.',
    projects: [
      { name: 'Hackathon', image: pic4 },
      { name: 'Onboard', image: pic1 },
      { name: 'Studio', image: pic2 },
    ],
  },
  {
    year: '2022',
    side: 'left',
    context:
      'A year of growth — we expanded into design, mobile, and game development tracks, mentored junior batches, and ran our first community-facing showcase.',
    projects: [
      { name: 'Design Lab', image: pic3 },
      { image: null },
      { image: null },
    ],
  },
  {
    year: '2023',
    side: 'right',
    context:
      'We partnered with the college on production-ready projects, contributed to open source, and launched our annual Creatives Conference featuring student speakers.',
    projects: [
      { image: null },
      { image: null },
      { image: null },
    ],
  },
]

const contentItems = [
  {
    title: 'Community',
    description: 'A vibrant community of developers and tech enthusiasts.',
  },
  {
    title: 'Learning',
    description: 'Continuous learning and skill development opportunities.',
  },
  {
    title: 'Innovation',
    description: 'Building innovative projects and solutions.',
  },
  {
    title: 'Collaboration',
    description: 'Working together to achieve common goals.',
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
