// Select All Teachers Checkbox
document.getElementById('selectAllTeachers').addEventListener('change', function() {
    const checkboxes = document.querySelectorAll('.teacher-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.checked = this.checked;
    });
});

// Handle Delete Selected Button
document.getElementById('confirmDeleteSelected').addEventListener('click', function() {
    const selectedCheckboxes = document.querySelectorAll('.teacher-checkbox:checked');
    const selectedIds = Array.from(selectedCheckboxes).map(checkbox => {
        return checkbox.dataset.id;
    });

    if (selectedIds.length === 0) {
        alert('Please select at least one teacher to delete.');
        return;
    }

    // Create a form dynamically to submit the selected IDs
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = document.getElementById('deleteSelectedUrl').value; // Use the hidden input value

    // Add CSRF token
    const csrfToken = document.querySelector('#addModal input[name="csrfmiddlewaretoken"]').value;
    const csrfInput = document.createElement('input');
    csrfInput.type = 'hidden';
    csrfInput.name = 'csrfmiddlewaretoken';
    csrfInput.value = csrfToken;
    form.appendChild(csrfInput);

    // Add selected IDs as hidden inputs
    selectedIds.forEach(id => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'teacher_ids';
        input.value = id;
        form.appendChild(input);
    });

    // Append form to body and submit
    document.body.appendChild(form);
    form.submit();
});

// Select All Students Checkbox
document.getElementById('selectAllStudents').addEventListener('change', function() {
    const checkboxes = document.querySelectorAll('.student-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.checked = this.checked;
    });
});

// Handle Delete Selected Students Button
document.getElementById('confirmDeleteSelectedStudents').addEventListener('click', function() {
    const selectedCheckboxes = document.querySelectorAll('.student-checkbox:checked');
    const selectedIds = Array.from(selectedCheckboxes).map(checkbox => {
        return checkbox.dataset.id;
    });

    if (selectedIds.length === 0) {
        alert('Please select at least one student to delete.');
        return;
    }

    // Create a form dynamically to submit the selected IDs
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = '{% url "delete-selected-students" %}'; // Use Django template tag in the HTML

    // Add CSRF token
    const csrfToken = document.querySelector('#addStudentModal input[name="csrfmiddlewaretoken"]').value;
    const csrfInput = document.createElement('input');
    csrfInput.type = 'hidden';
    csrfInput.name = 'csrfmiddlewaretoken';
    csrfInput.value = csrfToken;
    form.appendChild(csrfInput);

    // Add selected IDs as hidden inputs
    selectedIds.forEach(id => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'student_ids';
        input.value = id;
        form.appendChild(input);
    });

    // Append form to body and submit
    document.body.appendChild(form);
    form.submit();
});
