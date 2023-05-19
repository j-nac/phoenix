import { VideoSlide, TextSlide, LeftImageTextSlide, BackgroundImageSlide } from "../organisms/Slides";
import { TopMenu, HamburgerMenu, Footer } from "../organisms/NavElements";
import peanuts from "../../images/roasted-peanuts-jpg-1656535069.jpg";
import training1 from "../../images/Edited-KSC-20200924-PH-SPX01_0008~medium.jpg";

const Training = () => {
    return (
      <>
       <HamburgerMenu />
        <VideoSlide file="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" altimg={peanuts} main="TRAINING" tagline="Always prepared" position="bottomLeft" fit="menu"/>
        <TopMenu homeLink={"#root"} goLabel="FLY WITH US" />
        <TextSlide src={peanuts} header="FIRST STEPS TO SPACE" paragraph={["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.", "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."]} />
        <hr className="mx-[15%] text-white"/>
        <LeftImageTextSlide header="TRAINING ENSURES SAFETY"src={peanuts} desc={["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.", "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."]} />
        <BackgroundImageSlide main="OUR COACHES" background={`url(${training1}`} position="bottomRight" description="A sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat"/>
        <LeftImageTextSlide header="THE RECORD SPEAKS FOR ITSELF"src={peanuts} desc={["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.", "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."]} />
        <Footer />
      </>
    )
};
  
export default Training;