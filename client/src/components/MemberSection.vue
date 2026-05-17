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
          <div class="list-header-right">
            <div class="search-wrap" v-if="activeTab !== 'previous'">
              <span class="search-icon">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><circle cx="9" cy="9" r="6" stroke="#9ca3af" stroke-width="2"/><path d="M15 15l3 3" stroke="#9ca3af" stroke-width="2" stroke-linecap="round"/></svg>
              </span>
              <input
                class="search-input"
                type="text"
                v-model="searchQuery"
                placeholder="Search by name or role…"
                autocomplete="off"
              />
              <button v-if="searchQuery" class="search-clear" @click="searchQuery = ''" aria-label="Clear search">×</button>
            </div>
            <div class="list-total">
              <span class="list-total-num">{{ activeTab === 'previous' ? totalPrevious : filteredMembers.length }}</span>
              <span class="list-total-label">members</span>
            </div>
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

        <div v-else-if="filteredMembers.length === 0" class="search-empty">
          <p>No members found for "<strong>{{ searchQuery }}</strong>"</p>
        </div>
        <div v-else class="member-grid">
          <div class="member-card" v-for="m in filteredMembers" :key="m.name">
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

        <transition name="card-pop">
          <div class="member-hover-card" v-if="displayedMember" :key="displayedMember.firstName" :style="cardStyle"
            @mouseenter="onCardEnter" @mouseleave="onCardLeave">
            <button v-if="pinnedMember" class="hc-close" @click="unpinCard" aria-label="Close">×</button>
            <div class="hc-top">
              <div class="hc-avatar">
                <img v-if="displayedMember.photo" :src="displayedMember.photo" :alt="displayedMember.firstName" />
                <div v-else class="hc-sphere"></div>
              </div>
              <div class="hc-identity">
                <div class="hc-name">{{ displayedMember.fullName }}</div>
                <div class="hc-role">{{ displayedMember.roleLabel }}</div>
              </div>
            </div>
            <div class="hc-desc">{{ displayedMember.pronoun }} is the {{ displayedMember.roleLabel }} of this organization.</div>
            <div class="hc-divider"></div>
            <div class="hc-skills" v-if="displayedMember.skills && displayedMember.skills.length">
              <div class="hc-skills-label">Tech Stack</div>
              <div class="hc-skills-list">
                <span v-for="skill in displayedMember.skills" :key="skill" class="hc-skill-badge">{{ skill }}</span>
              </div>
            </div>
            <a v-if="displayedMember.portfolio" :href="displayedMember.portfolio" target="_blank" rel="noopener noreferrer" class="hc-portfolio-btn" @click.stop>View Portfolio</a>
            <span v-else class="hc-no-portfolio">No portfolio yet</span>
          </div>
        </transition>

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
                  @click="onClickFace(orgMembers.sheenlee)" @mouseenter="onHover(orgMembers.sheenlee, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                  <img :src="sheen" alt="Founder" />
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
                @click="onClickFace(orgMembers.armando)" @mouseenter="onHover(orgMembers.armando, $event)"
                @mousemove="onMove($event)" @mouseleave="onLeave">
                <img :src="armando" alt="Adviser" />
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
                @click="onClickFace(orgMembers.juvelito)" @mouseenter="onHover(orgMembers.juvelito, $event)"
                @mousemove="onMove($event)" @mouseleave="onLeave">
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
                  @click="onClickFace(orgMembers.mark)" @mouseenter="onHover(orgMembers.mark, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                </div>
                <div class="role-tag role-tag--mentor">Mentor</div>
                <div class="org-name">MARK MASCARDO</div>
              </div>
            </div>
            <div class="slot slot-center"></div>
            <div class="slot slot-right">
              <div class="member-node" ref="node_whelster">
                <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.whelster.portfolio }"
                  @click="onClickFace(orgMembers.whelster)" @mouseenter="onHover(orgMembers.whelster, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
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
                @click="onClickFace(orgMembers.henzon)" @mouseenter="onHover(orgMembers.henzon, $event)"
                @mousemove="onMove($event)" @mouseleave="onLeave">
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
                  @click="onClickFace(orgMembers.june)" @mouseenter="onHover(orgMembers.june, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                </div>
                <div class="role-tag role-tag--mentor">Mentor</div>
                <div class="org-name">JUNE A. JACINTO</div>
              </div>
            </div>
            <div class="slot slot-center"></div>
            <div class="slot slot-right">
              <div class="member-node" ref="node_robert">
                <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.robert.portfolio }"
                  @click="onClickFace(orgMembers.robert)" @mouseenter="onHover(orgMembers.robert, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
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
                @click="onClickFace(orgMembers.gehan)" @mouseenter="onHover(orgMembers.gehan, $event)"
                @mousemove="onMove($event)" @mouseleave="onLeave">
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
                  @click="onClickFace(orgMembers.marklan)" @mouseenter="onHover(orgMembers.marklan, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                </div>
                <div class="role-tag role-tag--mentor">Mentor</div>
                <div class="org-name">MARKLAN A. HAMPAC</div>
              </div>
            </div>
            <div class="slot slot-center"></div>
            <div class="slot slot-right">
              <div class="member-node" ref="node_raldins">
                <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.raldin.portfolio }"
                  @click="onClickFace(orgMembers.raldin)" @mouseenter="onHover(orgMembers.raldin, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                  <img :src="raldin" alt="Raldin" />
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
                @click="onClickFace(orgMembers.stef)" @mouseenter="onHover(orgMembers.stef, $event)"
                @mousemove="onMove($event)" @mouseleave="onLeave">
                <img :src="stef" alt="Stefhanie" />
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
                  @click="onClickFace(orgMembers.ej)" @mouseenter="onHover(orgMembers.ej, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                  <img :src="ej" alt="EJ" />
                </div>
                <div class="role-tag role-tag--officers">Vice President</div>
                <div class="org-name">EJ A. VINCULADO</div>
              </div>
            </div>
            <div class="slot slot-center"></div>
            <div class="slot slot-right">
              <div class="member-node" ref="node_nesfhe">
                <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.nesfhe.portfolio }"
                  @click="onClickFace(orgMembers.nesfhe)" @mouseenter="onHover(orgMembers.nesfhe, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
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
                @click="onClickFace(orgMembers.kate)" @mouseenter="onHover(orgMembers.kate, $event)"
                @mousemove="onMove($event)" @mouseleave="onLeave">
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
                  @click="onClickFace(orgMembers.mischi)" @mouseenter="onHover(orgMembers.mischi, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                </div>
                <div class="role-tag role-tag--officers">Treasurer</div>
                <div class="org-name">MISCHI JEDA J. ELUMBA</div>
              </div>
            </div>
            <div class="slot slot-center"></div>
            <div class="slot slot-right">
              <div class="member-node" ref="node_peter">
                <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.peter.portfolio }"
                  @click="onClickFace(orgMembers.peter)" @mouseenter="onHover(orgMembers.peter, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
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
                @click="onClickFace(orgMembers.kenzen)" @mouseenter="onHover(orgMembers.kenzen, $event)"
                @mousemove="onMove($event)" @mouseleave="onLeave">
                <img :src="kenzen" alt="Kenzen" />
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
                  @click="onClickFace(orgMembers.renz)" @mouseenter="onHover(orgMembers.renz, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                </div>
                <div class="role-tag">Member</div>
                <div class="org-name">RENZ L. SANTIAGO</div>
              </div>
            </div>
            <div class="slot slot-center"></div>
            <div class="slot slot-right">
              <div class="member-node" ref="node_raldin">
                <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.raldin.portfolio }"
                  @click="onClickFace(orgMembers.raldin)" @mouseenter="onHover(orgMembers.raldin, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                  <img :src="raldin" alt="Raldin" />
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
                @click="onClickFace(orgMembers.keith)" @mouseenter="onHover(orgMembers.keith, $event)"
                @mousemove="onMove($event)" @mouseleave="onLeave">
                <img :src="keith" alt="Keith" />
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
                  @click="onClickFace(orgMembers.jullan)" @mouseenter="onHover(orgMembers.jullan, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                </div>
                <div class="role-tag">Member</div>
                <div class="org-name">JULLAN CARL J. MAGLINTE</div>
              </div>
            </div>
            <div class="slot slot-center"></div>
            <div class="slot slot-right">
              <div class="member-node" ref="node_japhet">
                <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.japhet.portfolio }"
                  @click="onClickFace(orgMembers.japhet)" @mouseenter="onHover(orgMembers.japhet, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                  <img :src="japhet" alt="Japhet" />
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
                @click="onClickFace(orgMembers.cristoph)" @mouseenter="onHover(orgMembers.cristoph, $event)"
                @mousemove="onMove($event)" @mouseleave="onLeave">
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
                  @click="onClickFace(orgMembers.cyd)" @mouseenter="onHover(orgMembers.cyd, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                </div>
                <div class="role-tag">Member</div>
                <div class="org-name">CYD M. BALLON</div>
              </div>
            </div>
            <div class="slot slot-center"></div>
            <div class="slot slot-right">
              <div class="member-node" ref="node_marc">
                <div class="profile-circle sphere" :class="{ 'has-portfolio': orgMembers.marc.portfolio }"
                  @click="onClickFace(orgMembers.marc)" @mouseenter="onHover(orgMembers.marc, $event)"
                  @mousemove="onMove($event)" @mouseleave="onLeave">
                  <img :src="marc" alt="Marc" />
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
                @click="onClickFace(orgMembers.justine)" @mouseenter="onHover(orgMembers.justine, $event)"
                @mousemove="onMove($event)" @mouseleave="onLeave">
                <img :src="justine" alt="Justine" />
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
import { membersStore } from '../stores/members.js'
import founderPhoto  from '../assets/founder-sheenlee.png'
import raldin        from '../assets/raldin.png'
import sheen        from '../assets/sheen.png'
import japhet        from '../assets/Japhet pfp.png'
import ej            from '../assets/ej.png'
import stef        from '../assets/stef.png'
import kenzen        from '../assets/kenzen.png'
import justine       from '../assets/justine.jpeg'
import armando        from '../assets/armando.jpg'
import keith        from '../assets/keith.jpg'
import marc            from '../assets/marc.jpg'
import pic1          from '../assets/pics.png'
import pic2          from '../assets/pics (1).png'
import pic3          from '../assets/pics (2).png'
import pic4          from '../assets/pics (3).png'
import orgChart      from '../assets/Organization chart.png'
import misionVision  from '../assets/Mission Vision.png'

