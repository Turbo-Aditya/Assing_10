import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import axios from "axios";

function CompanyShowcase() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Fetch company images from the backend
    axios
      .get("http://localhost:20002/user/getImage")
      .then((response) => {
        console.log(response.data); // Check the data structure
        if (Array.isArray(response.data.users)) {
          setCompanies(response.data.users); // Set companies to the users array
        } else {
          console.error("Unexpected data format:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching companies:", error));
  }, []);

  return (
    <div>
      <h1>Company Showcase</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {companies.map((company) => (
          <Card key={company._id} style={{ width: "200px", margin: "10px" }}>
            <img
  src={`http://localhost:20002/${company.images}`}
  alt={`Company ${company._id}`}
  style={{ width: "100%" }}
/>
            
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CompanyShowcase;
