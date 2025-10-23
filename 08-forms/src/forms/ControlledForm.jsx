import { useState } from "react";
export default function ControlledForm() {
    const [firstName, setFirstName] = useState('');
    const [firstNameTouched, setFirstNameTouched] = useState(false);
    const [lastName, setLastName] = useState('');
    const [lastNameTouched, setLastNameTouched] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!firstName.trim() || !lastName.trim()) return;
        alert(`You are '${firstName} ${lastName}'`);
    };


    return (
        <form onSubmit={handleSubmit}>
            <div className="field-group">
                <label htmlFor="firstName">Nombre</label>
                <input id="firstName" name="firstName" type="text" autoFocus autoComplete="given-name"
                    maxLength={30}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onBlur={() => setFirstNameTouched(true)}
                />
                {
                    (!firstName && firstNameTouched) ?
                        <div className="error">El nombre es obligatorio</div>
                        :
                        (firstName.length < 2 && firstNameTouched) ?
                            <div className="error">Mínimo: 2 caracteres</div>
                            :
                            (firstName.length > 30 && firstNameTouched) &&
                            <div className="error">Máximo: 30 caracteres</div>
                }

            </div>
            <div className="field-group">
                <label htmlFor="lastName">Apellido</label>

                <input id="lastName" name="lastName" type="text" autoComplete="family-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onBlur={() => setLastNameTouched(true)}
                />
                {
                    (!lastName.trim() && lastNameTouched) ?
                        <div className="error">El nombre es obligatorio</div>
                        :
                        (lastName.trim().length < 2 && lastNameTouched) ?
                            <div className="error">Mínimo: 2 caracteres</div>
                            :
                            (lastName.length > 30 && lastNameTouched) &&
                            <div className="error">Máximo: 30 caracteres</div>
                }
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
}
