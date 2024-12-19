document.addEventListener('DOMContentLoaded', () => {
    Controller.preloadData();
    Controller.showAuthentication();
});


const ObjInf = {
    rooms: [
        { number: '101', name: 'Conference Room', area: '50 sqm', type: 'Meeting' },
        { number: '102', name: 'Office', area: '30 sqm', type: 'Work' },
        { number: '103', name: 'Lab', area: '40 sqm', type: 'Research' },
        { number: '104', name: 'Storage', area: '20 sqm', type: 'Storage' },
        { number: '105', name: 'Break Room', area: '25 sqm', type: 'Relaxation' },
        { number: '106', name: 'Server Room', area: '15 sqm', type: 'IT' },
        { number: '107', name: 'Reception', area: '35 sqm', type: 'Public' },
        { number: '108', name: 'Manager Office', area: '30 sqm', type: 'Work' },
        { number: '109', name: 'HR Office', area: '28 sqm', type: 'Work' },
        { number: '110', name: 'Finance Office', area: '32 sqm', type: 'Work' },
        { number: '111', name: 'Marketing Office', area: '27 sqm', type: 'Work' },
        { number: '112', name: 'Sales Office', area: '29 sqm', type: 'Work' },
        { number: '113', name: 'Training Room', area: '45 sqm', type: 'Training' },
        { number: '114', name: 'Cafeteria', area: '60 sqm', type: 'Dining' },
        { number: '115', name: 'Gym', area: '50 sqm', type: 'Fitness' },
        { number: '116', name: 'Library', area: '40 sqm', type: 'Reading' },
        { number: '117', name: 'Workshop', area: '55 sqm', type: 'Craft' },
        { number: '118', name: 'Design Studio', area: '35 sqm', type: 'Creative' },
        { number: '119', name: 'Photography Studio', area: '30 sqm', type: 'Creative' },
        { number: '120', name: 'Meeting Room', area: '25 sqm', type: 'Meeting' }
    ],
    departments: [
        { name: 'HR' },
        { name: 'IT' },
        { name: 'Finance' },
        { name: 'Marketing' },
        { name: 'Sales' },
        { name: 'Operations' },
        { name: 'Legal' },
        { name: 'Customer Service' },
        { name: 'Research and Development' },
        { name: 'Quality Assurance' },
        { name: 'Logistics' },
        { name: 'Procurement' },
        { name: 'Public Relations' },
        { name: 'Administration' },
        { name: 'Security' },
        { name: 'Maintenance' },
        { name: 'Training' },
        { name: 'Health and Safety' },
        { name: 'Environmental' },
        { name: 'Product Management' }
    ],
    reconstructions: [
        { description: 'Renovation of the main hall' },
        { description: 'Painting the exterior walls' },
        { description: 'Upgrading the HVAC system' },
        { description: 'Replacing the roof' },
        { description: 'Installing new windows' },
        { description: 'Refurbishing the lobby' },
        { description: 'Expanding the parking lot' },
        { description: 'Landscaping the garden' },
        { description: 'Building a new conference room' },
        { description: 'Upgrading the electrical system' },
        { description: 'Installing solar panels' },
        { description: 'Renovating the cafeteria' },
        { description: 'Adding a new gym' },
        { description: 'Refurbishing the restrooms' },
        { description: 'Upgrading the security system' },
        { description: 'Installing new lighting' },
        { description: 'Renovating the break room' },
        { description: 'Building a new storage facility' },
        { description: 'Upgrading the IT infrastructure' },
        { description: 'Refurbishing the training room' }
    ],
    assignments: [
        { reconstructionId: 0, departmentId: 1, assignmentId: 'A001', startDate: '2024-01-15', endDate: '2024-02-15' },
        { reconstructionId: 1, departmentId: 2, assignmentId: 'A002', startDate: '2024-02-01', endDate: '2024-03-01' },
        { reconstructionId: 2, departmentId: 3, assignmentId: 'A003', startDate: '2024-03-10', endDate: '2024-04-10' },
        { reconstructionId: 3, departmentId: 4, assignmentId: 'A004', startDate: '2024-04-05', endDate: '2024-05-05' },
        { reconstructionId: 4, departmentId: 5, assignmentId: 'A005', startDate: '2024-05-20', endDate: '2024-06-20' },
        { reconstructionId: 5, departmentId: 6, assignmentId: 'A006', startDate: '2024-06-15', endDate: '2024-07-15' },
        { reconstructionId: 6, departmentId: 7, assignmentId: 'A007', startDate: '2024-07-10', endDate: '2024-08-10' },
        { reconstructionId: 7, departmentId: 8, assignmentId: 'A008', startDate: '2024-08-05', endDate: '2024-09-05' },
        { reconstructionId: 8, departmentId: 9, assignmentId: 'A009', startDate: '2024-09-01', endDate: '2024-10-01' },
        { reconstructionId: 9, departmentId: 10, assignmentId: 'A010', startDate: '2024-10-15', endDate: '2024-11-15' },
        { reconstructionId: 10, departmentId: 11, assignmentId: 'A011', startDate: '2024-11-01', endDate: '2024-12-01' },
        { reconstructionId: 11, departmentId: 12, assignmentId: 'A012', startDate: '2024-12-05', endDate: '2025-01-05' },
        { reconstructionId: 12, departmentId: 13, assignmentId: 'A013', startDate: '2025-01-10', endDate: '2025-02-10' },
        { reconstructionId: 13, departmentId: 14, assignmentId: 'A014', startDate: '2025-02-15', endDate: '2025-03-15' },
        { reconstructionId: 14, departmentId: 15, assignmentId: 'A015', startDate: '2025-03-20', endDate: '2025-04-20' }
    ]
};

