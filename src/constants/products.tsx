import Trectutor from "public/images/trectutor.png";
import Trectutor2 from "public/images/trectutor2.png";
import Simonsays from "public/images/simonsays.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

export const products = [
  {
    href: "https://github.com/SinghBanta/TrecTutor",
    title: "TrecTutor",
    description:
      "The platform integrates with various APIs to provide real-time travel information, recommendations.",
    thumbnail: Trectutor,
    images: [Trectutor, Trectutor2],
    stack: ["ReactJS", "CSS"],
    slug: "aceternity",
    content: (
      <div>
        <p>
        TrecTutor is a cutting-edge web application developed using ReactJS, CSS, and Google Maps API integration. The project harnesses the power of ReactJS for building a responsive and highly interactive interface, allowing users to seamlessly navigate through the platform. With Google Maps API, TrecTutor provides real-time location-based data, enabling users to access accurate geographical information for a range of purposes, from navigation to place discovery.{" "}
        </p>
        <p>
        In addition to its robust functionality, TrecTutor incorporates a well-designed front end using CSS, ensuring a visually appealing and user-friendly experience. The responsive design allows the platform to be accessible on devices of all sizes, enhancing the usability of the application. The combination of real-time data, sleek design, and intuitive interaction makes TrecTutor a powerful tool for users seeking reliable and immediate geographical information
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://singhbanta.github.io/Simon-Says-Game/",
    title: "Simon Says Game",
    description:
    "This project is a web-based implementation of the classic Simon Says memory game," ,
    thumbnail: Simonsays,
    images: [Simonsays, Simonsays],
    stack: ["JavaScript"],
    slug: "algochurn",
    content: (
      <div>
        <p>
        The Simon Says memory game, built using HTML, CSS, and JavaScript, is a classic test of memory and focus. This interactive game challenges players to follow and repeat a sequence of lights and sounds, which grows progressively longer with each round. The JavaScript logic dynamically generates and manages these sequences, ensuring an engaging experience as the difficulty ramps up.{" "}
        </p>
        <p>
        The use of CSS ensures that the game is visually appealing and responsive, while HTML structures the game interface. CSS styling enhances the visual elements, such as the buttons and lights, creating an immersive and smooth user experience. The combination of these technologies results in a simple yet captivating game that is both fun to play and a great demonstration of core web development skills.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "",
    title: "Mentorios",
    description:
      "Mentorios is an AI-powered mock interview preparation website designed to help users practice and improve their interview skills.",
    thumbnail: sidefolioMoonbeam,
    images: [sidefolioMoonbeam, sidefolioMoonbeam2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "moonbeam",
    content: (
      <div>
        <p>
        Mentorios is an AI-driven mock interview preparation website designed to help users enhance their interview skills through realistic and personalized interview simulations. By leveraging advanced AI algorithms, Mentorios generates tailored interview questions based on specific industries or roles, allowing users to experience a variety of interview scenarios. The platform provides instant feedback on answers, helping users identify areas for improvement and build confidence before real interviews.{" "}
        </p>
        <p>
        With a sleek and intuitive interface, Mentorios makes it easy for users to navigate through different interview types and track their progress over time. The platform focus on customization ensures that users can prepare for both technical and behavioral interviews. Mentorios is a comprehensive tool for individuals looking to sharpen their interview skills and gain the practice they need to succeed in their job search.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://singhbanta.github.io/Spotify-Frontend-/",
    title: "Music App",
    description:
      "A music app designed with a clean and responsive frontend offering a visually engaging and user-friendly interface for browsing and playing songs.",
    thumbnail: sidefolioTailwindMasterKit,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    stack: ["HTML", "CSS"],
    slug: "tailwindmasterkit",
    content: (
      <div>
        <p>
        The music app, built using HTML and CSS, showcases a simple yet elegant interface for music enthusiasts. HTML provides the structural framework for the app, organizing elements like playlists, song lists, and player controls in a clear and accessible manner. CSS brings this structure to life with visually appealing designs, ensuring that the app is both responsive and attractive across different screen sizes. {" "}
        </p>
        <p>
        The app’s focus on a seamless user experience is evident in its clean, minimalistic design. Buttons and controls are styled to be interactive and visually engaging, while the overall color scheme and layout contribute to an aesthetically pleasing environment. By using only HTML and CSS, this project highlights the power of front-end development in creating functional and visually compelling user interfaces without the need for backend or complex scripting languages.
        </p>{" "}
      </div>
    ),
  },
];
