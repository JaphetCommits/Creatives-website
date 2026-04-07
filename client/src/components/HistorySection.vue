<template>
  <div class="officers-page">
    <!-- Main Content (without navbar) -->
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
          </div>
          <div class="founder-placeholder"></div>
        </div>
      </section>

      <!-- Journey -->
      <section class="journey-section">
        <h2 class="section-title">[ Our Journey]</h2>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Project</span>
                </div>
                <div class="card-image-placeholder"></div>
              </div>
            </div>

            <!-- Right card -->
            <div class="timeline-half right">
              <div v-if="item.side === 'right'" class="timeline-card">
                <h3 class="card-title">Context</h3>
                <p class="card-text">{{ item.context }}</p>
                <div class="card-project-label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Project</span>
                </div>
                <div class="card-image-placeholder"></div>
              </div>
            </div>
          </div>

          <!-- End dot -->
          <div class="timeline-end-dot"></div>
        </div>
      </section>

      <!-- Content Footer with Table -->
      <section class="content-footer">
        <h2 class="section-title white">[Content]</h2>
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
const timelineItems = [
  {
    year: '2020',
    side: 'left',
    context:
      'The Campus Developers Organization was founded in 2019 as a group of passionate students dedicated to learning, programming, technology, and innovation. The goal is to create a supportive platform that enables our students to meet their learning development needs.',
  },
  {
    year: '2021',
    side: 'right',
    context:
      'The Campus Developers Organization was founded in 2019 as a group of passionate students dedicated to learning, programming, technology, and innovation. The goal is to create a supportive platform that enables our students to meet their learning development needs.',
  },
  {
    year: '2022',
    side: 'left',
    context:
      'The Campus Developers Organization was founded in 2019 as a group of passionate students dedicated to learning, programming, technology, and innovation. The goal is to create a supportive platform that enables our students to meet their learning development needs.',
  },
  {
    year: '2023',
    side: 'right',
    context:
      'The Campus Developers Organization was founded in 2019 as a group of passionate students dedicated to learning, programming, technology, and innovation. The goal is to create a supportive platform that enables our students to meet their learning development needs.',
  },
]

const contentItems = [
  {
    title: 'Community',
    description: 'A vibrant community of developers and tech enthusiasts'
  },
  {
    title: 'Learning',
    description: 'Continuous learning and skill development opportunities'
  },
  {
    title: 'Innovation',
    description: 'Building innovative projects and solutions'
  },
  {
    title: 'Collaboration',
    description: 'Working together to achieve common goals'
  },
]

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap');


.officers-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-image: 
    linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
  background-size: 48px 48px;   
  min-height: 100vh;
  color: #111827;
}

/* All headings use Unbounded */
h1, h2, h3, h4, h5, h6,
.section-title,
.card-title,
.footer-item-title {
  font-family: 'Unbounded', sans-serif;
  font-weight: 600;
}

/* Section titles – larger */
.section-title {
  font-size: 28px;      
  font-weight: 700;
  color: #111827;
  margin-bottom: 18px;   
}

.section-title.white {
  color: #ffffff;
}

.section-title.left-aligned {
  text-align: left;
}


main {
  padding-top: 0;
}


.section-desc {
  font-size: 16px;       
  font-weight: 400;
  color: #9ca3af;
  line-height: 1.7;
  text-align: center;
}

.section-desc.left-aligned {
  text-align: left;
}

.history-section {
  padding: 64px 32px;
  text-align: center;
  max-width: 620px;      /* slightly wider to accommodate larger text */
  margin: 0 auto;
}

.founder-section {
  padding: 40px 64px;
  max-width: 860px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  gap: 48px;
}

.founder-text {
  flex: 1;
  max-width: 380px;      /* slightly wider */
}

.founder-images {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
}

