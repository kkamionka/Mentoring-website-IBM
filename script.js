const mentors = [
    { name: "John Doe", subject: "Computer Science", status: "Available", price: "Low" },
    { name: "Jane Smith", subject: "Software Engineering", status: "Not Available", price: "High" },
    { name: "Emily Johnson", subject: "AI & Machine Learning", status: "Available", price: "High" },
    { name: "Michael Brown", subject: "Data Science", status: "Available", price: "Low" },
    { name: "Sarah Davis", subject: "Consulting", status: "Not Available", price: "Low" },
    { name: "Alex Lee", subject: "Computer Science", status: "Available", price: "High" },
    { name: "Mary Harris", subject: "Software Engineering", status: "Available", price: "Low" },
    { name: "James Wilson", subject: "AI & Machine Learning", status: "Available", price: "Low" },
    { name: "Sophia Clark", subject: "Data Science", status: "Not Available", price: "High" },
    { name: "David Scott", subject: "Consulting", status: "Available", price: "High" }
  ];
  
  const mentorListContainer = document.getElementById("mentor-list");
  const availabilityFilter = document.getElementById("availability");
  const priceRangeFilter = document.getElementById("priceRange");
  const subjectFilter = document.getElementById("subject");
  
  function renderMentors(filteredMentors) {
    mentorListContainer.innerHTML = ""; // Clear previous list
  
    filteredMentors.forEach(mentor => {
      const mentorDiv = document.createElement("div");
      mentorDiv.classList.add("mentor");
  
      mentorDiv.innerHTML = `
        <h3>${mentor.name}</h3>
        <p><strong>Subject:</strong> ${mentor.subject}</p>
        <p class="status"><strong>Status:</strong> ${mentor.status}</p>
        <p class="price"><strong>Price:</strong> ${mentor.price}</p>
        <button>Contact Mentor</button>
      `;
  
      mentorListContainer.appendChild(mentorDiv);
    });
  }
  
  function filterMentors() {
    let filteredMentors = mentors;
  
    const selectedAvailability = availabilityFilter.value;
    const selectedPriceRange = priceRangeFilter.value;
    const selectedSubject = subjectFilter.value;
  
    // Filter by availability
    if (selectedAvailability !== "all") {
      filteredMentors = filteredMentors.filter(mentor => mentor.status.toLowerCase() === selectedAvailability);
    }
  
    // Filter by price
    if (selectedPriceRange !== "all") {
      filteredMentors = filteredMentors.filter(mentor => mentor.price.toLowerCase() === selectedPriceRange);
    }
  
    // Filter by subject
    if (selectedSubject !== "all") {
      filteredMentors = filteredMentors.filter(mentor => mentor.subject.toLowerCase() === selectedSubject);
    }
  
    renderMentors(filteredMentors);
  }
  
  // Initial render
  renderMentors(mentors);
  
  // Event listeners for filters
  availabilityFilter.addEventListener("change", filterMentors);
  priceRangeFilter.addEventListener("change", filterMentors);
  subjectFilter.addEventListener("change", filterMentors);
  