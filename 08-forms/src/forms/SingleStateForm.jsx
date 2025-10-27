import { useState } from "react";
function SingleStateForm() {
    const blankCustomer = {
        name: "",
        lastName: "",
        email: "",
        address: "",
        city: "",
        phone: ""
    };

    const [customer, setCustomer] = useState(blankCustomer);

    const handleChange = (e) => {
        setCustomer(prev => ({ ...prev, [e.target.name]: e.target.value }));
        console.log(customer);


    };
    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <>
            <form onSubmit={handleSubmit}>

                <div className="field-group">
                    <input
                        placeholder="first name..."
                        name="name"
                        onChange={handleChange}
                        minLength={5}
                        maxLength={20}
                        required
                    />
                </div>
                <div className="field-group">
                    <input
                        placeholder="last name..."
                        name="lastName"
                        onChange={handleChange}

                    />
                </div>
                <div className="field-group">
                    <input
                        type="email"
                        placeholder="email..."
                        name="email"
                        onChange={handleChange}
                        title="Escriba un email válido."
                        pattern="^[\w.\-]+@([\w\-]+\.)+[\w\-]{2,}$"
                        required
                    />
                </div>
                <div className="field-group">
                    <input
                        placeholder="address..."
                        name="address"
                        onChange={handleChange}
                    />
                </div>
                <div className="field-group">

                    <input placeholder="city..." name="city" onChange={handleChange} />
                </div>
                <div className="field-group">

                    <input placeholder="phone..." name="phone" onChange={handleChange} />
                </div>
                <input type="submit" />

            </form>
            <article>
                <p>First Name: {customer.name}</p>
                <p>Last Name: {customer.lastName}</p>
            </article>
        </>
    );
}
export default SingleStateForm;