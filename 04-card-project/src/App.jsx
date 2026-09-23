import Card from "./components/Card";

const App = () => {
  const jobs = [
    {
      brandLogo:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Google_2015_logo.svg",
      company: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$60/hour",
      location: "Mumbai, India",
    },

    {
      brandLogo:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Microsoft_logo.svg",
      company: "Microsoft",
      datePosted: "1 week ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hour",
      location: "Bangalore, India",
    },

    {
      brandLogo:
        "https://imgs.search.brave.com/siHHGkmIuk_-XyHCnFJ5xy74HYTP0NMdaNx1GZP8Rqg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/aWNvbnM4LmNvbS8z/ZC1mbHVlbmN5LzEy/MDAvYW1hem9uLmpw/Zw",
      company: "Amazon",
      datePosted: "3 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hour",
      location: "Hyderabad, India",
    },

    {
      brandLogo:
        "https://imgs.search.brave.com/LY2taOaJ164Exo29kfHpylmKkov2r0ZQx1tBlpuDi_s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/MTM1LzMyMC9zbWFs/bC9tZXRhLXNvY2lh/bC1tZWRpYS1zeW1i/b2wtbG9nby1kZXNp/Z24taWxsdXN0cmF0/aW9uLWZyZWUtdmVj/dG9yLmpwZw",
      company: "Meta",
      datePosted: "2 weeks ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hour",
      location: "Remote",
    },

    {
      brandLogo:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Apple_logo_black.svg",
      company: "Apple",
      datePosted: "10 days ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hour",
      location: "Bangalore, India",
    },

    {
      brandLogo:
        "https://imgs.search.brave.com/qYaD4mpEJfyp2nWC58nXENH75S_uGCPl-3rMLd5vI9M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9uZXRm/bGl4LWxvZ28td2hp/dGUtYmFja2dyb3Vu/ZC1ncmFwaGljLXRl/bXBsYXRlLXZlY3Rv/ci1pbGx1c3RyYXRp/b24tMjE2MTM1NDA2/LmpwZw",
      company: "Netflix",
      datePosted: "4 days ago",
      post: "Frontend Engineer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$70/hour",
      location: "Remote",
    },

    {
      brandLogo:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Microsoft_logo.svg",
      company: "Microsoft",
      datePosted: "3 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$42/hour",
      location: "Pune, India",
    },

    {
      brandLogo:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Google_2015_logo.svg",
      company: "Google",
      datePosted: "6 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$58/hour",
      location: "Gurgaon, India",
    },

    {
      brandLogo:
        "https://imgs.search.brave.com/siHHGkmIuk_-XyHCnFJ5xy74HYTP0NMdaNx1GZP8Rqg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/aWNvbnM4LmNvbS8z/ZC1mbHVlbmN5LzEy/MDAvYW1hem9uLmpw/Zw",
      company: "Amazon",
      datePosted: "1 month ago",
      post: "Software Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$62/hour",
      location: "Chennai, India",
    },

    {
      brandLogo:
        "https://imgs.search.brave.com/LY2taOaJ164Exo29kfHpylmKkov2r0ZQx1tBlpuDi_s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/MTM1LzMyMC9zbWFs/bC9tZXRhLXNvY2lh/bC1tZWRpYS1zeW1i/b2wtbG9nby1kZXNp/Z24taWxsdXN0cmF0/aW9uLWZyZWUtdmVj/dG9yLmpwZw",
      company: "Meta",
      datePosted: "10 weeks ago",
      post: "UI/UX Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hour",
      location: "Remote",
    },
  ];

  console.log(jobs);

  return (
    <div className="parent">
      {jobs.map(function (elem, idx) {
        console.log(idx);
        return (
          <div key={idx}>
            <Card
              logo={elem.brandLogo}
              company={elem.company}
              date={elem.datePosted}
              post={elem.post}
              pay={elem.pay}
              location={elem.location}
              tag1={elem.tag1}
              tag2={elem.tag2}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
