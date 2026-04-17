<template>
  <div class="members-profile-container">
    <div class="profile-header">
      <h1>Members Profile</h1>
    </div>

    <div class="members-grid">
      <div class="member-card" v-for="member in members" :key="member.id">
        <div class="card-header">
          <img :src="member.image" :alt="member.name" class="member-image" />
          <h3 class="member-role">{{ member.role }}</h3>
        </div>

        <div class="card-content">
          <p class="member-description">{{ member.description }}</p>

          <div class="skills-section">
            <h4>TechStack</h4>
            <div class="skills-container">
              <span v-for="skill in member.skills" :key="skill" class="skill-badge">
                {{ skill }}
              </span>
            </div>
          </div>

          <div class="projects-section">
            <h4>Projects</h4>
            <div class="projects-grid">
              <div v-for="(project, index) in member.projects" :key="index" class="project-item">
                <div class="project-placeholder"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminMembersProfile',
  data() {
    return {
      members: [
        {
          id: 1,
          name: 'NAME',
          role: 'ROLE',
          image: 'https://via.placeholder.com/100?text=Founder',
          description: 'DESCRIPTION',
          skills: 'SKILLS',
          projects: [1, 2, 3]
        },
        {
          id: 2,
          name: 'NAME',
          role: 'ROLE',
          image: 'https://via.placeholder.com/100?text=Fullstack',
          description: 'DESCRIPTION',
          skills: 'SKILLS',
          projects: [1, 2, 3]
        },
        {
          id: 3,
          name: 'NAME',
          role: 'ROLE',
          image: 'https://via.placeholder.com/100?text=Frontend',
          description: 'DESCRIPTION',
          skills: 'SKILLS',
          projects: [1, 2, 3]
        },
        {
          id: 4,
          name: 'NAME',
          role: 'ROLE',
          image: 'https://via.placeholder.com/100?text=UIUX',
          description: 'DESCRIPTION',
          skills: 'SKILLS',
          projects: [1, 2, 3]
        },
        {
          id: 5,
          name: 'NAME',
          role: 'ROLE',
          image: 'https://via.placeholder.com/100?text=Backend',
          description: 'DESCRIPTION',
          skills: 'SKILLS',
          projects: [1, 2, 3]
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

.members-profile-container {
  width: 100%;
  padding: 40px 20px;
  background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
  min-height: 100vh;
}

.profile-header {
  margin-bottom: 40px;
  padding-left: 20px;
}

.profile-header h1 {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: 0.5px;
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.member-card {
  background: linear-gradient(135deg, #8b7e9c 0%, #6d5e84 100%);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 24px;
  color: white;
}

.member-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
}

.card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  text-align: center;
}

.member-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 16px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  object-fit: cover;
}

.member-role {
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.card-content {
  position: relative;
}

.member-description {
  font-size: 13px;
  line-height: 1.6;
  margin-bottom: 20px;
  opacity: 0.95;
  color: rgba(255, 255, 255, 0.9);
}

.skills-section {
  margin-bottom: 24px;
}

.skills-section h4 {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
  text-transform: uppercase;
  opacity: 0.9;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-badge {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.skill-badge:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.4);
}

.projects-section {
  margin-top: 20px;
}

.projects-section h4 {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
  text-transform: uppercase;
  opacity: 0.9;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.project-item {
  aspect-ratio: 1;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
}

.project-item:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.4);
  transform: scale(1.05);
}

.project-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(139, 126, 156, 0.8), rgba(109, 94, 132, 0.8));
  border-radius: 8px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .members-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }

  .profile-header h1 {
    font-size: 24px;
  }

  .member-card {
    padding: 20px;
  }

  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 480px) {
  .members-profile-container {
    padding: 20px 10px;
  }

  .members-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .profile-header h1 {
    font-size: 20px;
  }

  .member-card {
    padding: 16px;
  }
}
</style>
