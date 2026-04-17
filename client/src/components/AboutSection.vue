<template>
  <div class="officers-page">
    <main>
      <!-- About Us -->
      <section class="history-section">
        <h2 class="section-title">[About Us]</h2>
        <p class="section-desc">
          The Campus Developers Organization is a community of passionate students
          dedicated to learning, building, and innovating through technology. Our
          organization brings together aspiring programmers, designers, and tech
          enthusiasts who share a common goal of developing skills and creating
          impactful digital solutions.
        </p>
      </section>

      <!-- Why We Exist -->
      <section class="history-section">
        <h2 class="section-title">[Why We Exist]</h2>
        <p class="section-desc">
          The Campus Developers Organization is a community of passionate students
          dedicated to learning, building, and innovating through technology. Our
          organization brings together aspiring programmers, designers, and tech
          enthusiasts who share a common goal of developing skills and creating
          impactful digital solutions.
        </p>
      </section>

      <!-- Mission & Vision (side‑by‑side) -->
      <div class="mission-vision-section">
        <div class="mission-vision-card">
          <div class="card-icon">📋</div>
          <h2 class="mission-vision-title">Our Mission</h2>
          <p class="mission-vision-desc">
            Panthers College of computing studies Panthers College of computing
            studies Panthers College of computing studies College of computing
            studies
          </p>
        </div>
        <div class="mission-vision-card">
          <div class="card-icon">🎯</div>
          <h2 class="mission-vision-title">Our Vision</h2>
          <p class="mission-vision-desc">
            Panthers College of computing studies Panthers College of computing
            studies Panthers College of computing studies College of Computing
            Studies
          </p>
        </div>
      </div>

      <!-- Core Values -->
      <div class="core-values-section">
        <h2 class="section-title">Our Core Values</h2>
        <p class="core-values-intro">
          We stand out through our commitment to excellence, innovative teaching methods,
          and student success.
        </p>
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">⭐</div>
            <h3 class="value-title">Integrity</h3>
            <p class="value-desc">
              We strive for excellence in everything we do, from curriculum development to student support.
            </p>
          </div>
          <div class="value-card">
            <div class="value-icon">💖</div>
            <h3 class="value-title">Resilience</h3>
            <p class="value-desc">
              We strive for excellence in everything we do, from curriculum development to student support.
            </p>
          </div>
          <div class="value-card">
            <div class="value-icon">🎯</div>
            <h3 class="value-title">Excellence</h3>
            <p class="value-desc">
              We strive for excellence in everything we do, from curriculum development to student support.
            </p>
          </div>
          <div class="value-card">
            <div class="value-icon">🤝</div>
            <h3 class="value-title">Altruism</h3>
            <p class="value-desc">
              We strive for excellence in everything we do, from curriculum development to student support.
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
// No additional logic
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap');

.officers-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  padding: 0;
  margin: 0;
  color: #111827;
}

h1, h2, h3, h4, h5, h6,
.section-title,
.card-title,
.footer-item-title,
.value-title {
  font-family: 'Unbounded', sans-serif;
  font-weight: 600;
}

.section-title {
  font-size: 28px;      
  font-weight: 700;
  color: #000000;
  margin-bottom: 18px;
  letter-spacing: 0.5px;
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

.history-section {
  padding: 60px 40px;
  text-align: center;
  max-width: 620px;
  margin: 0 auto;
}

/* Mission & Vision Section */
.mission-vision-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  max-width: 900px;
  margin: 40px auto;
  padding: 60px 40px;
  background: #1f2937;
  border-radius: 8px;
}

.mission-vision-card {
  background: rgba(31, 41, 55, 0.5);
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 32px 24px;
  text-align: center;
  transition: transform 0.3s ease;
}

.mission-vision-card:hover {
  transform: translateY(-4px);
}

.card-icon {
  font-size: 32px;
  margin-bottom: 16px;
  display: block;
}

.mission-vision-title {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 12px;
  letter-spacing: 0.5px;
}

.mission-vision-desc {
  font-size: 14px;
  color: #d1d5db;
  line-height: 1.6;
  font-family: 'Inter', sans-serif;
}

.core-values-section {
  max-width: 1100px;
  margin: 60px auto;
  padding: 0 40px;
  text-align: center;
}

.core-values-intro {
  font-size: 15px;
  color: #9ca3af;
  line-height: 1.7;
  margin-bottom: 48px;
  font-family: 'Inter', sans-serif;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.value-card {
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 32px 24px;
  text-align: center;
  transition: transform 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.value-card:hover {
  transform: translateY(-4px);
}

.value-icon {
  font-size: 36px;
  margin-bottom: 16px;
  display: block;
}

.value-title {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 12px;
  letter-spacing: 0.3px;
}

.value-desc {
  font-size: 13px;
  line-height: 1.6;
  color: #9ca3af;
  font-family: 'Inter', sans-serif;
}

@media (max-width: 768px) {
  .mission-vision-section {
    grid-template-columns: 1fr;
    gap: 24px;
    margin: 60px auto;
    padding: 40px 20px;
  }

  .values-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .history-section {
    padding: 40px 20px;
  }

  .core-values-section {
    padding: 0 20px;
  }

  .core-values-intro {
    font-size: 14px;
    margin-bottom: 32px;
  }
}

@media (max-width: 480px) {
  .values-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 24px;
  }

  .mission-vision-card {
    padding: 20px 16px;
  }

  .value-card {
    padding: 20px 16px;
  }
} </style>