class Room {
    constructor(number, name, area, type) {
        this.number = number;
        this.name = name;
        this.area = area;
        this.type = type;
    }

    static saveRoom(event) {
        event.preventDefault();
        const room = {
            number: document.getElementById('room-number').value,
            name: document.getElementById('room-name').value,
            area: document.getElementById('room-area').value,
            type: document.getElementById('room-type').value
        };
        let rooms = JSON.parse(localStorage.getItem('rooms')) || [];
        rooms.push(room);
        localStorage.setItem('rooms', JSON.stringify(rooms));
        alert('Room saved successfully!');
        Controller.showSection('home');
    }

    static loadRooms() {
        const roomList = document.getElementById('room-list');
        const rooms = JSON.parse(localStorage.getItem('rooms')) || [];
        roomList.innerHTML = rooms.map((room, index) => `
            <div class="list-item">
                <span>Room: ${room.number}, ${room.name}, ${room.area}, ${room.type}</span>
                <button onclick="Room.editRoom(${index})">Edit</button>
                <button onclick="Room.deleteRoom(${index})">Delete</button>
            </div>
        `).join('');
    }

    static updateRoom(event, index) {
        event.preventDefault();
        const rooms = JSON.parse(localStorage.getItem('rooms')) || [];
        rooms[index] = {
            number: event.target['edit-room-number'].value,
            name: event.target['edit-room-name'].value,
            area: event.target['edit-room-area'].value,
            type: event.target['edit-room-type'].value
        };
        localStorage.setItem('rooms', JSON.stringify(rooms));
        Controller.showSection('manage-admin');
    }

    static editRoom(index) {
        const rooms = JSON.parse(localStorage.getItem('rooms')) || [];
        const room = rooms[index];
        const content = document.getElementById('content');
        content.innerHTML = `
            <section id="edit-room">
                <h2>Edit Room</h2>
                <form onsubmit="Room.updateRoom(event, ${index})">
                    <label for="edit-room-number">Room Number:</label>
                    <input type="text" id="edit-room-number" name="edit-room-number" value="${room.number}" required>
                    <label for="edit-room-name">Room Name:</label>
                    <input type="text" id="edit-room-name" name="edit-room-name" value="${room.name}" required>
                    <label for="edit-room-area">Room Area:</label>
                    <input type="text" id="edit-room-area" name="edit-room-area" value="${room.area}" required>
                    <label for="edit-room-type">Room Type:</label>
                    <input type="text" id="edit-room-type" name="edit-room-type" value="${room.type}" required>
                    <button type="submit">Update</button>
                </form>
            </section>
        `;
    }

