import React, { useEffect, useState } from "react";
import supabase from "../../supaBaseClient";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const ProjectList = () => {
  const [projectList, setProjectList] = useState([]);
  const [errMessage, setErrMessage] = useState();

  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from("projectList")
        .select("*")
        .order("id");

      if (error) {
        setErrMessage(error);
      }

      setProjectList(data);
    } catch (err) {
      setErrMessage(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(projectList)


  return (
  <div>
  
 <h1>Project List</h1> 

 <div className="flex items-center justify-center p-5"> 


  <Table className=" shadow-xl w-4/5 flex flex-col items-center justify-center ">
  <TableHeader className="bg-primary text-white w-3/4 ">
    <TableRow className="flex justify-evenly w-full">
      <TableHead className="">S.N.</TableHead>
      <TableHead>Project Name</TableHead>
      <TableHead>Description</TableHead>
      <TableHead className="">Start Date</TableHead>
            <TableHead className="">Progress</TableHead>


    </TableRow>
  </TableHeader>



  <TableBody className="bg-secondary w-3/4 ">

{
  projectList.length > 0 ? projectList.map((project,index) => (
        <TableRow className="flex justify-evenly flex-wrap w-full">


      <TableCell className="font-medium">{index+1}</TableCell>
      <TableCell>{project.project_name}</TableCell>
      <TableCell>{project.project_description}</TableCell>
      <TableCell className="text-right">{project.start_date}</TableCell>
            <TableCell className="text-right">{project.project_progress}</TableCell>



    </TableRow>
  )) : <div>Project List is not found.</div>
}



    


  </TableBody>



</Table>
  
 </div>
  
  </div>
  )
};

export default ProjectList;