.founder-photo {
  width: 136px;
  height: 172px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

.founder-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.founder-placeholder {
  width: 136px;
  height: 172px;
  border-radius: 10px;
  background: #e5e7eb;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

.journey-section {
  padding: 48px 32px;
}

.journey-section .section-title {
  text-align: center;
}

.journey-subtitle {
  font-size: 14px;       /* increased from 12px */
  color: #f87171;
  text-align: center;
  margin-bottom: 48px;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
}

.timeline {
  position: relative;
  max-width: 860px;
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
  height: 20px;
  background: #d1d5db;
}

.year-label {
  font-size: 12px;       /* increased from 10px */
  font-weight: 500;
  color: #9ca3af;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  padding: 4px 8px;      /* slightly larger */
  font-family: 'Inter', sans-serif;
}

.timeline-half {
  width: 50%;
  padding-bottom: 60px;
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
  border: 1px solid #f3f4f6;
  border-radius: 14px;
  padding: 20px;         /* increased padding */
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
}

.card-title {
  font-size: 16px;       /* increased from 13px */
  font-weight: 600;
  color: #111827;
  margin-bottom: 12px;
}

.card-text {
  font-size: 13px;       /* increased from 11px */
  font-weight: 400;
  color: #9ca3af;
  line-height: 1.65;
  margin-bottom: 12px;
  font-family: 'Inter', sans-serif;
}

.card-project-label {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 12px;
  color: #6b7280;
  font-family: 'Inter', sans-serif;
}

.card-project-label svg {
  flex-shrink: 0;
}

.card-project-label span {
  font-size: 12px;       /* increased from 11px */
  font-weight: 500;
  font-family: 'Inter', sans-serif;
}

.card-image-placeholder {
  width: 100%;
  height: 100px;         /* increased height */
  background: #e5e7eb;
  border-radius: 8px;
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

.content-footer {
  padding: 80px 32px;
  text-align: center;
  color: black;
}

.footer-desc {
  font-size: 15px;       /* increased from 13px */
  font-weight: 400;
  color: #9ca3af;
  line-height: 1.7;
  max-width: 480px;      /* slightly wider */
  margin: 0 auto 48px auto;
  font-family: 'Inter', sans-serif;
}

.footer-grid {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  text-align: left;
}

.footer-item {
  background: #1f2937;
  padding: 28px;         /* increased padding */
  border-radius: 16px;
  transition: transform 0.2s ease;
}

.footer-item:hover {
  transform: translateY(-4px);
}

.footer-item-title {
  font-size: 20px;       /* increased from 18px */
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 14px;
  letter-spacing: -0.2px;
}

.footer-item-desc {
  font-size: 14px;       /* increased from 13px */
  line-height: 1.6;
  color: #9ca3af;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
}

@media (max-width: 768px) {
  .founder-section {
    flex-direction: column;
    padding: 40px 20px;
    align-items: center;
  }
  .founder-text {
    max-width: 100%;
  }
  .timeline-half.left {
    padding-right: 20px;
  }
  .timeline-half.right {
    padding-left: 20px;
  }
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

/* Mobile view */
@media (max-width: 768px) {
  .founder-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 40px 20px;
  }

  .founder-text {
    max-width: 100%;
    text-align: center;
  }

  .founder-text .section-title.left-aligned {
    text-align: center;
  }

  .founder-text .section-desc.left-aligned {
    text-align: center;
  }

  .founder-images {
    justify-content: center;
  }

  .journey-section {
    padding: 40px 20px;
  }

  .timeline-half.left,
  .timeline-half.right {
    width: 100%;
    padding: 0;
  }

  .timeline-half.left {
    padding-bottom: 40px;
    padding-right: 0;
  }

  .timeline-half.right {
    padding-bottom: 40px;
    padding-left: 0;
  }

  .timeline-row {
    flex-direction: column;
    align-items: center;
  }

  .year-marker {
    position: relative;
    left: auto;
    transform: none;
    margin-bottom: 16px;
    top: 0;
  }

  .timeline-line {
    display: none;
  }

  .timeline-card {
    padding: 16px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>