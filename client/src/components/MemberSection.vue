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

    <transition name="fade">
      <div v-if="activeTab === 'chart'" key="chart">

        <div class="portfolio-tooltip" v-if="hoveredMember" :style="tooltipStyle">
          <span class="tooltip-icon">🔗</span>
          <span>View {{ hoveredMember }}'s portfolio</span>
        </div>

        <div class="founder-header">
          <div class="founder-intro">
            <h2 class="section-title">[Our Founder]</h2>
            <p class="section-copy">
              The Creatives Society was founded by Sheenlee S. Edis, a visionary IT student at Panthers
              College of Computing Studies, who believed that creativity and technology go hand
              in hand. Under her leadership, the organization took its first steps toward becoming
              a premier student tech community at Jose Rizal Memorial State University.
            </p>
          </div>
          <div class="founder-card">
            <div class="founder-photo">
              <img :src="sheen" alt="Founder" />
            </div>
          </div>
        </div>

        <div class="org-chart" ref="orgChart">

          <!-- Dynamic SVG connector lines -->
          <svg class="connectors" ref="svgEl"
            :viewBox="`0 0 ${svgWidth} ${svgHeight}`"
            preserveAspectRatio="none">
            <line
              v-for="(conn, i) in connections"
              :key="i"
              :x1="conn.x1" :y1="conn.y1"
              :x2="conn.x2" :y2="conn.y2"
              :stroke-dasharray="conn.dashed ? '6 4' : 'none'"
            />
          </svg>

          <div class="mentors-divider">
            <span class="mentors-label">Organizational Chart</span>
          </div>

          <!-- Row 1: Founder -->
          <div class="row row-top">
            <div class="slot slot-left">
              <div class="note-card note-right">
                <div class="note-title">Sheen Lee</div>
                <div class="note-meta">A 4th year computer science student and the founder of Creatives Society</div>
                <div class="note-meta-row"><span>Membership</span><span>Membership</span></div>
              </div>
            </div>
            <div class="slot slot-center">
              <div class="member-node" ref="node_sheenlee">
                <div class="profile-circle has-photo" :class="{ 'has-portfolio': orgMembers.sheenlee.portfolio }"
                  @click="goToPortfolio(orgMembers.sheenlee)" @mouseenter="onHover(orgMembers.sheenlee, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                  <img :src="sheen" alt="Founder" />
                  <div class="portfolio-overlay"><span>View Portfolio</span></div>
                </div>
                <div class="role-tag role-tag--founder">FOUNDER</div>
                <div class="org-name">SHEEN LEE S. EDIS</div>
              </div>
            </div>
            <div class="slot slot-right"></div>
          </div>

          <!-- Row 2: Adviser -->
          <div class="row row-center">
            <div class="member-node" ref="node_armando">
              <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.armando.portfolio }"
                @click="goToPortfolio(orgMembers.armando)" @mouseenter="onHover(orgMembers.armando, $event)"
                @mousemove="onMove($event)" @mouseleave="onLeave">
                <div class="portfolio-overlay"><span>View Portfolio</span></div>
              </div>
              <div class="role-tag role-tag--mentor">Adviser</div>
              <div class="org-name">ARMANDO T. SAGUIN, MSIT</div>
            </div>
          </div>

          <!-- Mentors divider -->
          <div class="mentors-divider">
            <span class="mentors-label">Mentors</span>
          </div>

          <!-- Mentor Row 1: Juvelito (center) -->
          <div class="row row-center mentor-row">
            <div class="member-node" ref="node_juvelito">
              <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.juvelito.portfolio }"
                @click="goToPortfolio(orgMembers.juvelito)" @mouseenter="onHover(orgMembers.juvelito, $event)"
                @mousemove="onMove($event)" @mouseleave="onLeave">
                <div class="portfolio-overlay"><span>View Portfolio</span></div>
              </div>
              <div class="role-tag role-tag--mentor">Mentor</div>
              <div class="org-name">JUVELITO MARTINEZ</div>
            </div>
          </div>

          <!-- Mentor Row 2: Mark + Whelster -->
          <div class="row row-split mentor-row">
            <div class="slot slot-left">
              <div class="member-node" ref="node_mark">
                <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.mark.portfolio }"
                  @click="goToPortfolio(orgMembers.mark)" @mouseenter="onHover(orgMembers.mark, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                  <div class="portfolio-overlay"><span>View Portfolio</span></div>
                </div>
                <div class="role-tag role-tag--mentor">Mentor</div>
                <div class="org-name">MARK MASCARDO</div>
              </div>
            </div>
            <div class="slot slot-center"></div>
            <div class="slot slot-right">
              <div class="member-node" ref="node_whelster">
                <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.whelster.portfolio }"
                  @click="goToPortfolio(orgMembers.whelster)" @mouseenter="onHover(orgMembers.whelster, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                  <div class="portfolio-overlay"><span>View Portfolio</span></div>
                </div>
                <div class="role-tag role-tag--mentor">Mentor</div>
                <div class="org-name">WHELSTER R. ESMADE</div>
              </div>
            </div>
          </div>

          <!-- Mentor Row 3: Henzon (center) -->
          <div class="row row-center mentor-row">
            <div class="member-node" ref="node_henzon">
              <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.henzon.portfolio }"
                @click="goToPortfolio(orgMembers.henzon)" @mouseenter="onHover(orgMembers.henzon, $event)"
                @mousemove="onMove($event)" @mouseleave="onLeave">
                <div class="portfolio-overlay"><span>View Portfolio</span></div>
              </div>
              <div class="role-tag role-tag--mentor">Mentor</div>
              <div class="org-name">HENZON DIONSAY</div>
            </div>
          </div>

          <!-- Mentor Row 4: June + Robert -->
          <div class="row row-split mentor-row">
            <div class="slot slot-left">
              <div class="member-node" ref="node_june">
                <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.june.portfolio }"
                  @click="goToPortfolio(orgMembers.june)" @mouseenter="onHover(orgMembers.june, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                  <div class="portfolio-overlay"><span>View Portfolio</span></div>
                </div>
                <div class="role-tag role-tag--mentor">Mentor</div>
                <div class="org-name">JUNE A. JACINTO</div>
              </div>
            </div>
            <div class="slot slot-center"></div>
            <div class="slot slot-right">
              <div class="member-node" ref="node_robert">
                <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.robert.portfolio }"
                  @click="goToPortfolio(orgMembers.robert)" @mouseenter="onHover(orgMembers.robert, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                  <div class="portfolio-overlay"><span>View Portfolio</span></div>
                </div>
                <div class="role-tag role-tag--mentor">Mentor</div>
                <div class="org-name">ROBERT MAYO L. ELUMBA</div>
              </div>
            </div>
          </div>

          <!-- Mentor Row 5: Gehan (center) -->
          <div class="row row-center mentor-row">
            <div class="member-node" ref="node_gehan">
              <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.gehan.portfolio }"
                @click="goToPortfolio(orgMembers.gehan)" @mouseenter="onHover(orgMembers.gehan, $event)"
                @mousemove="onMove($event)" @mouseleave="onLeave">
                <div class="portfolio-overlay"><span>View Portfolio</span></div>
              </div>
              <div class="role-tag role-tag--mentor">Mentor</div>
              <div class="org-name">GEHAN RESALUTE</div>
            </div>
          </div>

          <!-- Mentor Row 6: Marklan + Raldin -->
          <div class="row row-split mentor-row">
            <div class="slot slot-left">
              <div class="member-node" ref="node_marklan">
                <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.marklan.portfolio }"
                  @click="goToPortfolio(orgMembers.marklan)" @mouseenter="onHover(orgMembers.marklan, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                  <div class="portfolio-overlay"><span>View Portfolio</span></div>
                </div>
                <div class="role-tag role-tag--mentor">Mentor</div>
                <div class="org-name">MARKLAN A. HAMPAC</div>
              </div>
            </div>
            <div class="slot slot-center"></div>
            <div class="slot slot-right">
              <div class="member-node" ref="node_raldins">
                <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.raldin.portfolio }"
                  @click="goToPortfolio(orgMembers.raldin)" @mouseenter="onHover(orgMembers.raldin, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                  <img :src="raldin" alt="Raldin" />
                  <div class="portfolio-overlay"><span>View Portfolio</span></div>
                </div>
                <div class="role-tag role-tag--member-mentor">Member / Mentor</div>
                <div class="org-name">RALDIN C. DISOMIMBA</div>
              </div>
            </div>
          </div>

          <!-- Officers divider -->
          <div class="mentors-divider officers-divider">
            <span class="mentors-label officers-label">Officers</span>
          </div>

          <!-- Row: President -->
          <div class="row row-center">
            <div class="member-node" ref="node_stef">
              <div class="profile-circle has-photo" :class="{ 'has-portfolio': orgMembers.stef.portfolio }"
                @click="goToPortfolio(orgMembers.stef)" @mouseenter="onHover(orgMembers.stef, $event)"
                @mousemove="onMove($event)" @mouseleave="onLeave">
                <img :src="stef" alt="Stefhanie" />
                <div class="portfolio-overlay"><span>View Portfolio</span></div>
              </div>
              <div class="role-tag role-tag--officers">President</div>
              <div class="org-name">STEFHANIE ANN V. BATUCAN</div>
            </div>
          </div>

          <!-- Row: VP + Secretary -->
          <div class="row row-split">
            <div class="slot slot-left">
              <div class="member-node" ref="node_ej">
                <div class="profile-circle has-photo" :class="{ 'has-portfolio': orgMembers.ej.portfolio }"
                  @click="goToPortfolio(orgMembers.ej)" @mouseenter="onHover(orgMembers.ej, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                  <img :src="ej" alt="EJ" />
                  <div class="portfolio-overlay"><span>View Portfolio</span></div>
                </div>
                <div class="role-tag role-tag--officers">Vice President</div>
                <div class="org-name">EJ A. VINCULADO</div>
              </div>
            </div>
            <div class="slot slot-center"></div>
            <div class="slot slot-right">
              <div class="member-node" ref="node_nesfhe">
                <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.nesfhe.portfolio }"
                  @click="goToPortfolio(orgMembers.nesfhe)" @mouseenter="onHover(orgMembers.nesfhe, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                  <div class="portfolio-overlay"><span>View Portfolio</span></div>
                </div>
                <div class="role-tag role-tag--officers">Secretary</div>
                <div class="org-name">NESFHE NINA S. MAGSANAY</div>
              </div>
            </div>
          </div>

          <!-- Row: Asst. Secretary -->
          <div class="row row-center">
            <div class="member-node" ref="node_kate">
              <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.kate.portfolio }"
                @click="goToPortfolio(orgMembers.kate)" @mouseenter="onHover(orgMembers.kate, $event)"
                @mousemove="onMove($event)" @mouseleave="onLeave">
                <div class="portfolio-overlay"><span>View Portfolio</span></div>
              </div>
              <div class="role-tag role-tag--officers">Assistant Secretary</div>
              <div class="org-name">KATE NICOLE S. EDIS</div>
            </div>
          </div>

          <!-- Row: Treasurer + Auditor -->
          <div class="row row-split">
            <div class="slot slot-left">
              <div class="member-node" ref="node_mischi">
                <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.mischi.portfolio }"
                  @click="goToPortfolio(orgMembers.mischi)" @mouseenter="onHover(orgMembers.mischi, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                  <div class="portfolio-overlay"><span>View Portfolio</span></div>
                </div>
                <div class="role-tag role-tag--officers">Treasurer</div>
                <div class="org-name">MISCHI JEDA J. ELUMBA</div>
              </div>
            </div>
            <div class="slot slot-center"></div>
            <div class="slot slot-right">
              <div class="member-node" ref="node_peter">
                <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.peter.portfolio }"
                  @click="goToPortfolio(orgMembers.peter)" @mouseenter="onHover(orgMembers.peter, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                  <div class="portfolio-overlay"><span>View Portfolio</span></div>
                </div>
                <div class="role-tag role-tag--officers">Auditor</div>
                <div class="org-name">PETER ROBERT C. AYONO</div>
              </div>
            </div>
          </div>

          <!-- Row: P.I.O -->
          <div class="row row-center">
            <div class="member-node" ref="node_kenzen">
              <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.kenzen.portfolio }"
                @click="goToPortfolio(orgMembers.kenzen)" @mouseenter="onHover(orgMembers.kenzen, $event)"
                @mousemove="onMove($event)" @mouseleave="onLeave">
                <img :src="kenzen" alt="Kenzen" />
                <div class="portfolio-overlay"><span>View Portfolio</span></div>
              </div>
              <div class="role-tag role-tag--officers">P.I.O</div>
              <div class="org-name">KENZEN L. MINAO</div>
            </div>
          </div>

          <!-- Members divider -->
          <div class="mentors-divider members-divider">
            <span class="mentors-label members-label">Members</span>
          </div>

          <!-- Row: Renz + Raldin (member position) -->
          <div class="row row-split">
            <div class="slot slot-left">
              <div class="member-node" ref="node_renz">
                <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.renz.portfolio }"
                  @click="goToPortfolio(orgMembers.renz)" @mouseenter="onHover(orgMembers.renz, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                  <div class="portfolio-overlay"><span>View Portfolio</span></div>
                </div>
                <div class="role-tag">Member</div>
                <div class="org-name">RENZ L. SANTIAGO</div>
              </div>
            </div>
            <div class="slot slot-center"></div>
            <div class="slot slot-right">
              <div class="member-node" ref="node_raldin">
                <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.raldin.portfolio }"
                  @click="goToPortfolio(orgMembers.raldin)" @mouseenter="onHover(orgMembers.raldin, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                  <img :src="raldin" alt="Raldin" />
                  <div class="portfolio-overlay"><span>View Portfolio</span></div>
                </div>
                <div class="role-tag role-tag--member-mentor">Member / Mentor</div>
                <div class="org-name">RALDIN C. DISOMIMBA</div>
              </div>
            </div>
          </div>

          <!-- Row: Keith -->
          <div class="row row-center">
            <div class="member-node" ref="node_keith">
              <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.keith.portfolio }"
                @click="goToPortfolio(orgMembers.keith)" @mouseenter="onHover(orgMembers.keith, $event)"
                @mousemove="onMove($event)" @mouseleave="onLeave">
                <img :src="keith" alt="Keith" />
                <div class="portfolio-overlay"><span>View Portfolio</span></div>
              </div>
              <div class="role-tag">Member</div>
              <div class="org-name">KEITH BRAIN B. LARANJO</div>
            </div>
          </div>

          <!-- Row: Jullan + Japhet -->
          <div class="row row-split">
            <div class="slot slot-left">
              <div class="member-node" ref="node_jullan">
                <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.jullan.portfolio }"
                  @click="goToPortfolio(orgMembers.jullan)" @mouseenter="onHover(orgMembers.jullan, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                  <div class="portfolio-overlay"><span>View Portfolio</span></div>
                </div>
                <div class="role-tag">Member</div>
                <div class="org-name">JULLAN CARL J. MAGLINTE</div>
              </div>
            </div>
            <div class="slot slot-center"></div>
            <div class="slot slot-right">
              <div class="member-node" ref="node_japhet">
                <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.japhet.portfolio }"
                  @click="goToPortfolio(orgMembers.japhet)" @mouseenter="onHover(orgMembers.japhet, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                  <img :src="japhet" alt="Japhet" />
                  <div class="portfolio-overlay"><span>View Portfolio</span></div>
                </div>
                <div class="role-tag">Member</div>
                <div class="org-name">JAPHET V. BASTILLADA</div>
              </div>
            </div>
          </div>

          <!-- Row: Cristoph -->
          <div class="row row-center">
            <div class="member-node" ref="node_cristoph">
              <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.cristoph.portfolio }"
                @click="goToPortfolio(orgMembers.cristoph)" @mouseenter="onHover(orgMembers.cristoph, $event)"
                @mousemove="onMove($event)" @mouseleave="onLeave">
                <div class="portfolio-overlay"><span>View Portfolio</span></div>
              </div>
              <div class="role-tag">Member</div>
              <div class="org-name">CRISTOPH B. BAGABUYO</div>
            </div>
          </div>

          <!-- Row: Cyd + Marc -->
          <div class="row row-split">
            <div class="slot slot-left">
              <div class="member-node" ref="node_cyd">
                <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.cyd.portfolio }"
                  @click="goToPortfolio(orgMembers.cyd)" @mouseenter="onHover(orgMembers.cyd, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                  <div class="portfolio-overlay"><span>View Portfolio</span></div>
                </div>
                <div class="role-tag">Member</div>
                <div class="org-name">CYD M. BALLON</div>
              </div>
            </div>
            <div class="slot slot-center"></div>
            <div class="slot slot-right">
              <div class="member-node" ref="node_marc">
                <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.marc.portfolio }"
                  @click="goToPortfolio(orgMembers.marc)" @mouseenter="onHover(orgMembers.marc, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                  <div class="portfolio-overlay"><span>View Portfolio</span></div>
                </div>
                <div class="role-tag">Member</div>
                <div class="org-name">MARC LESTER D. GUIDO</div>
              </div>
            </div>
          </div>

          <!-- Row: Justine -->
          <div class="row row-center">
            <div class="member-node" ref="node_justine">
              <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.justine.portfolio }"
                @click="goToPortfolio(orgMembers.justine)" @mouseenter="onHover(orgMembers.justine, $event)"
                @mousemove="onMove($event)" @mouseleave="onLeave">
                <div class="portfolio-overlay"><span>View Portfolio</span></div>
              </div>
              <div class="role-tag">Member</div>
              <div class="org-name">JUSTINE P. BUNCAG</div>
            </div>
          </div>

        </div><!-- end org-chart -->
      </div>
    </transition>

    <!-- Gallery -->
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
import founderPhoto  from '../assets/founder-sheenlee.png'
import raldin        from '../assets/raldin.png'
import sheen        from '../assets/sheen.png'
import japhet        from '../assets/Japhet pfp.png'
import ej            from '../assets/ej.png'
import stef        from '../assets/stef.png'
import kenzen        from '../assets/kenzen.png'
import keith        from '../assets/keith.jpg'
import pic1          from '../assets/pics.png'
import pic2          from '../assets/pics (1).png'
import pic3          from '../assets/pics (2).png'
import pic4          from '../assets/pics (3).png'
import orgChart      from '../assets/org-chart.png'
import misionVision  from '../assets/mission-vision.png'

