import { useRef } from "react";
import { useForm } from "react-hook-form";
import './Forms.css';
const provinces = [
    "Buenos Aires",
    "Catamarca",
    "Chaco",
    "Chubut",
    "Córdoba",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Río Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santa Fe",
    "Santiago del Estero",
    "Tierra del Fuego",
    "Tucumán",
];
function FormUseForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
        getFieldState,
        reset
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            dob: "",
            password: "",
            confirmPassword: "",
            country: "",
            province: "",
            file: "",
            acceptTerms: false
        }
    });
    const password = useRef(null);
    password.current = watch("password", "");

    const onSubmit = handleSubmit((data) => {
        alert(JSON.stringify(data, null, 4));
        // reset({
        //     name: "",
        //     email: "",
        //     dob: "",
        //     password: "",
        //     confirmPassword: "",
        //     country: "",
        //     province: "",
        //     file: "",
        //     acceptTerms: false
        // });
        reset();
    });
    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name"
                    {...register("name", {
                        required: {
                            value: true,
                            message: "Name is required"
                        },
                        maxLength: {
                            value: 40,
                            message: "Máximo 40, no seas ñoño"
                        },
                        minLength: {
                            value: 2,
                            message: "Mínimo 2 caracteres"
                        }
                    })}
                />
                {errors.name && <div className="error">{errors.name?.message}</div>}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="email"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Email is required"
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                            message: "Correo no válido"
                        }
                    })}
                />
                {errors.email && <div className="error">{errors.email?.message}</div>}
            </div>

            <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob"
                    {...register("dob", {
                        required: {
                            value: true,
                            message: "DOB is required"
                        },
                        validate: (value) => {
                            const dob = new Date(value);
                            const today = new Date();
                            const age = today.getFullYear() - dob.getFullYear();
                            return age >= 18 || "Must be over 18";
                        },

                    })}
                />
                {errors.dob && <div className="error">{errors.dob?.message}</div>}
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: "Password is required"
                        },
                        minLength: {
                            value: 6,
                            message: "Password length of 6 characters minimum"
                        }
                    })}
                />
                {errors.password && <div className="error">{errors.password?.message}</div>}
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Re enter password</label>
                <input type="password" id="confirmPassword"
                    {...register("confirmPassword", {
                        validate: (value) => value === password.current || "Passwords must match"
                    })}
                />
                {errors.confirmPassword && <div className="error">{errors.confirmPassword?.message}</div>}
            </div>

            <div className="form-group">
                <label htmlFor="country">Country</label>
                <select id="country"
                    {...register("country", {
                        required: {
                            value: true,
                            message: "Must pick a country from the list"
                        }
                    })}>
                    <option value="">Pick one</option>
                    <option value="mx">Mexico</option>
                    <option value="co">Colombia</option>
                    <option value="ch">Chile</option>
                    <option value="ar">Argentina</option>
                </select>
                {errors.country && <div className="error">{errors.country?.message}</div>}
            </div>

            {watch("country") === 'ar' && (
                <div className="form-group">
                    <input type="text" placeholder="Argentine province..." list="provinces"
                        {...register("province", {
                            required: {
                                value: true,
                                message: "Must pick a province from the list"
                            }
                        })}
                    />
                    <datalist id="provinces">
                        {provinces.map((p, idx) => (
                            <option key={idx} value={p} />
                        )

                        )}

                    </datalist>

                    {errors.province && <div className="error">{errors.province?.message}</div>}

                </div>
            )
            }


            <button type="submit">Send</button>

        </form >
    );
}
export default FormUseForm;