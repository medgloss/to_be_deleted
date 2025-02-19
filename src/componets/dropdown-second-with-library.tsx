import axios from "axios";
import React, { useEffect, useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
interface FormattedData{
  value:string;
}
export default function DropdownComponnet() {
  const[states,setstates]=useState<FormattedData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("🔄 Fetching data...");

        const response = await axios.get(
          "https://quadgenqsocapiv2.azurewebsites.net/api/QsocQueryV3?code=qwest_akhil_HlY48t4NMH_03zdh7ignli1_V6nJ1OlQE2dFIqxpgqCmAzFusuojrg==&qsoc_table=bi_funding_sources_v&qsoc_sql=1=1"
        );
        const formattedData: FormattedData[] = response.data.map((item: any, index: number) => (
            item?.qsoc?.data?.["State Name"]
           
        )).slice(0,20);
        console.log("✅ Formatted Data:", formattedData);
        setstates(formattedData);
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      } 
    };
    fetchData();
  }, []);
  console.log("ye state hai",states)
  const options = states
  return (
    <>
      <Dropdown options={options}  placeholder="Select an option" />;
    </>
  );
}
