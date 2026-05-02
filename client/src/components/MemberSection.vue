<template>
  <section class="members-section" id="members">
    <nav class="filter-nav">
      <div class="filter-nav-inner">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          class="filter-tab"
          :class="{ 'filter-tab--active': activeTab === tab.key }"
          @click="activeTab = tab.key"
        >
          <span class="filter-dot" :style="{ background: tab.color }"></span>
          {{ tab.label }}
          <span class="filter-count" v-if="getCount(tab.key) !== ''">{{ getCount(tab.key) }}</span>
        </button>
      </div>
    </nav>

    <transition name="fade">
      <div v-if="activeTab !== 'chart'" class="list-view" :key="activeTab">

        <div class="list-header">
          <div>
            <h2 class="list-title">{{ currentTab.label }}</h2>
            <p class="list-desc">{{ currentTab.desc }}</p>
          </div>
          <div class="list-total">
            <span class="list-total-num">{{ activeTab === 'previous' ? totalPrevious : displayedMembers.length }}</span>
            <span class="list-total-label">members</span>
          </div>
        </div>

        <!-- Previous Members: grouped by year -->
        <div v-if="activeTab === 'previous'">
          <div v-for="group in previousGroups" :key="group.year" class="year-block">
            <div class="year-divider">
              <span class="year-pill">{{ group.year }}</span>
              <span class="year-line"></span>
              <span class="year-tally">{{ group.members.length }} alumni</span>
            </div>
            <div class="member-grid">
              <div class="member-card" v-for="m in group.members" :key="m.name">
                <div class="member-avatar" :class="'avatar--' + m.role">
                  <img v-if="m.photo" :src="m.photo" :alt="m.name" />
                  <div v-else class="avatar-sphere"></div>
                </div>
                <div class="member-info">
                  <div class="member-name">{{ m.name }}</div>
                  <div class="member-role-pill" :class="'pill--' + m.role">{{ m.roleLabel }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- All other filtered views -->
        <div v-else class="member-grid">
          <div class="member-card" v-for="m in displayedMembers" :key="m.name">
            <div class="member-avatar" :class="'avatar--' + m.role">
              <img v-if="m.photo" :src="m.photo" :alt="m.name" />
              <div v-else class="avatar-sphere"></div>
            </div>
            <div class="member-info">
              <div class="member-name">{{ m.name }}</div>
              <div class="member-role-pill" :class="'pill--' + m.role">{{ m.roleLabel }}</div>
            </div>
          </div>
        </div>

      </div>
    </transition>

 <!-- Org Chart View -->
    <transition name="fade">
      <div v-if="activeTab === 'chart'" key="chart">

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
                <div class="org-name">SHEEN LEE S. EDIS</div>
              </div>
            </div>
            <div class="slot slot-right"></div>
          </div>

          <!-- Row 2 -->
          <div class="row row-split">
            <div class="slot slot-left">
              <div class="member-node">
                <div class="profile-circle has-photo">
                  <img :src="raldin" alt="Member" />
                </div>
                <div class="role-tag">Adviser</div>
                <div class="org-name">ARMANDO T. SAGUIN, MSIT</div>
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
                  <div class="role-tag">Adviser</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Row 3 -->
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
                  <img :src="sheele" alt="Japhet" />
                </div>
                <div class="role-tag">President</div>
                <div class="org-name">STEFHANIE ANN V. BATUCAN</div>
              </div>
            </div>
          </div>

          <!-- Row 4 -->
          <div class="row row-split">
            <div class="slot slot-left">
              <div class="member-node">
                <div class="profile-circle has-photo">
                  <img :src="raldin" alt="Member" />
                </div>
                <div class="role-tag">Vice President</div>
                <div class="org-name">EJ A. VINCULADO</div>
              </div>
            </div>
            <div class="slot slot-center"></div>
            <div class="slot slot-right">
              <div class="member-node">
                <div class="profile-circle sphere"></div>
                <div class="role-tag">Secretary</div>
                <div class="org-name">NESFHE NINA S. MAGSANAY</div>
              </div>
            </div>
          </div>

          <!-- Row 5 -->
          <div class="row row-center">
            <div class="member-node">
              <div class="profile-circle sphere"></div>
              <div class="role-tag">Assistant Secretary</div>
              <div class="org-name">KATE NICOLE S. EDIS</div>
            </div>
          </div>

          <!-- Row 6 -->
          <div class="row row-split">
            <div class="slot slot-left">
              <div class="member-node">
                <div class="profile-circle sphere"></div>
                <div class="role-tag">Treasurer</div>
                <div class="org-name">MISCHI JEDA J. ELUMBA</div>
              </div>
            </div>
            <div class="slot slot-center"></div>
            <div class="slot slot-right">
              <div class="member-node">
                <div class="profile-circle sphere"></div>
                <div class="role-tag">Auditor</div>
                <div class="org-name">PETER ROBERT C. AYONO</div>
              </div>
            </div>
          </div>

          <!-- Row 7 -->
          <div class="row row-center">
            <div class="member-node">
              <div class="profile-circle sphere"></div>
              <div class="role-tag">P.I.O</div>
              <div class="org-name">KENZEN L. MINAO</div>
            </div>
          </div>

          <!-- Row 8 -->
          <div class="row row-split wide">
            <div class="slot slot-left">
              <div class="member-node">
                <div class="profile-circle sphere"></div>
                <div class="role-tag">Member</div>
                <div class="org-name">RENZ L. SANTIAGO</div>
              </div>
            </div>
            <div class="slot slot-center"></div>
            <div class="slot slot-right">
              <div class="member-node">
                <div class="profile-circle sphere">
                  <img :src="raldin" alt="Member" />
                </div>
                <div class="role-tag">Member</div>
                <div class="org-name">RALDIN C. DISOMIMBA</div>
              </div>
            </div>
          </div>

          <!-- Row 9 -->
          <div class="row row-center">
            <div class="member-node">
              <div class="profile-circle sphere"></div>
              <div class="role-tag">Member</div>
              <div class="org-name">KEITH BRAIN B. LARANJO</div>
            </div>
          </div>

          <!-- Row 10 -->
          <div class="row row-split">
            <div class="slot slot-left">
              <div class="member-node">
                <div class="profile-circle sphere"></div>
                <div class="role-tag">Member</div>
                <div class="org-name">JULLAN CARL J. MAGLINTE</div>
              </div>
            </div>
            <div class="slot slot-center"></div>
            <div class="slot slot-right">
              <div class="member-node">
                <div class="profile-circle sphere">
                  <img :src="japhet" alt="Member" />
                </div>
                <div class="role-tag">Member</div>
                <div class="org-name">JAPHET V. BASTILLADA</div>
              </div>
            </div>
          </div>

          <!-- Row 11 -->
          <div class="row row-center">
            <div class="member-node">
              <div class="profile-circle sphere"></div>
              <div class="role-tag">Member</div>
              <div class="org-name">CRISTOPH B. BAGABUYO</div>
            </div>
          </div>

          <!-- Row 12 -->
          <div class="row row-split">
            <div class="slot slot-left">
              <div class="member-node">
                <div class="profile-circle sphere"></div>
                <div class="role-tag">Member</div>
                <div class="org-name">CYD M. BALLON</div>
              </div>
            </div>
            <div class="slot slot-center"></div>
            <div class="slot slot-right">
              <div class="member-node">
                <div class="profile-circle sphere"></div>
                <div class="role-tag">Member</div>
                <div class="org-name">MARC LESTER D. GUIDO</div>
              </div>
            </div>
          </div>

          <!-- Row 13 -->
          <div class="row row-center">
            <div class="member-node">
              <div class="profile-circle sphere"></div>
              <div class="role-tag">Member</div>
              <div class="org-name">JUSTINE P. BUNCAG</div>
            </div>
          </div>

          <!-- Row 14 -->
          <div class="row row-split">
            <div class="slot slot-left">
              <div class="member-node">
                <div class="profile-circle sphere"></div>
                <div class="role-tag">Member</div>
                <div class="org-name">NEW MEMBER 7</div>
              </div>
            </div>
            <div class="slot slot-center"></div>
            <div class="slot slot-right">
              <div class="member-node">
                <div class="profile-circle sphere"></div>
                <div class="role-tag">Member</div>
                <div class="org-name">NEW MEMBER 8</div>
              </div>
            </div>
          </div>

          <!-- Connecting lines layer -->
          <svg class="connectors" preserveAspectRatio="none" viewBox="0 0 1000 3400">

            <!-- Row 1 → Row 2 (Founder → Adviser Left, Adviser Right, President) -->
            <line x1="600" y1="150" x2="160" y2="290" />
            <line x1="600" y1="150" x2="840" y2="320" />
            <line x1="600" y1="150" x2="490" y2="540" />

            <!-- Row 2 → Row 3 (Adviser Left + Adviser Right → President) -->
            <line x1="160" y1="340" x2="500" y2="515" />
            <line x1="850" y1="410" x2="500" y2="515" />

            <!-- Row 3 → Row 4 (President → VP Left, Secretary Right) -->
            <line x1="500" y1="590" x2="150" y2="750" />
            <line x1="500" y1="590" x2="840" y2="750" />

            <!-- Row 4 → Row 5 (VP Left + Secretary Right → Asst. Secretary) -->
            <line x1="150" y1="820" x2="500" y2="1020" />
            <line x1="840" y1="820" x2="500" y2="1020" />

            <!-- Row 5 → Row 6 (Asst. Secretary → Treasurer Left, Auditor Right) -->
            <line x1="500" y1="1130" x2="160" y2="1235" />
            <line x1="500" y1="1130" x2="840" y2="1235" />

            <!-- Row 6 → Row 7 (Treasurer Left + Auditor Right → P.I.O) -->
            <line x1="160" y1="1290" x2="500" y2="1500" />
            <line x1="840" y1="1290" x2="500" y2="1500" />

            <!-- Row 7 → Row 8 (P.I.O → Member Left, Member Right) -->
            <line x1="500" y1="1600" x2="140" y2="1710" />
            <line x1="500" y1="1600" x2="850" y2="1710" />

            <!-- Row 8 → Row 9 (Member Left + Member Right → Member Center) -->
            <line x1="140" y1="1740" x2="525" y2="1980" />
            <line x1="850" y1="1740" x2="485" y2="1980" />

            <!-- Row 9 → Row 10 (Member Center → Member Left, Member Right) -->
            <line x1="500" y1="2080" x2="160" y2="2170" />
            <line x1="500" y1="2080" x2="840" y2="2170" />

            <!-- Row 10 → Row 11 (Member Left + Member Right → Member Center) -->
            <line x1="160" y1="2220" x2="500" y2="2440" />
            <line x1="840" y1="2220" x2="500" y2="2440" />

            <!-- Row 11 → Row 12 (Member Center → Member Left, Member Right) -->
            <line x1="500" y1="2540" x2="140" y2="2640" />
            <line x1="500" y1="2540" x2="847" y2="2640" />

            <!-- Row 12 → Row 13 (Member Left + Member Right → Member Center) -->
            <line x1="140" y1="2690" x2="530" y2="2920" />
            <line x1="845" y1="2690" x2="480" y2="2920" />

            <!-- Row 13 → Row 14 (Member Center → Member Left, Member Right) -->
            <line x1="500" y1="3010" x2="140" y2="3100" />
            <line x1="500" y1="3010" x2="860" y2="3100" />
          </svg>
        </div>
      </div>
    </transition>

    <div class="gallery-section">
      <div class="gallery-inner">
        <h2 class="gallery-title">[GALLERY]</h2>
        <p class="gallery-copy">
          The Creatives Society is a community of passionate students dedicated to learning, building, and innovating through technology.
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
import founderPhoto from '../assets/founder-sheenlee.png'
import raldin      from '../assets/raldin.png'
import sheele      from '../assets/sheele.png'
import sheenlee    from '../assets/Sheenlee.png'
import japhet      from '../assets/Japhet pfp.png'
import pic1        from '../assets/pics.png'
import pic2        from '../assets/pics (1).png'
import pic3        from '../assets/pics (2).png'
import pic4        from '../assets/pics (3).png'

export default {
  name: 'MemberSection',

  data() {
    return {
      founderPhoto, raldin, sheele, sheenlee, japhet,

      activeTab: 'chart',  

      tabs: [
        {
          key: 'chart',
          label: 'Org Chart',
          color: '#1b1f36',
          desc: 'Full organizational hierarchy of the Campus Developers Organization.',
        },
        {
          key: 'all',
          label: 'All Members',
          color: '#0f766e',
          desc: 'Everyone currently active in the Campus Developers Organization.',
        },
        {
          key: 'officers',
          label: 'Officers',
          color: '#0369a1',
          desc: 'Elected officers leading the organization this term.',
        },
        {
          key: 'members',
          label: 'Current Members',
          color: '#059669',
          desc: 'Active general members of the organization.',
        },
        {
          key: 'previous',
          label: 'Previous Members',
          color: '#94a3b8',
          desc: 'Alumni and former members who have been part of our community.',
        },
        {
          key: 'mentors',
          label: 'Mentors / Advisers',
          color: '#7c3aed',
          desc: 'Faculty advisers and mentors guiding the organization.',
        },
      ],

      currentMembers: [
        { name: 'SHEEN LEE S. EDIS',         role: 'founder',  roleLabel: 'Founder',            photo: sheenlee },
        { name: 'ARMANDO T. SAGUIN, MSIT',    role: 'mentor',   roleLabel: 'Adviser',            photo: raldin   },
        { name: 'STEFHANIE ANN V. BATUCAN',   role: 'officer',  roleLabel: 'President',          photo: sheele   },
        { name: 'EJ A. VINCULADO',            role: 'officer',  roleLabel: 'Vice President',     photo: raldin   },
        { name: 'NESFHE NINA S. MAGSANAY',    role: 'officer',  roleLabel: 'Secretary',          photo: null     },
        { name: 'KATE NICOLE S. EDIS',        role: 'officer',  roleLabel: 'Asst. Secretary',    photo: null     },
        { name: 'MISCHI JEDA J. ELUMBA',      role: 'officer',  roleLabel: 'Treasurer',          photo: null     },
        { name: 'PETER ROBERT C. AYONO',      role: 'officer',  roleLabel: 'Auditor',            photo: null     },
        { name: 'KENZEN L. MINAO',            role: 'officer',  roleLabel: 'P.I.O',              photo: null     },
        { name: 'RENZ L. SANTIAGO',           role: 'member',   roleLabel: 'Member',             photo: null     },
        { name: 'RALDIN C. DISOMIMBA',        role: 'member',   roleLabel: 'Member',             photo: raldin   },
        { name: 'KEITH BRAIN B. LARANJO',     role: 'member',   roleLabel: 'Member',             photo: null     },
        { name: 'JULLAN CARL J. MAGLINTE',    role: 'member',   roleLabel: 'Member',             photo: null     },
        { name: 'JAPHET V. BASTILLADA',       role: 'member',   roleLabel: 'Member',             photo: japhet   },
        { name: 'CRISTOPH B. BAGABUYO',       role: 'member',   roleLabel: 'Member',             photo: null     },
        { name: 'CYD M. BALLON',              role: 'member',   roleLabel: 'Member',             photo: null     },
        { name: 'MARC LESTER D. GUIDO',       role: 'member',   roleLabel: 'Member',             photo: null     },
        { name: 'JUSTINE P. BUNCAG',          role: 'member',   roleLabel: 'Member',             photo: null     },
        { name: 'NEW MEMBER 7',               role: 'member',   roleLabel: 'Member',             photo: null     },
        { name: 'NEW MEMBER 8',               role: 'member',   roleLabel: 'Member',             photo: null     },
      ],

      /* ── previous members by year ── */
      previousGroups: [
        {
          year: 2024,
          members: [
            { name: 'ALUMNI A', role: 'officer', roleLabel: 'Former President', photo: null },
            { name: 'ALUMNI B', role: 'member',  roleLabel: 'Former Member',    photo: null },
            { name: 'ALUMNI C', role: 'member',  roleLabel: 'Former Member',    photo: null },
            { name: 'ALUMNI D', role: 'member',  roleLabel: 'Former Member',    photo: null },
          ],
        },
        {
          year: 2023,
          members: [
            { name: 'ALUMNI E', role: 'officer', roleLabel: 'Former Officer',   photo: null },
            { name: 'ALUMNI F', role: 'member',  roleLabel: 'Former Member',    photo: null },
            { name: 'ALUMNI G', role: 'member',  roleLabel: 'Former Member',    photo: null },
          ],
        },
        {
          year: 2022,
          members: [
            { name: 'ALUMNI H', role: 'founder', roleLabel: 'Former Founder',   photo: null },
            { name: 'ALUMNI I', role: 'officer', roleLabel: 'Former Officer',   photo: null },
          ],
        },
      ],

      /* ── gallery ── */
      slides: [
        [pic1, pic2, pic3],
        [pic4, pic1, pic2],
      ],
      slideIdx: 0,
    }
  },

  computed: {
    currentTab() {
      return this.tabs.find(t => t.key === this.activeTab) || this.tabs[0]
    },
    totalPrevious() {
      return this.previousGroups.reduce((a, g) => a + g.members.length, 0)
    },
    displayedMembers() {
      switch (this.activeTab) {
        case 'all':      return this.currentMembers
        case 'officers': return this.currentMembers.filter(m => m.role === 'officer' || m.role === 'founder')
        case 'members':  return this.currentMembers.filter(m => m.role === 'member')
        case 'mentors':  return this.currentMembers.filter(m => m.role === 'mentor')
        default:         return []
      }
    },
    currentSlide() {
      return this.slides[this.slideIdx]
    },
  },

  methods: {
    getCount(key) {
      switch (key) {
        case 'chart':    return ''
        case 'all':      return this.currentMembers.length
        case 'officers': return this.currentMembers.filter(m => m.role === 'officer' || m.role === 'founder').length
        case 'members':  return this.currentMembers.filter(m => m.role === 'member').length
        case 'previous': return this.previousGroups.reduce((a, g) => a + g.members.length, 0)
        case 'mentors':  return this.currentMembers.filter(m => m.role === 'mentor').length
        default:         return ''
      }
    },
    nextSlide() { this.slideIdx = (this.slideIdx + 1) % this.slides.length },
    prevSlide()  { this.slideIdx = (this.slideIdx - 1 + this.slides.length) % this.slides.length },
  },
}
</script>

<style scoped>
* { margin: 0; padding: 0; box-sizing: border-box; }

.members-section {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: transparent;
  color: #111;
  padding: 0;
  position: relative;
}

.filter-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
}

