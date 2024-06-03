const courses = [
    { name: "Course Title 1", image: "https://via.placeholder.com/100", category: "Kategori", modules: "30 Modul", price: "Rp1,000,000" },
    { name: "Course Title 2", image: "https://via.placeholder.com/100", category: "Kategori", modules: "30 Modul", price: "Rp1,000,000" },
    { name: "Course Title 3", image: "https://via.placeholder.com/100", category: "Kategori", modules: "30 Modul", price: "Rp1,000,000" },
    { name: "Course Title 4", image: "https://via.placeholder.com/100", category: "Kategori", modules: "30 Modul", price: "Rp1,000,000" },
    { name: "Course Title 5", image: "https://via.placeholder.com/100", category: "Kategori", modules: "30 Modul", price: "Rp1,000,000" }
];

const rowsPerPage = 5;
let currentPage = 1;

function displayTablePage(page) {
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const paginatedCourses = courses.slice(startIndex, endIndex);

    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    paginatedCourses.forEach(course => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td class="py-2 px-4 border-b border-gray-200"><img src="${course.image}" alt="Course Image" class="h-16 w-16 object-cover rounded"></td>
            <td class="py-2 px-4 border-b border-gray-200">${course.name}</td>
            <td class="py-2 px-4 border-b border-gray-200"><i class="fas fa-tag text-gray-400 mr-1"></i> ${course.category}</td>
            <td class="py-2 px-4 border-b border-gray-200"><i class="fas fa-book-open text-gray-400 mr-1"></i> ${course.modules}</td>
            <td class="py-2 px-4 border-b border-gray-200">${course.price}</td>
            <td class="py-2 px-4 border-b border-gray-200"><a href="#" class=" bg-black text-white p-2 rounded-lg hover:bg-yellow-500 rounded-lg text-white">Lihat Detail</a></td>
        `;

        tableBody.appendChild(row);
    });

    document.getElementById('pageIndicator').innerText = `${currentPage}/${Math.ceil(courses.length / rowsPerPage)}`;
}

document.getElementById("prevButton").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayTablePage(currentPage);
    }
});

document.getElementById("nextButton").addEventListener("click", () => {
    if (currentPage < Math.ceil(courses.length / rowsPerPage)) {
        currentPage++;
        displayTablePage(currentPage);
    }
});

// Initial display
displayTablePage(currentPage);

// Modal handling
const modal = document.getElementById("myModal");
const openFormButton = document.getElementById("openFormButton");
const closeButton = document.getElementsByClassName("close")[0];

openFormButton.onclick = function() {
    modal.style.display = "block";
}

closeButton.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function addCourse() {
    const courseName = document.getElementById("courseName").value;
    const courseImage = document.getElementById("courseImage").files[0];
    const courseCategory = document.getElementById("courseCategory").value;
    const courseModules = document.getElementById("courseModules").value;
    const coursePrice = document.getElementById("coursePrice").value;

    if (courseName && courseImage && courseCategory && courseModules && coursePrice) {
        // Handle image upload
        const reader = new FileReader();
        reader.onload = function() {
            const imageDataURL = reader.result;
            courses.push({ name: courseName, image: imageDataURL, category: courseCategory, modules: courseModules, price: coursePrice });
            displayTablePage(currentPage);
            modal.style.display = "none";
            document.getElementById("courseForm").reset();
        };
        reader.readAsDataURL(courseImage);
    } else {
        alert("Semua field harus diisi!");
    }
}