export default {
  name: 'MemberSection',

  data() {
    return {
      orgChart, misionVision, founderPhoto, raldin, japhet, ej, stef, sheen, kenzen, keith, justine, armando, marc,  

      activeTab: 'chart',
      searchQuery: '',
      hoveredMember: null,
      hoverRect: null,
      pinnedMember: null,
      pinnedRect: null,
      pinnedElement: null,
      hoveredElement: null,

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
        sheenlee: { firstName: 'Sheenlee', fullName: 'SHEEN LEE S. EDIS',         roleLabel: 'Founder',         pronoun: 'She', skills: [],       portfolio: null,                                    photo: sheen   },
        armando:  { firstName: 'Armando',  fullName: 'ARMANDO T. SAGUIN, MSIT',   roleLabel: 'Adviser',         pronoun: 'He',  skills: [],       portfolio: null,                                    photo: armando },
        juvelito: { firstName: 'Juvelito', fullName: 'JUVELITO MARTINEZ',         roleLabel: 'Mentor',          pronoun: 'He',  skills: [],       portfolio: null,                                    photo: null    },
        mark:     { firstName: 'Mark',     fullName: 'MARK MASCARDO',             roleLabel: 'Mentor',          pronoun: 'He',  skills: [],       portfolio: null,                                    photo: null    },
        whelster: { firstName: 'Whelster', fullName: 'WHELSTER R. ESMADE',        roleLabel: 'Mentor',          pronoun: 'He',  skills: [],       portfolio: null,                                    photo: null    },
        henzon:   { firstName: 'Henzon',   fullName: 'HENZON DIONSAY',            roleLabel: 'Mentor',          pronoun: 'He',  skills: [],       portfolio: null,                                    photo: null    },
        june:     { firstName: 'June',     fullName: 'JUNE A. JACINTO',           roleLabel: 'Mentor',          pronoun: 'He',  skills: [],       portfolio: null,                                    photo: null    },
        robert:   { firstName: 'Robert',   fullName: 'ROBERT MAYO L. ELUMBA',     roleLabel: 'Mentor',          pronoun: 'He',  skills: [],       portfolio: null,                                    photo: null    },
        gehan:    { firstName: 'Gehan',    fullName: 'GEHAN RESALUTE',            roleLabel: 'Mentor',          pronoun: 'He',  skills: [],       portfolio: null,                                    photo: null    },
        marklan:  { firstName: 'Marklan',  fullName: 'MARKLAN A. HAMPAC',         roleLabel: 'Mentor',          pronoun: 'He',  skills: [],       portfolio: null,                                    photo: null    },
        raldin:   { firstName: 'Raldin',   fullName: 'RALDIN C. DISOMIMBA',       roleLabel: 'Member / Mentor', pronoun: 'He',  skills: [],       portfolio: 'https://www.raldincasidar.studio/',     photo: raldin  },
        stef:     { firstName: 'Stefhanie',fullName: 'STEFHANIE ANN V. BATUCAN',  roleLabel: 'President',       pronoun: 'She', skills: [],       portfolio: null,                                    photo: stef    },
        ej:       { firstName: 'EJ',       fullName: 'EJ A. VINCULADO',           roleLabel: 'Vice President',  pronoun: 'He',  skills: ['Vue'],  portfolio: null,                                    photo: ej      },
        nesfhe:   { firstName: 'Nesfhe',   fullName: 'NESFHE NINA S. MAGSANAY',   roleLabel: 'Secretary',       pronoun: 'She', skills: [],       portfolio: null,                                    photo: null    },
        kate:     { firstName: 'Kate',     fullName: 'KATE NICOLE S. EDIS',       roleLabel: 'Asst. Secretary', pronoun: 'She', skills: [],       portfolio: null,                                    photo: null    },
        mischi:   { firstName: 'Mischi',   fullName: 'MISCHI JEDA J. ELUMBA',     roleLabel: 'Treasurer',       pronoun: 'She', skills: [],       portfolio: null,                                    photo: null    },
        peter:    { firstName: 'Peter',    fullName: 'PETER ROBERT C. AYONO',     roleLabel: 'Auditor',         pronoun: 'He',  skills: [],       portfolio: 'https://peter-ayono.vercel.app/',       photo: null    },
        kenzen:   { firstName: 'Kenzen',   fullName: 'KENZEN L. MINAO',           roleLabel: 'P.I.O',           pronoun: 'He',  skills: ['Vue'],  portfolio: 'https://kenm.vercel.app/',              photo: kenzen  },
        renz:     { firstName: 'Renz',     fullName: 'RENZ L. SANTIAGO',          roleLabel: 'Member',          pronoun: 'He',  skills: [],       portfolio: null,                                    photo: null    },
        keith:    { firstName: 'Keith',    fullName: 'KEITH BRAIN B. LARANJO',    roleLabel: 'Member',          pronoun: 'He',  skills: ['Vue'],  portfolio: 'https://keithlar.vercel.app/',          photo: keith   },
        jullan:   { firstName: 'Jullan',   fullName: 'JULLAN CARL J. MAGLINTE',   roleLabel: 'Member',          pronoun: 'He',  skills: ['Vue'],  portfolio: 'https://jullanmaglinte.site/',          photo: null    },
        japhet:   { firstName: 'Japhet',   fullName: 'JAPHET V. BASTILLADA',      roleLabel: 'Member',          pronoun: 'He',  skills: ['Vue'],  portfolio: 'https://japhet-bastillada.vercel.app/',photo: japhet  },
        cristoph: { firstName: 'Cristoph', fullName: 'CRISTOPH B. BAGABUYO',      roleLabel: 'Member',          pronoun: 'He',  skills: [],       portfolio: 'https://n91ives.vercel.app/',           photo: null    },
        cyd:      { firstName: 'Cyd',      fullName: 'CYD M. BALLON',             roleLabel: 'Member',          pronoun: 'He',  skills: [],       portfolio: null,                                    photo: null    },
        marc:     { firstName: 'Marc',     fullName: 'MARC LESTER D. GUIDO',      roleLabel: 'Member',          pronoun: 'He',  skills: ['Vue'],  portfolio: 'https://memitsuki.vercel.app/',         photo: marc    },
        justine:  { firstName: 'Justine',  fullName: 'JUSTINE P. BUNCAG',         roleLabel: 'Member',          pronoun: 'She', skills: ['Vue'],  portfolio: 'https://justineeun.vercel.app/',        photo: justine },
      },

      tabs: [
        { key: 'chart',    label: 'Org Chart',          color: '#1b1f36', desc: 'Full organizational hierarchy of the Campus Developers Organization.' },
        { key: 'all',      label: 'All Members',        color: '#0f766e', desc: 'Everyone currently active in the Campus Developers Organization.' },
        { key: 'officers', label: 'Officers',           color: '#0369a1', desc: 'Elected officers leading the organization this term.' },
        { key: 'members',  label: 'Current Members',    color: '#059669', desc: 'Active general members of the organization.' },
        { key: 'previous', label: 'Previous Members',   color: '#94a3b8', desc: 'Alumni and former members who have been part of our community.' },
        { key: 'mentors',  label: 'Mentors / Advisers', color: '#7c3aed', desc: 'Faculty advisers and mentors guiding the organization.' },
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
        [pic3, pic4, pic1],
        [pic2, pic3, pic4],
        [orgChart, pic1, pic2],
        [misionVision, pic3, pic4],
      ],
      slideIdx: 0,
    }
  },

  computed: {
    currentMembers() {
      const roleKeyMap = {
        'Founder':          'founder',
        'Adviser':          'mentor',
        'Mentor':           'mentor',
        'Member / Mentor':  'member-mentor',
        'President':        'officer',
        'Vice President':   'officer',
        'Secretary':        'officer',
        'Asst. Secretary':  'officer',
        'Treasurer':        'officer',
        'Auditor':          'officer',
        'P.I.O':            'officer',
        'Member':           'member',
      }
      return membersStore.list.map(m => ({
        name:      m.name,
        role:      roleKeyMap[m.role] || 'member',
        roleLabel: m.role,
        photo:     m.image || null,
      }))
    },
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
          return this.currentMembers.filter(m => m.role === 'member' || m.role === 'member-mentor')
        case 'mentors':
          return this.currentMembers.filter(m => m.role === 'mentor' || m.role === 'member-mentor')
        default:
          return []
      }
    },
    filteredMembers() {
      const q = this.searchQuery.trim().toLowerCase()
      if (!q) return this.displayedMembers
      return this.displayedMembers.filter(m =>
        m.name.toLowerCase().includes(q) || m.roleLabel.toLowerCase().includes(q)
      )
    },
    currentSlide() { return this.slides[this.slideIdx] },
    displayedMember() {
      return this.pinnedMember || this.hoveredMember
    },
    displayedRect() {
      return this.pinnedRect || this.hoverRect
    },
    cardStyle() {
      const r = this.displayedRect
      if (!r) return { display: 'none' }
      const cardWidth = 246
      const spaceOnRight = window.innerWidth - r.right
      const left = spaceOnRight >= cardWidth + 16
        ? r.right + 16
        : r.left - cardWidth - 16
      return {
        left: Math.max(8, left) + 'px',
        top:  (r.top + r.height / 2) + 'px',
        transform: 'translateY(-50%)',
      }
    },
  },

  watch: {
    activeTab(val) {
      this.searchQuery = ''
      if (val === 'chart') {
        this.$nextTick(() => this.computeConnections())
      }
    },
  },

  mounted() {
    this.$nextTick(() => this.computeConnections())
    window.addEventListener('resize', this.computeConnections)
    this._updatePinnedPos = () => {
      if (this.pinnedElement) {
        const r = this.pinnedElement.getBoundingClientRect()
        this.pinnedRect = { top: r.top, right: r.right, height: r.height }
      }
    }
    window.addEventListener('scroll', this._updatePinnedPos, { passive: true })
    window.addEventListener('resize', this._updatePinnedPos, { passive: true })
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.computeConnections)
    window.removeEventListener('scroll', this._updatePinnedPos)
    window.removeEventListener('resize', this._updatePinnedPos)
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
    onClickFace(member) {
      if (this.pinnedMember === member) {
        this.pinnedMember = null
        this.pinnedRect = null
        this.pinnedElement = null
      } else {
        this.pinnedMember = member
        this.pinnedElement = this.hoveredElement
        if (this.pinnedElement) {
          const r = this.pinnedElement.getBoundingClientRect()
          this.pinnedRect = { top: r.top, right: r.right, height: r.height }
        }
      }
    },
    unpinCard() {
      this.pinnedMember = null
      this.pinnedRect = null
      this.pinnedElement = null
    },
    onHover(member, event) {
      clearTimeout(this._leaveTimer)
      this.hoveredElement = event.currentTarget
      if (!this.pinnedMember) {
        this.hoveredMember = member
        const r = event.currentTarget.getBoundingClientRect()
        this.hoverRect = { top: r.top, right: r.right, height: r.height }
      }
    },
    onMove() {},
    onLeave() {
      if (!this.pinnedMember) {
        this._leaveTimer = setTimeout(() => {
          this.hoveredMember = null
          this.hoverRect = null
        }, 120)
      }
    },
    onCardEnter() { clearTimeout(this._leaveTimer) },
    onCardLeave() {
      if (!this.pinnedMember) {
        this.hoveredMember = null
        this.hoverRect = null
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
.list-header-right { display: flex; flex-direction: column; align-items: flex-end; gap: 10px; flex-shrink: 0; }
.list-total { text-align: right; }
.list-total-num { display: block; font-size: 40px; font-weight: 800; color: #1b1f36; line-height: 1; }
.list-total-label { font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #9ca3af; }
.search-wrap { position: relative; display: flex; align-items: center; }
.search-icon { position: absolute; left: 11px; pointer-events: none; display: flex; align-items: center; }
.search-input { padding: 8px 34px 8px 32px; border: 1px solid #e5e7eb; border-radius: 10px; font-size: 13px; color: #1f2937; background: #f9fafb; outline: none; width: 220px; transition: border-color 0.15s, box-shadow 0.15s; }
.search-input::placeholder { color: #9ca3af; }
.search-input:focus { border-color: #1b1f36; background: #fff; box-shadow: 0 0 0 3px rgba(27,31,54,0.07); }
.search-clear { position: absolute; right: 9px; background: none; border: none; color: #9ca3af; font-size: 16px; line-height: 1; cursor: pointer; padding: 2px 4px; border-radius: 4px; transition: color 0.15s; }
.search-clear:hover { color: #1b1f36; }
.search-empty { padding: 48px 0; text-align: center; color: #6b7280; font-size: 14px; }
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
.profile-circle { cursor: pointer; }
.profile-circle:hover { transform: scale(1.08); box-shadow: 0 12px 28px rgba(15,23,42,0.22); }
.profile-circle.has-portfolio:hover { transform: scale(1.12); box-shadow: 0 14px 36px rgba(179,11,28,0.28); border-color: #b30b1c; }

.card-pop-enter-active { transition: opacity 0.18s ease, transform 0.18s ease; }
.card-pop-leave-active { transition: opacity 0.13s ease, transform 0.13s ease; }
.card-pop-enter-from  { opacity: 0; transform: translateY(-50%) scale(0.93); }
.card-pop-leave-to    { opacity: 0; transform: translateY(-50%) scale(0.93); }
.member-hover-card { position: fixed; z-index: 9999; width: 230px; background: linear-gradient(180deg, #d9dade 0%, #5d5f66 100%); border-radius: 18px; padding: 16px; box-shadow: 0 16px 48px rgba(0,0,0,0.30); isolation: isolate; }
.hc-close { position: absolute; top: 10px; right: 12px; background: none; border: none; font-size: 18px; line-height: 1; color: rgba(0,0,0,0.35); cursor: pointer; padding: 0; transition: color 0.15s; }
.hc-close:hover { color: rgba(0,0,0,0.7); }
.hc-top { display: flex; align-items: center; gap: 11px; margin-bottom: 12px; }
.hc-avatar { width: 48px; height: 48px; border-radius: 50%; overflow: hidden; border: 2px solid rgba(255,255,255,0.5); flex-shrink: 0; }
.hc-avatar img { width: 100%; height: 100%; object-fit: cover; }
.hc-sphere { width: 100%; height: 100%; background: radial-gradient(circle at 35% 30%, #ffffff 0%, #e5e7eb 25%, #9ca3af 60%, #4b5563 100%); }
.hc-identity { flex: 1; min-width: 0; }
.hc-name { font-size: 11px; font-weight: 700; color: #111827; line-height: 1.3; margin-bottom: 2px; }
.hc-role { font-size: 11px; color: #374151; font-weight: 500; }
.hc-desc { font-size: 11px; color: #374151; line-height: 1.5; margin-bottom: 10px; font-style: italic; }
.hc-divider { height: 1px; background: rgba(0,0,0,0.10); margin-bottom: 10px; }
.hc-skills { margin-bottom: 12px; }
.hc-skills-label { font-size: 9px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #374151; margin-bottom: 5px; }
.hc-skills-list { display: flex; flex-wrap: wrap; gap: 4px; }
.hc-skill-badge { background: rgba(255,255,255,0.55); color: #1f2937; padding: 3px 9px; border-radius: 20px; font-size: 10px; font-weight: 600; border: 1px solid rgba(255,255,255,0.3); }
.hc-portfolio-btn { display: block; text-align: center; background: #1b1f36; color: #fff; padding: 9px 0; border-radius: 10px; font-size: 11px; font-weight: 700; text-decoration: none; letter-spacing: 0.3px; transition: background 0.2s; }
.hc-portfolio-btn:hover { background: #2d3561; }
.hc-no-portfolio { display: block; text-align: center; color: rgba(0,0,0,0.35); font-size: 10px; font-style: italic; padding-top: 2px; }

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
  .member-hover-card { display: none; }
}
</style>