// JavaScript for Edit Profile Modal and Update Profile Image
document.addEventListener('DOMContentLoaded', function () {
    const editProfileModal = document.getElementById('editProfileModal');
    const closeEditProfileModal = document.getElementById('closeEditProfileModal');
    const editProfileForm = document.getElementById('editProfileForm');
    const profileImageInput = document.getElementById('profileImage');
    const userProfileImage = document.getElementById('userProfileImage');
    const userName = document.getElementById('userName');
    const userEmail = document.getElementById('userEmail');

    // Show Edit Profile Modal
    function showEditProfileModal() {
        editProfileModal.classList.remove('hidden');
    }

    // Close Edit Profile Modal
    function closeEditProfileModalFunc() {
        editProfileModal.classList.add('hidden');
    }

    // Toggle Edit Profile Modal
    function toggleEditProfileModal() {
        editProfileModal.classList.toggle('hidden');
    }

    // Update Profile Image Preview
    function updateProfileImagePreview() {
        const file = profileImageInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                userProfileImage.innerHTML = `<img src="${e.target.result}" alt="Profile Picture" class="w-full h-full object-cover rounded-full">`;
            }
            reader.readAsDataURL(file);
        }
    }

    // Event Listeners
    document.getElementById('editProfileBtn').addEventListener('click', showEditProfileModal);
    closeEditProfileModal.addEventListener('click', closeEditProfileModalFunc);
    profileImageInput.addEventListener('change', updateProfileImagePreview);
    editProfileForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const newName = document.getElementById('fullName').value;
        userName.textContent = newName;
        closeEditProfileModalFunc();
    });
});

// JavaScript for Add Note Modal
document.addEventListener('DOMContentLoaded', function () {
    const addNoteModal = document.getElementById('addNoteModal');
    const closeAddNoteModal = document.getElementById('closeAddNoteModal');
    const addNoteBtn = document.getElementById('addNoteBtn');
    const saveNoteBtn = document.getElementById('saveNoteBtn');
    const noteText = document.getElementById('noteText');
    const notesContainer = document.getElementById('notesContainer');

    // Show Add Note Modal
    function showAddNoteModal() {
        addNoteModal.classList.remove('hidden');
    }

    // Close Add Note Modal
    function closeAddNoteModalFunc() {
        addNoteModal.classList.add('hidden');
        noteText.value = ''; // Clear textarea after closing modal
    }

    // Save Note
    function saveNote() {
        const text = noteText.value.trim();
        if (text !== '') {
            const noteDiv = document.createElement('div');
            noteDiv.classList.add('border-b', 'border-gray-300', 'py-2');
            const notePara = document.createElement('p');
            notePara.classList.add('text-gray-600');
            notePara.textContent = text;
            noteDiv.appendChild(notePara);
            notesContainer.appendChild(noteDiv);
            closeAddNoteModalFunc();
        }
    }

    // Event Listeners
    addNoteBtn.addEventListener('click', showAddNoteModal);
    closeAddNoteModal.addEventListener('click', closeAddNoteModalFunc);
    saveNoteBtn.addEventListener('click', saveNote);
});
const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(navLink => {
        navLink.addEventListener('mouseenter', () => {
            const icon = navLink.querySelector('.dropdown-icon');
            icon.classList.add('rotate-down');
        });

        navLink.addEventListener('mouseleave', () => {
            const icon = navLink.querySelector('.dropdown-icon');
            icon.classList.remove('rotate-down');
        });
    });

    const tambahButton = document.getElementById('tambahButton');
    const formContainer = document.getElementById('formContainer');
    const contentForm = document.getElementById('contentForm');
    const courseContainer = document.getElementById('courseContainer');
  
    tambahButton.addEventListener('click', function() {
      formContainer.classList.remove('hidden');
    });
  
    contentForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const judul = document.getElementById('judul').value;
      const modul = document.getElementById('modul').value;
      const kategori = document.getElementById('kategori').value;
      const gambar = document.getElementById('gambar').files[0];
  
      // Membuat objek URL untuk gambar
      const imageURL = URL.createObjectURL(gambar);
  
      // Membuat elemen baru untuk konten kursus
      const newCourse = document.createElement('div');
      newCourse.classList.add('bg-white', 'p-5', 'rounded-lg', 'shadow-md', 'flex', 'flex-row');
      newCourse.innerHTML = `
        <img src="${imageURL}" alt="Course Image" class="h-32 w-32 object-cover rounded-lg mr-4">
        <div>
          <h3 class="font-bold text-xl">${judul}</h3>
          <div class="flex items-center text-gray-500">
            <i class="fas fa-tag text-gray-400 mr-1"></i>
            <span>${kategori}</span>
            <span class="ml-2">Rating: 4.5</span>
          </div>
          <div class="flex items-center text-gray-500">
            <i class="fas fa-book-open text-gray-400 mr-1"></i>
            <span>${modul} Modul</span>
          </div>
        </div>
      `;
  
      // Menambahkan konten baru ke dalam container kursus
      courseContainer.appendChild(newCourse);
  
      // Menyembunyikan formulir setelah konten ditambahkan
      formContainer.classList.add('hidden');
  
      // Mereset formulir
      contentForm.reset();
    });