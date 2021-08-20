import React, { useEffect, useState } from "react";
import Weather from "./components/weather";
import {
  Button,
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
import moment from "moment";
import logo from "./components/logos/logo-web.png";
import search_img from "./components/logos/icon_search.png";
import "./components/styles.css";
import { Route, useHistory } from "react-router-dom";
function App() {
  const [lati, setLati] = useState("35");
  const [long, setLong] = useState("139");
  const [data, setData] = useState([]);
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLati(position.coords.latitude); //set longitude and latitude
        setLong(position.coords.longitude);
      });
      //fetch live location
      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lati}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?q=${search}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setCity(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lati, long, search]);
  // const validcity = () => {
  //   console.log("hello");
  // };

  return (
    <div className="App">
      <div className="background">
        <>
          <Navbar expand="lg" className="header_navbar">
            <Container>
              <Navbar.Brand href="#home">
                {" "}
                <img className="logo-web" src={logo} alt="lgo"></img>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    id="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                    onChange={(event) => {
                      setSearch(event.target.value);
                    }}
                  />
                  <Button variant="outline-success">
                    <img className="search" src={search_img} alt="my" />
                  </Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Navbar variant="light">
            <Container className="container">
              <Nav className="me-auto">
                <Nav.Link href="#">HOME</Nav.Link>
                <Nav.Link href="#features">FAVORITES</Nav.Link>
                <Nav.Link href="./components/Recent.js">RECENT</Nav.Link>

                <div className="time">
                  <p className="time_para">
                    {" "}
                    {moment().format("MMMM Do YYYY, h:mm:ss a")}
                  </p>
                </div>
              </Nav>
            </Container>
          </Navbar>
          <hr className="line"></hr>
          {/* {(typeof data.main != 'undefined') ? 
     <Weather weatherData={data}/>
   
      : (
        <div> </div>
      )} */}

          {typeof city.main != "undefined" ? (
            <Weather weatherData={city} />
          ) : typeof data.main != "undefined" ? (
            <Weather weatherData={data}></Weather>
          ) : (
            <div></div>
          )}
        </>
      </div>
    </div>
  );
}

export default App;
