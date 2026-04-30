<template>
  <section class="members-section" id="members">
    <!-- Header: title left, founder photo right -->
    <div class="founder-header">
      <div class="founder-intro">
        <h2 class="section-title">[Our Founder]</h2>
        <p class="section-copy">
          The Campus Developers Organization is a community of passionate students dedicated to learning, building, and innovating through technology.
        </p>
      </div>
      <div class="founder-card">
        <div class="founder-photo">
          <img :src="founderPhoto" alt="Founder" />
        </div>
      </div>
    </div>

    <!-- Org chart -->
    <div class="org-chart">
      <!-- Row 1: Wraneles note + Founder circle -->
      <div class="row row-top">
        <div class="slot slot-left">
          <div class="note-card note-right">
            <div class="note-title">Wraneles</div>
            <div class="note-meta">A . . . is also us. The Campus Developers is a community of passionate students dedicated to learning.</div>
            <div class="note-meta-row">
              <span>Membership</span>
              <span>Membership</span>
            </div>
          </div>
        </div>
        <div class="slot slot-center">
          <div class="member-node">
            <div class="profile-circle has-photo">
              <img :src="founderPhoto" alt="Founder" />
            </div>
            <div class="role-tag">FOUNDER</div>
          </div>
        </div>
        <div class="slot slot-right"></div>
      </div>

      <!-- Row 2: Left photo + center notes + Right photo (with Ricky? note) -->
      <div class="row row-split">
        <div class="slot slot-left">
          <div class="member-node">
            <div class="profile-circle has-photo">
              <img :src="raldin" alt="Member" />
            </div>
            <div class="role-tag">Member</div>
          </div>
        </div>
        <div class="slot slot-center center-note">
          <div class="note-card">
            <div class="note-title">Wraneles</div>
            <div class="note-meta">A . . . is also us. The Campus Developers is a community of passionate students dedicated to learning.</div>
            <div class="note-meta-row">
              <span>Membership</span>
              <span>Membership</span>
            </div>
          </div>
        </div>
        <div class="slot slot-right">
          <div class="ricky-cluster">
            <div class="note-card note-left">
              <div class="note-title">Ricky?</div>
              <div class="note-meta">A . . . is also us. The Campus Developers is a community of passionate students dedicated to learning.</div>
            </div>
            <div class="member-node">
              <div class="profile-circle has-photo">
                <img :src="sheele" alt="Member" />
              </div>
              <div class="role-tag">Member</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Row 3: Japhet center -->
      <div class="row row-center">
        <div class="japhet-cluster">
          <div class="note-card note-right">
            <div class="note-title">Japhet</div>
            <div class="note-meta">A . . . is also us. The Campus Developers is a community of passionate students dedicated to learning.</div>
            <div class="note-meta-row">
              <span>Membership</span>
              <span>Membership</span>
            </div>
          </div>
          <div class="member-node">
            <div class="profile-circle has-photo">
              <img :src="japhet" alt="Japhet" />
            </div>
            <div class="role-tag">Member</div>
          </div>
        </div>
      </div>

      <!-- Row 4: left photo + right sphere -->
      <div class="row row-split">
        <div class="slot slot-left">
          <div class="member-node">
            <div class="profile-circle has-photo">
              <img :src="sheenlee" alt="Member" />
            </div>
            <div class="role-tag">Member</div>
          </div>
        </div>
        <div class="slot slot-center"></div>
        <div class="slot slot-right">
          <div class="member-node">
            <div class="profile-circle sphere"></div>
            <div class="role-tag">Member</div>
          </div>
        </div>
      </div>

      <!-- Row 5: center sphere -->
      <div class="row row-center">
        <div class="member-node">
          <div class="profile-circle sphere"></div>
          <div class="role-tag">Member</div>
        </div>
      </div>

      <!-- Row 6: left + right spheres -->
      <div class="row row-split">
        <div class="slot slot-left">
          <div class="member-node">
            <div class="profile-circle sphere"></div>
            <div class="role-tag">Member</div>
          </div>
        </div>
        <div class="slot slot-center"></div>
        <div class="slot slot-right">
          <div class="member-node">
            <div class="profile-circle sphere"></div>
            <div class="role-tag">Member</div>
          </div>
        </div>
      </div>

      <!-- Row 7: center sphere -->
      <div class="row row-center">
        <div class="member-node">
          <div class="profile-circle sphere"></div>
          <div class="role-tag">Member</div>
        </div>
      </div>

      <!-- Row 8: branching out wider -->
      <div class="row row-split wide">
        <div class="slot slot-left">
          <div class="member-node">
            <div class="profile-circle sphere"></div>
            <div class="role-tag">Member</div>
          </div>
        </div>
        <div class="slot slot-center"></div>
        <div class="slot slot-right">
          <div class="member-node">
            <div class="profile-circle sphere"></div>
            <div class="role-tag">Member</div>
          </div>
        </div>
      </div>

      <!-- Row 9: final center sphere -->
      <div class="row row-center">
        <div class="member-node">
          <div class="profile-circle sphere"></div>
          <div class="role-tag">Member</div>
        </div>
      </div>

      <!-- Connecting lines layer -->
      <svg class="connectors" preserveAspectRatio="none" viewBox="0 0 1000 2300">
        <!-- Founder to row 2 -->
        <line x1="600" y1="180" x2="160" y2="350" />
        <line x1="600" y1="180" x2="840" y2="350" />
        <line x1="600" y1="180" x2="500" y2="540" />

        <!-- to japhet -->
        <line x1="160" y1="430" x2="500" y2="540" />
        <line x1="840" y1="430" x2="500" y2="540" />

        <!-- japhet to row 4 -->
        <line x1="500" y1="640" x2="160" y2="800" />
        <line x1="500" y1="640" x2="840" y2="800" />

        <!-- row 4 to row 5 -->
        <line x1="160" y1="880" x2="500" y2="1020" />
        <line x1="840" y1="880" x2="500" y2="1020" />

        <!-- row 5 to row 6 -->
        <line x1="500" y1="1100" x2="160" y2="1260" />
        <line x1="500" y1="1100" x2="840" y2="1260" />

        <!-- row 6 to row 7 -->
        <line x1="160" y1="1340" x2="500" y2="1480" />
        <line x1="840" y1="1340" x2="500" y2="1480" />

        <!-- row 7 to row 8 (wide) -->
        <line x1="500" y1="1560" x2="80" y2="1740" />
        <line x1="500" y1="1560" x2="920" y2="1740" />

        <!-- row 8 to row 9 -->
        <line x1="80" y1="1820" x2="500" y2="1980" />
        <line x1="920" y1="1820" x2="500" y2="1980" />
      </svg>
    </div>

    <!-- Gallery section -->
    <div class="gallery-section">
      <div class="gallery-inner">
        <h2 class="gallery-title">[GALLERY]</h2>
        <p class="gallery-copy">
          The Campus Developers Organization is a community of passionate students dedicated to learning, building, and innovating through technology.
        </p>

        <div class="gallery-stage">
          <button class="gallery-arrow left" @click="prevSlide" aria-label="Previous">‹</button>

          <div class="gallery-grid">
            <div class="gallery-tile" v-for="(img, i) in currentSlide" :key="i">
              <img :src="img" :alt="'Gallery ' + i" />
            </div>
          </div>

          <button class="gallery-arrow right" @click="nextSlide" aria-label="Next">›</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import founderPhoto from '../assets/d8135965-490e-4bf4-9144-bfbf783f7f5b_removalai_preview.png'
