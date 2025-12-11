// ===== SIMPLE WEBSITE FUNCTIONALITY =====

// 1. Show/Hide Mobile Menu
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
}

// 2. Switch between sections
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Close mobile menu if open
    document.getElementById('navLinks').classList.remove('active');
    
    // Update active nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
}

// 3. Event Filtering
function filterEvents(category) {
    const events = document.querySelectorAll('.event-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Show/hide events
    events.forEach(event => {
        if (category === 'all') {
            event.style.display = 'flex';
        } else {
            const eventCategory = event.dataset.category;
            if (eventCategory.includes(category)) {
                event.style.display = 'flex';
            } else {
                event.style.display = 'none';
            }
        }
    });
}

// 4. Gallery Filtering
function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.gallery-filter');
    
    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Show/hide items
    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block';
        } else {
            const itemCategory = item.dataset.category;
            if (itemCategory.includes(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
}

// 5. Multi-step Registration Form
let currentStep = 1;

function nextStep() {
    // Hide current step
    document.getElementById('step' + currentStep).classList.remove('active');
    
    // Show next step
    currentStep++;
    document.getElementById('step' + currentStep).classList.add('active');
    
    // Update selected events display
    if (currentStep === 3) {
        updateReview();
    }
}

function prevStep() {
    // Hide current step
    document.getElementById('step' + currentStep).classList.remove('active');
    
    // Show previous step
    currentStep--;
    document.getElementById('step' + currentStep).classList.add('active');
}

// 6. Update registration review
function updateReview() {
    const checkboxes = document.querySelectorAll('input[name="event"]:checked');
    const eventNames = Array.from(checkboxes).map(cb => {
        return cb.parentElement.textContent.trim();
    });
    
    // Calculate total amount
    let total = 0;
    checkboxes.forEach(cb => {
        const text = cb.parentElement.textContent;
        if (text.includes('₹500')) total += 500;
    });
    
    // Update display
    document.getElementById('selectedEvents').textContent = 
        eventNames.length > 0 ? eventNames.join(', ') : 'None';
    document.getElementById('totalAmount').textContent = total;
}

// 7. Submit Registration Form
function submitForm() {
    const name = document.querySelector('#step2 input[type="text"]').value;
    
    if (!name) {
        alert('Please complete all steps');
        return;
    }
    
    alert('Registration Successful! Check your email for confirmation.');
    
    // Reset form
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.querySelectorAll('input[type="text"], input[type="email"]').forEach(input => input.value = '');
    
    // Go back to step 1
    document.getElementById('step3').classList.remove('active');
    currentStep = 1;
    document.getElementById('step1').classList.add('active');
}

// 8. Toggle FAQ Answers
function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}