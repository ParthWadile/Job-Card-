
import "./App.css";
import Card from "./Components/Card";

function App() {

  const jobOpenings = [
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjwEcKsiks6o93DUI1no4yX7u4xTf8TjTioA&s",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 45, 
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Software Development Engineer (SDE I)",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 42,
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://www.freeiconspng.com/uploads/apple-icon-4.png",
      companyName: "Apple",
      datePosted: "10 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 55,
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://www.citypng.com/public/uploads/preview/facebook-meta-logo-icon-hd-png-701751694777703xqxtpvbu9q.png",
      companyName: "Meta",
      datePosted: "3 weeks ago",
      post: "React Developer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: 65,
      location: "Remote, India"
    },
    {
      brandLogo: "https://image.similarpng.com/file/similarpng/very-thumbnail/2021/01/Netflix-logo-on-transparent-background-PNG.png",
      companyName: "Netflix",
      datePosted: "1 week ago",
      post: "Backend Engineer (Node.js)",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 70,
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://toppng.com/uploads/preview/microsoft-logo-png-hd-11660471230b6nd5n6huh.png",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Engineer (Azure)",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 50,
      location: "Pune, India"
    },
    {
      brandLogo: "https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Logomark-Black-Logo.wine.svg",
      companyName: "Tesla",
      datePosted: "2 months ago",
      post: "Software Engineer (Autopilot)",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 75,
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6t1Dx5jPtbvwf7plxNc4W1z5R6yqEqjGeg&s",
      companyName: "NVIDIA",
      datePosted: "10 weeks ago",
      post: "AI/ML Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 80,
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://p7.hiclipart.com/preview/389/533/243/ibm-logo-ibm-logo-png.jpg",
      companyName: "IBM",
      datePosted: "6 days ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 48,
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://toppng.com/uploads/preview/oracle-logo-115360039232wypouqbv7.png",
      companyName: "Oracle",
      datePosted: "3 days ago",
      post: "Java Backend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 40,
      location: "Chennai, India"
    }
  ];
  // console.log(jobOpenings);


  return (
    <div className="parent">

      {jobOpenings.map(function (elem) {
        return <Card company={elem.companyName}
        postdate={elem.datePosted} logo={elem.brandLogo} post={elem.post} tag={elem.tag1} tagg={elem.tag2}
        paay={elem.pay} loc={elem.location}/>

      })}
     

      {/* <div className="card">
        <div className="top">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaJjIF7RrBgwQ-ilH-aLc50VcVs2fO6HeW4Q&s" />
          <button>
            Save <Bookmark size={16} />
          </button>
        </div>

        <div className="center">
          <h3>
            Amazon <span>5 days ago</span>
          </h3>

          <h2>Senior UI/UX Designer</h2>

          <div>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <p>Nashik, India</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div> */}
    </div>

  );
}

export default App;
