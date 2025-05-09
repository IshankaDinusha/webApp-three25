const actorDB = ['Tom Hanks', 'Emma Stone', 'Robert Downey Jr.'];
let selectedActor = null;

function searchActor(event) {
  if (event) event.preventDefault(); // Just in case
  const input = document.getElementById('actorSearch').value.trim();
  const result = document.getElementById('actorResult');
  const addForm = document.getElementById('addActorForm');

  if (actorDB.includes(input)) {
    selectedActor = input;
    result.innerHTML = `<p class="text-white custom-btn-font">✅ Actor found: <strong>${input}</strong></p>`;
    addForm.classList.remove('d-none');
  } else {
    result.innerHTML = `<p class="text-white custom-btn-font">❌ Actor not found: <strong>${input}</strong></p>`;
    document.getElementById('newActorName').value = input;
    addForm.classList.remove('d-none');
    selectedActor = null;
  }
}

function addNewActor() {
  const name = document.getElementById('newActorName').value.trim();
  const image = document.getElementById('dropZone').value.trim();

  if (name && image) {
    actorDB.push(name);
    selectedActor = name;
    document.getElementById('actorResult').innerHTML = `<p class="text-white custom-btn-font">✅ New actor added: <strong>${name}</strong></p>`;
    document.getElementById('addActorForm').classList.add('hidden');
  } else {
    alert('Please provide both actor name and image URL.');
  }
}

function submitForm(event) {
  event.preventDefault();

  if (!selectedActor) {
    alert('Please select or add an actor first.');
    return;
  }

  const data = {
    actor: selectedActor,
    title: document.getElementById('title').value,
    subtitle: document.getElementById('subtitle').value,
    description: document.getElementById('description').value,
    subtitleLink: document.getElementById('subtitleLink').value,
    trailerLink: document.getElementById('trailerLink').value,
  };

  console.log('📤 Submitted Data:', data);
  alert('Subtitle info submitted successfully! (Check console for data)');
}

function handleStickyNavbar() {
  const navbar = document.getElementById("navbar");
  const mbNavbarRight = document.getElementById("mbNavbarRight");
  const navRight = document.getElementById("navRight");
  if (window.innerWidth < 768) { // Change 768px to your preferred breakpoint
    mbNavbarRight.classList.remove("d-flex");
    mbNavbarRight.classList.add("d-none");
    //navRight.classList.remove("d-none");
    navRight.classList.add("d-flex");

    //mbNavbar.classList.add("sticky-top");
  } else {
    mbNavbarRight.classList.add("d-flex");
    navRight.classList.add("d-none");

    //mbNavbar.classList.remove("sticky-top");
  }
}

// Run on initial load
handleStickyNavbar();

// Wait 2 seconds, then run the function every 1 second, 3 times
setTimeout(() => {
    let count = 0;
    const maxRuns = 3;
    const intervalId = setInterval(() => {
        handleStickyNavbar();
        count++;
        if (count >= maxRuns) {
            clearInterval(intervalId); // Stop after 3 runs
        }
    }, 1000); // Run every 1 second
}, 1000); // Initial delay of 2 seconds

// Run on window resize
window.addEventListener("resize", handleStickyNavbar);






//dropzone
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const browseBtn = document.getElementById('browseBtn');

browseBtn.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', (e) => {
  handleFiles(e.target.files);
});

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.classList.remove('dragover');
  handleFiles(e.dataTransfer.files);
});

function handleFiles(files) {
  const file = files[0];
  if (!file) return;

  if (!file.name.endsWith(".png") && !file.name.endsWith(".jpg") && !file.name.endsWith(".jpeg")) {
    alert("Only .png .jpg .jpegfiles are allowed.");
    return;
  }

  if (file.size > 2 * 1024 * 1024) {
    alert("File size must be under 2MB.");
    return;
  }

  alert(`File "${file.name}" is ready to be uploaded.`);
  // Upload logic can be added here.
}

//offcanvas js

// Initialize the offcanvas menu to show "Overview" by default
document.addEventListener('DOMContentLoaded', () => {
  showMenuItemById('menu-overview');
});

function showMenuItemById(idToShow) {
  const overview = document.getElementById("overview");
  const yourWork = document.getElementById("yourWork");
  const requests = document.getElementById("requests");
  const approval = document.getElementById("subApproval");
  const subfile = document.getElementById("subfile");

  console.log(`Showing ${idToShow}`);

  switch (idToShow) {
    case 'menu-overview':
      overview.classList.remove("d-none");
      yourWork.classList.add("d-none");
      requests.classList.add("d-none");
      approval.classList.add("d-none");
      subfile.classList.add("d-none");
      break;
    case 'menu-your-work':
      overview.classList.add("d-none");
      yourWork.classList.remove("d-none");
      requests.classList.add("d-none");
      approval.classList.add("d-none");
      subfile.classList.add("d-none");
      break;
    case 'menu-requests':
      overview.classList.add("d-none");
      yourWork.classList.add("d-none");
      requests.classList.remove("d-none");
      approval.classList.add("d-none");
      subfile.classList.add("d-none");
      break;
    case 'menu-approval':
      overview.classList.add("d-none");
      yourWork.classList.add("d-none");
      requests.classList.add("d-none");
      approval.classList.remove("d-none");
      subfile.classList.add("d-none");
      break;
    case 'menu-new-subtitle':
      overview.classList.add("d-none");
      yourWork.classList.add("d-none");
      requests.classList.add("d-none");
      approval.classList.add("d-none");
      subfile.classList.remove("d-none");
      break;
    default:
      overview.classList.remove("d-none");
      yourWork.classList.add("d-none");
      requests.classList.add("d-none");
      approval.classList.add("d-none");
      subfile.classList.add("d-none");
      break;
  }
}

/*// Add event listeners to the menu items
document.querySelectorAll('.offcanvas-menu-item').forEach(item => {
  item.addEventListener('click', () => {
    const idToShow = item.getAttribute('data-target');
    showMenuItemById(idToShow);
  });
});*/
