import { Formik ,Form , Field ,ErrorMessage, FormikHelpers } from "formik"
import { FC, useId } from "react";
import * as Yup from "yup";
import css from "../IdeaForm/IdeaForm.module.css";





export interface Values {
    name: string;
    description?: string;
}

interface IdeaFormProps{
    onAdd:(data:Values)=>void
}

const IdeaForm:FC<IdeaFormProps>=({onAdd})=> {


  const ideaFieldID = useId();
  const descriptionFieldID = useId();
 


  const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  description: Yup.string().min(3, "Too Short!").max(50, "Too Long!"),
  
});
    const initialValues:Values = {
      name: "",
      description: ""
      
};


    
  const handleSubmit = (values:Values, action: FormikHelpers<Values> ) => {
    onAdd(values)
    action.resetForm();
  }
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>

            <Form className={css.list}> 
                <label htmlFor={ideaFieldID} className={css.label}>Name</label>
          <Field type="text" name="name" id={ideaFieldID}  className={css.input}/>
          <ErrorMessage name="name" component="span" className={css.messege}/>

                <label htmlFor={descriptionFieldID} className={css.label}>Description</label>
          <Field type="tell" name="description"  className={css.input}/>
          <ErrorMessage name="description" component="span" className={css.messege}/> 


          <button type="submit" className={css.btn}>Add idea</button>
              
            </Form>
        </Formik>
    )
}


export default IdeaForm