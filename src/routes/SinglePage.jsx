import { useParams } from "react-router-dom";

const aboutData = [
    {
      slug: 'about-app',
      title: 'About the app',
      description:
        "This application lets us add to-dos, edit, and delete items. Log in to see the delete feature. It also persists to-dos in the browser's local storage for a subsequent visit.",
    },
    {
      slug: 'about-developer',
      title: 'About the developer',
      description:
        'Damilare, popularly called Dammy, is currently a frontend developer and a full stack software development student at Microverse',
    },
  ];

const SinglePage = () => {
    const { slug } = useParams();
  const aboutContent = aboutData.find((item) => item.slug === slug);
  const { title, description } = aboutContent;
    return ( 
        <div className="main_content">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
     );
}
 
export default SinglePage;