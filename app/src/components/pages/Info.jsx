import { useEffect } from "react";

const Info = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
  <div className="text-white px-[15%] py-5">
  <h1 className="text-5xl font-bold">TSA Information</h1>
  <h2 className="text-4xl pt-5">Documentation</h2>
  <ul className="list-disc pl-5">
    <li><a className="text-magenta underline" href={process.env.PUBLIC_URL + "/documentation/FINAL OFFICIAL Worklog.pdf"} target="_blank" rel="noopener noreferrer">Official Work Log</a></li>
    <li><a className="text-magenta underline" href={process.env.PUBLIC_URL + "/documentation/CURRENT RAW Worklog.pdf"} target="_blank" rel="noopener noreferrer">New Spreadsheet Work Log</a></li>
    <li><a className="text-magenta underline" href={process.env.PUBLIC_URL + "/documentation/OLD RAW Worklog.pdf"} target="_blank" rel="noopener noreferrer">Old Spreadsheet Work Log</a></li>
    <li><a className="text-magenta underline" href={process.env.PUBLIC_URL + "/documentation/SIGNED Copyright Checklist.pdf"} target="_blank" rel="noopener noreferrer">Copyright Checklist</a></li>
  </ul>
  <h2 className="text-4xl pt-5">Project Information</h2>
  <ul className="list-disc pl-5">
    <li>Made with reactjs + tailwindcss</li>
    <li>Hosted on Netlify</li>
  </ul>
  <h2 className="text-4xl pt-5">Image Credit</h2>
  <ul className="list-disc pl-5">
    <li>Company logo done in house. Converted to favicons with https://favicon.io/favicon-converter/</li>
    <li>Facebook, Instagram, Twitter, Youtube, TikTok icons from https://icons8.com/</li>
    <li>Optimized-spacex-uj3hvdfQujI-unsplash.jpg Photo by <a className="text-magenta underline" href="https://unsplash.com/@spacex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">SpaceX</a> on <a className="text-magenta underline" href="https://unsplash.com/s/photos/rocket?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li>Optimized-nicolas-thomas-wKlqqfNTLsI-unsplash.jpg Photo by <a className="text-magenta underline" href="https://unsplash.com/@nicolasthomas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nicolas Thomas</a> on <a className="text-magenta underline" href="https://unsplash.com/s/photos/moon-and-space?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li>Optimized-christina-wocintechchat-com-faEfWCdOKIg-unsplash.jpg Photo by <a className="text-magenta underline" href="https://unsplash.com/@wocintechchat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Christina @ wocintechchat.com</a> on <a className="text-magenta underline" href="https://unsplash.com/photos/faEfWCdOKIg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li>Optimized-nasa-CpHNKNRwXps-unsplash.jpg Photo by <a  className="text-magenta underline" href="https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NASA</a> on <a className="text-magenta underline" href="https://unsplash.com/photos/CpHNKNRwXps?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li>Optimized-spacex-VBNb52J8Trk-unsplash.jpg Photo by <a className="text-magenta underline" href="https://unsplash.com/@spacex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">SpaceX</a> on <a className="text-magenta underline" href="https://unsplash.com/images/nature/satellite?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li>Optimized-nasa-Q1p7bh3SHj8-unsplash.jpg Photo by <a className="text-magenta underline" href="https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NASA</a> on <a className="text-magenta underline" href="https://unsplash.com/images/nature/earth?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li>Optimized-benjamin-voros-phIFdC6lA4E-unsplash.jpg Photo by <a className="text-magenta underline" href="https://unsplash.com/de/@vorosbenisop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Benjamin Voros</a> on <a className="text-magenta underline" href="https://unsplash.com/photos/phIFdC6lA4E?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li>Optimized-max-mckinnon-c9OCWLka764-unsplash.jpg Photo by <a className="text-magenta underline" href="https://unsplash.com/@maxmckinnon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Max McKinnon</a> on <a className="text-magenta underline" href="https://unsplash.com/images/nature/space?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li>Optimized-neven-krcmarek-3ym-ev0Pe58-unsplash.jpg Photo by <a className="text-magenta underline" href="https://unsplash.com/@nevenkrcmarek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Neven Krcmarek</a> on <a className="text-magenta underline" href="https://unsplash.com/photos/3ym-ev0Pe58?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li><a className="text-magenta underline" href="https://www.pexels.com/search/videos/planets/">Video 1</a>, <a className="text-magenta underline" href="https://mixkit.co/free-stock-video/space/?page=2">video 2</a>, <a className="text-magenta underline" href="https://pixabay.com/videos/search/space/">video 3</a>   Destinations video</li>
    <li>Optimized-spacex--p-KCm6xB9I-unsplash.jpg Photo by <a className="text-magenta underline" href="https://unsplash.com/@spacex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">SpaceX</a> on <a className="text-magenta underline" href="https://unsplash.com/photos/-p-KCm6xB9I?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li>https://unsplash.com/photos/ORQiesQvZvg Person One</li>
    <li>https://unsplash.com/photos/ZjAHXxPuY70 Person Two</li>
    <li>https://unsplash.com/photos/tk7rYB-0wVI Person Three</li>
    <li>https://unsplash.com/photos/iFgRcqHznqg Person Four</li>
    <li>https://unsplash.com/photos/d2MSDujJl2g Person Five</li>
    <li>https://unsplash.com/photos/IF9TK5Uy-KI Person Six</li>
    <li>https://unsplash.com/photos/gMsnXqILjp4 About Us Header</li>
    <li>https://unsplash.com/photos/YwSf1o8s79c Founding Image</li>
    <li>https://unsplash.com/photos/WV7ZMt3RjsQ Rocket Image</li>
    <li>https://unsplash.com/photos/osAeymdDVyk Checkout Rocket</li>
    <li>https://unsplash.com/photos/asuyh-_ZX54 Space Image</li>
    <li>https://unsplash.com/photos/yZygONrUBe8 Orbit Image</li>
    <li>https://unsplash.com/photos/pE8WW245aik Moon Image</li>
    <h2 className="text-2xl my-2">All resources below from NASA image gallery</h2>
    <li>https://images.nasa.gov/details/s84-36901 s84-36901~medium.jpg NASA diving training video</li>
    <li>https://images.nasa.gov/details/KSC-20200302-PH-KLS01_0011 KSC-20200302-PH-KLS01_0011~medium.jpg NASA safety training video</li>
    <li>https://images.nasa.gov/details/jsc2022e045238 jsc2022e045238~medium.jpg NASA person in suit looking to the right</li>
    <li>https://images.nasa.gov/details/KSC-20200924-PH-SPX01_0008 KSC-20200924-PH-SPX01_0008~medium.jpg Two people in suits looking at each other</li>
    <li>SSC-20081001-S01788H~small.jpg https://images.nasa.gov/details/SSC-20081001-S01788H NASA engine image</li>
    <li>https://images.nasa.gov/details/201304210007HQ 201304210007HQ~small.jpg NASA rocket</li>
    <li>Destinations page montage videos sourced from NASA image gallery at https://images.nasa.gov/</li>
    <li>https://images-assets.nasa.gov/image/NHQ202201270018/NHQ202201270018~medium.jpg NASA talking person</li>
    <li>https://images-assets.nasa.gov/image/KSC-20200302-PH-JBS02_0031/KSC-20200302-PH-JBS02_0031~small.jpg Another NASA talking person</li>
    <li>https://images.nasa.gov/details/KSC-2014-2786 NASA training with helicopter</li>
  </ul>
  <h2 className="text-4xl pt-5">Research Credit</h2>
  <ul className="list-disc pl-5">
    <li>Seedhouse, Erik. "space tourism". Encyclopedia Britannica, 13 Oct. 2021, https://www.britannica.com/topic/space-tourism. Accessed 15 December 2022. </li>
    <li>Kamin, Debra. “The Future of Space Tourism Is Now. Well, Not Quite.” The New York Times, 7 May 2022, www.nytimes.com/2022/05/07/travel/space-travel-tourism.html. Accessed 15 Dec. 2022.</li>
    <li>https://www.nasa.gov/press-release/nasa-darpa-will-test-nuclear-engine-for-future-mars-missions (Nuclear powered spacecraft)</li>
    <li>https://www.theverge.com/2022/11/8/23447777/nasa-iss-spacewalk-solar-power-array (technology used in the ISS)</li>
    <li>https://airborne-sys.com/space-recovery/ (recovery systems for various spacecraft)</li>
    <li>https://www.pbs.org/spacestation/station/training_2.htm (training programs for astronauts)</li>
    <li>https://www.airbus.com/en/safety/safety-in-operations/space-safety-in-operations (safety protocols and technology for spacecraft)</li>
    <li>http://claudelafleur.qc.ca/Spacecrafts-master.html (every spacecraft ever launched (pre 2000))</li>
    <li>https://www.rsi.edu/blog/hvacr/hvac-in-space/ (thermal control and comfort in space)</li>
    <li>https://s3.amazonaws.com/craft-prod-assets/documents/2018-Sample-Waiver-and-Release.pdf (sample waiver for inspiration)</li>
  </ul>
  </div>)
  
};

export default Info;