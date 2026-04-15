// CV / Resume (same style as certificates)
const cvList = [
  {
    title: "My Professional Resume",
    file: "cv/my-cv.pdf"
  }
];

const cvContainer = document.getElementById("cv-section");

cvList.forEach(cv => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${cv.title}</h3>
    <button onclick="openModal('${cv.file}', '${cv.title}')">Preview</button>
    <button onclick="window.open('${cv.file}', '_blank')">Open</button>
  `;

  cvContainer.appendChild(card);
});

const certificates = [
   {
    title: "Associates Degree",
    file: "certificates/fnb.pdf"
  },
   {
    title: "Bsc Degree",
    file: "certificates/fnb.pdf"
  },
  {
    title: "FNB Full-Stack Certificate",
    file: "certificates/fnb.pdf"
  },
  {
    title: "IBM DevOps and Software Engineering",
    file: "certificates/devops.pdf"
  },
  {
    title: "Google IT Support",
    file: "certificates/google-it-support.pdf"
  },
  {
    title: "IBM Cybersecurity Analyst",
    file: "certificates/cybersecurity.pdf"
  },
  {
    title: "Google UX Design",
    file: "certificates/ux-design.pdf"
  },
  {
    title: "Google Project Management",
    file: "certificates/pm.pdf"
  },
  {
    title: "IBM Data Science",
    file: "certificates/data-science.pdf"
  }
];

const certContainer = document.getElementById("certificates");

certificates.forEach(cert => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${cert.title}</h3>
    <button onclick="openModal('${cert.file}', '${cert.title}')">Preview</button>
    <button onclick="window.open('${cert.file}', '_blank')">Open</button>
  `;

  certContainer.appendChild(card);
});

function openModal(file, title) {
  document.getElementById("pdfFrame").src = file;
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("pdfModal").classList.add("active");
}

function closeModal() {
  document.getElementById("pdfModal").classList.remove("active");
  document.getElementById("pdfFrame").src = "";
}

function viewProject(link) {
  window.open(link, "_blank");
}