import raldin from '../assets/raldin.png'
import sheele from '../assets/sheele.png'
import sheenlee from '../assets/Sheenlee.png'
import japhet from '../assets/Japhet pfp.png'
import pic1 from '../assets/pics.png'
import pic2 from '../assets/pics (1).png'
import pic3 from '../assets/pics (2).png'
import pic4 from '../assets/pics (3).png'

export default {
  name: 'MemberSection',
  data() {
    return {
      founderPhoto,
      raldin,
      sheele,
      sheenlee,
      japhet,
      slides: [
        [pic1, pic2, pic3],
        [pic4, pic1, pic2],
      ],
      slideIdx: 0,
    }
  },
  computed: {
    currentSlide() {
      return this.slides[this.slideIdx]
    }
  },
  methods: {
    nextSlide() {
      this.slideIdx = (this.slideIdx + 1) % this.slides.length
    },
    prevSlide() {
      this.slideIdx = (this.slideIdx - 1 + this.slides.length) % this.slides.length
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.members-section {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: transparent;
  color: #111;
  padding: 0 0 0 0;
  position: relative;
}

/* ============ HEADER ============ */
.founder-header {
  max-width: 1100px;
  margin: 40px auto 60px;
  padding: 0 60px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  gap: 40px;
}

.founder-intro {
  padding-top: 20px;
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  color: #1b1f36;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
}

.section-copy {
  color: #6b7280;
  line-height: 1.7;
  font-size: 14px;
  max-width: 360px;
}

.founder-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.founder-photo {
  width: 130px;
  height: 170px;
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

/* ============ ORG CHART ============ */
.org-chart {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 40px 80px;
}

.connectors {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.connectors line {
  stroke: #94a3b8;
  stroke-width: 1.2;
}

.row {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  margin-bottom: 60px;
  min-height: 100px;
}

.row-top {
  margin-bottom: 80px;
}

.row-center {
  display: flex;
  justify-content: center;
}

.row-split.wide {
  grid-template-columns: 1fr 2fr 1fr;
}

.slot {
  display: flex;
  align-items: center;
}

.slot-left {
  justify-content: flex-start;
}

.slot-center {
  justify-content: center;
}

.slot-right {
  justify-content: flex-end;
}

.center-note {
  justify-content: center;
}

/* ============ NODES ============ */
.member-node {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 3;
}

.profile-circle {
  width: 92px;
  height: 92px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #fff;
  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.18);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-circle.sphere {
  background:
    radial-gradient(circle at 35% 30%, #ffffff 0%, #e5e7eb 25%, #9ca3af 60%, #4b5563 100%);
  border-color: #f3f4f6;
}

.role-tag {
  margin-top: 8px;
  font-size: 9px;
  letter-spacing: 0.8px;
  color: #475569;
  font-weight: 600;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.6);
  padding: 2px 8px;
  border-radius: 4px;
}

/* ============ NOTE CARDS (speech bubbles) ============ */
.note-card {
  background: #e9ecf1;
  border-radius: 10px;
  padding: 12px 14px;
  width: 200px;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);
  position: relative;
  font-size: 11px;
  color: #4b5563;
  line-height: 1.5;
}

.note-title {
  font-size: 12px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 4px;
}

.note-meta {
  font-size: 10px;
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 6px;
}

.note-meta-row {
  display: flex;
  justify-content: space-between;
  font-size: 9px;
  color: #94a3b8;
  font-weight: 600;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding-top: 6px;
}

/* speech bubble tails */
.note-card.note-right::after {
  content: '';
  position: absolute;
  right: -8px;
  top: 50%;
  transform: translateY(-50%);
  border-width: 8px 0 8px 8px;
  border-style: solid;
  border-color: transparent transparent transparent #e9ecf1;
}

.note-card.note-left::after {
  content: '';
  position: absolute;
  left: -8px;
  top: 50%;
  transform: translateY(-50%);
  border-width: 8px 8px 8px 0;
  border-style: solid;
  border-color: transparent #e9ecf1 transparent transparent;
}

/* clusters that put a note next to a circle */
.ricky-cluster,
.japhet-cluster {
  display: inline-flex;
  align-items: center;
  gap: 16px;
}

/* ============ GALLERY ============ */
.gallery-section {
  background: #1b1f36;
  color: #fff;
  padding: 60px 24px 70px;
  width: 100%;
}

.gallery-inner {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.gallery-title {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
}

.gallery-copy {
  font-size: 12px;
  color: #cbd5e1;
  line-height: 1.7;
  max-width: 480px;
  margin: 0 auto 28px;
}

.gallery-stage {
  display: flex;
  align-items: center;
  gap: 14px;
  justify-content: center;
}

.gallery-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  max-width: 720px;
}

.gallery-tile {
  aspect-ratio: 4 / 3;
  background: #475569;
  border-radius: 4px;
  overflow: hidden;
}

.gallery-tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gallery-arrow {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
}

.gallery-arrow:hover {
  background: rgba(255, 255, 255, 0.15);
}

/* ============ RESPONSIVE ============ */
@media (max-width: 768px) {
  .founder-header {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 0 20px;
  }

  .founder-intro {
    padding-top: 0;
  }

  .section-copy {
    margin: 0 auto;
  }

  .founder-card {
    margin-top: 12px;
  }

  .org-chart {
    padding: 0 16px 60px;
  }

  .connectors {
    display: none;
  }

  .row,
  .row-split.wide {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 32px;
  }

  .slot {
    justify-content: center !important;
  }

  .ricky-cluster,
  .japhet-cluster {
    flex-direction: column;
    gap: 10px;
  }

  .note-card.note-left::after,
  .note-card.note-right::after {
    display: none;
  }

  .profile-circle {
    width: 80px;
    height: 80px;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
