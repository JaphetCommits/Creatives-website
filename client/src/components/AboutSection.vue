<template>
  <div class="about-page">
    <main>
      <!-- About Us -->
      <section class="intro-block">
        <h2 class="block-title">[About Us]</h2>
        <p class="block-desc">
          The Campus Developers Organization is a community of passionate students
          dedicated to learning, building, and innovating through technology. Our
          organization brings together aspiring programmers, designers, and tech
          enthusiasts who share a common goal of developing skills and creating impactful
          digital solutions.
        </p>
      </section>

      <!-- Why We Exist -->
      <section class="intro-block">
        <h2 class="block-title">[Why We Exist]</h2>
        <p class="block-desc">
          The Campus Developers Organization is a community of passionate students
          dedicated to learning, building, and innovating through technology. Our
          organization brings together aspiring programmers, designers, and tech
          enthusiasts who share a common goal of developing skills and creating impactful
          digital solutions.
        </p>
      </section>

      <!-- Mission & Vision (dark band, side by side cards) -->
      <section class="dark-band">
        <div class="dark-band-inner">
          <article class="mv-card">
            <div class="mv-icon" aria-hidden="true">
              <!-- graduation cap icon -->
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 10L12 5 2 10l10 5 10-5z" />
                <path d="M6 12v5c3 2 9 2 12 0v-5" />
              </svg>
            </div>
            <h3 class="mv-title">Our Mission</h3>
            <p class="mv-desc">
              The Creatives Society is committed to developing its members into well-rounded IT professionals by providing a dynamic and inclusive environment that fosters technical excellence, creative growth, and ethical responsibility. Through mentorship programs, hands-on projects, seminars, workshops, and community outreach initiatives, the organization empowers its members to hone their skills, embrace innovation, and contribute positively to society — all while upholding the values of integrity, professionalism, and teamwork that define the spirit of the Creatives Society.
            </p>
          </article>

          <article class="mv-card">
            <div class="mv-icon" aria-hidden="true">
              <!-- target/eye icon -->
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <h3 class="mv-title">Our Vision</h3>
            <p class="mv-desc">
              The Creatives Society envisions itself as a premier student organization that nurtures technically competent, ethically grounded, and creatively driven Information Technology professionals — individuals who are not only equipped to meet the demands of a rapidly evolving digital world, but who also serve as catalysts for innovation, collaboration, and meaningful community impact within and beyond Jose Rizal Memorial State University.
            </p>
          </article>
        </div>
      </section>

      <!-- Core Values -->
      <section class="core-values">
        <h2 class="cv-title">Our Core Values</h2>
        <p class="cv-intro">
          We stand out through our commitment to excellence, innovative teaching methods,
          and student success.
        </p>

        <div class="values-grid">
          <article class="value-card" v-for="value in values" :key="value.title">
            <div class="value-icon" aria-hidden="true" v-html="value.icon"></div>
            <h3 class="value-title">{{ value.title }}</h3>
            <p class="value-desc">{{ value.desc }}</p>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
const values = [
  {
    title: 'Integrity',
    desc: 'We strive for excellence in everything we do, from curriculum development to student support.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15 8.6 22 9.3 17 14 18.5 21 12 17.7 5.5 21 7 14 2 9.3 9 8.6 12 2"/></svg>`,
  },
  {
    title: 'Resilience',
    desc: 'We strive for excellence in everything we do, from curriculum development to student support.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
  },
  {
    title: 'Excellence',
    desc: 'We strive for excellence in everything we do, from curriculum development to student support.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0V4z"/><path d="M17 5h2a2 2 0 0 1 0 4h-2"/><path d="M7 5H5a2 2 0 0 0 0 4h2"/></svg>`,
  },
  {
    title: 'Altruism',
    desc: 'We strive for excellence in everything we do, from curriculum development to student support.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M21 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap');

.about-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  position: relative;
  color: #111827;
  width: 100%;
}

main {
  width: 100%;
}

/* ============ INTRO BLOCKS ============ */
.intro-block {
  max-width: 720px;
  margin: 0 auto;
  padding: 56px 24px 24px;
  text-align: center;
}

.block-title {
  font-family: 'Unbounded', sans-serif;
  font-size: 34px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 22px;
  letter-spacing: 0.2px;
}

.block-desc {
  font-size: 15px;
  color: #94a3b8;
  line-height: 1.85;
  max-width: 620px;
  margin: 0 auto;
}

/* ============ MISSION & VISION DARK BAND ============ */
.dark-band {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: #1f2434;
  padding: 70px 24px;
  margin-top: 60px;
  margin-bottom: 60px;
}

.dark-band-inner {
  max-width: 980px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.mv-card {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.015));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 30px 28px;
  color: #e2e8f0;
}

.mv-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  margin-bottom: 18px;
}

.mv-icon svg {
  width: 22px;
  height: 22px;
}

.mv-title {
  font-family: 'Unbounded', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 12px;
}

.mv-desc {
  font-size: 13px;
  color: #94a3b8;
  line-height: 1.7;
}

/* ============ CORE VALUES ============ */
.core-values {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px 80px;
  text-align: center;
}

.cv-title {
  font-family: 'Unbounded', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 10px;
}

.cv-intro {
  font-size: 13px;
  color: #94a3b8;
  line-height: 1.7;
  max-width: 520px;
  margin: 0 auto 40px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}

.value-card {
  background: #f5f6f8;
  border: 1px solid #ebedf1;
  border-radius: 14px;
  padding: 22px 20px;
  text-align: left;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.value-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.08);
}

.value-icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1f2937;
  margin-bottom: 18px;
}

.value-icon :deep(svg) {
  width: 18px;
  height: 18px;
}

.value-title {
  font-family: 'Unbounded', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 10px;
}

.value-desc {
  font-size: 12px;
  color: #94a3b8;
  line-height: 1.7;
}

/* ============ RESPONSIVE ============ */
@media (max-width: 900px) {
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .block-title {
    font-size: 26px;
  }

  .dark-band {
    padding: 50px 20px;
  }

  .dark-band-inner {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .intro-block {
    padding: 36px 20px 12px;
  }
}

@media (max-width: 540px) {
  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>
