const actorDB = ['Tom Hanks', 'Emma Stone', 'Robert Downey Jr.'];
let selectedActor = null;

function searchActor() {
  const input = document.getElementById('actorSearch').value.trim();
  const result = document.getElementById('actorResult');
  const addForm = document.getElementById('addActorForm');

  if (actorDB.includes(input)) {
    selectedActor = input;
    result.innerHTML = `<p class="text-white custom-btn-font">✅ Actor found: <strong>${input}</strong></p>`;
    addForm.classList.add('hidden');
  } else {
    result.innerHTML = `<p class="text-white custom-btn-font">❌ Actor not found: <strong>${input}</strong></p>`;
    document.getElementById('newActorName').value = input;
    addForm.classList.remove('hidden');
    selectedActor = null;
  }
}

function addNewActor() {
  const name = document.getElementById('newActorName').value.trim();
  const image = document.getElementById('newActorImage').value.trim();

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