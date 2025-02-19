import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid,} from '@mui/x-data-grid';
import axios from "axios";
import {
  DataGridPremium,
  GRID_ROW_GROUPING_SINGLE_GROUPING_FIELD,
  GridToolbar,
  useGridApiRef,
} from "@mui/x-data-grid-premium";

interface formattedData {
  id: number;
  stateName: string;
  fundingSource: string;
  proposedFunding: number;
  allocatedFunding: number;
  }

export default function DataGridPremiumDemos() {
  const [data, setData] = useState<formattedData[]>([]); // Holds API data
  const [loading, setLoading] = useState(true);
  const apiRef = useGridApiRef(); // Api reference for DataGridPremium
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("🔄 Fetching data...");

        const response = await axios.get(
          "https://quadgenqsocapiv2.azurewebsites.net/api/QsocQueryV3?code=qwest_akhil_HlY48t4NMH_03zdh7ignli1_V6nJ1OlQE2dFIqxpgqCmAzFusuojrg==&qsoc_table=bi_funding_sources_v&qsoc_sql=1=1"
        );

        console.log("✅ API Response:", response.data);

        if (!response.data || !Array.isArray(response.data) || response.data.length === 0) {
          console.error("❌ No valid data received from API");
          setLoading(false);
          return;
        }

        // Ensure Data Structure Matches DataGrid Format
        // ✅ Assigning ID in sequential order (1,2,3...)
        const formattedData: formattedData[] = response.data.map((item: any, index: number) => ({
            id: index + 1,
            stateName: item?.qsoc?.data?.["State Name"] || "N/A", // Capitalized "State Name"
            fundingSource: item?.qsoc?.data?.["Funding Source"] || "Unknown", // Capitalized "Funding Source"
            proposedFunding: item?.qsoc?.data?.["Proposed Funding"] 
                ? parseFloat(item.qsoc.data["Proposed Funding"]) 
                : 0,
            allocatedFunding: item?.qsoc?.data?.["Allocated Funding"] 
                ? parseFloat(item.qsoc.data["Allocated Funding"]) 
                : 0,
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
      model: ["StateName"], // Grouping by State Name
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
        proposedFunding: "sum", // Aggregating by sum for Proposed Funding
      },
    },
  };

  return (
    <Box sx={{ height: 520, width: "120%" }}>
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
            {
                field: "id", // ✅ Use lowercase "id"
                headerName: "ID",
                width: 80, // ✅ Fixed size for ID column
                type: "number",
              },  
            {field: "stateName", headerName: "State Name", flex: 1 },
            {field: "fundingSource", headerName: "Funding Source", flex: 1 },
            {field: "proposedFunding", headerName: "Proposed Funding (Mbps)", flex: 1, type: "number" },
            {field: "allocatedFunding", headerName: "Allocated Funding (Mbps)", flex: 1, type: "number" },
          ]}
          apiRef={apiRef}
          loading={loading}
          checkboxSelection // ✅ Enables row selection checkboxes
          disableRowSelectionOnClick
          // No need for useKeepGroupedColumnsHidden
          sx={{
            "& .MuiCheckbox-root": {
              padding: "4px", // ✅ Reduces checkbox padding for smaller checkboxes
              transform: "scale(0.8)", // ✅ Makes checkboxes smaller
            },
          }}
          
          density="compact"
        />
    
      )}
    </Box>
  );
}