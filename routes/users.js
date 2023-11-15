var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  let applicationContent = [
    {
      paragraphOne:
        "Embarking on the exciting realm of app development, I specialize in creating dynamic and user-friendly mobile applications. The process involves designing and building software applications for mobile devices, ensuring they are not only visually appealing but also function seamlessly",
      paragraphTwo:
        "This journey has led me to harness the power of Flutter and Firebase, two cutting-edge technologies that have revolutionized the way we approach mobile app development.",
      images: [
        "https://portfolioapi-production-e502.up.railway.app/assets/icons/firebase.png",
        "https://portfolioapi-production-e502.up.railway.app/assets/icons/flutter.png",
      ],
    },
  ];

  let websiteContent = [
    {
      paragraphOne:
        " Welcome to the heart of my digital endeavors! In the vast realm of web development, I thrive on crafting immersive online experiences. Below, you'll find a glimpse into my journey with various technologies:",
      paragraphTwo:
        "Proficient in HTML, CSS, JavaScript, PHP, and MySQL, I navigate the diverse landscape of web development. HTML lays the foundation, CSS adds the style, and JavaScript brings interactivity. On the server side, PHP manages dynamic content, while MySQL ensures smooth data handling. Together, these technologies enable me to craft responsive and engaging web applications, turning ideas into digital reality.",
      images: [
        "https://portfolioapi-production-e502.up.railway.app/assets/icons/html-5.png",
        "https://portfolioapi-production-e502.up.railway.app/assets/icons/css3.png",
        "https://portfolioapi-production-e502.up.railway.app/assets/icons/javascript.png",
        "https://portfolioapi-production-e502.up.railway.app/assets/icons/php-logo.png",
        "https://portfolioapi-production-e502.up.railway.app/assets/icons/mysql-logo.png",
        // Add more image URLs as needed
      ],
      wordpressImages: [
        "https://portfolioapi-production-e502.up.railway.app/assets/icons/html-5.png",
        "https://portfolioapi-production-e502.up.railway.app/assets/icons/css3.png",
        "https://portfolioapi-production-e502.up.railway.app/assets/icons/php-logo.png",
        "https://portfolioapi-production-e502.up.railway.app/assets/icons/mysql-logo.png",
        "https://portfolioapi-production-e502.up.railway.app/assets/icons/wordpress.png",
        "https://portfolioapi-production-e502.up.railway.app/assets/icons/acf-logo.png",
        "https://portfolioapi-production-e502.up.railway.app/assets/icons/gravity-forms.png",
        "https://portfolioapi-production-e502.up.railway.app/assets/icons/dropbox.png",
        "https://portfolioapi-production-e502.up.railway.app/assets/icons/stripe.png",
      ],
    },
  ];
  let aboutMe = [
    {
      about: [
        `I started my academic journey at Habib Public School, where I completed my education up to the 5th grade. Following that, I made a transition to Iqra for my religious studies, dedicating three years to achieving Hafiz e Quran certification from Wifaqul Madarais.`,
        `Later, I joined Happy Palace Grammar School in the 9th grade and managed to secure an impressive 86.8% in the SSC Examinations, earning the third rank in my school. This achievement paved the way for my admission to Govt. Dehli College, where I maintained my academic excellence, securing an A1 grade with 84%.`,
        `Driven by a passion for engineering, I set my sights on NED University. After rigorous preparation and a successful performance in the admission test, I proudly gained admission into the top merit field at NED – Software Engineering. This journey reflects my commitment to both religious and academic pursuits, laying the groundwork for a promising future in Software Engineering at NED University.`,
        `Finally i got the admission in my dream University where studied Software Engineering and learned to create all sorts of exciting digital things. I’ve begin my career by making games! I made a car racing game, an exciting space shooting game and one of the classics Pacman using Python. Using C# I’ve also made another classic which is Flappy Bird. The assests used in all these games have been entirely designed by myself.`,
        `When I'm not busy coding, I'm letting my creative side loose as a UI/UX designer. That means I create awesome pictures, posters, cards, and presentations. This creative skill helps me make websites and app designs that are not only easy to use but also looks fantastic.`,
        `My collection of work includes Airline reservation system, which is basically a php website through which you can book flights.`,
        `I enjoy making apps using Flutter, and I do everything from designing to developing them. First, I create how they should look using a design tool called Figma. Then, I bring them to life with Flutter's magic!". During my internship at Muller & Phipps Pakistan (Pvt.) Ltd., I got to help build a real time app using Flutter. This app added a new skill to my collection and made me even more excited about creating with technology.`,
        `My journey with WordPress kicked off during my Final Year Development Project (FYDP). During this project, I had the opportunity to explore different themes, give them my own personal touch, and make them look really unique. I also used plugins ACF Pro to add dynamic content to the websites. And for all the forms on our website, such as User Registration, Login, and Payment forms, I relied on Gravity Forms. All of this combined made our websites not only visually appealing but also super functional.`,
        `I've also created a custom plugin that does something cool: it can back up entire WordPress websites, including all the content and the database. And not just that, it can even undo individual changes made by users. So, if anything on the website changes, it can be easily brought back to how it was before. Plus, it's on a schedule, so it automatically takes backup at different times. It's really handy for catching all those dynamic changes as well.`,
        `So, armed with skills in software, web development, apps, and design, I'm here to turn ideas into reality and make technology totally awesome.`,
      ],
    },
  ];
  let prototypeContent = [
    {
      paragraphOne:
        "Crafting user-centric interfaces is my passion. Using Illustrator, Figma, and Adobe XD, I design visually appealing graphics and seamless layouts. Illustrator refines intricate details, Figma facilitates collaborative prototyping, and Adobe XD brings designs to life with interactive prototypes. Join me in creating digital experiences where innovation meets aesthetic precision.",
      paragraphTwo:
        "Prototyping is where ideas come to life. With Illustrator, Figma, and Adobe XD, I seamlessly transition from graphic elements to interactive designs. Illustrator ensures detailed graphics, Figma streamlines collaborative prototyping, and Adobe XD transforms static designs into engaging prototypes. Explore the fusion of creativity and functionality in the realm of prototyping, where every click tells a story of design evolution.",
      images: [
        "https://portfolioapi-production-e502.up.railway.app/assets/icons/figma.png",
        "https://portfolioapi-production-e502.up.railway.app/assets/icons/adobe-illustrator.png",
        "https://portfolioapi-production-e502.up.railway.app/assets/icons/adobe-xd.png",

        // Add more image URLs as needed
      ],
    },
  ];
  let graphicDesigningContent = [
    {
      images: [
        "https://portfolioapi-production-e502.up.railway.app/assets/icons/figma.png",
        "https://portfolioapi-production-e502.up.railway.app/assets/icons/adobe-illustrator.png",
        "https://portfolioapi-production-e502.up.railway.app/assets/icons/adobe-xd.png",
        // Add more image URLs as needed
      ],
      paragraphOne:
        "In the world of graphic design, Illustrator is my trusted ally. From shaping unique logos that capture brand essence to crafting visually compelling presentations and posters, Illustrator's precision is the cornerstone of my creative endeavors. It's the tool that turns ideas into impactful visual stories, ensuring each project is a masterpiece in its own right.",
      paragraphTwo:
        "Every stroke in Illustrator is a brushstroke of creativity, whether I'm designing a logo that stands out or creating visuals that leave a lasting impression. Join me on this journey where Illustrator transforms concepts into eye-catching graphic elements, making every design a captivating visual experience.",
    },
  ];

  let prototypeArr = [
    {
      pageRedirect: "/proto-salezman",
      image:
        "https://portfolioapi-production-e502.up.railway.app/assets/images/salezman.jpg", // Update the image path
      type: "Prototype",
      title: "Salezman App: Sales Base Application",
      about: "Salezman App helps you better for sales",
      link: "https://urlis.net/salezman-app",
      name: "Salezman-App",
      paragraphs: [
        `In our Flutter app, the primary aim is to create a seamless and user-friendly experience for students seeking job opportunities. The app consists of multiple pages to gather detailed information about the users and their career preferences.`,
        `The journey begins with a login/signup page where users create their accounts by providing a unique username and password. To ensure account security, a confirmation email is sent for activation.`,
        `Upon successful login, users navigate to the second page to furnish their personal and professional details. This includes their name, age, specialization, education level, and location. Additionally, users can input links to their CV, LinkedIn, Twitter, YouTube, Github, Instagram, and any other platform showcasing their technical skills.`,
        `Moving on to the third page, we employ a more visual approach. Users are presented with a set of images representing various aspects of their ideal workplace, job role, and an additional task they would willingly perform for their employer without cost.`,
        `The final page delves into the user's future aspirations. Users articulate their plans for the next five years, providing a comprehensive understanding of their career trajectory.`,
        `In summary, our app not only captures the basic demographic and professional information but also delves into the user's preferences and long-term goals. This multifaceted approach ensures that employers accessing this data gain a holistic view of each candidate. The app is designed to be intuitive, secure, and tailored to the unique needs of job-seeking students.`,
      ],
    },
    {
      pageRedirect: "/proto-ams",
      image:
        "https://portfolioapi-production-e502.up.railway.app/assets/images/bp-yard.jpg",
      type: "Prototype",
      title: "Attendance Management System: Digitally mark your attendence",
      about:
        "Converts the tradition way of attendance to a more better digital way",
      link: "https://urlis.net/attendance-ms",
      name: "Attendance Management System",
      paragraphs: [
        `In our Flutter app, the primary aim is to create a seamless and user-friendly experience for students seeking job opportunities. The app consists of multiple pages to gather detailed information about the users and their career preferences.`,
        `The journey begins with a login/signup page where users create their accounts by providing a unique username and password. To ensure account security, a confirmation email is sent for activation.`,
        `Upon successful login, users navigate to the second page to furnish their personal and professional details. This includes their name, age, specialization, education level, and location. Additionally, users can input links to their CV, LinkedIn, Twitter, YouTube, Github, Instagram, and any other platform showcasing their technical skills.`,
        `Moving on to the third page, we employ a more visual approach. Users are presented with a set of images representing various aspects of their ideal workplace, job role, and an additional task they would willingly perform for their employer without cost.`,
        `The final page delves into the user's future aspirations. Users articulate their plans for the next five years, providing a comprehensive understanding of their career trajectory.`,
        `In summary, our app not only captures the basic demographic and professional information but also delves into the user's preferences and long-term goals. This multifaceted approach ensures that employers accessing this data gain a holistic view of each candidate. The app is designed to be intuitive, secure, and tailored to the unique needs of job-seeking students.`,
      ],
    },
    {
      pageRedirect: "/proto-jooble",
      image:
        "https://portfolioapi-production-e502.up.railway.app/assets/images/jooble.jpg",
      type: "Prototype",
      title: "Jooble App: A place for job hunting",
      about: "Jooble App is an application similar to LinkedIn for job hunting",
      link: "https://urlis.net/jooble-app",
      name: "Jooble-App",
      paragraphs: [
        `In our Flutter app, the primary aim is to create a seamless and user-friendly experience for students seeking job opportunities. The app consists of multiple pages to gather detailed information about the users and their career preferences.`,
        `The journey begins with a login/signup page where users create their accounts by providing a unique username and password. To ensure account security, a confirmation email is sent for activation.`,
        `Upon successful login, users navigate to the second page to furnish their personal and professional details. This includes their name, age, specialization, education level, and location. Additionally, users can input links to their CV, LinkedIn, Twitter, YouTube, Github, Instagram, and any other platform showcasing their technical skills.`,
        `Moving on to the third page, we employ a more visual approach. Users are presented with a set of images representing various aspects of their ideal workplace, job role, and an additional task they would willingly perform for their employer without cost.`,
        `The final page delves into the user's future aspirations. Users articulate their plans for the next five years, providing a comprehensive understanding of their career trajectory.`,
        `In summary, our app not only captures the basic demographic and professional information but also delves into the user's preferences and long-term goals. This multifaceted approach ensures that employers accessing this data gain a holistic view of each candidate. The app is designed to be intuitive, secure, and tailored to the unique needs of job-seeking students.`,
      ],
    },
    {
      pageRedirect: "/proto-bpyard",
      image:
        "https://portfolioapi-production-e502.up.railway.app/assets/images/bp-yard.jpg",
      type: "Prototype",
      title: "BP - Yard Application: Keep records of your Blood Pressure ",
      about:
        "You can keep track of your blood pressure through this app and it'll remind you too",
      link: "https://urlis.net/bp-yard",
      name: "BP-Yard",
      paragraphs: [
        `Introducing BP-Yard, an advanced health monitoring application aimed at revolutionizing the way individuals track and manage their blood pressure on a daily basis. The core objective of BP-Yard is to provide users with a comprehensive tool that not only records real-time blood pressure data but also offers insightful feedback, enabling a proactive approach to cardiovascular health.`,
        `BP-Yard's standout feature lies in its ability to simplify the process of recording daily blood pressure readings. Users can effortlessly input their data, creating a detailed log that serves as a valuable resource for ongoing health assessment. This streamlined approach ensures that users can maintain a consistent record of their cardiovascular metrics.`,
        `The app categorizes blood pressure readings into clear indicators—high, low, or normal—providing users with an immediate understanding of their current cardiovascular status. This smart feedback system adds a layer of convenience and accessibility to health monitoring.`,
        `Users can set reminders within the app to prompt them to check their blood pressure regularly. This feature is a proactive measure to encourage users to stay committed to their health routine, fostering a habit of regular check-ins.`,
      ],
    },
    {
      pageRedirect: "/proto-datayard",
      image:
        "https://portfolioapi-production-e502.up.railway.app/assets/images/proto-datayard.jpg",
      type: "Prototype",
      title: "The Datayard : Backup & Restoration solution",
      about:
        "The Datayard is a backup, restore and a user log tracker plugin for Wordpress website.",
      link: "https://urlis.net/thedatayard",
      name: "The-Datayard",
      paragraphs: [
        `Business websites are increasingly susceptible to threats that can have significant repercussions, stemming from either malicious intent or inadvertent user errors. These risks encompass file and data corruption, unintentional alterations by non-technical users, and, in severe cases, website crashes and database hacking.`,
        `The surge in websites, particularly those using WordPress, has amplified security concerns, driven by vulnerability exploitation and user mistakes. Due to the high cost associated with on-site security solutions, organizations are turning to outsourcing for their security needs. This report proposes the development of a security service aimed at safeguarding against unintentional changes to websites, facilitating swift recovery.`,
        `The project's methodology involves a systematic approach with verification and validation at each stage. The process includes analysis, design, and implementation, featuring website and plugin development. The chosen tools and languages encompass PHP for backend and plugin development, HTML, CSS, JS for frontend, and MySQL for data storage. Third-party integrations with Stripe, Dropbox, and Crypto are also incorporated. The Datayard plugin's core services encompass backups, restoration, user activity monitoring, and the ability to revert user actions.`,
        `The Datayard aspires to be a comprehensive security solution catering to the diverse needs of business startups and small-scale enterprises. Categorized services based on security requirements and organizational size will address the unique challenges faced by WordPress websites, offering relief from potential issues.`,
        `Major findings underscore that website threats arise from both intentional malicious attempts and user unawareness. The proposed solution, The Datayard, aims to address these security needs effectively, providing support for WordPress-based websites and mitigating potential challenges.`,
      ],
    },
  ];

  let websiteArr = [
    {
      pageRedirect: "/primero",
      image:
        "https://portfolioapi-production-e502.up.railway.app/assets/images/primero-avionics.png",
      type: "Website",
      title: "Primero-Avionics: Airline Reservation System",
      about:
        "Primero-Avionics lets you book flights, select seats, generate tickets, and track the flight.",
      link: "https://primero-avionics.thedatayard.com/",
      name: "Primero-Avionics",
      paragraphs: [
        `"Primero Avionics" has modernized the airline reservation process, eliminating the inefficiencies of the past where employees manually handled reservations with index cards. The system allows users to create accounts, providing them with convenient access to reservation management. Users can effortlessly select flights based on day, departure, and destination, with real-time updates on availability.`,
        `The system supports flexible booking options, enabling users to reserve multiple tickets and choose their preferred class (Business or Economy) for each passenger. Seamless online payment processing with credit cards ensures a secure and swift transaction experience. Once payment is confirmed, electronic tickets are generated and accessible on the website, with copies sent to users via email for reference.`,
        `Ticket retrieval is simplified through unique ticket numbers, allowing users to easily access and review their flight details. Administrators have robust capabilities, managing and updating the list of available flights in real-time through a connected database. They can also monitor and track website activities to ensure smooth operations.`,
        `The system's integrated database stores comprehensive information, including flight details and user accounts, ensuring accuracy and providing up-to-date information to users. "Primero Avionics" redefines the air travel reservation experience, offering a user-friendly interface, efficient booking options, and robust security measures, making it convenient for users to plan their journeys anytime, anywhere.`,
      ],
    },
    {
      pageRedirect: "/datayard",
      image:
        "https://portfolioapi-production-e502.up.railway.app/assets/images/the-datayard.png",
      type: "Website",
      title: "The Datayard : Backup & Restoration solution",
      about:
        "The Datayard is a backup, restore and a user log tracker plugin for Wordpress website.",
      link: "https://thedatayard.com/",
      name: "The-Datayard",
      paragraphs: [
        `Business websites are increasingly susceptible to threats that can have significant repercussions, stemming from either malicious intent or inadvertent user errors. These risks encompass file and data corruption, unintentional alterations by non-technical users, and, in severe cases, website crashes and database hacking.`,
        `The surge in websites, particularly those using WordPress, has amplified security concerns, driven by vulnerability exploitation and user mistakes. Due to the high cost associated with on-site security solutions, organizations are turning to outsourcing for their security needs. This report proposes the development of a security service aimed at safeguarding against unintentional changes to websites, facilitating swift recovery.`,
        `The project's methodology involves a systematic approach with verification and validation at each stage. The process includes analysis, design, and implementation, featuring website and plugin development. The chosen tools and languages encompass PHP for backend and plugin development, HTML, CSS, JS for frontend, and MySQL for data storage. Third-party integrations with Stripe, Dropbox, and Crypto are also incorporated. The Datayard plugin's core services encompass backups, restoration, user activity monitoring, and the ability to revert user actions.`,
        `The Datayard aspires to be a comprehensive security solution catering to the diverse needs of business startups and small-scale enterprises. Categorized services based on security requirements and organizational size will address the unique challenges faced by WordPress websites, offering relief from potential issues.`,
        `Major findings underscore that website threats arise from both intentional malicious attempts and user unawareness. The proposed solution, The Datayard, aims to address these security needs effectively, providing support for WordPress-based websites and mitigating potential challenges.`,
      ],
    },
    {
      pageRedirect: "/plugin-datayard",
      image:
        "https://portfolioapi-production-e502.up.railway.app/assets/images/plugin-datayard.png",
      type: "Plugin",
      title: "The Datayard : Backup & Restoration solution",
      about:
        "The Datayard is a backup, restore and a user log tracker plugin for Wordpress website.",
      link: "https://thedatayard.com/",
      name: "The-Datayard",
      paragraphs: [
        `Business websites are increasingly susceptible to threats that can have significant repercussions, stemming from either malicious intent or inadvertent user errors. These risks encompass file and data corruption, unintentional alterations by non-technical users, and, in severe cases, website crashes and database hacking.`,
        `The surge in websites, particularly those using WordPress, has amplified security concerns, driven by vulnerability exploitation and user mistakes. Due to the high cost associated with on-site security solutions, organizations are turning to outsourcing for their security needs. This report proposes the development of a security service aimed at safeguarding against unintentional changes to websites, facilitating swift recovery.`,
        `The project's methodology involves a systematic approach with verification and validation at each stage. The process includes analysis, design, and implementation, featuring website and plugin development. The chosen tools and languages encompass PHP for backend and plugin development, HTML, CSS, JS for frontend, and MySQL for data storage. Third-party integrations with Stripe, Dropbox, and Crypto are also incorporated. The Datayard plugin's core services encompass backups, restoration, user activity monitoring, and the ability to revert user actions.`,
        `The Datayard aspires to be a comprehensive security solution catering to the diverse needs of business startups and small-scale enterprises. Categorized services based on security requirements and organizational size will address the unique challenges faced by WordPress websites, offering relief from potential issues.`,
        `Major findings underscore that website threats arise from both intentional malicious attempts and user unawareness. The proposed solution, The Datayard, aims to address these security needs effectively, providing support for WordPress-based websites and mitigating potential challenges.`,
      ],
    },
  ];
  let applicationArr = [
    {
      pageRedirect: "/salezman",
      image:
        "https://portfolioapi-production-e502.up.railway.app/assets/images/salezman.jpg", // Update the image path
      type: "Application",
      title: "Salezman App: Sales Base Application",
      about: "Salezman App helps you better for sales",
      link: "https://urlis.net/salezman-app",
      name: "Salezman-App",
      paragraphs: [
        `In our Flutter app, the primary aim is to create a seamless and user-friendly experience for students seeking job opportunities. The app consists of multiple pages to gather detailed information about the users and their career preferences.`,
        `The journey begins with a login/signup page where users create their accounts by providing a unique username and password. To ensure account security, a confirmation email is sent for activation.`,
        `Upon successful login, users navigate to the second page to furnish their personal and professional details. This includes their name, age, specialization, education level, and location. Additionally, users can input links to their CV, LinkedIn, Twitter, YouTube, Github, Instagram, and any other platform showcasing their technical skills.`,
        `Moving on to the third page, we employ a more visual approach. Users are presented with a set of images representing various aspects of their ideal workplace, job role, and an additional task they would willingly perform for their employer without cost.`,
        `The final page delves into the user's future aspirations. Users articulate their plans for the next five years, providing a comprehensive understanding of their career trajectory.`,
        `In summary, our app not only captures the basic demographic and professional information but also delves into the user's preferences and long-term goals. This multifaceted approach ensures that employers accessing this data gain a holistic view of each candidate. The app is designed to be intuitive, secure, and tailored to the unique needs of job-seeking students.`,
      ],
    },
    {
      pageRedirect: "/jooble",
      image:
        "https://portfolioapi-production-e502.up.railway.app/assets/images/jooble.jpg",
      type: "Application",
      title: "Jooble App: A place for job hunting",
      about: "Jooble App is an application similar to LinkedIn for job hunting",
      link: "https://urlis.net/jooble-app",
      name: "Jooble-App",
      paragraphs: [
        `In our Flutter app, the primary aim is to create a seamless and user-friendly experience for students seeking job opportunities. The app consists of multiple pages to gather detailed information about the users and their career preferences.`,
        `The journey begins with a login/signup page where users create their accounts by providing a unique username and password. To ensure account security, a confirmation email is sent for activation.`,
        `Upon successful login, users navigate to the second page to furnish their personal and professional details. This includes their name, age, specialization, education level, and location. Additionally, users can input links to their CV, LinkedIn, Twitter, YouTube, Github, Instagram, and any other platform showcasing their technical skills.`,
        `Moving on to the third page, we employ a more visual approach. Users are presented with a set of images representing various aspects of their ideal workplace, job role, and an additional task they would willingly perform for their employer without cost.`,
        `The final page delves into the user's future aspirations. Users articulate their plans for the next five years, providing a comprehensive understanding of their career trajectory.`,
        `In summary, our app not only captures the basic demographic and professional information but also delves into the user's preferences and long-term goals. This multifaceted approach ensures that employers accessing this data gain a holistic view of each candidate. The app is designed to be intuitive, secure, and tailored to the unique needs of job-seeking students.`,
      ],
    },
    {
      pageRedirect: "/bpyard",
      image:
        "https://portfolioapi-production-e502.up.railway.app/assets/images/bp-yard.jpg",
      type: "Application",
      title: "BP - Yard Application: Keep records of your Blood Pressure ",
      about:
        "You can keep track of your blood pressure through this app and it'll remind you too",
      link: "https://urlis.net/bp-yard",
      name: "BP-Yard",
      paragraphs: [
        `Introducing BP-Yard, an advanced health monitoring application aimed at revolutionizing the way individuals track and manage their blood pressure on a daily basis. The core objective of BP-Yard is to provide users with a comprehensive tool that not only records real-time blood pressure data but also offers insightful feedback, enabling a proactive approach to cardiovascular health.`,
        `BP-Yard's standout feature lies in its ability to simplify the process of recording daily blood pressure readings. Users can effortlessly input their data, creating a detailed log that serves as a valuable resource for ongoing health assessment. This streamlined approach ensures that users can maintain a consistent record of their cardiovascular metrics.`,
        `The app categorizes blood pressure readings into clear indicators—high, low, or normal—providing users with an immediate understanding of their current cardiovascular status. This smart feedback system adds a layer of convenience and accessibility to health monitoring.`,
        `Users can set reminders within the app to prompt them to check their blood pressure regularly. This feature is a proactive measure to encourage users to stay committed to their health routine, fostering a habit of regular check-ins.`,
      ],
    },
  ];

  res.json({
    aboutMe: aboutMe,
    websiteData: websiteArr,
    prototypeData: prototypeArr,
    applicationData: applicationArr,
    websiteContent: websiteContent,
    prototypeContent: prototypeContent,
    applicationContent: applicationContent,
    graphicDesigningContent: graphicDesigningContent,
  });
});

module.exports = router;
