// Current media index for each project
let currentMediaIndex = {};

// Initialize media indices
projects.forEach(project => {
  currentMediaIndex[project.id] = 0;
});

// Render project cards
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = '';
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);
  
  filteredProjects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.onclick = () => openProjectDetail(project.id);
    
    card.innerHTML = `
      <div class="project-card-image ${project.category}">
        <img src="${project.thumbnail}" alt="${project.title}" loading="lazy">
      </div>
      <div class="project-card-body">
        <h3 class="project-card-title">${project.title}</h3>
        <p class="project-card-description">${project.shortDescription}</p>
        <a href="#" class="project-card-link" onclick="event.preventDefault(); openProjectDetail('${project.id}')">
          Read More 
          <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

// Change media in viewer
function changeMedia(projectId, index) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  currentMediaIndex[projectId] = index;
  const media = project.mediaGallery[index];
  const mainViewer = document.getElementById('mainMediaViewer');
  const captionEl = mainViewer.parentElement.querySelector('.media-caption');

  // Update main viewer
  if (media.isVideo) {
    mainViewer.innerHTML = `
      <video id="mainVideo" controls>
        <source src="${media.src}" type="video/mp4">
      </video>
      <div class="video-play-overlay" onclick="playVideo(event)">
        <div class="play-button"></div>
      </div>
    `;
  } else {
    mainViewer.innerHTML = `
      <img src="${media.src}" alt="${project.title}" class="zoomable" onclick="openImageZoom('${media.src}')" loading="lazy">
    `;
  }

  // Update caption separately
  if (captionEl) {
    captionEl.textContent = media.caption;
  }

  // Update active thumbnail
  document.querySelectorAll('.media-thumbnail').forEach((thumb, i) => {
    thumb.classList.toggle('active', i === index);
  });
}

// Play video function
function playVideo(event) {
  event.stopPropagation();
  const overlay = event.currentTarget;
  const video = overlay.parentElement.querySelector('video');
  
  if (video) {
    video.play();
    overlay.classList.add('hidden');
    
    // Show overlay again when video ends
    video.addEventListener('ended', () => {
      overlay.classList.remove('hidden');
    });
    
    // Show overlay when video is paused
    video.addEventListener('pause', () => {
      if (!video.ended) {
        overlay.classList.remove('hidden');
      }
    });
    
    // Hide overlay when video is playing
    video.addEventListener('play', () => {
      overlay.classList.add('hidden');
    });
  }
}

// Image zoom functionality
function openImageZoom(src) {
  const overlay = document.getElementById('imageZoomOverlay');
  const img = document.getElementById('zoomedImage');
  img.src = src;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeImageZoom() {
  const overlay = document.getElementById('imageZoomOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Render sections dynamically
function renderSections(sections) {
  return sections.map(section => {
    switch(section.type) {
      case 'about':
        return `
          <div class="detail-section detail-about">
            <h2 class="detail-section-title">${section.title}</h2>
            <div class="detail-description">
              ${section.content.split('\n\n').map(p => `<p>${p}</p>`).join('')}
            </div>
          </div>
        `;
      case 'features':
        return `
          <div class="detail-section detail-features">
            <h2 class="detail-section-title">${section.title}</h2>
            <ul class="features-list">
              ${section.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        `;
      case 'role':
        return `
          <div class="detail-section detail-role">
            <h2 class="detail-section-title">${section.title}</h2>
            <div class="detail-description">
              ${section.content ? `<p>${section.content}</p>` : ''}
            </div>
            ${section.items ? `
              <ul class="features-list">
                ${section.items.map(item => `<li>${item}</li>`).join('')}
              </ul>
            ` : ''}
          </div>
        `;
      case 'challenges':
        return `
          <div class="detail-section detail-challenges">
            <h2 class="detail-section-title">${section.title}</h2>
            <ul class="features-list">
              ${section.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        `;
      case 'impact':
        return `
          <div class="detail-section detail-impact">
            <h2 class="detail-section-title">${section.title}</h2>
            ${section.content ? `<p class="detail-description">${section.content}</p>` : ''}
            ${section.stats ? `
              <div class="impact-stats">
                ${section.stats.map(stat => `
                  <div class="impact-stat">
                    <div class="impact-stat-value">${stat.value}</div>
                    <div class="impact-stat-label">${stat.label}</div>
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </div>
        `;
      default:
        return '';
    }
  }).join('');
}

// Open project detail sidebar
function openProjectDetail(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;
  
  // Reset to first media
  currentMediaIndex[projectId] = 0;
  
  const firstMedia = project.mediaGallery[0];
  const hasMultipleMedia = project.mediaGallery.length > 1;
  
  const content = document.getElementById('detailContent');
  content.innerHTML = `
    <div class="detail-header">
      <div class="detail-header-left">
        <h1 class="detail-title">${project.title}</h1>
        <p class="detail-subtitle">${project.subtitle}</p>
      </div>
    </div>

    <div class="detail-body">
      <!-- Left Column: Media Viewer + Tech Stack -->
      <div class="detail-left-column">
        <div class="media-viewer">
          ${hasMultipleMedia ? `
          <div class="media-gallery-container">
            <div class="media-gallery-wrapper">
              <div class="media-gallery-main" id="mainMediaViewer">
                ${firstMedia.isVideo ? `
                  <video id="mainVideo" controls>
                    <source src="${firstMedia.src}" type="video/mp4">
                  </video>
                  <div class="video-play-overlay" onclick="playVideo(event)">
                    <div class="play-button"></div>
                  </div>
                ` : `
                  <img src="${firstMedia.src}" alt="${project.title}" class="zoomable" onclick="openImageZoom('${firstMedia.src}')" loading="lazy">
                `}
              </div>
              <div class="media-caption">${firstMedia.caption}</div>
            </div>
            <div class="media-gallery-side">
              ${project.mediaGallery.map((media, idx) => `
                <div class="media-thumbnail ${idx === 0 ? 'active' : ''} ${media.isVideo ? 'video-thumb' : ''}" onclick="changeMedia('${project.id}', ${idx})">
                  <img src="${media.thumbnail}" alt="Thumbnail ${idx + 1}" loading="lazy">
                </div>
              `).join('')}
            </div>
          </div>
          ` : `
          <div style="border-radius: 12px; overflow: hidden; background: #000; margin-bottom: 20px; position: relative; padding-bottom: 56.25%;">
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow-y: auto; overflow-x: hidden;">
              <img src="${firstMedia.src}" alt="${project.title}" class="zoomable" onclick="openImageZoom('${firstMedia.src}')" style="width: 100%; height: auto; min-height: 100%; object-fit: cover; object-position: center; display: block; cursor: zoom-in;" loading="lazy">
            </div>
            <div class="media-caption">${firstMedia.caption}</div>
          </div>
          `}
        </div>

        <h3 class="detail-section-title">Technologies Used</h3>
        <div class="detail-tech-stack">
          ${project.techStack.map(tech => `
            <div class="tech-badge">${tech}</div>
          `).join('')}
        </div>
      </div>

      <!-- Right Column: Dynamic Sections -->
      <div class="detail-right-column">
        ${renderSections(project.sections)}
        
        <div class="detail-cta-container">
          <a href="${project.links.primary.url}" target="_blank" class="detail-cta">
            ${project.links.primary.label}
          </a>
          ${project.links.external.map(link => `
            <a href="${link.url}" target="_blank" class="detail-cta secondary">
              ${link.label}
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('detailSidebar').classList.add('active');
  document.getElementById('detailOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close project detail sidebar
function closeProjectDetail() {
  document.getElementById('detailSidebar').classList.remove('active');
  document.getElementById('detailOverlay').classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Render initial projects
  renderProjects();
  
  // Filter button clicks
  document.querySelectorAll('.filter-item').forEach(item => {
    item.addEventListener('click', function() {
      document.querySelectorAll('.filter-item').forEach(i => i.classList.remove('active'));
      this.classList.add('active');
      renderProjects(this.dataset.filter);
    });
  });
  
  // Close button
  document.getElementById('detailCloseBtn').addEventListener('click', closeProjectDetail);
  
  // Overlay click
  document.getElementById('detailOverlay').addEventListener('click', closeProjectDetail);
  
  // ESC key - close both detail sidebar and image zoom
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const imageZoom = document.getElementById('imageZoomOverlay');
      if (imageZoom.classList.contains('active')) {
        closeImageZoom();
      } else {
        closeProjectDetail();
      }
    }
  });
});
