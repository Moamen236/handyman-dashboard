document.addEventListener("DOMContentLoaded", function () {
    const priceFilter = document.getElementById("price-filter");
    const serviceFilter = document.getElementById("service-filter");
    const statusFilter = document.getElementById("status-filter");
    const tableRows = document.querySelectorAll("#tech-companies-1 tbody tr");

    function filterTable() {
        const priceValue = priceFilter.value;
        const serviceValue = serviceFilter.value;
        const statusValue = statusFilter.value;

        tableRows.forEach(row => {
            const priceText = row.cells[7].textContent.trim(); // Get price from 8th column (index 7)
            const serviceText = row.cells[3].textContent.trim(); // Get service from 4th column (index 3)
            const statusText = row.cells[6].textContent.trim(); // Get status from 7th column (index 6)

            const priceNumber = parseInt(priceText.replace(/[^0-9]/g, "")) || 0;
            const matchesPrice = priceValue === "" || priceNumber <= parseInt(priceValue);
            const matchesService = serviceValue === "" || serviceText === serviceValue;
            const matchesStatus = statusValue === "" || statusText === statusValue;

            if (matchesPrice && matchesService && matchesStatus) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    }

    priceFilter.addEventListener("change", filterTable);
    serviceFilter.addEventListener("change", filterTable);
    statusFilter.addEventListener("change", filterTable);
});

    document.addEventListener("DOMContentLoaded", function () {
        let rowsPerPage = 10;
        let table = document.getElementById("tech-companies-1");
        let tbody = table.querySelector("tbody");
        let rows = tbody.querySelectorAll("tr");
        let totalPages = Math.ceil(rows.length / rowsPerPage);
        let paginationContainer = document.querySelector(".pagination");

        function showPage(page) {
            let start = (page - 1) * rowsPerPage;
            let end = start + rowsPerPage;

            rows.forEach((row, index) => {
                row.style.display = (index >= start && index < end) ? "" : "none";
            });

            updatePagination(page);
        }

        function updatePagination(activePage) {
            paginationContainer.innerHTML = "";

            let prevBtn = `<li class="page-item ${activePage === 1 ? 'disabled' : ''}">
                            <a href="#" class="page-link" data-page="${activePage - 1}">
                                <i class="mdi mdi-chevron-right"></i>
                            </a>
                          </li>`;
            paginationContainer.innerHTML += prevBtn;

            for (let i = 1; i <= totalPages; i++) {
                let activeClass = (i === activePage) ? "active" : "";
                paginationContainer.innerHTML += `<li class="page-item ${activeClass}">
                                                    <a href="#" class="page-link" data-page="${i}">${i}</a>
                                                  </li>`;
            }

            let nextBtn = `<li class="page-item ${activePage === totalPages ? 'disabled' : ''}">
                            <a href="#" class="page-link" data-page="${activePage + 1}">
                                <i class="mdi mdi-chevron-left"></i>
                            </a>
                          </li>`;
            paginationContainer.innerHTML += nextBtn;

            document.querySelectorAll(".page-link").forEach(link => {
                link.addEventListener("click", function (e) {
                    e.preventDefault();
                    let newPage = parseInt(this.getAttribute("data-page"));
                    if (newPage >= 1 && newPage <= totalPages) {
                        showPage(newPage);
                    }
                });
            });
        }

        showPage(1); // Show first page initially
    });


    document.addEventListener("DOMContentLoaded", function () {
        const rowsPerPageSelect = document.getElementById("rowsPerPage");
        const table = document.getElementById("tech-companies-1");
        const tbody = table.querySelector("tbody");
        const rows = Array.from(tbody.querySelectorAll("tr"));
        
        function updateTable() {
            let rowsPerPage = parseInt(rowsPerPageSelect.value, 10);
            
            rows.forEach((row, index) => {
                if (index < rowsPerPage) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            });
        }
        
        rowsPerPageSelect.addEventListener("change", updateTable);
        
        // Initial load
        updateTable();
    });


    const toggleButton = document.getElementById('toggleButton');
    const toggleText = document.getElementById('toggleText');

    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('active');
        toggleText.textContent = toggleButton.classList.contains('active') ? 'ON' : 'OFF';
    });