export default {
  name: 'MemberSection',

  data() {
    return {
      orgChart, misionVision, founderPhoto, raldin, japhet, ej, stef, sheen, kenzen, keith,

      activeTab: 'chart',
      hoveredMember: null,
      tooltipX: 0,
      tooltipY: 0,

      svgWidth: 1000,
      svgHeight: 5000,
      connections: [],

      connectionMap: [
        { from: 'sheenlee', to: 'armando' },
        { from: 'armando',  to: 'juvelito' },
        { from: 'juvelito', to: 'mark' },
        { from: 'juvelito', to: 'whelster' },
        { from: 'mark',     to: 'henzon' },
        { from: 'whelster', to: 'henzon' },
        { from: 'henzon',   to: 'june' },
        { from: 'henzon',   to: 'robert' },
        { from: 'june',     to: 'gehan' },
        { from: 'robert',   to: 'gehan' },
        { from: 'gehan',    to: 'marklan' },
        { from: 'gehan',    to: 'raldins' },
        { from: 'stef',     to: 'ej' },
        { from: 'stef',     to: 'nesfhe' },
        { from: 'ej',       to: 'kate' },
        { from: 'nesfhe',   to: 'kate' },
        { from: 'kate',     to: 'mischi' },
        { from: 'kate',     to: 'peter' },
        { from: 'mischi',   to: 'kenzen' },
        { from: 'peter',    to: 'kenzen' },
        { from: 'kenzen',   to: 'renz' },
        { from: 'kenzen',   to: 'raldin' }, 
        { from: 'renz',     to: 'keith' },
        { from: 'raldin',   to: 'keith' },
        { from: 'keith',    to: 'jullan' },
        { from: 'keith',    to: 'japhet' },
        { from: 'jullan',   to: 'cristoph' },
        { from: 'japhet',   to: 'cristoph' },
        { from: 'cristoph', to: 'cyd' },
        { from: 'cristoph', to: 'marc' },
        { from: 'cyd',      to: 'justine' },
        { from: 'marc',     to: 'justine' },
      ],

      orgMembers: {
        sheenlee: { firstName: 'Sheenlee', portfolio: null },
        armando:  { firstName: 'Armando',  portfolio: null },
        juvelito: { firstName: 'Juvelito', portfolio: null },
        mark:     { firstName: 'Mark',     portfolio: null },
        whelster: { firstName: 'Whelster', portfolio: null },
        henzon:   { firstName: 'Henzon',   portfolio: null },
        june:     { firstName: 'June',     portfolio: null },
        robert:   { firstName: 'Robert',   portfolio: null },
        gehan:    { firstName: 'Gehan',    portfolio: null },
        marklan:  { firstName: 'Marklan',  portfolio: null },
        raldin:   { firstName: 'Raldin',   portfolio: 'https://www.raldincasidar.studio/' },
        stef:     { firstName: 'Stefhanie',portfolio: null },
        ej:       { firstName: 'EJ',       portfolio: null },
        nesfhe:   { firstName: 'Nesfhe',   portfolio: null },
        kate:     { firstName: 'Kate',     portfolio: null },
        mischi:   { firstName: 'Mischi',   portfolio: null },
        peter:    { firstName: 'Peter',    portfolio: null },
        kenzen:   { firstName: 'Kenzen',   portfolio: 'https://kenm.vercel.app/' },
        renz:     { firstName: 'Renz',     portfolio: null },
        keith:    { firstName: 'Keith',    portfolio: 'https://keithlar.vercel.app/' },
        jullan:   { firstName: 'Jullan',   portfolio: null },
        japhet:   { firstName: 'Japhet',   portfolio: null },
        cristoph: { firstName: 'Cristoph', portfolio: 'https://n91ives.vercel.app/' },
        cyd:      { firstName: 'Cyd',      portfolio: null },
        marc:     { firstName: 'Marc',     portfolio: null },
        justine:  { firstName: 'Justine',  portfolio: null },
      },

      tabs: [
        { key: 'chart',    label: 'Org Chart',          color: '#1b1f36', desc: 'Full organizational hierarchy of the Campus Developers Organization.' },
        { key: 'all',      label: 'All Members',        color: '#0f766e', desc: 'Everyone currently active in the Campus Developers Organization.' },
        { key: 'officers', label: 'Officers',           color: '#0369a1', desc: 'Elected officers leading the organization this term.' },
        { key: 'members',  label: 'Current Members',    color: '#059669', desc: 'Active general members of the organization.' },
        { key: 'previous', label: 'Previous Members',   color: '#94a3b8', desc: 'Alumni and former members who have been part of our community.' },
        { key: 'mentors',  label: 'Mentors / Advisers', color: '#7c3aed', desc: 'Faculty advisers and mentors guiding the organization.' },
      ],

      currentMembers: [
        { name: 'SHEEN LEE S. EDIS',        role: 'founder',       roleLabel: 'Founder',         photo: sheen   },
        { name: 'ARMANDO T. SAGUIN, MSIT',   role: 'mentor',        roleLabel: 'Adviser',         photo: null    },
        { name: 'JUVELITO MARTINEZ',         role: 'mentor',        roleLabel: 'Mentor',          photo: null    },
        { name: 'MARK MASCARDO',             role: 'mentor',        roleLabel: 'Mentor',          photo: null    },
        { name: 'WHELSTER R. ESMADE',        role: 'mentor',        roleLabel: 'Mentor',          photo: null    },
        { name: 'HENZON DIONSAY',            role: 'mentor',        roleLabel: 'Mentor',          photo: null    },
        { name: 'JUNE A. JACINTO',           role: 'mentor',        roleLabel: 'Mentor',          photo: null    },
        { name: 'ROBERT MAYO L. ELUMBA',     role: 'mentor',        roleLabel: 'Mentor',          photo: null    },
        { name: 'GEHAN RESALUTE',            role: 'mentor',        roleLabel: 'Mentor',          photo: null    },
        { name: 'MARKLAN A. HAMPAC',         role: 'mentor',        roleLabel: 'Mentor',          photo: null    },
        { name: 'RALDIN C. DISOMIMBA',       role: 'member-mentor', roleLabel: 'Member / Mentor', photo: raldin  },
        { name: 'STEFHANIE ANN V. BATUCAN',  role: 'officer',       roleLabel: 'President',       photo: stef    },
        { name: 'EJ A. VINCULADO',           role: 'officer',       roleLabel: 'Vice President',  photo: ej      },
        { name: 'NESFHE NINA S. MAGSANAY',   role: 'officer',       roleLabel: 'Secretary',       photo: null    },
        { name: 'KATE NICOLE S. EDIS',       role: 'officer',       roleLabel: 'Asst. Secretary', photo: null    },
        { name: 'MISCHI JEDA J. ELUMBA',     role: 'officer',       roleLabel: 'Treasurer',       photo: null    },
        { name: 'PETER ROBERT C. AYONO',     role: 'officer',       roleLabel: 'Auditor',         photo: null    },
        { name: 'KENZEN L. MINAO',           role: 'officer',       roleLabel: 'P.I.O',           photo: kenzen  },
        { name: 'RENZ L. SANTIAGO',          role: 'member',        roleLabel: 'Member',          photo: null    },
        { name: 'KEITH BRAIN B. LARANJO',    role: 'member',        roleLabel: 'Member',          photo: keith   },
        { name: 'JULLAN CARL J. MAGLINTE',   role: 'member',        roleLabel: 'Member',          photo: null    },
        { name: 'JAPHET V. BASTILLADA',      role: 'member',        roleLabel: 'Member',          photo: japhet  },
        { name: 'CRISTOPH B. BAGABUYO',      role: 'member',        roleLabel: 'Member',          photo: null    },
        { name: 'CYD M. BALLON',             role: 'member',        roleLabel: 'Member',          photo: null    },
        { name: 'MARC LESTER D. GUIDO',      role: 'member',        roleLabel: 'Member',          photo: null    },
        { name: 'JUSTINE P. BUNCAG',         role: 'member',        roleLabel: 'Member',          photo: null    },
      ],

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
            { name: 'ALUMNI E', role: 'officer', roleLabel: 'Former Officer', photo: null },
            { name: 'ALUMNI F', role: 'member',  roleLabel: 'Former Member',  photo: null },
            { name: 'ALUMNI G', role: 'member',  roleLabel: 'Former Member',  photo: null },
          ],
        },
        {
          year: 2022,
          members: [
            { name: 'ALUMNI H', role: 'founder', roleLabel: 'Former Founder', photo: null },
            { name: 'ALUMNI I', role: 'officer', roleLabel: 'Former Officer', photo: null },
          ],
        },
      ],

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
        case 'all':
          return this.currentMembers
        case 'officers':
          return this.currentMembers.filter(m => m.role === 'officer' || m.role === 'founder')
        case 'members':
          // member-mentor shows in Members tab
          return this.currentMembers.filter(m => m.role === 'member' || m.role === 'member-mentor')
        case 'mentors':
          // member-mentor shows in Mentors tab too
          return this.currentMembers.filter(m => m.role === 'mentor' || m.role === 'member-mentor')
        default:
          return []
      }
    },
    currentSlide() { return this.slides[this.slideIdx] },
    tooltipStyle() {
      return { left: this.tooltipX + 18 + 'px', top: this.tooltipY - 14 + 'px' }
    },
  },

  watch: {
    activeTab(val) {
      if (val === 'chart') {
        this.$nextTick(() => this.computeConnections())
      }
    },
  },

  mounted() {
    this.$nextTick(() => this.computeConnections())
    window.addEventListener('resize', this.computeConnections)
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.computeConnections)
  },

  methods: {
    computeConnections() {
      this.$nextTick(() => {
        const container = this.$refs.orgChart
        if (!container) return

        const containerRect = container.getBoundingClientRect()
        this.svgWidth  = containerRect.width
        this.svgHeight = containerRect.height

        this.connections = this.connectionMap
          .map(({ from, to, dashed }) => {
            const fromNode = this.$refs[`node_${from}`]
            const toNode   = this.$refs[`node_${to}`]
            if (!fromNode || !toNode) return null

            const fromCircle = fromNode.querySelector('.profile-circle') || fromNode
            const toCircle   = toNode.querySelector('.profile-circle')   || toNode

            const fromRect = fromCircle.getBoundingClientRect()
            const toRect   = toCircle.getBoundingClientRect()

            return {
              x1: fromRect.left + fromRect.width  / 2 - containerRect.left,
              y1: fromRect.bottom                      - containerRect.top,
              x2: toRect.left   + toRect.width   / 2 - containerRect.left,
              y2: toRect.top                          - containerRect.top,
              dashed: !!dashed,
            }
          })
          .filter(Boolean)
      })
    },

    getCount(key) {
      switch (key) {
        case 'chart':    return ''
        case 'all':      return this.currentMembers.length
        case 'officers': return this.currentMembers.filter(m => m.role === 'officer' || m.role === 'founder').length
        case 'members':  return this.currentMembers.filter(m => m.role === 'member'  || m.role === 'member-mentor').length
        case 'previous': return this.previousGroups.reduce((a, g) => a + g.members.length, 0)
        case 'mentors':  return this.currentMembers.filter(m => m.role === 'mentor'  || m.role === 'member-mentor').length
        default:         return ''
      }
    },

    goToPortfolio(member) {
      if (member?.portfolio) window.open(member.portfolio, '_blank', 'noopener,noreferrer')
    },
    onHover(member, event) {
      if (member?.portfolio) {
        this.hoveredMember = member.firstName
        this.tooltipX = event.clientX
        this.tooltipY = event.clientY
      }
    },
    onMove(event) { this.tooltipX = event.clientX; this.tooltipY = event.clientY },
    onLeave() { this.hoveredMember = null },
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

.filter-nav { position: sticky; top: 0; z-index: 50; background: rgba(255,255,255,0.96); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border-bottom: 1px solid #e5e7eb; box-shadow: 0 2px 16px rgba(0,0,0,0.06); }
.filter-nav-inner { max-width: 1100px; margin: 0 auto; padding: 0 40px; display: flex; align-items: center; gap: 2px; height: 54px; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
.filter-nav-inner::-webkit-scrollbar { display: none; }
.filter-tab { display: inline-flex; align-items: center; gap: 7px; padding: 7px 15px; border: none; background: transparent; font-size: 13px; font-weight: 600; color: #6b7280; cursor: pointer; border-radius: 8px; white-space: nowrap; transition: background 0.15s, color 0.15s; flex-shrink: 0; }
.filter-tab:hover { background: #f3f4f6; color: #111; }
.filter-tab--active { background: #1b1f36 !important; color: #fff !important; }
.filter-tab--active .filter-count { background: rgba(255,255,255,0.2); color: #fff; }
.filter-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.filter-count { font-size: 10px; font-weight: 700; background: #f1f5f9; color: #64748b; border-radius: 20px; padding: 1px 7px; min-width: 20px; text-align: center; transition: background 0.15s, color 0.15s; }

.list-view { max-width: 1100px; margin: 0 auto; padding: 48px 40px 72px; }
.list-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; padding-bottom: 28px; margin-bottom: 36px; border-bottom: 1px solid #e5e7eb; }
.list-title { font-size: 28px; font-weight: 700; color: #1b1f36; margin-bottom: 6px; letter-spacing: 0.3px; }
.list-desc { font-size: 13px; color: #6b7280; line-height: 1.6; max-width: 480px; }
.list-total { text-align: right; flex-shrink: 0; }
.list-total-num { display: block; font-size: 40px; font-weight: 800; color: #1b1f36; line-height: 1; }
.list-total-label { font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #9ca3af; }
.member-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); gap: 16px; }
.member-card { display: flex; flex-direction: column; align-items: center; padding: 24px 14px 18px; background: #fff; border: 1px solid #e5e7eb; border-radius: 16px; text-align: center; cursor: default; transition: transform 0.2s ease, box-shadow 0.2s ease; }
.member-card:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(0,0,0,0.09); }
.member-avatar { width: 76px; height: 76px; border-radius: 50%; overflow: hidden; margin-bottom: 14px; border: 3px solid #f3f4f6; box-shadow: 0 4px 14px rgba(0,0,0,0.1); flex-shrink: 0; }
.member-avatar img { width: 100%; height: 100%; object-fit: cover; }
.avatar-sphere { width: 100%; height: 100%; background: radial-gradient(circle at 35% 30%, #ffffff 0%, #e5e7eb 25%, #9ca3af 60%, #4b5563 100%); }
.avatar--founder      { border-color: #b30b1c; box-shadow: 0 4px 14px rgba(179,11,28,0.2); }
.avatar--mentor       { border-color: #7c3aed; box-shadow: 0 4px 14px rgba(124,58,237,0.2); }
.avatar--officer      { border-color: #0369a1; box-shadow: 0 4px 14px rgba(3,105,161,0.2); }
.avatar--member       { border-color: #e5e7eb; }

.avatar--member-mentor { border-color: #7c3aed; box-shadow: 0 4px 14px rgba(124,58,237,0.15); }
.member-name { font-size: 12px; font-weight: 700; color: #1f2937; margin-bottom: 8px; line-height: 1.4; }
.member-role-pill { display: inline-block; font-size: 9px; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase; padding: 3px 10px; border-radius: 20px; }
.pill--founder       { background: #fde8ea; color: #9b0a19; }
.pill--mentor        { background: #ede9fe; color: #5b21b6; }
.pill--officer       { background: #dbeafe; color: #1e40af; }
.pill--member        { background: #d1fae5; color: #065f46; }

.pill--member-mentor {
  background: linear-gradient(90deg, #d1fae5 50%, #ede9fe 50%);
  color: #1f2937;
  border: 1px solid #e5e7eb;
}

.year-block { margin-bottom: 44px; }
.year-divider { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
.year-pill { font-size: 12px; font-weight: 700; color: #1b1f36; background: #f1f5f9; border: 1px solid #e2e8f0; padding: 4px 14px; border-radius: 20px; white-space: nowrap; }
.year-line { flex: 1; height: 1px; background: #e5e7eb; }
.year-tally { font-size: 11px; font-weight: 600; color: #9ca3af; white-space: nowrap; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.fade-enter-from { opacity: 0; transform: translateY(8px); }
.fade-leave-to   { opacity: 0; transform: translateY(-6px); }

.founder-header { max-width: 1100px; margin: 40px auto 60px; padding: 0 60px; display: grid; grid-template-columns: 1fr auto; align-items: start; gap: 40px; }
.founder-intro { padding-top: 20px; }
.section-title { font-size: 32px; font-weight: 700; color: #1b1f36; margin-bottom: 16px; letter-spacing: 0.5px; }
.section-copy { color: #6b7280; line-height: 1.7; font-size: 14px; max-width: 360px; }
.founder-card { display: flex; flex-direction: column; align-items: center; }
.founder-photo { width: 140px; height: 180px; border-radius: 14px; overflow: hidden; background: linear-gradient(135deg, #b30b1c 0%, #7a0712 100%); box-shadow: 0 12px 30px rgba(15,23,42,0.18); }
.founder-photo img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }

.org-chart { position: relative; max-width: 1100px; margin: 0 auto; padding: 0 40px 80px; }
.connectors { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; overflow: visible; }
.connectors line { stroke: #94a3b8; stroke-width: 1.5; fill: none; }
.row { position: relative; z-index: 2; display: grid; grid-template-columns: 1fr 1fr 1fr; align-items: center; margin-bottom: 60px; min-height: 100px; }
.row-top { margin-bottom: 80px; }
.row-center { display: flex; justify-content: center; }
.row-split.wide { grid-template-columns: 1fr 2fr 1fr; }
.slot { display: flex; align-items: center; }
.slot-left  { justify-content: flex-start; }
.slot-center { justify-content: center; }
.slot-right { justify-content: flex-end; }
.member-node { display: inline-flex; flex-direction: column; align-items: center; position: relative; z-index: 3; }

.mentors-divider { display: flex; align-items: center; gap: 16px; margin: 32px 0 48px; position: relative; z-index: 2; }
.mentors-divider::before, .mentors-divider::after { content: ''; flex: 1; height: 1px; background: #e5e7eb; }
.mentors-label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #7c3aed; background: #ede9fe; padding: 4px 14px; border-radius: 20px; white-space: nowrap; }
.officers-divider::before, .officers-divider::after { background: #bfdbfe; }
.officers-label { color: #1d4ed8; background: #dbeafe; }
.members-divider::before, .members-divider::after { background: #a7f3d0; }
.members-label { color: #065f46; background: #d1fae5; }

.mentor-row { margin-bottom: 48px; }

.profile-circle { width: 92px; height: 92px; border-radius: 50%; overflow: hidden; border: 3px solid #fff; box-shadow: 0 8px 22px rgba(15,23,42,0.18); background: #fff; display: flex; align-items: center; justify-content: center; position: relative; transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease; cursor: default; }
.profile-circle img { width: 100%; height: 100%; object-fit: cover; position: relative; z-index: 1; }
.profile-circle.sphere { background: radial-gradient(circle at 35% 30%, #ffffff 0%, #e5e7eb 25%, #9ca3af 60%, #4b5563 100%); border-color: #f3f4f6; }
.portfolio-overlay { position: absolute; inset: 0; z-index: 2; border-radius: 50%; background: rgba(27,31,54,0.80); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.2s ease; }
.portfolio-overlay span { font-size: 9px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; color: #fff; text-align: center; line-height: 1.35; padding: 0 8px; }
.profile-circle.has-portfolio { cursor: pointer; }
.profile-circle.has-portfolio:hover { transform: scale(1.12); box-shadow: 0 14px 36px rgba(179,11,28,0.28); border-color: #b30b1c; }
.profile-circle.has-portfolio:hover .portfolio-overlay { opacity: 1; }

.portfolio-tooltip { position: fixed; z-index: 9999; background: #1b1f36; color: #fff; font-size: 11px; font-weight: 600; padding: 6px 13px; border-radius: 8px; pointer-events: none; white-space: nowrap; display: flex; align-items: center; gap: 6px; box-shadow: 0 4px 16px rgba(0,0,0,0.22); letter-spacing: 0.2px; }
.tooltip-icon { font-size: 12px; }

.role-tag               { margin-top: 8px; font-size: 11px; letter-spacing: 0.8px; font-weight: 600; text-transform: uppercase; padding: 2px 8px; border-radius: 4px; background: #d1fae5; color: #065f46; }
.role-tag--founder      { background: #fde8ea; color: #9b0a19; }
.role-tag--mentor       { background: #ede9fe; color: #5b21b6; }
.role-tag--officers     { background: #dbeafe; color: #1e40af; }

.role-tag--member-mentor {
  background: linear-gradient(90deg, #d1fae5 50%, #ede9fe 50%);
  color: #1f2937;
  border: 1px solid #e5e7eb;
}
.org-name { margin-top: 5px; font-size: 11px; font-weight: 700; color: #1f2937; text-align: center; white-space: nowrap; }

.note-card { background: #e9ecf1; border-radius: 10px; padding: 12px 14px; width: 200px; box-shadow: 0 4px 14px rgba(15,23,42,0.06); position: relative; font-size: 11px; color: #4b5563; line-height: 1.5; }
.note-title { font-size: 12px; font-weight: 700; color: #1f2937; margin-bottom: 4px; }
.note-meta { font-size: 10px; color: #6b7280; line-height: 1.5; margin-bottom: 6px; }
.note-meta-row { display: flex; justify-content: space-between; font-size: 9px; color: #94a3b8; font-weight: 600; border-top: 1px solid rgba(0,0,0,0.05); padding-top: 6px; }
.note-card.note-right::after { content: ''; position: absolute; right: -8px; top: 50%; transform: translateY(-50%); border-width: 8px 0 8px 8px; border-style: solid; border-color: transparent transparent transparent #e9ecf1; }
.note-card.note-left::after  { content: ''; position: absolute; left: -8px; top: 50%; transform: translateY(-50%); border-width: 8px 8px 8px 0; border-style: solid; border-color: transparent #e9ecf1 transparent transparent; }
.japhet-cluster { display: inline-flex; align-items: center; gap: 16px; }

.gallery-section { background: #1b1f36; color: #fff; padding: 60px 24px 70px; width: 100%; }
.gallery-inner { max-width: 900px; margin: 0 auto; text-align: center; }
.gallery-title { font-size: 28px; font-weight: 700; letter-spacing: 0.5px; margin-bottom: 12px; }
.gallery-copy { font-size: 12px; color: #cbd5e1; line-height: 1.7; max-width: 480px; margin: 0 auto 28px; }
.gallery-stage { display: flex; align-items: center; gap: 14px; justify-content: center; }
.gallery-grid { flex: 1; display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; max-width: 720px; }
.gallery-tile { aspect-ratio: 4/3; background: #475569; border-radius: 4px; overflow: hidden; }
.gallery-tile img { width: 100%; height: 100%; object-fit: cover; display: block; }
.gallery-arrow { width: 30px; height: 30px; border-radius: 50%; background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.4); font-size: 16px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s ease; }
.gallery-arrow:hover { background: rgba(255,255,255,0.15); }

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
  .japhet-cluster { flex-direction: column; gap: 10px; }
  .note-card.note-left::after, .note-card.note-right::after { display: none; }
  .profile-circle { width: 80px; height: 80px; }
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  .portfolio-tooltip { display: none; }
}
</style>