    static deleteRoom(index) {
        let rooms = JSON.parse(localStorage.getItem('rooms')) || [];
        rooms.splice(index, 1);
        localStorage.setItem('rooms', JSON.stringify(rooms));
        Room.loadRooms();
        alert('Room deleted successfully!');
    }
}

class Department {
    constructor(name) {
        this.name = name;
    }

    static saveDepartment(event) {
        event.preventDefault();
        const department = {
            name: document.getElementById('department-name').value
        };
        let departments = JSON.parse(localStorage.getItem('departments')) || [];
        departments.push(department);
        localStorage.setItem('departments', JSON.stringify(departments));
        alert('Department saved successfully!');
        Controller.showSection('home');
    }

    static loadDepartments() {
        const departmentList = document.getElementById('department-list');
        const departments = JSON.parse(localStorage.getItem('departments')) || [];
        departmentList.innerHTML = departments.map((department, index) => `
            <div class="list-item">
                <span>Department: ${department.name}</span>
                <button onclick="Department.editDepartment(${index})">Edit</button>
                <button onclick="Department.deleteDepartment(${index})">Delete</button>
            </div>
        `).join('');
    }

    static updateDepartment(event, index) {
        event.preventDefault();
        const departments = JSON.parse(localStorage.getItem('departments')) || [];
        departments[index] = {
            name: event.target['edit-department-name'].value
        };
        localStorage.setItem('departments', JSON.stringify(departments));
        Controller.showSection('manage-admin');
    }

    static editDepartment(index) {
        const departments = JSON.parse(localStorage.getItem('departments')) || [];
        const department = departments[index];
        const content = document.getElementById('content');
        content.innerHTML = `
            <section id="edit-department">
                <h2>Edit Department</h2>
                <form onsubmit="Department.updateDepartment(event, ${index})">
                    <label for="edit-department-name">Department Name:</label>
                    <input type="text" id="edit-department-name" name="edit-department-name" value="${department.name}" required>
                    <button type="submit">Update</button>
                </form>
            </section>
        `;
    }

    static deleteDepartment(index) {
        let departments = JSON.parse(localStorage.getItem('departments')) || [];
        departments.splice(index, 1);
        localStorage.setItem('departments', JSON.stringify(departments));
        Department.loadDepartments();
        alert('Department deleted successfully!');
    }
}

class Reconstruction {
    constructor(description) {
        this.description = description;
    }

    static saveReconstruction(event) {
        event.preventDefault();
        const reconstruction = {
            description: document.getElementById('description').value
        };
        let reconstructions = JSON.parse(localStorage.getItem('reconstructions')) || [];
        reconstructions.push(reconstruction);
        localStorage.setItem('reconstructions', JSON.stringify(reconstructions));
        alert('Reconstruction saved successfully!');
        Controller.showSection('home');
    }

    static loadReconstructions() {
        const reconstructionList = document.getElementById('reconstruction-list');
        const reconstructions = JSON.parse(localStorage.getItem('reconstructions')) || [];
        reconstructionList.innerHTML = reconstructions.map((reconstruction, index) => `
            <div class="list-item">
                <span>Reconstruction: ${reconstruction.description}</span>
                <button onclick="Reconstruction.editReconstruction(${index})">Edit</button>
                <button onclick="Reconstruction.deleteReconstruction(${index})">Delete</button>
            </div>
        `).join('');
    }

    static updateReconstruction(event, index) {
        event.preventDefault();
        const reconstructions = JSON.parse(localStorage.getItem('reconstructions')) || [];
        reconstructions[index] = {
            description: event.target['edit-description'].value
        };
        localStorage.setItem('reconstructions', JSON.stringify(reconstructions));
        Controller.showSection('manage-admin');
    }

