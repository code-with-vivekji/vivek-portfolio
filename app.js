function Navbar() {
    return (
        <nav className="navbar text-white py-4">
            <div className="max-w-6xl mx-auto flex justify-between px-6">
                <h1 className="font-bold">Vivek Kumar</h1>
                <div className="space-x-4 text-sm">
                    <a href="#about">About</a>
                    <a href="#certificates">Certificates</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}

function CertificateCarousel() {
    const [index, setIndex] = React.useState(0);

    const certificates = [
        { img: "cert-google-genai-internship.jpg", title: "Google Cloud Generative AI – Virtual Internship" },
        { img: "cert-cisco-junior-cyber.jpg", title: "Cisco Junior Cybersecurity Analyst Career Path" },
        { img: "cert-cisco-cyber-essentials.jpg", title: "Cisco Cybersecurity Essentials" },
        { img: "cert-cisco-intro-cyber.jpg", title: "Cisco Introduction to Cybersecurity" },
        { img: "cert-yhills-internship.jpg", title: "YHills Full-Stack Web Development Internship" },
        { img: "cert-yhills-project.jpg", title: "YHills Full-Stack Web Development Project Completion" }
    ];

    const prev = () =>
        setIndex(index === 0 ? certificates.length - 1 : index - 1);

    const next = () =>
        setIndex(index === certificates.length - 1 ? 0 : index + 1);

    return (
        <div className="carousel mt-6">
            <button className="carousel-btn left" onClick={prev}>❮</button>

            <div
                className="carousel-track"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {certificates.map((c, i) => (
                    <div className="carousel-item" key={i}>
                        <img src={c.img} alt={c.title} />
                        <div className="certificate-title">{c.title}</div>
                    </div>
                ))}
            </div>

            <button className="carousel-btn right" onClick={next}>❯</button>
        </div>
    );
}

function App() {
    const [showImage, setShowImage] = React.useState(false);

    return (
        <div className="font-sans">

            {/* PROFILE IMAGE MODAL */}
            {showImage && (
                <div className="image-modal" onClick={() => setShowImage(false)}>
                    <span
                        className="close-btn"
                        onClick={() => setShowImage(false)}
                    >
                        ×
                    </span>
                    <img src="profile.jpg" alt="Vivek Kumar" />
                </div>
            )}

            <Navbar />

            {/* HEADER */}
            <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-center py-8">

                <img
                    src="profile.jpg"
                    alt="Vivek Kumar"
                    className="profile-img w-36 h-36 mx-auto rounded-full border-4 border-white object-cover cursor-pointer"
                    onClick={() => setShowImage(true)}
                />

                <h1 className="text-3xl font-bold mt-4">Vivek Kumar</h1>
                <p className="mt-1">B.Tech CSE | Full Stack • AI • Cybersecurity</p>
              
                <div className="mt-3 flex justify-center gap-6 text-sm">
                    <a
                        href="https://github.com/code-with-vivekji"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        LinkedIn
                    </a>
                </div>
            </header>

            {/* ABOUT */}
            <section id="certificates" className="max-w-5xl mx-auto bg-white mt-4 p-6 rounded-xl custom-card">
                <h2 className="text-2xl font-bold text-indigo-600 mb-4">About Me</h2>
                <p>
                    I am a motivated B.Tech Computer Science Engineering student (3rd Year)
                    with certified knowledge in Full-Stack Web Development, Cybersecurity
                    Fundamentals, and Generative AI. I have completed multiple
                    industry-recognized certifications from Google Cloud, Cisco, and
                    YHills and applied this learning through real-world projects.
                    <br /><br />
                    I am actively seeking internship or entry-level opportunities where I
                    can apply my technical skills, grow professionally, and contribute to
                    meaningful projects.
                </p>
            </section>

            {/* CERTIFICATES */}
            <section id="certificates" className="max-w-5xl mx-auto bg-white mt-6 p-8 rounded-xl custom-card">
                <h2 className="text-2xl font-bold text-indigo-600 mb-4">Certifications</h2>
                <CertificateCarousel />
            </section>
            {/* SKILLS */} <section id="skills" className="max-w-5xl mx-auto bg-white mt-6 p-8 rounded-xl custom-card">
                 <h2 className="text-2xl font-bold text-indigo-600 mb-4">Skills</h2> 
                 <ul className="grid md:grid-cols-2 gap-2 text-sm">
                     <li>Frontend: HTML, CSS, JavaScript, Responsive Design</li>
                      <li>Backend Basics: Python, Logic Building</li>
                       <li>Generative AI: Prompt Engineering, AI Tools</li>
                        <li>Cybersecurity: Network Basics, Security Awareness</li>
                         <li>Tools: GitHub, VS Code, GitHub Pages</li>
                          </ul>
                           </section>

            {/* PROJECTS – DETAILED */}
            <section id="projects" className="max-w-5xl mx-auto bg-white mt-6 p-8 rounded-xl custom-card">
                <h2 className="text-2xl font-bold text-indigo-600 mb-4">Projects</h2> <div className="mb-6">
                    <h3 className="font-semibold">Portfolio Website</h3>
                    <p className="text-sm"> <strong>Tech:</strong> HTML, CSS, JavaScript<br />
                     <strong>Role:</strong> Design & Development<br />
                     <strong>Description:</strong> Responsive portfolio showcasing certificates, projects, and skills.<br />
             </p> <a href="https://code-with-vivekji.github.io/vivek-frontend-portfolio/" target="_blank" className="text-indigo-600 underline text-sm"> Live Demo </a> 
            </div>
             <div>
                 <h3 className="font-semibold">Techvolution Registration System</h3>
                  <p className="text-sm"> <strong>Tech:</strong> HTML, CSS, JavaScript<br />
                   <strong>Role:</strong> Frontend Developer<br />
                    <strong>Description:</strong> User-friendly form with validation and clean UI. </p>
                     <a href="https://code-with-vivekji.github.io/Techvolution_Minor_Project/" target="_blank" className="text-indigo-600 underline text-sm"> Live Demo </a> 
                     </div>
                      </section>

            {/* CONTACT */}
            <section id="contact" className="max-w-5xl mx-auto bg-white mt-6 p-8 rounded-xl custom-card">
                <h2 className="text-2xl font-bold text-indigo-600 mb-4">Contact</h2>

                <form className="grid gap-4">
                    <input type="text" placeholder="Full Name" className="p-2 rounded" />
                    <input type="number" placeholder="Age" className="p-2 rounded" />
                    <input type="email" placeholder="Email" className="p-2 rounded" />
                    <input type="tel" placeholder="Mobile Number" className="p-2 rounded" />
                    <textarea rows="4" placeholder="Message" className="p-2 rounded"></textarea>

                    <button className="bg-indigo-600 text-white py-2 rounded">
                        Send Message
                    </button>
                </form>
            </section>

            {/* FOOTER */}
            <footer className="bg-indigo-600 text-white text-center py-6 mt-10 footer-text">
                <p>Vivek Kumar</p>
                <p>Email: vivekkumar776191@gmail.com | Phone : 7761915133</p>
                <p>
                    <a
                        href="https://www.instagram.com/yadav__vivek07/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Follow : Instagram
                    </a>{" "}
                    | © All Rights Reserved
                </p>
            </footer>

        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
