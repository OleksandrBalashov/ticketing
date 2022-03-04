import axios from "axios";

export default function LandingPage({ currentUser }) {
  console.log(currentUser);
  // axios.get("/api/users/currentuser").catch((err) => {
  //   console.log(err.message);
  // });

  return <h1>Landing Page</h1>;
}

LandingPage.getInitialProps = async () => {
  if (typeof window === "undefined") {
    /*
    we are on the server!
    requests should be made to http://ingress-ingenex....
     */
  } else {
    /*
    we are on the browser!
    requests should be made with a base url of ''
    */
  }
};