    static editReconstruction(index) {
        const reconstructions = JSON.parse(localStorage.getItem('reconstructions')) || [];
        const reconstruction = reconstructions[index];
        const content = document.getElementById('content');
        content.innerHTML = `
            <section id="edit-reconstruction">
                <h2>Edit Reconstruction</h2>
                <form onsubmit="Reconstruction.updateReconstruction(event, ${index})">
                    <label for="edit-description">Repair Description:</label>
                    <input type="text" id="edit-description" name="edit-description" value="${reconstruction.description}" required>
                    <button type="submit">Update</button>
                </form>
            </section>
        `;
    }

    static deleteReconstruction(index) {
        let reconstructions = JSON.parse(localStorage.getItem('reconstructions')) || [];
        reconstructions.splice(index, 1);
        localStorage.setItem('reconstructions', JSON.stringify(reconstructions));
        Reconstruction.loadReconstructions();
        alert('Reconstruction deleted successfully!');
    }
}

class Assignment {
    constructor(reconstructionId, departmentId, assignmentId, startDate, endDate) {
        this.reconstructionId = reconstructionId;
        this.departmentId = departmentId;
        this.assignmentId = assignmentId;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    static saveAssignment(event) {
        event.preventDefault();
        const assignments = JSON.parse(localStorage.getItem('assignments')) || [];
        const newAssignment = new Assignment(
            event.target['reconstruction-select'].value,
            event.target['department-select'].value,
            event.target['assignment-id'].value,
            event.target['start-date'].value,
            event.target['end-date'].value
        );
        assignments.push(newAssignment);
        localStorage.setItem('assignments', JSON.stringify(assignments));
        const role = localStorage.getItem('role');
        if (role === 'admin') {
            Controller.showSection('manage-admin');
        }
        if (role === 'employee') {
            Controller.showSection('manage-employee');
        }
    }

    static loadAssignments() {
        const assignmentList = document.getElementById('assignment-list');
        const assignments = JSON.parse(localStorage.getItem('assignments')) || [];
        const reconstructions = JSON.parse(localStorage.getItem('reconstructions')) || [];
        const departments = JSON.parse(localStorage.getItem('departments')) || [];

        assignmentList.innerHTML = assignments.map((assignment, index) => {
            const reconstruction = reconstructions[assignment.reconstructionId] || {};
            const department = departments[assignment.departmentId] || {};

            return `
            <div class="list-item">
                <span>Assignment: ${reconstruction.description || 'N/A'}, ${department.name || 'N/A'}, ${assignment.assignmentId}, ${assignment.startDate}, ${assignment.endDate}</span>
                <button onclick="Assignment.editAssignment(${index})">Edit</button>
                <button onclick="Assignment.deleteAssignment(${index})">Delete</button>
            </div>
        `;
        }).join('');
    }

    static editAssignment(index) {
        const assignments = JSON.parse(localStorage.getItem('assignments')) || [];
        const reconstructions = JSON.parse(localStorage.getItem('reconstructions')) || [];
        const departments = JSON.parse(localStorage.getItem('departments')) || [];
        const assignment = assignments[index];
        const content = document.getElementById('content');
        content.innerHTML = `
            <section id="edit-assignment">
                <h2>Edit Assignment</h2>
                <form onsubmit="Assignment.updateAssignment(event, ${index})">
                    <label for="reconstruction-select">Select Reconstruction:</label>
                    <select id="reconstruction-select" name="reconstruction-select" required></select>
                
                    <label for="department-select">Select Department:</label>
                    <select id="department-select" name="department-select" required></select>
                
                    <label for="edit-assignment-id">Assignment ID:</label>
                    <input type="text" id="edit-assignment-id" name="edit-assignment-id" value="${assignment.assignmentId}" required>
                
                    <label for="edit-start-date">Start Date:</label>
                    <input type="date" id="edit-start-date" name="edit-start-date" value="${assignment.startDate}" required>
                
                    <label for="edit-end-date">End Date:</label>
                    <input type="date" id="edit-end-date" name="edit-end-date" value="${assignment.endDate}" required>
                
                    <button type="submit">Update Assignment</button>
                </form>
            </section>
        `;
        Controller.populateSelectOptions();
        document.getElementById('reconstruction-select').value = assignment.reconstructionId;
        document.getElementById('department-select').value = assignment.departmentId;
    }


    static updateAssignment(event, index) {
        event.preventDefault();
        const assignments = JSON.parse(localStorage.getItem('assignments')) || [];
        assignments[index] = {
            reconstructionId: event.target['reconstruction-select'].value,
            departmentId: event.target['department-select'].value,
            assignmentId: event.target['edit-assignment-id'].value,
            startDate: event.target['edit-start-date'].value,
            endDate: event.target['edit-end-date'].value
        };
        localStorage.setItem('assignments', JSON.stringify(assignments));
        const role = localStorage.getItem('role');
        if (role === 'admin') {
            Controller.showSection('manage-admin');
        }
        if (role === 'employee') {
            Controller.showSection('manage-employee');
        }
        
    }

    static deleteAssignment(index) {
        let assignments = JSON.parse(localStorage.getItem('assignments')) || [];
        assignments.splice(index, 1);
        localStorage.setItem('assignments', JSON.stringify(assignments));
        Assignment.loadAssignments();
        alert('Assignment deleted successfully!');
    }

}

class Controller {

