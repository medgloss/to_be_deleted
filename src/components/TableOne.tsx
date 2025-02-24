import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import {
  DataGridPremium,
  GRID_ROW_GROUPING_SINGLE_GROUPING_FIELD,
  GridToolbar,
  useGridApiRef,
} from "@mui/x-data-grid-premium";
import './styles/TableOne.css';

interface formattedData {
  DBA: string;
  Provider: string;
  City: string;
  MaxUp: number;
  MaxDown: number;
  Technology: string;
}

export default function TableOne() {
  const [data, setData] = useState<formattedData[]>([]); // Holds API data
  const [loading, setLoading] = useState(true);
  const apiRef = useGridApiRef(); // Api reference for DataGridPremium
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("🔄 Fetching data...");

        const response = await axios.get(
          "https://quadgenqsocapiv2.azurewebsites.net/api/QsocQueryV3?code=qwest_akhil_HlY48t4NMH_03zdh7ignli1_V6nJ1OlQE2dFIqxpgqCmAzFusuojrg==&qsoc_table=fiber_locator_fcc477_mat_v_api&qsoc_sql=1=1"
        );

        console.log("✅ API Response:", response.data);

        if (!response.data || !Array.isArray(response.data) || response.data.length === 0) {
          console.error("❌ No valid data received from API");
          setLoading(false);
          return;
        }

        // Ensure Data Structure Matches DataGrid Format
        const formattedData = response.data.map((item: any, index: number) => ({
          id: index + 1, // Required for DataGrid
          DBA: item?.qsoc?.data?.DBA || "N/A",
          Provider: item?.qsoc?.data?.Provider || "N/A",
          City: item?.qsoc?.data?.City || "N/A",
          MaxUp: item?.qsoc?.data?.["Max Up"] ? parseFloat(item.qsoc.data["Max Up"]) : 0,
          MaxDown: item?.qsoc?.data?.["Max Down"] ? parseFloat(item.qsoc.data["Max Down"]) : 0,
          Technology: item?.qsoc?.data?.Technology || "N/A",
        }));

        console.log("✅ Formatted Data:", formattedData);
        setData(formattedData);
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Grouping Configuration
  const groupingState = {
    rowGrouping: {
      model: ["DBA"], // Grouping by DBA
    },
    sorting: {
      sortModel: [
        {
          field: GRID_ROW_GROUPING_SINGLE_GROUPING_FIELD,
          sort: "asc" as "asc" | "desc",
        },
      ],
    },
    aggregation: {
      model: {
        MaxUp: "sum", // Aggregating by sum for MaxUp
      },
    },
  };

  return (
    <>
 
    <Box sx={{ height: 320, width: "100%" }}>
      {loading ? (
        <p style={{ textAlign: "center", marginTop: "20px" }}>⏳ Loading data...</p>
      ) : data.length === 0 ? (
        <p style={{ textAlign: "center", margin: "20px", fontSize: "18px" }}>
          ❌ No Data Available
        </p>
      ) : (
        <DataGridPremium
          rows={data}
          columns={[
    
            { field: "DBA", headerName: "DBA", flex: 1 },
            { field: "Provider", headerName: "Provider", flex: 1 },
            { field: "City", headerName: "City", flex: 1 },
            { field: "MaxUp", headerName: "Max Up (Mbps)", flex: 1, type: "number" },
            { field: "MaxDown", headerName: "Max Down (Mbps)", flex: 1, type: "number" },
            { field: "Technology", headerName: "Technology", flex: 1 },
          ]}
          apiRef={apiRef}
          loading={loading}
          disableRowSelectionOnClick
          // No need for useKeepGroupedColumnsHidden
          slots={{ toolbar: GridToolbar }}
        />
      )}
    </Box>
    </>
  );
}
