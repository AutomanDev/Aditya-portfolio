import me from '../images/other/me.png';
import resume from '../resume.pdf';

export default function About(){
    return(
        <>
        <h1>about</h1>
        <div className = "about-container">
            <div className = "about-img">
                <img src={me} alt="drawing of teresa yang"></img>

            </div>

            <div className = "about-bio">
            Hi, I’m Aditya! I’m currently a student at PES University studying Computer science and Enginerring with a minor in Business. My goal is to build efficient cloud infrasture designs and Deploying Projects using CI/CD Pipelines, and my background in AWS cloud, devops technology, and CI-CD tools for handling complete Software Deployments and Reliability.<br/><br/>
            
            In my free time, I host knowledge transfer sessions for DevOps Enthusiasts.<br/><br/>
            
            I am currently looking for full-time opportunities starting Summer/Fall 2024 to Work as an Software and Cloud Engineer. Let’s connect! Connect with me at khotaditya22@gmail.com<br/><br/>

            <a href={resume} target = "_blank" rel="noreferrer">Resume</a>
            </div>

        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        </>
    );
}