    static showSection(section) {
        const content = document.getElementById('content');
        const role = localStorage.getItem('role');
        switch (section) {
            case 'home':
                content.innerHTML = `
                    <section id="home">
                        <h2>Welcome, ${role.charAt(0).toUpperCase() + role.slice(1)}!</h2>
                        <p>Our company provides comprehensive planning services for all your construction needs\. From adding new rooms to entire department reconstructions, we have you covered\.</p>
                        <p>We pride ourselves on delivering high-quality solutions tailored to meet the specific requirements of each client\. Whether you need assistance with residential, commercial, or industrial projects, our team of experts is here to help\.</p>
                        <p>Explore our services to learn more about how we can support your next construction project\.</p>
                    </section>
                `;
                break;
            case 'add-room':
                content.innerHTML = `
                    <section id="add-room">
                        <h2>Add Room</h2>
                        <form onsubmit="Room.saveRoom(event)">
                            <label for="room-number">Room Number:</label>
                            <input type="text" id="room-number" name="room-number" required>
                            <label for="room-name">Room Name:</label>
                            <input type="text" id="room-name" name="room-name" required>
                            <label for="room-area">Room Area:</label>
                            <input type="text" id="room-area" name="room-area" required>
                            <label for="room-type">Room Type:</label>
                            <input type="text" id="room-type" name="room-type" required>
                            <button type="submit">Save</button>
                        </form>
                    </section>
                `;
                break;
            case 'assign-reconstruction':
                content.innerHTML = `
                    <section id="assign-reconstruction">
                        <h2>Assign Reconstruction to Department</h2>
                        <form onsubmit="Assignment.saveAssignment(event)">
                            <label for="reconstruction-select">Select Reconstruction:</label>
                            <select id="reconstruction-select" name="reconstruction-select" required></select>
                        
                            <label for="department-select">Select Department:</label>
                            <select id="department-select" name="department-select" required></select>
                        
                            <label for="assignment-id">Assignment ID:</label>
                            <input type="text" id="assignment-id" name="assignment-id" required>
                        
                            <label for="start-date">Start Date:</label>
                            <input type="date" id="start-date" name="start-date" required>
                        
                            <label for="end-date">End Date:</label>
                            <input type="date" id="end-date" name="end-date" required>
                        
                            <button type="submit">Save Assignment</button>
                        </form>
                    </section>
                `;
                Controller.populateSelectOptions();
                break;
            case 'add-department':
                content.innerHTML = `
                    <section id="add-department">
                        <h2>Add Department</h2>
                        <form onsubmit="Department.saveDepartment(event)">
                            <label for="department-name">Department Name:</label>
                            <input type="text" id="department-name" name="department-name" required>
                            <button type="submit">Save</button>
                        </form>
                    </section>
                `;
                break;
            case 'add-reconstruction':
                content.innerHTML = `
                    <section id="add-reconstruction">
                        <h2>Add Reconstruction</h2>
                        <form onsubmit="Reconstruction.saveReconstruction(event)">
                            <label for="description">Repair Description:</label>
                            <input type="text" id="description" name="description" required>
                            <button type="submit">Save</button>
                        </form>
                    </section>
                `;
                break;
            case 'search':
                content.innerHTML = `
                    <section id="search">
                        <h2>Search Information</h2>
                        <form onsubmit="Controller.searchData(event)">
                            <label for="search-query">Query:</label>
                            <input type="text" id="search-query" name="search-query" required>
                            <button type="submit">Search</button>
                        </form>
                        <div id="search-results"></div>
                    </section>
                `;
                break;
            case 'manage-admin':
                content.innerHTML = `
                    <section id="manage">
                        <h2>Manage Data</h2>
                        <div>
                            <h3>Rooms</h3>
                            <div id="room-list"></div>
                        </div>
                        <div>
                            <h3>Departments</h3>
                            <div id="department-list"></div>
                        </div>
                        <div>
                            <h3>Reconstructions</h3>
                            <div id="reconstruction-list"></div>
                        </div>
                        <div>
                            <h3>Assignments</h3>
                            <div id="assignment-list"></div>
                        </div>
                    </section>
                `;
                Controller.loadLists('admin');
                break;
            case 'manage-employee':
                content.innerHTML = `
                    <section id="manage">
                        <h2>Manage Data</h2>
                        <div>
                            <h3>Assignments</h3>
                            <div id="assignment-list"></div>
                        </div>
                    </section>
                `;
                Controller.loadLists('employee');
                break;
            case 'show-assignments':
                content.innerHTML = `
                    <section id="assignments-before-date">
                        <h2>Show Assignments Before Date</h2>
                        <form onsubmit="Controller.displayAssignmentsBeforeDate(event)">
                            <label for="before-date">Enter Date:</label>
                            <input type="date" id="before-date" name="before-date" required>
                            <button type="submit">Show Assignments</button>
                        </form>
                        <div id="assignments-list"></div>
                    </section>
                `;
                break;
            default:
                content.innerHTML = `
                    <section>
                        <h2>Error</h2>
                        <p>Section not found.</p>
                    </section>
                `;
                break;
        }
    }

