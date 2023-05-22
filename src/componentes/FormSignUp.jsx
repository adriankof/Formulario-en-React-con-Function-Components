import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormControl } from '@mui/material/';

function FormSignUp({ handleSubmit }) {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [prom, setProm] = useState(true)
    const [nov, setNov] = useState(false)

    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: "Debe tener al menos 3 caracteres",
        },
        lastName: {
            error: false,
            message: "Debe tener al menos 3 caracteres",
        },
        email: {
            error: false,
            message: "Debe contener el símbolo '@'",
        },
    });

    function validarLongitudMinima(value, fieldName) {
        if (value.length >= 3) {
            return {
                [fieldName]: {
                    error: false,
                    message: "",
                },
            };
        } else {
            return {
                [fieldName]: {
                    error: true,
                    message: "Debe tener al menos 3 caracteres",
                },
            };
        }
    }

    function validarEmail(email) {
        if (email.match(/@/)) {
            return {
                email: {
                    error: false,
                    message: "",
                },
            };
        } else {
            return {
                email: {
                    error: true,
                    message: "Debe contener el símbolo '@'",
                },
            };
        }
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                handleSubmit({
                    name,
                    lastName,
                    email,
                    prom,
                    nov,
                })
            }}
        >
            <TextField
                id="name"
                label="Nombre"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) =>
                    setName(e.target.value)
                }
                value={name}
                error={errors.name.error}
                helperText={errors.name.error ? errors.name.message : ""}
                onBlur={(e) => {
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        ...validarLongitudMinima(e.target.value, "name"),
                    }));
                }}
            />
            <TextField
                id="lastName"
                label="Apellidos"
                variant="outlined"
                fullWidth
                margin="normal"
                value={lastName}
                onChange={(e) =>
                    setLastName(e.target.value)
                }
                error={errors.lastName.error}
                helperText={errors.lastName.error ? errors.lastName.message : ""}
                onBlur={(e) => {
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        ...validarLongitudMinima(e.target.value, "lastName"),
                    }));
                }}
            />
            <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) =>
                    setEmail(e.target.value)
                }
                error={errors.email.error}
                helperText={errors.email.error ? errors.email.message : ""}
                onBlur={(e) => {
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        ...validarEmail(e.target.value),
                    }));
                }}
            />
            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={prom}
                            onChange={(e) =>
                                setProm(e.target.checked)
                            }
                        />
                    }
                    label="Promociones"
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={nov}
                            onChange={(e) =>
                                setNov(e.target.checked)
                            }
                        />
                    }
                    label="Novedades"
                />
            </FormGroup>

            <Button variant="contained" type="submit">
                Registrarse
            </Button>
        </form>
    )
}

export default FormSignUp