import { useFormik } from "formik";
import "./commentform.css"

export default function CommentForm({addcomment}) {
    const formik = useFormik({
        initialValues: {
            name: "",
            remarks: "",
            rating: 5
        },
        validate: values => {
            const errors = {};
            
            // Check if name is empty or only whitespace
            if (!values.name || values.name.trim() === '') {
                errors.name = 'Username is required';
            }
            
            // Optional: validate other fields
            if (!values.remarks || values.remarks.trim() === '') {
                errors.remarks = 'Remarks are required';
            }
            
            return errors;
        },
        onSubmit: (values, { resetForm }) => {
            // Only submit if validation passes
            console.log(values);
            addcomment(values);
            resetForm();
        }
    });

    return (
        <>
        <h4>Add a Comment!</h4>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Username : </label>
            <input 
                placeholder="username" 
                type="text" 
                id="name"
                name="name"
                value={formik.values.name} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
                <div className="error">{formik.errors.name}</div>
            ) : null}
            <br></br><br></br>

            <label htmlFor="remarks">remarks : </label>
            <textarea 
                placeholder="remarks" 
                id="remarks"
                name="remarks"
                value={formik.values.remarks} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            ></textarea>
            {formik.touched.remarks && formik.errors.remarks ? (
                <div className="error">{formik.errors.remarks}</div>
            ) : null}
            <br></br><br></br>

            <label htmlFor="rating">rating : </label>
            <input 
                placeholder="rating" 
                type="number" 
                min={1} 
                max={5} 
                id="rating"
                name="rating"
                value={formik.values.rating}  
                onChange={formik.handleChange}
            />
            <br></br><br></br>

            <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>
                submit
            </button>
        </form>
        </>
    );
}