    static populateSelectOptions() {
        const reconstructions = JSON.parse(localStorage.getItem('reconstructions')) || [];
        const departments = JSON.parse(localStorage.getItem('departments')) || [];

        const reconstructionSelect = document.getElementById('reconstruction-select');
        const departmentSelect = document.getElementById('department-select');

        reconstructions.forEach((reconstruction, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = reconstruction.description;
            reconstructionSelect.appendChild(option);
        });

        departments.forEach((department, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = department.name;
            departmentSelect.appendChild(option);
        });
    }


    static preloadData() {
        if (!localStorage.getItem('rooms')) {
            localStorage.setItem('rooms', JSON.stringify(ObjInf.rooms));
        }
        if (!localStorage.getItem('departments')) {
            localStorage.setItem('departments', JSON.stringify(ObjInf.departments));
        }
        if (!localStorage.getItem('reconstructions')) {
            localStorage.setItem('reconstructions', JSON.stringify(ObjInf.reconstructions));
        }
        if (!localStorage.getItem('assignments')) {
            localStorage.setItem('assignments', JSON.stringify(ObjInf.assignments));
        }
    }

    static showAuthentication() {
        const content = document.getElementById('content');
        content.innerHTML = `
            <section id="auth">
                <h2>Select Authentication</h2>
                <div>
                    <button onclick="Controller.authenticate('admin')">Admin</button>
                    <button onclick="Controller.authenticate('client')">Client</button>
                    <button onclick="Controller.authenticate('employee')">Employee</button>
                </div>
            </section>
        `;
    }

