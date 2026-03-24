<template>
  <div class="officers-page">   <!-- same wrapper as HistorySection -->
    <main>
      <!-- About Us -->
      <section class="history-section">
        <h2 class="section-title">About Us</h2>
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
        <h2 class="section-title">Why We Exist</h2>
        <p class="section-desc">
          The Campus Developers Organization is a community of passionate students
          dedicated to learning, building, and innovating through technology. Our
          organization brings together aspiring programmers, designers, and tech
          enthusiasts who share a common goal of developing skills and creating
          impactful digital solutions.
        </p>
      </section>

      <!-- Mission & Vision (side‑by‑side) -->
      <div class="two-columns">
        <div class="mission-vision-card">
          <h2 class="section-title left-aligned">Our Mission</h2>
          <p class="section-desc left-aligned">
            Panthers College of computing studies Panthers College of computing
            studies Panthers College of computing studies College of computing
            studies
          </p>
        </div>
        <div class="mission-vision-card">
          <h2 class="section-title left-aligned">Our Vision</h2>
          <p class="section-desc left-aligned">
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
            <h3 class="value-title">Integrity</h3>
            <p class="value-desc">
              We strive for excellence in everything we do, from curriculum development to student support.
            </p>
          </div>
          <div class="value-card">
            <h3 class="value-title">Resilience</h3>
            <p class="value-desc">
              We strive for excellence in everything we do, from curriculum development to student support.
            </p>
          </div>
          <div class="value-card">
            <h3 class="value-title">Excellence</h3>
            <p class="value-desc">
              We strive for excellence in everything we do, from curriculum development to student support.
            </p>
          </div>
          <div class="value-card">
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
  background-image: 
    linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
  background-size: 24px 24px;   
  min-height: 100vh;
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
  padding-left: 1rem;
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
  max-width: 620px;
  margin: 0 auto;
}

.two-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  max-width: 860px;
  margin: 40px auto;
  padding: 0 32px;
}

.mission-vision-card {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
}

.mission-vision-card .section-title {
  color: #ffffff;
  border-left: 6px solid #ffffff;
}

.mission-vision-card .section-desc {
  color: #d1d5db;
}

.core-values-section {
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 32px;
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
  gap: 32px;
}

.value-card {
  background: #ffffff;
  border: 1px solid #f3f4f6;
  border-radius: 14px;
  padding: 24px;
  text-align: left;
  transition: transform 0.2s ease;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
}

.value-card:hover {
  transform: translateY(-4px);
}

.value-title {
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 12px;
}

.value-desc {
  font-size: 13px;
  line-height: 1.6;
  color: #9ca3af;
  font-family: 'Inter', sans-serif;
}

@media (max-width: 768px) {
  .two-columns {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>