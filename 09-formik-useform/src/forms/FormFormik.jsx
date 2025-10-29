import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Forms.css';
import fieldCleaner from '../lib/fieldCleaner';
import { MoonLoader } from 'react-spinners';

const validate = Yup.object({
    firstName: Yup.string()
        .trim()
        .min(2, "2 characters min")
        .max(40, "Max 40 characters")
        .required("Name is required"),
    lastName: Yup.string()
        .trim()
        .min(2, "2 characters min")
        .max(40, "Max 40 characters")
        .required("Last Name is required"),
    email: Yup.string()
        .trim()
        .email("Invalid email format")
        .required("Email is required"),
    message: Yup.string()
        .trim()
        .min(10, "10 characters min")
        .required("Message is required"),
    hasPet: Yup.string()
        .required("Please indicate if you have a pet"),
    pet: Yup.string()
        .when("hasPet", {
            is: 'yes',
            then: () => Yup.string().required("Please select you pet type"),
            otherwise: () => Yup.string().notRequired(),
        })
});

function FormFormik() {
    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                message: "",
                hasPet: "",
                pet: ""
            }}
            validationSchema={validate}
            onSubmit={(values, { setSubmitting }) => {
                // values.firstName = values.firstName.trim().replace(/\s+/g, ' ');
                // values.lastName = values.lastName.trim().replace(/\s+/g, ' ');
                // values.email = values.email.trim().replace(/\s+/g, ' ');
                // values.message = values.message.trim().replace(/\s+/g, ' ');
                fieldCleaner(values);

                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 1500);
            }}>

            {(formik) => (
                <form onSubmit={formik.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='firstName'>
                            First Name
                        </label>
                        <Field id='firstName' type="text" name='firstName' autoComplete="given-name" autoFocus="true"
                            style={{ border: formik.touched.firstName && formik.getFieldMeta('firstName').error ? "1px solid rgba(179, 90, 224, 0.697)" : undefined }} />
                        <ErrorMessage name='firstName' render={msg => <div className='error'>{msg}</div>} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Apellido</label>
                        <Field type="text" id='lastName' name='lastName' autoComplete="family-name"
                            style={{ border: formik.getFieldMeta('lastName').error ? "1px solid rgba(179, 90, 224, 0.697)" : undefined }}
                        />
                        <ErrorMessage name='lastName' render={msg => <div className='error'>{msg}</div>} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field type="email" id='email' name='email' autoComplete="email"
                        />
                        <ErrorMessage name="email" render={msg => <div className='error'>{msg}</div>} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Envíanos tu mensaje</label>
                        <Field id="message" name="message" as="textarea"
                        />
                        <ErrorMessage name="message" render={msg => <div className='error'>{msg}</div>} />
                    </div>

                    <div className="form-group">
                        <div>¿Tienes mascota?</div>
                        <div className='radio'>
                            <label>
                                <span>Sí</span>
                                <Field type="radio" name="hasPet" value="yes" />
                            </label>
                            <label>
                                <span>No</span>
                                <Field type="radio" name="hasPet" value="no" />
                            </label>
                        </div>
                        <ErrorMessage name="hasPet" render={msg => <div className='error'>{msg}</div>} />
                    </div>

                    {formik.values.hasPet === "yes" && (
                        <div className='form-group'>
                            <label htmlFor="pet">Pet Type</label>
                            <Field name="pet" as="select">
                                <option value="">Choose your pet</option>
                                <option value="bird">bird</option>
                                <option value="cat">cat</option>
                                <option value="hamster">hamster</option>
                                <option value="dog">dog</option>
                                <option value="fish">fish</option>
                                <option value="tortoise">tortoise</option>
                            </Field>
                            <ErrorMessage name="pet" render={msg => <div className='error'>{msg}</div>} />

                        </div>
                    )}

                    <button type="submit"
                        disabled={formik.isSubmitting}>{formik.isSubmitting ? <MoonLoader size={16} /> : "Submit"}</button>
                </form>)}

        </Formik>



    );
}
export default FormFormik;