    static authenticate(role) {
        localStorage.setItem('role', role);
        Controller.adjustNavForRole(role);
        document.getElementById('nav').style.display = 'block';
        Controller.showSection('home');
    }

    static adjustNavForRole(role) {
        const adminOnlyItems = document.querySelectorAll('.admin-only');
        const employeeOnlyItems = document.querySelectorAll('.employee-only');
        if (role === 'admin') {
            adminOnlyItems.forEach(item => item.style.display = 'inline');
        } else {
            adminOnlyItems.forEach(item => item.style.display = 'none');
        }
        if (role === 'employee') {
            employeeOnlyItems.forEach(item => item.style.display = 'inline');
        } else {
            employeeOnlyItems.forEach(item => item.style.display = 'none');
        }
    }

    static loadLists(role) {
        if (role === 'admin') {
            Room.loadRooms();
            Department.loadDepartments();
            Reconstruction.loadReconstructions();
            Assignment.loadAssignments();
        }
        if (role === 'employee') {
            Assignment.loadAssignments();
        }
    }

    static searchData(event) {
        event.preventDefault();
        const query = document.getElementById('search-query').value.toLowerCase();
        const rooms = JSON.parse(localStorage.getItem('rooms')) || [];
        const departments = JSON.parse(localStorage.getItem('departments')) || [];
        const reconstructions = JSON.parse(localStorage.getItem('reconstructions')) || [];
        const assignments = JSON.parse(localStorage.getItem('assignments')) || [];
        let results = '';

        rooms.forEach((room, index) => {
            if (room.number.toLowerCase().includes(query) || room.name.toLowerCase().includes(query) || room.area.toLowerCase().includes(query) || room.type.toLowerCase().includes(query)) {
                results += `<p>Room: ${room.number}, ${room.name}, ${room.area}, ${room.type}</p>`;
            }
        });

        departments.forEach((department, index) => {
            if (department.name.toLowerCase().includes(query)) {
                results += `<p>Department: ${department.name}</p>`;
            }
        });

        reconstructions.forEach((reconstruction, index) => {
            if (reconstruction.description.toLowerCase().includes(query)) {
                results += `<p>Reconstruction: ${reconstruction.description}</p>`;
            }
        });

        assignments.forEach((assignment, index) => {
            const reconstruction = reconstructions[assignment.reconstructionId] || {};
            const department = departments[assignment.departmentId] || {};
            if (assignment.assignmentId.toLowerCase().includes(query) ||
                (reconstruction.description && reconstruction.description.toLowerCase().includes(query)) ||
                (department.name && department.name.toLowerCase().includes(query)) ||
                assignment.startDate.toLowerCase().includes(query) ||
                assignment.endDate.toLowerCase().includes(query)) {
                results += `<p>Assignment: ${reconstruction.description || 'N/A'}, ${department.name || 'N/A'}, ${assignment.assignmentId}, ${assignment.startDate}, ${assignment.endDate}</p>`;
            }
        });

        document.getElementById('search-results').innerHTML = results || '<p>No results found</p>';
    }

    static displayAssignmentsBeforeDate(event) {
        event.preventDefault();
        const dateInput = document.getElementById('before-date').value;
        const beforeDate = new Date(dateInput);
        const assignments = JSON.parse(localStorage.getItem('assignments')) || [];
        const reconstructions = JSON.parse(localStorage.getItem('reconstructions')) || [];
        const departments = JSON.parse(localStorage.getItem('departments')) || [];
        let results = '';

        assignments.forEach((assignment, index) => {
            const assignmentEndDate = new Date(assignment.endDate);
            if (assignmentEndDate < beforeDate) {
                const reconstruction = reconstructions[assignment.reconstructionId] || {};
                const department = departments[assignment.departmentId] || {};
                results += `<p>Assignment: ${reconstruction.description || 'N/A'}, ${department.name || 'N/A'}, ${assignment.assignmentId}, ${assignment.startDate}, ${assignment.endDate}</p>`;
            }
        });

        document.getElementById('assignments-list').innerHTML = results || '<p>No results found</p>';
    }
}
