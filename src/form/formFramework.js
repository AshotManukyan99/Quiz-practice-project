export function createControl(config, validation) {
    return {
        ...config,
        validation,
        valid: !validation,
        touched: false,
        type: 'text',
        value: ''
    }
}

export function validate(value, validation = null) {
    if (!validation) {
        return true
    }
    let isValid = true
    if (validation.required) {
        isValid = value.trim() !== '' && isValid
    }
    return isValid
}

export function validateForm(formControls) {
    let isFormValid = true
    for (let control in formControls) {
        if (formControls.hasOwnProperty(control)) {
            const element = formControls
            isFormValid = element.valid && isFormValid

        }
    }
    return isFormValid

}

