<template>
  <section class="members-section" id="members">
    <div class="section-header">
      <div class="section-title">[Our Founder]</div>
      <p class="section-copy">
        The Campus Developers Organization is a community of passionate students dedicated to learning, building, and innovating through technology.
      </p>
    </div>

    <div class="org-chart">
      <!-- Founder -->
      <div class="chart-level level-founder">
        <div class="member-node">
          <div class="profile-wrapper" tabindex="0">
            <img :src="founder.image" :alt="founder.name" class="profile-pic" />
            <div class="hover-card">
              <div class="hover-header">
                <span class="hover-label">Founder</span>
              </div>
              <div class="hover-name">{{ founder.name }}</div>
              <div class="hover-meta">{{ founder.role }}</div>
              <p class="hover-description">{{ founder.description }}</p>
              <div class="hover-tags">
                <span class="hover-tag" v-for="tag in founder.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
          <div class="member-label">{{ founder.roleLabel }}</div>
        </div>

        <div class="connectors">
          <span class="connector vertical center"></span>
        </div>
      </div>

      <!-- Upper diagonal mid members -->
      <div class="chart-level level-split">
        <div class="level-row split-row">
          <!-- Left member -->
          <div class="member-node side-node left" v-if="midMembers[0]">
            <div class="profile-wrapper" tabindex="0">
              <img :src="midMembers[0].image" :alt="midMembers[0].name" class="profile-pic" />
              <div class="hover-card">
                <div class="hover-header">
                  <span class="hover-label">Profile</span>
                </div>
                <div class="hover-name">{{ midMembers[0].name }}</div>
                <div class="hover-meta">{{ midMembers[0].role }}</div>
                <p class="hover-description">{{ midMembers[0].description }}</p>
                <div class="hover-tags">
                  <span class="hover-tag" v-for="tag in midMembers[0].tags" :key="tag">{{ tag }}</span>
                </div>
              </div>
            </div>
            <div class="member-label">{{ midMembers[0].roleLabel }}</div>
          </div>

          <!-- Right member -->
          <div class="member-node side-node right" v-if="midMembers[2]">
            <div class="profile-wrapper" tabindex="0">
              <img :src="midMembers[2].image" :alt="midMembers[2].name" class="profile-pic" />
              <div class="hover-card">
                <div class="hover-header">
                  <span class="hover-label">Profile</span>
                </div>
                <div class="hover-name">{{ midMembers[2].name }}</div>
                <div class="hover-meta">{{ midMembers[2].role }}</div>
                <p class="hover-description">{{ midMembers[2].description }}</p>
                <div class="hover-tags">
                  <span class="hover-tag" v-for="tag in midMembers[2].tags" :key="tag">{{ tag }}</span>
                </div>
              </div>
            </div>
            <div class="member-label">{{ midMembers[2].roleLabel }}</div>
          </div>
        </div>
      </div>

      <!-- Vertical branch to center mid member -->
      <div class="connector-vertical center"></div>

      <!-- Center mid member -->
      <div class="chart-level level-center">
        <div class="member-node center-node" v-if="midMembers[1]">
          <div class="profile-wrapper" tabindex="0">
            <img :src="midMembers[1].image" :alt="midMembers[1].name" class="profile-pic" />
            <div class="hover-card">
              <div class="hover-header">
                <span class="hover-label">Profile</span>
              </div>
              <div class="hover-name">{{ midMembers[1].name }}</div>
              <div class="hover-meta">{{ midMembers[1].role }}</div>
              <p class="hover-description">{{ midMembers[1].description }}</p>
              <div class="hover-tags">
                <span class="hover-tag" v-for="tag in midMembers[1].tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
          <div class="member-label">{{ midMembers[1].roleLabel }}</div>
        </div>
      </div>

      <!-- Vertical connector line -->
      <div class="connector-vertical"></div>

      <!-- Bottom level members -->
      <div class="chart-level level-bottom">
        <div class="level-row">
          <div class="member-node" v-for="member in bottomMembers" :key="member.id">
            <div class="profile-wrapper" tabindex="0">
              <img :src="member.image" :alt="member.name" class="profile-pic" />
              <div class="hover-card">
                <div class="hover-header">
                  <span class="hover-label">Profile</span>
                </div>
                <div class="hover-name">{{ member.name }}</div>
                <div class="hover-meta">{{ member.role }}</div>
                <p class="hover-description">{{ member.description }}</p>
                <div class="hover-tags">
                  <span class="hover-tag" v-for="tag in member.tags" :key="tag">{{ tag }}</span>
                </div>
              </div>
            </div>
            <div class="member-label">{{ member.roleLabel }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MemberSection',
  data() {
    return {
      founder: {
        id: 1,
        name: 'N/A',
        role: 'N/A',
        roleLabel: 'Founder',
        image: 'https://via.placeholder.com/140x140?text=Founder',
        description: 'N/A',
        tags: ['N/A', 'N/A']
      },
      midMembers: [
        {
          id: 2,
          name: 'N/A',
          role: 'N/A',
          roleLabel: 'Backend Developer',
          image: 'https://via.placeholder.com/140x140?text=Backend',
          description: 'N/A',
          tags: ['N/A', 'N/A']
        },
        {
          id: 3,
          name: 'N/A',
          role: 'N/A',
          roleLabel: 'Developer',
          image: 'https://via.placeholder.com/140x140?text=Dev',
          description: 'N/A',
          tags: ['N/A', 'N/A']
        },
        {
          id: 4,
          name: 'N/A',
          role: 'N/A',
          roleLabel: 'Frontend Developer',
          image: 'https://via.placeholder.com/140x140?text=Frontend',
          description: 'N/A',
          tags: ['N/A', 'N/A']
        }
      ],
      bottomMembers: [
        {
          id: 5,
          name: 'N/A',
          role: 'N/A',
          roleLabel: 'Member',
          image: 'https://via.placeholder.com/140x140?text=Member1',
          description: 'N/A',
          tags: ['N/A', 'N/A']
        },
        {
          id: 6,
          name: 'N/A',
          role: 'N/A',
          roleLabel: 'Member',
          image: 'https://via.placeholder.com/140x140?text=Member2',
          description: 'N/A',
          tags: ['N/A', 'N/A']
        },
        {
          id: 7,
          name: 'N/A',
          role: 'N/A',
          roleLabel: 'Member',
          image: 'https://via.placeholder.com/140x140?text=Member3',
          description: 'N/A',
          tags: ['N/A', 'N/A']
        }
      ]
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
  padding: 60px 24px 80px;
  min-height: 100vh;
  background: #f6f7fb;
  color: #111;
  position: relative;
}

.members-section::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(to right, rgba(0, 0, 0, 0.02) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: -1;
}

.section-header {
  max-width: 900px;
  margin: 0 auto 60px;
  text-align: center;
}

.section-title {
  display: inline-flex;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #1b1f36;
  margin-bottom: 16px;
}

.section-copy {
  margin: 0;
  color: #4b5563;
  line-height: 1.8;
  max-width: 580px;
  margin-left: auto;
  margin-right: auto;
  font-size: 15px;
}

.org-chart {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 2600px;
  margin: 0 auto;
}

.chart-level {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
}

.level-founder {
  margin-bottom: 20px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
}

.connectors {
  position: absolute;
  top: 155px;
  left: 0;
  width: 100%;
  height: 260px;
  pointer-events: none;
  z-index: 0;
}

.connector {
  position: absolute;
  width: 3px;
  background: linear-gradient(to bottom, rgba(15, 23, 42, 0.28), rgba(15, 23, 42, 0.12));
  border-radius: 2px;
}

.connector.vertical.center {
  left: 50%;
  top: 0;
  height: 140px;
  transform: translateX(-50%);
}

.side-node {
  position: relative;
  z-index: 2;
}

.side-node::before {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  width: 3px;
  height: 180px;
  background: linear-gradient(to bottom, rgba(15, 23, 42, 0.28), rgba(15, 23, 42, 0.12));
  transform-origin: bottom center;
  transform: translateX(-50%) rotate(0deg);
  z-index: -1;
}

.side-node.left::before {
  transform: translateX(-50%) rotate(30deg);
}

.side-node.right::before {
  transform: translateX(-50%) rotate(-30deg);
}

.level-split {
  margin: 70px 0 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.split-row {
  width: 100%;
  max-width: 1800px;
  display: flex;
  justify-content: space-between;
  gap: 280px;
}

.level-center {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}

.center-node {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.connector-vertical {
  width: 3px;
  height: 60px;
  background: linear-gradient(to bottom, rgba(15, 23, 42, 0.22), rgba(15, 23, 42, 0.12));
  margin: 0 auto;
}

.connector-vertical.center {
  height: 110px;
}

.level-bottom {
  margin-top: 20px;
}

.level-row {
  display: flex;
  justify-content: center;
  gap: 60px;
  align-items: flex-start;
  width: 100%;
  position: relative;
}

.level-row::before {
  display: none;
}

.member-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.profile-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: radial-gradient(circle at top left, rgba(255, 255, 255, 0.95), rgba(220, 220, 240, 0.8));
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.12);
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  border: 4px solid rgba(255, 255, 255, 0.98);
}

.profile-wrapper:hover,
.profile-wrapper:focus-within {
  transform: scale(1.08);
  box-shadow: 0 22px 55px rgba(15, 23, 42, 0.18);
}

.profile-pic {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;
}

.member-label {
  margin-top: 12px;
  color: #334155;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  text-align: center;
}

.hover-card {
  position: absolute;
  top: 50%;
  left: 100%;
  width: 260px;
  padding: 16px 18px;
  background: rgba(255, 255, 255, 0.98);
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.15);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-50%) translateX(8px);
  transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease;
  z-index: 20;
  pointer-events: none;
}

