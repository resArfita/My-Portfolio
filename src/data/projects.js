import sheSafeImg from "../../src/assets/shesafe1.png"
import cartImg from "../../src/assets/cart1.png"
import chatbotImg from "../../src/assets/chatbot.png"
import todoImg from "../../src/assets/todo1.png"
// import drumImg from "../../src/assets/drum.png"
import bookshelfImg from "../../src/assets/bookshelf1.png"
import bmiImg from "../../src/assets/bmi.png"

const projects = [
    { id: 1, name: "SheSafe", desc: "A web platform designed to support women who have experienced harassment. It provides a safe space to share experiences, gain knowledge, and receive support from the community", tech: "MERN stack, Tailwind", image: sheSafeImg, github: "https://github.com/Merry-Riana-PI-2024/SheSafev2", demo: "https://drive.google.com/file/d/14GZXxKb0GxeCZBc6AfNNuCAZBrsp_J0A/view?usp=sharing" },
    { id: 2, name: "Cart Management", desc: "A dynamic shopping cart system that fetches products from an API. Users can adjust product quantities, and the total price updates automatically based on selections", tech: "React, Tailwind", image: cartImg, github: "https://github.com/resArfita/react_cart_task_44" , demo: "https://react-cart-task-fixed.vercel.app/" },
    { id: 3, name: "Chatbot for Learning English", desc: "An interactive chatbot that helps users practice basic English conversations, providing a fun and engaging way to improve language skills", tech: "JavaScript, Google Dialogflow", image: chatbotImg, github: "https://github.com/resArfita/Chatbot-for-Learning-English" , demo: "https://resarfita.github.io/Chatbot-for-Learning-English/" },
    { id: 4, name: "BMI Calculator", desc: "A simple yet interactive BMI calculator that not only provides BMI results but also offers fun, emoji-based responses to keep users engaged", tech: "Html, Tailwind, JavaScript", image: bmiImg, github: "https://github.com/resArfita/BMI-counter" , demo: "https://bmi-counter.vercel.app/" },
    { id: 5, name: "Todo List", desc: "A task management app with calendar selection, undo and delete functions. Completed tasks automatically move to a dedicated 'Yang Sudah Dilakukan' section for better organization", tech: "Html, Css, JavaScript", image: todoImg, github: "https://github.com/resArfita/to-do-list-app" , demo: "https://resarfita.github.io/to-do-list-app/" },
    { id: 6, name: "Library Management", desc: "A CRUD-based library system that allows users to manage books by title, author, and publication year. Books marked as read are moved to the 'Selesai dibaca' section", tech: "Html, Css, JavaScript", image: bookshelfImg, github: "https://github.com/resArfita/BookShelf-Project" , demo: "https://book-shelf-project-gissalfi9-resarfitas-projects.vercel.app/" },
];

export default projects;