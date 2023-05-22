const Info = () => {
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
    <li>Optimized-spacex-uj3hvdfQujI-unsplash.jpg Photo by <a className="text-magenta underline" href="https://unsplash.com/@spacex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">SpaceX</a> on <a className="text-magenta underline" href="https://unsplash.com/s/photos/rocket?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li>Optimized-nicolas-thomas-wKlqqfNTLsI-unsplash.jpg Photo by <a className="text-magenta underline" href="https://unsplash.com/@nicolasthomas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nicolas Thomas</a> on <a className="text-magenta underline" href="https://unsplash.com/s/photos/moon-and-space?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li>Optimized-christina-wocintechchat-com-faEfWCdOKIg-unsplash.jpg Photo by <a className="text-magenta underline" href="https://unsplash.com/@wocintechchat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Christina @ wocintechchat.com</a> on <a className="text-magenta underline" href="https://unsplash.com/photos/faEfWCdOKIg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li>Optimized-nasa-CpHNKNRwXps-unsplash.jpg Photo by <a href="https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NASA</a> on <a href="https://unsplash.com/photos/CpHNKNRwXps?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    </li>
    <li>Optimized-spacex-VBNb52J8Trk-unsplash.jpg Photo by <a href="https://unsplash.com/@spacex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">SpaceX</a> on <a href="https://unsplash.com/images/nature/satellite?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    </li>
    <li>Optimized-nasa-Q1p7bh3SHj8-unsplash.jpg Photo by <a href="https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NASA</a> on <a href="https://unsplash.com/images/nature/earth?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </li>
    <li>https://svs.gsfc.nasa.gov/13537 NASA moon video</li>
    <li>https://images.nasa.gov/details/s84-36901 s84-36901~medium.jpg NASA diving training video</li>
    <li>https://images.nasa.gov/details/KSC-20200302-PH-KLS01_0011 KSC-20200302-PH-KLS01_0011~medium.jpg NASA safety training video</li>
    <li>https://www.pexels.com/search/videos/planets/ https://mixkit.co/free-stock-video/space/?page=2 https://pixabay.com/videos/search/space/ Destinations video</li>
    <li>https://unsplash.com/photos/ORQiesQvZvg Person One</li>
    <li>https://unsplash.com/photos/ZjAHXxPuY70 Person Two</li>
    <li>https://unsplash.com/photos/tk7rYB-0wVI Person Three</li>
    <li>https://unsplash.com/photos/iFgRcqHznqg Person Four</li>
    <li>https://unsplash.com/photos/d2MSDujJl2g Person Five</li>
    <li>https://unsplash.com/photos/IF9TK5Uy-KI Person Six</li>
    <li>https://unsplash.com/photos/gMsnXqILjp4 About Us Header</li>
    <li>https://unsplash.com/photos/YwSf1o8s79c Founding Image</li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  
  <p>https://images.nasa.gov/details/jsc2022e045238 jsc2022e045238~medium.jpg NASA person in suit looking to the right</p>
  <p>https://images.nasa.gov/details/KSC-20200924-PH-SPX01_0008 KSC-20200924-PH-SPX01_0008~medium.jpg Two people in suits looking at each other</p>
  <p>Company logo done in house. Converted to favicons with https://favicon.io/favicon-converter/</p>
  <p>Facebook, Instagram, Twitter, Youtube, TikTok icons from https://icons8.com/</p>
  <p>SSC-20081001-S01788H~small.jpg https://images.nasa.gov/details/SSC-20081001-S01788H NASA engine image</p>
  <p>https://images.nasa.gov/details/201304210007HQ 201304210007HQ~small.jpg NASA rocket</p>
  </div>)
  
};

export default Info;