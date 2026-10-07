/* Shared Pre-Footer – expandable categorized lists (Areas, Subjects, Curricula) */
(function () {
  var html = `
<section class="pre-footer">
  <div class="pre-footer-inner">
    <h2>Explore Tutors by Area, Subject & Curriculum</h2>
    <p class="pre-footer-desc">Browse home and online tutors across Islamabad and Lahore. Expand a section to see all options.</p>

    <div class="pre-footer-accordions">

      <details class="pf-acc" open>
        <summary>Islamabad – G Sectors</summary>
        <ul class="pf-links">
          <li><a href="home-tutors-g6-islamabad.html">G-6</a></li>
          <li><a href="home-tutors-g7-islamabad.html">G-7</a></li>
          <li><a href="home-tutors-g8-islamabad.html">G-8</a></li>
          <li><a href="home-tutors-g9-islamabad.html">G-9</a></li>
          <li><a href="home-tutors-g10-islamabad.html">G-10</a></li>
          <li><a href="home-tutors-g11-islamabad.html">G-11</a></li>
          <li><a href="home-tutors-g12-islamabad.html">G-12</a></li>
          <li><a href="home-tutors-g13-islamabad.html">G-13</a></li>
          <li><a href="home-tutors-g14-islamabad.html">G-14</a></li>
          <li><a href="home-tutors-g15-islamabad.html">G-15</a></li>
          <li><a href="home-tutors-g16-islamabad.html">G-16</a></li>
        </ul>
      </details>

      <details class="pf-acc">
        <summary>Islamabad – F, E & I Sectors</summary>
        <ul class="pf-links">
          <li><a href="home-tutors-f6-islamabad.html">F-6</a></li>
          <li><a href="home-tuition-f7-islamabad.html">F-7</a></li>
          <li><a href="home-tutors-f8-islamabad.html">F-8</a></li>
          <li><a href="home-tutors-f10-islamabad.html">F-10</a></li>
          <li><a href="home-tutors-f11-islamabad.html">F-11</a></li>
          <li><a href="home-tutors-f12-islamabad.html">F-12</a></li>
          <li><a href="home-tutors-e7-islamabad.html">E-7</a></li>
          <li><a href="home-tutors-e8-islamabad.html">E-8</a></li>
          <li><a href="home-tutors-e11-islamabad.html">E-11</a></li>
          <li><a href="home-tutors-i8-islamabad.html">I-8</a></li>
          <li><a href="home-tutors-i9-islamabad.html">I-9</a></li>
          <li><a href="home-tutors-i10-islamabad.html">I-10</a></li>
          <li><a href="home-tutors-i11-islamabad.html">I-11</a></li>
          <li><a href="home-tutors-i12-islamabad.html">I-12</a></li>
          <li><a href="home-tutors-i14-islamabad.html">I-14</a></li>
          <li><a href="home-tutors-i15-islamabad.html">I-15</a></li>
          <li><a href="home-tutors-i16-islamabad.html">I-16</a></li>
        </ul>
      </details>

      <details class="pf-acc">
        <summary>DHA Islamabad & Phases</summary>
        <ul class="pf-links">
          <li><a href="home-tutors-dha-islamabad.html">DHA Overview</a></li>
          <li><a href="home-tutors-dha-phase-1-islamabad.html">Phase 1</a></li>
          <li><a href="home-tutors-dha-phase-2-islamabad.html">Phase 2</a></li>
          <li><a href="home-tutors-dha-phase-2-extension-islamabad.html">Phase 2 Extension</a></li>
          <li><a href="home-tutors-dha-phase-3-islamabad.html">Phase 3</a></li>
          <li><a href="home-tutors-dha-phase-4-islamabad.html">Phase 4</a></li>
          <li><a href="home-tutors-dha-phase-5-islamabad.html">Phase 5</a></li>
          <li><a href="physics-home-tutors-dha-phase-2-islamabad.html">Physics – Phase 2</a></li>
          <li><a href="mathematics-home-tutors-dha-phase-2-islamabad.html">Maths – Phase 2</a></li>
          <li><a href="chemistry-home-tutors-dha-phase-2-islamabad.html">Chemistry – Phase 2</a></li>
          <li><a href="female-home-tutors-dha-islamabad.html">Female Tutors DHA</a></li>
          <li><a href="private-home-tutors-dha-islamabad.html">Private Tutors DHA</a></li>
        </ul>
      </details>

      <details class="pf-acc">
        <summary>Other Islamabad Areas</summary>
        <ul class="pf-links">
          <li><a href="online-tutors-bahria-town-islamabad.html">Bahria Town</a></li>
          <li><a href="home-tutors-gulberg-greens-islamabad.html">Gulberg Greens</a></li>
          <li><a href="home-tutors-gulberg-residencia-islamabad.html">Gulberg Residencia</a></li>
          <li><a href="home-tutors-bani-gala-islamabad.html">Bani Gala</a></li>
          <li><a href="home-tutors-emaar-canyon-views-islamabad.html">Emaar Canyon Views</a></li>
          <li><a href="home-tutors-margalla-hills-islamabad.html">Margalla Hills</a></li>
          <li><a href="home-tutors-park-view-city-islamabad.html">Park View City</a></li>
          <li><a href="home-tutors-capital-smart-city-islamabad.html">Capital Smart City</a></li>
          <li><a href="home-tutors-top-city-1-islamabad.html">Top City-1</a></li>
          <li><a href="home-tutors-faisal-town-islamabad.html">Faisal Town</a></li>
          <li><a href="home-tutors-pwd-islamabad.html">PWD</a></li>
          <li><a href="home-tutors-soan-garden-islamabad.html">Soan Garden</a></li>
          <li><a href="home-tutors-korang-town-islamabad.html">Korang Town</a></li>
          <li><a href="home-tutors-khanna-islamabad.html">Khanna</a></li>
          <li><a href="home-tutors-chak-shahzad-islamabad.html">Chak Shahzad</a></li>
        </ul>
      </details>

      <details class="pf-acc">
        <summary>Lahore Areas</summary>
        <ul class="pf-links">
          <li><a href="dha-lahore.html">DHA Lahore</a></li>
          <li><a href="cavalry-ground-lahore.html">Cavalry Ground</a></li>
          <li><a href="gulberg-lahore.html">Gulberg</a></li>
          <li><a href="model-town-lahore.html">Model Town</a></li>
          <li><a href="bahria-town-lahore.html">Bahria Town Lahore</a></li>
          <li><a href="johar-town-lahore.html">Johar Town</a></li>
          <li><a href="wapda-town-lahore.html">Wapda Town</a></li>
          <li><a href="askari-lahore.html">Askari</a></li>
          <li><a href="garden-town-lahore.html">Garden Town</a></li>
          <li><a href="valencia-town-lahore.html">Valencia Town</a></li>
        </ul>
      </details>

      <details class="pf-acc">
        <summary>Cavalry Ground – Subjects & Levels</summary>
        <ul class="pf-links">
          <li><a href="physics-home-tutors-cavalry-ground-lahore.html">Physics</a></li>
          <li><a href="mathematics-home-tutors-cavalry-ground-lahore.html">Mathematics</a></li>
          <li><a href="chemistry-home-tutors-cavalry-ground-lahore.html">Chemistry</a></li>
          <li><a href="biology-home-tutors-cavalry-ground-lahore.html">Biology</a></li>
          <li><a href="english-home-tutors-cavalry-ground-lahore.html">English</a></li>
          <li><a href="computer-science-home-tutors-cavalry-ground-lahore.html">Computer Science</a></li>
          <li><a href="o-level-home-tutors-cavalry-ground-lahore.html">O Level</a></li>
          <li><a href="a-level-home-tutors-cavalry-ground-lahore.html">A Level</a></li>
          <li><a href="igcse-home-tutors-cavalry-ground-lahore.html">IGCSE</a></li>
          <li><a href="matric-home-tutors-cavalry-ground-lahore.html">Matric</a></li>
          <li><a href="fsc-home-tutors-cavalry-ground-lahore.html">FSc</a></li>
          <li><a href="home-tutors-primary-students-cavalry-ground-lahore.html">Primary Students</a></li>
          <li><a href="home-tutors-class-9-10-cavalry-ground-lahore.html">Class 9–10</a></li>
          <li><a href="female-home-tutors-cavalry-ground-lahore.html">Female Tutors</a></li>
          <li><a href="online-tutors-cavalry-ground-lahore.html">Online Tutors</a></li>
          <li><a href="best-home-tutors-cavalry-ground-lahore-o-level.html">Best O Level Tutors</a></li>
        </ul>
      </details>

      <details class="pf-acc">
        <summary>Gulberg Lahore – Subjects & Levels</summary>
        <ul class="pf-links">
          <li><a href="physics-home-tutors-gulberg-lahore.html">Physics</a></li>
          <li><a href="mathematics-home-tutors-gulberg-lahore.html">Mathematics</a></li>
          <li><a href="chemistry-home-tutors-gulberg-lahore.html">Chemistry</a></li>
          <li><a href="biology-home-tutors-gulberg-lahore.html">Biology</a></li>
          <li><a href="english-home-tutors-gulberg-lahore.html">English</a></li>
          <li><a href="computer-science-home-tutors-gulberg-lahore.html">Computer Science</a></li>
          <li><a href="o-level-home-tutors-gulberg-lahore.html">O Level</a></li>
          <li><a href="a-level-home-tutors-gulberg-lahore.html">A Level</a></li>
          <li><a href="igcse-home-tutors-gulberg-lahore.html">IGCSE</a></li>
          <li><a href="gcse-home-tutors-gulberg-lahore.html">GCSE</a></li>
          <li><a href="matric-home-tutors-gulberg-lahore.html">Matric</a></li>
          <li><a href="fsc-home-tutors-gulberg-lahore.html">FSc</a></li>
          <li><a href="home-tutors-primary-students-gulberg-lahore.html">Primary Students</a></li>
          <li><a href="home-tutors-gulberg-lahore-school-students.html">School Students</a></li>
          <li><a href="female-home-tutors-gulberg-lahore.html">Female Tutors</a></li>
          <li><a href="online-tutors-gulberg-lahore.html">Online Tutors</a></li>
          <li><a href="best-home-tutors-gulberg-lahore-o-level.html">Best O Level Tutors</a></li>
        </ul>
      </details>

      <details class="pf-acc">
        <summary>Subjects (DHA Islamabad focus)</summary>
        <ul class="pf-links">
          <li><a href="physics-home-tutors-dha-phase-1-islamabad.html">Physics – Phase 1</a></li>
          <li><a href="physics-home-tutors-dha-phase-2-islamabad.html">Physics – Phase 2</a></li>
          <li><a href="physics-home-tutors-dha-phase-3-islamabad.html">Physics – Phase 3</a></li>
          <li><a href="physics-home-tutors-dha-phase-4-islamabad.html">Physics – Phase 4</a></li>
          <li><a href="physics-home-tutors-dha-phase-5-islamabad.html">Physics – Phase 5</a></li>
          <li><a href="mathematics-home-tutors-dha-phase-1-islamabad.html">Maths – Phase 1</a></li>
          <li><a href="mathematics-home-tutors-dha-phase-2-islamabad.html">Maths – Phase 2</a></li>
          <li><a href="mathematics-home-tutors-dha-phase-3-islamabad.html">Maths – Phase 3</a></li>
          <li><a href="mathematics-home-tutors-dha-phase-4-islamabad.html">Maths – Phase 4</a></li>
          <li><a href="mathematics-home-tutors-dha-phase-5-islamabad.html">Maths – Phase 5</a></li>
          <li><a href="chemistry-home-tutors-dha-phase-1-islamabad.html">Chemistry – Phase 1–5</a></li>
          <li><a href="biology-home-tutors-dha-phase-1-islamabad.html">Biology – Phase 1–5</a></li>
          <li><a href="english-home-tutors-dha-phase-2-islamabad.html">English</a></li>
          <li><a href="computer-science-home-tutors-dha-phase-2-islamabad.html">Computer Science</a></li>
          <li><a href="ai-tutors-dha-islamabad.html">AI Tutors</a></li>
          <li><a href="python-tutors-dha-islamabad.html">Python</a></li>
          <li><a href="coding-tutors-dha-islamabad.html">Coding</a></li>
          <li><a href="robotics-tutors-dha-islamabad.html">Robotics</a></li>
        </ul>
      </details>

      <details class="pf-acc">
        <summary>Curricula (O Level, A Level, IGCSE, Board)</summary>
        <ul class="pf-links">
          <li><a href="o-level-physics-home-tutors-dha-islamabad.html">O Level Physics</a></li>
          <li><a href="o-level-chemistry-home-tutors-dha-islamabad.html">O Level Chemistry</a></li>
          <li><a href="o-level-mathematics-home-tutors-dha-islamabad.html">O Level Maths</a></li>
          <li><a href="o-level-biology-home-tutors-dha-islamabad.html">O Level Biology</a></li>
          <li><a href="o-level-computer-science-home-tutors-dha-islamabad.html">O Level Computer Science</a></li>
          <li><a href="a-level-physics-home-tutors-dha-islamabad.html">A Level Physics</a></li>
          <li><a href="a-level-chemistry-home-tutors-dha-islamabad.html">A Level Chemistry</a></li>
          <li><a href="a-level-mathematics-home-tutors-dha-islamabad.html">A Level Maths</a></li>
          <li><a href="a-level-biology-home-tutors-dha-islamabad.html">A Level Biology</a></li>
          <li><a href="a-level-computer-science-home-tutors-dha-islamabad.html">A Level Computer Science</a></li>
          <li><a href="igcse-home-tutors-cavalry-ground-lahore.html">IGCSE – Cavalry Ground</a></li>
          <li><a href="igcse-home-tutors-gulberg-lahore.html">IGCSE – Gulberg</a></li>
          <li><a href="gcse-home-tutors-gulberg-lahore.html">GCSE – Gulberg</a></li>
          <li><a href="federal-board-physics-home-tutors-dha-islamabad.html">Federal Board Physics</a></li>
          <li><a href="federal-board-chemistry-home-tutors-dha-islamabad.html">Federal Board Chemistry</a></li>
          <li><a href="federal-board-mathematics-home-tutors-dha-islamabad.html">Federal Board Maths</a></li>
          <li><a href="federal-board-biology-home-tutors-dha-islamabad.html">Federal Board Biology</a></li>
          <li><a href="federal-board-computer-science-home-tutors-dha-islamabad.html">Federal Board CS</a></li>
          <li><a href="matric-home-tutors-cavalry-ground-lahore.html">Matric</a></li>
          <li><a href="fsc-home-tutors-cavalry-ground-lahore.html">FSc</a></li>
        </ul>
      </details>

    </div>

    <div class="pre-footer-cta">
      <p>Need a tutor for a different area or subject?</p>
      <a href="https://wa.me/923119696807?text=Hello%20Pak%20Home%20Tutors%2C%20I%20need%20a%20tutor" class="btn" target="_blank" rel="noopener">Request a Tutor on WhatsApp</a>
    </div>
  </div>
</section>`;

  function inject() {
    document.querySelectorAll('section.pre-footer').forEach(function (el) {
      el.remove();
    });

    var target = document.getElementById('pre-footer-placeholder');
    if (target) {
      target.outerHTML = html;
      return;
    }
    var footer = document.querySelector('footer');
    if (footer) {
      footer.insertAdjacentHTML('beforebegin', html);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
