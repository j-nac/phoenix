import { VideoSlide, TextSlide, ImageDescribedSlide } from "../organisms/Slides";
import { TopMenu, HamburgerMenu } from "../organisms/NavElements";
import peanuts from "../../images/roasted-peanuts-jpg-1656535069.jpg";
import "../../styles/home.css";
const Ships = () => {
    return (
        <>
            <TopMenu homeLink={"#root"} goLabel="FLY WITH US" />
            <HamburgerMenu />
            <VideoSlide file="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" altimg={peanuts} main="SPACESHIPS" tagline="Ride in Comfort" position="bottomLeft"/>
            <TextSlide src={peanuts} subheader="Groundbreaking Technology" header="Ascend Class Ships" paragraph={["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.", "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo", "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem"]} />
            <ImageDescribedSlide src={peanuts} subheader="Next gen" header="leviathan 3 engines" text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" text2="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore" />
        </>
    )
};
  
export default Ships;