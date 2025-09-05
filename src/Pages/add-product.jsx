import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { data } from "react-router";

// ✅ Validation schema
const schema = yup.object().shape({
  project_name: yup.string().required("Project name is required"),
  project_description: yup.string().required("Description is required"),
  project_progress: yup
    .number()
    .typeError("Progress must be a number")
    .min(0, "Progress cannot be less than 0")
    .max(100, "Progress cannot be more than 100")
    .required("Project progress is required"),
  project_duration: yup
    .number()
    .typeError("Duration must be a number")
    .positive("Duration must be positive")
    .required("Project duration is required"),
  start_date: yup.date().required("Start date is required"),
});

export default function AddProject() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {

    try{
        const { data, error } = await supabase
  .from('countries')
  .insert([data])
  .select()

    }catch(err){
        console.log(err)
    }

    console.log("✅ Form Submitted:", data);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-4">Add Project</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Project Name */}
        <div>
          <label className="block font-medium">Project Name</label>
          <input
            type="text"
            {...register("project_name")}
            className="w-full border rounded p-2"
          />
          <p className="text-red-500 text-sm">{errors.project_name?.message}</p>
        </div>

        {/* Project Description */}
        <div>
          <label className="block font-medium">Project Description</label>
          <textarea
            {...register("project_description")}
            className="w-full border rounded p-2"
          />
          <p className="text-red-500 text-sm">{errors.project_description?.message}</p>
        </div>

        {/* Project Progress */}
        <div>
          <label className="block font-medium">Project Progress (%)</label>
          <input
            type="number"
            {...register("project_progress")}
            className="w-full border rounded p-2"
          />
          <p className="text-red-500 text-sm">{errors.project_progress?.message}</p>
        </div>

        {/* Project Duration */}
        <div>
          <label className="block font-medium">Project Duration (days)</label>
          <input
            type="number"
            {...register("project_duration")}
            className="w-full border rounded p-2"
          />
          <p className="text-red-500 text-sm">{errors.project_duration?.message}</p>
        </div>

        {/* Start Date */}
        <div>
          <label className="block font-medium">Start Date</label>
          <input
            type="date"
            {...register("start_date")}
            className="w-full border rounded p-2"
          />
          <p className="text-red-500 text-sm">{errors.start_date?.message}</p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
