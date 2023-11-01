import React, { useState, useEffect } from "react";
import Navbar1 from "./components/Navbar1";
import Navbar2 from "./components/Navbar2";
import Desc from "./components/Desc";
import ListBox from "./components/ListBox";
import ListItem from "./components/ListItem";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";

function App() {
  const [shrinkNavbar, setShrinkNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShrinkNavbar(true);
        console.log("true");
      } else {
        setShrinkNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [shrinkNavbar]);

  return (
    <div className="position-relative">
      {shrinkNavbar && (
        <>
          <ScrollUp />
          <div className="container-fluid py-3 bg-dark">
            <Navbar2 />
          </div>
        </>
      )}

      <div className="container-fluid py-3 bg-dark">
        <Navbar1 />
      </div>

      <div className="container-fluid text-white bg-dark py-3">
        <div className="container">
          <h1 className="fw-semibold">Blogs</h1>
        </div>
      </div>

      <div className="container my-2 py-4">
        <div className="row">
          <div className="col">
            <h1 className="display-4 fw-semibold">Data Analysis: Everything You Need to Know</h1>
          </div>
        </div>
      </div>

      <Desc />

      {/* what is data.... */}
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <div className="text-center mb-4">
              <h2>What is data analysis?</h2>
            </div>
            <div className="additional-text p-4 rounded shadow">
              <p>
                Data analysis is defined as a process of cleaning, transforming, and modeling data to discover useful
                information for business decision-making. The purpose of Data Analysis is to extract useful information
                from data and take the decision based upon the data analysis. The information gathered from the data are
                then presented visually in the form of charts, graphs, or dashboards. The information discovered can
                help aid the company’s or organization’s growth. Decision-makers will be able to come to an actionable
                conclusion and make the right business decisions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ListBox heading={"Types of Data Analysis:"}>
        <ListItem
          heading={"Text Analysis"}
          para={
            "Text Analysis is also referred to as Data Mining. It is one of the methods of data analysis to discover a pattern in large data sets using databases or data mining tools. It used to transform raw data into business information."
          }
        />

        <ListItem
          heading={"Descriptive Analysis"}
          para={
            "The descriptive analysis method is the starting point to any analytic reflection, and it aims to answer the question of what happened? It does this by ordering, manipulating, and interpreting raw data from various sources to turn it into valuable insights for your organisation."
          }
        />

        <ListItem
          heading={"Exploratory Analysis"}
          para={
            "As its name suggests, the main aim of the exploratory analysis is to explore. Prior to it, there was still no notion of the relationship between the data and the variables. Once the data is investigated, the exploratory analysis enables you to find connections and generate hypotheses and solutions for specific problems."
          }
        />
        <ListItem
          heading={"Statistical Analysis"}
          para={
            "Statistical Analysis shows “What happened?” by using past data in the form of dashboards. Statistical Analysis includes collection, Analysis, interpretation, presentation, and modelling of data. It analyses a set of data or a sample of data."
          }
        />
        <ListItem
          heading={"Predictive analysis"}
          para={
            "The predictive method allows you to look into the future to answer the question: what will happen? In order to do this, it uses the results of the previously mentioned descriptive, exploratory, and diagnostic analysis, in addition to machine learning (ML) and artificial intelligence (AI). Like this, you can uncover future trends, potential problems or inefficiencies, connections, and casualties in your data."
          }
        />
        <ListItem
          heading={"Diagnostic Analysis"}
          para={
            "Diagnostic Analysis shows “Why did it happen?” by finding the cause from the insight found in Statistical Analysis. This Analysis is useful to identify behaviour patterns of data. If a new problem arrives in your business process, then you can look into this Analysis to find similar patterns of that problem. And it may have chances to use similar prescriptions for the new problems."
          }
        />
      </ListBox>
      <ListBox
        heading={"Data Analysis Process:"}
        desc={
          "The Data Analysis Process is gathering information by using a proper application or tool which allows you to explore the data and find a pattern in it."
        }
      >
        <ListItem
          heading={"Identify"}
          para={
            "You first need to identify why you need it in the first place. The identification is the stage in which you establish the questions you will need to answer. For example, what is the customer's perception of our brand? Or what type of packaging is more engaging to our potential customers? Once the questions are outlined you are ready for the next step."
          }
        />
        <ListItem
          heading={"Collect"}
          para={
            "This is the stage where you start collecting the needed data. Here, you define which sources of information you will use and how you will use them. The collection of data can come in different forms such as internal or external sources, surveys, interviews, questionnaires, focus groups, among others."
          }
        />
        <ListItem
          heading={"Cleaning"}
          para={
            "Now whatever data is collected may not be useful or irrelevant to your aim of Analysis, hence it should be cleaned. The data which is collected may contain duplicate records, white spaces or errors. The data should be cleaned and error free. This phase must be done before Analysis because based on data cleaning, your output of Analysis will be closer to your expected outcome."
          }
        />
        <ListItem
          heading={"Analysis"}
          para={
            "Once the data is collected, cleaned, and processed, it is ready for Analysis. As you manipulate data, you may find you have the exact information you need, or you might need to collect more data. During this phase, you can use data analysis tools and software which will help you to understand, interpret, and derive conclusions based on the requirements."
          }
        />
        <ListItem
          heading={"Interpretation"}
          para={
            "After analysing your data, it’s finally time to interpret your results. You can choose the way to express or communicate your data analysis either you can use simply in words or maybe a table or chart."
          }
        />
        <ListItem
          heading={"Visualisation"}
          para={
            "Data visualisation is very common in your day to day life; they often appear in the form of charts and graphs. In other words, data shown graphically so that it will be easier for the human brain to understand and process it."
          }
        />
      </ListBox>

      <Footer />
    </div>
  );
}

export default App;
