import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const Validation = () => { 









  const onFinish = (values) => {
      console.log(values);
  }
  const onFinishFailed = (errorInfo) => {
         console.log("Failed:", errorInfo);
       };








  const schema = yup.object({
    comment: yup.string().required(),
    Author: yup.string().required().min(2).max(15),
    Rating: yup.number().positive().integer().required(),
  }).required();

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmit =(data)=>{
    // props.updateAction(data)
    console.log(data)
    alert(JSON.stringify(data))
  };


  return (
    <div >

      <form onSubmit={handleSubmit(onSubmit)}>
  <div className="mb-3">
    <label  for="exampleInputEmail1" className="form-label">Rating</label><br></br>
    <select  {...register("Rating")}  style={{width:"400px",height:"40px"}}>
      <option value={"1"}>1</option>
      <option value={"2"}>2</option>
      <option value={"3"}>3</option>
      <option value={"4"}>4</option>
      <option value={"5"}>5</option>
    </select>
  </div>
  <div className="mb-3">



    <label for="exampleInputPassword1" className="form-label">Your Name</label>
    <input     {...register("Author")}  type="text" placeholder={"Your Name"} className="form-control" id="exampleInputPassword1"/>
    <p style={{color:"red"}}>{errors.Author?.message}</p>
  </div>
  <label>Review</label>
  <div className="mb-3">
  <textarea {...register("comment")}  rows="4" cols="50" placeholder={"Write your review"}></textarea> 
  <p style={{color:"red"}}>{errors.comment?.message}</p>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button  type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
  )
}

export default Validation








