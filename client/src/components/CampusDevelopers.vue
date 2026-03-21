<template>
  <div class="page">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="logo.svg">CREATIVE</div>
      <div class="nav-links">
        <a href="#" v-for="link in navLinks" :key="link">{{ link }}</a>
      </div>
    </nav>

    <!-- the Main Content -->
    <main>
       <!-- ato ang History --> 
      <section class="history-section">
        <h2 class="section-title">[Our History]</h2>
        <p class="section-desc">
          The Campus Developers Organization is a community of passionate students
          dedicated to learning, building, and innovating through technology.
        </p>
      </section>

      <!-- atong Founder -->
      <section class="founder-section">
        <div class="founder-text">
          <h2 class="section-title left-aligned">[Our Founder]</h2>
          <p class="section-desc left-aligned">
            The Campus Developers Organization is a community of passionate
            students dedicated to learning, building, and innovating through
            technology.
          </p>
        </div>
        <div class="Sheenle'.png founder-images">
          <div class="founder-photo">
            <img src="/images/sheele'.png" alt="Founder" />
          </div>
          <div class="founder-placeholder"></div>
        </div>
      </section>

      <!--  Journey nato -->
      <section class="journey-section">
        <h2 class="section-title">[ Our Journey]</h2>
        <p class="journey-subtitle">
          The Campus Developers Organization is a community of passionate students.
        </p>

        <!-- Timeline ni -->
        <div class="timeline">
          <div class="timeline-line"></div>

          <div
            v-for="(item, index) in timelineItems"
            :key="index"
            class="timeline-row"
          >
            <!-- Year marker nato -->
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
                <div class="card-images">
                  <div
                    v-for="(img, i) in item.images"
                    :key="i"
                    class="card-img"
                    :style="{ background: img.gradient }"
                  ></div>
                </div>
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
                <div class="card-images">
                  <div
                    v-for="(img, i) in item.images"
                    :key="i"
                    class="card-img"
                    :style="{ background: img.gradient }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- End dot -->
          <div class="timeline-end-dot"></div>
        </div>
      </section>

      <!-- Content Footer nato -->
      <section class="content-footer">
        <h2 class="section-title white">[Content]</h2>
        <p class="footer-desc">
          Our organization brings together aspiring programmers, designers, and tech
          enthusiasts who share a common goal of developing skills and creating impactful
          digital solutions.
        </p>
      </section>
    </main>
  </div>
</template>

<script setup>
const navLinks = ['Vision', 'Mission', 'Officers', 'Achievements']

const timelineItems = [
  {
    year: '2020',
    side: 'left',
    context:
      'The Campus Developers Organization was founded in 2019 as a group of passionate students dedicated to learning, programming, technology, and innovation. The goal is to create a supportive platform that enables our students to meet their learning development needs.',
    images: [
      { gradient: 'linear-gradient(135deg, #d1d5db, #e5e7eb)' },
      { gradient: 'linear-gradient(135deg, #818cf8, #a855f7)' },
      { gradient: 'linear-gradient(135deg, #9ca3af, #d1d5db)' },
    ],
  },
  {
    year: '2021',
    side: 'right',
    context:
      'The Campus Developers Organization was founded in 2019 as a group of passionate students dedicated to learning, programming, technology, and innovation. The goal is to create a supportive platform that enables our students to meet their learning development needs.',
    images: [
      { gradient: 'linear-gradient(135deg, #7c3aed, #4f46e5)' },
      { gradient: 'linear-gradient(135deg, #c084fc, #f472b6)' },
      { gradient: 'linear-gradient(135deg, #9ca3af, #d1d5db)' },
    ],
  },
  {
    year: '2022',
    side: 'left',
    context:
      'The Campus Developers Organization was founded in 2019 as a group of passionate students dedicated to learning, programming, technology, and innovation. The goal is to create a supportive platform that enables our students to meet their learning development needs.',
    images: [
      { gradient: 'linear-gradient(135deg, #d1d5db, #e5e7eb)' },
      { gradient: 'linear-gradient(135deg, #9ca3af, #d1d5db)' },
      { gradient: 'linear-gradient(135deg, #d1d5db, #e5e7eb)' },
    ],
  },
  {
    year: '2023',
    side: 'right',
    context:
      'The Campus Developers Organization was founded in 2019 as a group of passionate students dedicated to learning, programming, technology, and innovation. The goal is to create a supportive platform that enables our students to meet their learning development needs.',
    images: [
      { gradient: 'linear-gradient(135deg, #9ca3af, #d1d5db)' },
      { gradient: 'linear-gradient(135deg, #d1d5db, #e5e7eb)' },
      { gradient: 'linear-gradient(135deg, #9ca3af, #d1d5db)' },
    ],
  },
]
</script>
<CampusDevelopers />

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.page {
  font-family: 'Poppins', sans-serif;
  background: #ffffff;
  min-height: 100vh;
  color: #111827;
}

/*  sa Navbar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: #ffffff;
  border-bottom: 1px solid #f3f4f6;
  padding: 12px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: #111827;
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-links a {
  font-size: 12px;
  font-weight: 400;
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: #111827;
}

/* sa Main */
main {
  padding-top: 56px;
}

/*  sa Section title */
.section-title {
  font-size: 22px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 14px;
}

.section-title.left-aligned {
  text-align: left;
}

.section-title.white {
  color: #ffffff;
}

.section-desc {
  font-size: 13px;
  font-weight: 400;
  color: #9ca3af;
  line-height: 1.7;
  text-align: center;
}

.section-desc.left-aligned {
  text-align: left;
}

/*  sa History */
.history-section {
  padding: 64px 32px;
  text-align: center;
  max-width: 520px;
  margin: 0 auto;
}

/*  sa Founder */
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
  max-width: 340px;
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

/* sa Journey */
.journey-section {
  padding: 48px 32px;
}

.journey-section .section-title {
  text-align: center;
}

.journey-subtitle {
  font-size: 12px;
  color: #f87171;
  text-align: center;
  margin-bottom: 48px;
  font-weight: 400;
}

/*sa Timeline */
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
  font-size: 10px;
  font-weight: 500;
  color: #9ca3af;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  padding: 2px 6px;
  font-family: 'Poppins', sans-serif;
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

/* sa Timeline Card */
.timeline-card {
  background: #ffffff;
  border: 1px solid #f3f4f6;
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
}

.card-title {
  font-size: 13px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 8px;
  font-family: 'Poppins', sans-serif;
}

.card-text {
  font-size: 11px;
  font-weight: 400;
  color: #9ca3af;
  line-height: 1.65;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
}

.card-project-label {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
  color: #6b7280;
}

.card-project-label svg {
  flex-shrink: 0;
}

.card-project-label span {
  font-size: 11px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
}

.card-images {
  display: flex;
  gap: 8px;
}

.card-img {
  flex: 1;
  height: 60px;
  border-radius: 8px;
}

/* End dot */
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

/* Content Footer */
.content-footer {
  background: #111827;
  padding: 80px 32px;
  text-align: center;
}

.footer-desc {
  font-size: 13px;
  font-weight: 400;
  color: #9ca3af;
  line-height: 1.7;
  max-width: 420px;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
}
</style>