.filter-nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  gap: 2px;
  height: 54px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.filter-nav-inner::-webkit-scrollbar { display: none; }

.filter-tab {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 15px;
  border: none;
  background: transparent;
  font-size: 13px;
  font-weight: 600;
  color: #6b7280;
  cursor: pointer;
  border-radius: 8px;
  white-space: nowrap;
  transition: background 0.15s, color 0.15s;
  flex-shrink: 0;
}
.filter-tab:hover { background: #f3f4f6; color: #111; }
.filter-tab--active { background: #1b1f36 !important; color: #fff !important; }
.filter-tab--active .filter-count { background: rgba(255,255,255,0.2); color: #fff; }

.filter-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.filter-count {
  font-size: 10px;
  font-weight: 700;
  background: #f1f5f9;
  color: #64748b;
  border-radius: 20px;
  padding: 1px 7px;
  min-width: 20px;
  text-align: center;
  transition: background 0.15s, color 0.15s;
}

.list-view {
  max-width: 1100px;
  margin: 0 auto;
  padding: 48px 40px 72px;
}

.list-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  padding-bottom: 28px;
  margin-bottom: 36px;
  border-bottom: 1px solid #e5e7eb;
}

.list-title {
  font-size: 28px;
  font-weight: 700;
  color: #1b1f36;
  margin-bottom: 6px;
  letter-spacing: 0.3px;
}

.list-desc {
  font-size: 13px;
  color: #6b7280;
  line-height: 1.6;
  max-width: 480px;
}

.list-total { text-align: right; flex-shrink: 0; }
.list-total-num { display: block; font-size: 40px; font-weight: 800; color: #1b1f36; line-height: 1; }
.list-total-label { font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #9ca3af; }

/* Member grid */
.member-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 16px;
}

.member-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 14px 18px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  text-align: center;
  cursor: default;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.member-card:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(0,0,0,0.09); }

.member-avatar {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 14px;
  border: 3px solid #f3f4f6;
  box-shadow: 0 4px 14px rgba(0,0,0,0.1);
  flex-shrink: 0;
}
.member-avatar img { width: 100%; height: 100%; object-fit: cover; }
.avatar-sphere {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 35% 30%, #ffffff 0%, #e5e7eb 25%, #9ca3af 60%, #4b5563 100%);
}

.avatar--founder { 
  border-color: #b30b1c; 
  box-shadow: 0 4px 14px rgba(179,11,28,0.2); 
}

.avatar--mentor  { 
  border-color: #7c3aed; 
  box-shadow: 0 4px 14px rgba(124,58,237,0.2); 
}

.avatar--officer { 
  border-color: #0369a1; 
  box-shadow: 0 4px 14px rgba(3,105,161,0.2); 
}

.avatar--member  { 
  border-color: #e5e7eb; 
}

.member-name { 
  font-size: 12px; 
  font-weight: 700; 
  color: #1f2937; 
  margin-bottom: 8px; 
  line-height: 1.4; 
}

.member-role-pill {
  display: inline-block;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 20px;
}

.pill--founder { 
  background: #fde8ea; 
  color: #9b0a19; 
}

.pill--mentor  { 
  background: #ede9fe; 
  color: #5b21b6; 
}

.pill--officer { 
  background: #dbeafe; 
  color: #1e40af;
}

.pill--member  { 
  background: #d1fae5; 
  color: #065f46; 
}

/* Previous members: year groups */
.year-block { 
  margin-bottom: 44px; 
}

.year-divider { 
  display: flex; 
  align-items: center; 
  gap: 12px; 
  margin-bottom: 18px; 
}

.year-pill { 
  font-size: 12px; 
  font-weight: 700; 
  color: #1b1f36; 
  background: #f1f5f9; 
  border: 1px solid #e2e8f0; 
  padding: 4px 14px;
  border-radius: 20px; 
  white-space: nowrap; 
}

.year-line { 
  flex: 1; 
  height: 1px; 
  background: #e5e7eb; 
}

.year-tally { 
  font-size: 11px; 
  font-weight: 600; 
  color: #9ca3af; 
  white-space: nowrap; 
}

/* Fade transition */
.fade-enter-active, .fade-leave-active { 
  transition: opacity 0.2s ease, transform 0.2s ease; 
}

.fade-enter-from { 
  opacity: 0; 
  transform: translateY(8px); 
}

.fade-leave-to   { 
  opacity: 0; 
  transform: translateY(-6px); 
}

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
  width: 140px; 
  height: 180px; 
  border-radius: 14px; 
  overflow: hidden; 
  background: linear-gradient(135deg, #b30b1c 0%, #7a0712 100%); 
  box-shadow: 0 12px 30px rgba(15,23,42,0.18); 
}

.founder-photo img { 
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
  object-position: center top; 
}

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
  box-shadow: 0 8px 22px rgba(15,23,42,0.18); 
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
  background: radial-gradient(circle at 35% 30%, #ffffff 0%, #e5e7eb 25%, #9ca3af 60%, #4b5563 100%); 
  border-color: #f3f4f6; 
}

.role-tag { 
  margin-top: 8px; 
  font-size: 11px; 
  letter-spacing: 0.8px; 
  color: #475569; 
  font-weight: 600; 
  text-transform: uppercase; 
  background: rgba(3,226,115,0.788); 
  padding: 2px 8px; 
  border-radius: 4px; 
}

.org-name { 
  margin-top: 5px; 
  font-size: 11px; 
  font-weight: 700; 
  color: #1f2937; 
  text-align: center; 
  white-space: nowrap; 
}

.note-card { 
  background: #e9ecf1; 
  border-radius: 10px; 
  padding: 12px 14px; 
  width: 200px; 
  box-shadow: 0 4px 14px rgba(15,23,42,0.06); 
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
  font-size: 9px; color: #94a3b8; 
  font-weight: 600; 
  border-top: 1px solid rgba(0,0,0,0.05); 
  padding-top: 6px; 
}

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

.note-card.note-left::after  { 
  content: ''; 
  position: absolute; 
  left: -8px; 
  top: 50%; 
  transform: translateY(-50%); 
  border-width: 8px 8px 8px 0; 
  border-style: solid; 
  border-color: transparent #e9ecf1 transparent transparent; 
}

.ricky-cluster, .japhet-cluster { 
  display: inline-flex; 
  align-items: center; 
  gap: 16px; 
}

/*GALLERY */
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
  font-size: 12px; color: #cbd5e1; 
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
  aspect-ratio: 4/3; 
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
  border: 1px solid rgba(255,255,255,0.4); 
  font-size: 16px; 
  cursor: pointer; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  transition: background 0.2s ease; 
}

.gallery-arrow:hover { 
  background: rgba(255,255,255,0.15); 
}

@media (max-width: 768px) {
  .filter-nav-inner { padding: 0 16px; }
  .filter-tab { font-size: 12px; padding: 6px 11px; }
  .list-view { padding: 28px 16px 56px; }
  .list-header { flex-direction: column; gap: 8px; }
  .list-total { text-align: left; }
  .member-grid { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); }

  .founder-header { grid-template-columns: 1fr; text-align: center; padding: 0 20px; }
  .section-copy { margin: 0 auto; }
  .org-chart { padding: 0 16px 60px; }
  .connectors { display: none; }
  .row, .row-split.wide { grid-template-columns: 1fr; gap: 24px; margin-bottom: 32px; }
  .slot { justify-content: center !important; }
  .ricky-cluster, .japhet-cluster { flex-direction: column; gap: 10px; }
  .note-card.note-left::after, .note-card.note-right::after { display: none; }
  .profile-circle { width: 80px; height: 80px; }
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>