.profile-wrapper:hover .hover-card,
.profile-wrapper:focus-within .hover-card {
  opacity: 1;
  visibility: visible;
  transform: translateY(-50%) translateX(16px);
}

.hover-card::before {
  content: '';
  position: absolute;
  left: -8px;
  top: 50%;
  transform: translateY(-50%);
  border-width: 8px;
  border-style: solid;
  border-color: transparent rgba(255, 255, 255, 0.98) transparent transparent;
}

.hover-header {
  margin-bottom: 8px;
}

.hover-label {
  display: inline-flex;
  padding: 3px 10px;
  background: rgba(79, 70, 229, 0.08);
  color: #4338ca;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
}

.hover-name {
  font-size: 14px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 4px;
}

.hover-meta {
  color: #475569;
  font-size: 12px;
  margin-bottom: 10px;
}

.hover-description {
  font-size: 12px;
  line-height: 1.6;
  color: #334155;
  margin: 0 0 12px;
}

.hover-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.hover-tag {
  padding: 4px 8px;
  background: rgba(15, 23, 42, 0.06);
  border-radius: 999px;
  font-size: 10px;
  color: #1f2937;
}

.connector-vertical {
  width: 3px;
  height: 30px;
  background: linear-gradient(to bottom, rgba(15, 23, 42, 0.15), rgba(15, 23, 42, 0.1));
}

