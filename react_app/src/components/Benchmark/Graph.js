import React from 'react';
import { Bar } from 'react-chartjs-2';
import "./Benchmark.css"

const VerticalBar = ({graphData, showLJ, showJobs}) => {
  console.log("I am the graph data on graph", graphData)
    const averageSalary = graphData.average_salary;
    const minimumSalary = graphData.minimum_salary;
    const maximumSalary = graphData.maximum_salary;

    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
    

    const data = {
        labels: ['Minimum Salary', 'Average Salary', 'Maximum Salary'],
        datasets: [
          {
            label: '€ per year',
            data: [minimumSalary, averageSalary, maximumSalary],
            backgroundColor: [
              'rgba(123,186,250,0.5452556022408963)',
              'rgba(231,199,242,0.7833508403361344)',
              'rgba(0,219,209,0.2580847338935574)',
            ],
            borderColor: [
              'rgba(43,146,252,1)',
              'rgba(202,48,255,1)',
              'rgba(0,207,197,1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    

      const Swal = require("sweetalert2");
      const tryAgain = () => {
          setTimeout(() => {
              if (graphData.average_salary == null) {
                  Swal.fire({
                      icon: "warning",
                      title: "Oops...",
                      text: "Unfortunately, we don't have enough data yet for your search. Please try again with another selection!",
                      confirmButtonColor: "#3bbcb0",
                  });
              }
          }, 100);
      };
  
      return (
          <div className="graph-container">
              <div className="header">
                  <h2 className={
                    showLJ
                      ? showJobs
                          ? "graph-title-company"
                          : "graph-title-normal"
                      : "graph-title-talent" 
                }>Average Salary Calculation</h2>
              </div>
              <Bar data={data} options={options} />
              <p align="center" className="mention">
                  ** based on the answers of our survey respondents
              </p>
              {tryAgain()}
          </div>
      );
  };
  

export default VerticalBar;