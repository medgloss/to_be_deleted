import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import Select from 'react-select';

interface FormattedData{
  value:string;
  label:string;
}
export default function Apps() {
  const [selectedOption, setSelectedOption] = useState(null);
  const[states,setstates]=useState<FormattedData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("🔄 Fetching data...");

        const response = await axios.get(
          "https://quadgenqsocapiv2.azurewebsites.net/api/QsocQueryV3?code=qwest_akhil_HlY48t4NMH_03zdh7ignli1_V6nJ1OlQE2dFIqxpgqCmAzFusuojrg==&qsoc_table=bi_funding_sources_v&qsoc_sql=1=1"
        );
        const formattedData: FormattedData[] = response.data.map((item: any, index: number) => ({
           value: item?.qsoc?.data?.["State Name"],
           label: item?.qsoc?.data?.["State Name"]
           
      })).slice(0,20);
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
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      /><>
       <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      /></>
    </div>
  );
}