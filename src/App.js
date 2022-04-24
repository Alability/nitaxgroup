// import logo from './logo.svg';
import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import './App.css';
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import moment from 'moment'


function App() {
  const [setLoading] = useState(false);
  const [climateDetails, setClimateDetails] = useState([]);
  // const params = useParams();
  // const pageNumber = params.pageNumber ? parseInt(params.pageNumber, 10) : 1;

  const getClimateDetails = async () => {
    try {
      axios.get(`https://swapi.dev/api/planets/`, {
        // method: "GET",
        // url: "https://catfact.ninja/fact",
      }).then(
        res => {
          console.log("res", res.data.results);
          if (res.length !== 0 && res !== null) {
              let climDetailsTableData = []
              // eslint-disable-next-line array-callback-return
              res.data.results.map(val => {
                  let row = ["", val.name, val.created, val.climate, val.diameter, val.gravity, val.terrain, val.population];

                  climDetailsTableData.push(row);
              });
              setClimateDetails(climDetailsTableData);

          } else {
              // console.log("Someting went wrong");
          }
      }
      )
      setLoading(true)
    } catch (error) {
      // console.log("error", error);
    }
  }

  useEffect(() => {
    getClimateDetails();
    // eslint-disable-next-line
  }, [])

  const columns = [
    {
      name: 'S/N',
      options: {
          sort: false,
          filter: false,
          customBodyRender: (value, tableMeta) => {
              return <span>{tableMeta.rowIndex + 1}</span>
          }
      }
  },

    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta) => {
          return value === undefined || value === "" ? 'not updated' : value;
      }
      }
    },

    {
      name: "Date",
      label: "Date",
      options: {
          filter: true,
          sort: true,
          customBodyRender: (value, tableMeta) => {
              return value === undefined || value === "" ? 'not updated' : moment(value).format('MMM DD YYYY');
          }
      }
  },

    {
      name: "climate",
      label: "Climate",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta) => {
          return value === undefined || value === "" ? 'not updated' : value;
      }
      }
    },

    {
      name: "diameter",
      label: "Diameter",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta) => {
          return value === undefined || value === "" ? 'not updated' : value;
      }
      }
    },

    {
      name: "gravity",
      label: "Gravity",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta) => {
          return value === undefined || value === "" ? 'not updated' : value;
      }
      }
    },

    {
      name: "terrain",
      label: "Terrain",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta) => {
          return value === undefined || value === "" ? 'not updated' : value;
      }
      }
    },

    {
      name: "population",
      label: "Population",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta) => {
          return value === undefined || value === "" ? 'not updated' : value;
      }
      }
    },
    
  ];

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
    selectableRows: 'none',
    // selectableRowsHeader: false,
    elevation: 3,
  };


  return (
    <div className="App">
      <MUIDataTable
        title={"Current Page 1"}
        data={climateDetails}
        columns={columns}
        options={options}
      />
    </div>
  );
}

export default App;