.connector-horizontal {
  position: absolute;
  top: -30px;
  left: 50%;
  width: 2px;
  height: 30px;
  background: linear-gradient(to bottom, rgba(15, 23, 42, 0.1), rgba(15, 23, 42, 0.05));
  transform: translateX(-50%);
}

.level-row::before {
  content: '';
  position: absolute;
  top: -30px;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(15, 23, 42, 0.08);
}

@media (max-width: 968px) {
  .level-row {
    gap: 40px;
  }

  .profile-wrapper {
    width: 150px;
    height: 150px;
  }

  .profile-pic {
    width: 140px;
    height: 140px;
  }

  .hover-card {
    width: 260px;
  }
}

@media (max-width: 680px) {
  .members-section {
    padding: 40px 16px 60px;
  }

  .section-header {
    margin-bottom: 40px;
  }

  .section-title {
    font-size: 22px;
    margin-bottom: 12px;
  }

  .section-copy {
    font-size: 13px;
  }

  .level-row {
    gap: 30px;
    flex-wrap: wrap;
  }

  .profile-wrapper {
    width: 130px;
    height: 130px;
  }

  .profile-pic {
    width: 120px;
    height: 120px;
  }

  .member-label {
    font-size: 11px;
  }

  .hover-card {
    position: fixed;
    left: 50%;
    top: 50%;
    width: 280px;
    transform: translate(-50%, -50%);
    z-index: 100;
    opacity: 0;
    visibility: hidden;
  }

  .hover-card::before {
    display: none;
  }

  .profile-wrapper:hover .hover-card,
  .profile-wrapper:focus-within .hover-card {
    opacity: 1;
    visibility: visible;
  }
}
</style>
