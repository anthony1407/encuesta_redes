const formPoll = document.getElementById('form-poll')
const inputs = document.querySelectorAll('#form-poll input#email,#form-poll input#favorite_social')
const selects = document.querySelectorAll('#form-poll select')

const email = document.getElementById('email')
const age = document.getElementById('age')
const gender = document.getElementById('age')
const favorite_social = document.getElementById('favorite_social')
const time_day_facebook = document.getElementById('time_day_facebook')
const time_day_whatsapp = document.getElementById('time_day_whatsapp')
const time_day_twitter = document.getElementById('time_day_twitter')
const time_day_instagram = document.getElementById('time_day_instagram')
const time_day_tiktok = document.getElementById('time_day_tiktok')

const emailError = document.getElementById('input-error-email')
const socialError = document.getElementById('input-error-social')
const ageError = document.getElementById('input-error-age')
const genderError = document.getElementById('input-error-gender')
const facebookError = document.getElementById('input-error-facebook')
const whatsappError = document.getElementById('input-error-whatssapp')
const twitterError = document.getElementById('input-error-twitter')
const instagramError = document.getElementById('input-error-instagram')
const tiktokError = document.getElementById('input-error-tiktok')

const expresiones = {
    email: /^[a-zA-z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    favorite_social: /^(\w+[a-zA-ZÁ-ý\s]+){0,40}$/, // Letras y espacios, pueden llevar acentos
}
const campos = {
    email: false,
    favorite_social: false
}
const validarEncuestaInput = e => {
    switch (e.target.name) {
        case "email":
            validarCamposInput(expresiones.email, e.target, 'email', emailError)
            break;
        case "favorite_social":
            validarCamposInput(expresiones.favorite_social, e.target, 'favorite_social', socialError)
            break;
    }
}
const validarEncuestaSelect = e => {
    switch (e.target.name) {
        case "age":
            validarCamposSelect(e.target, 'age', ageError)
            break;
        case "gender":
            validarCamposSelect(e.target, 'gender', genderError)
            break;
        case "time_day_facebook":
            validarCamposSelect(e.target, 'social-facebook', facebookError)
            break;
        case "time_day_whatsapp":
            validarCamposSelect(e.target, 'social-whatsapp', whatsappError)
            break;
        case "time_day_twitter":
            validarCamposSelect(e.target, 'social-twitter', twitterError)
            break;
        case "time_day_instagram":
            validarCamposSelect(e.target, 'social-instagram', instagramError)
            break;
        case "time_day_tiktok":
            validarCamposSelect(e.target, 'social-tiktok', tiktokError)
            break;

    }
}
const validarCamposSelect = (e, id, idError) => {
    const target = e.value
    if (target == 0) {
        let idSelect = document.getElementById(`grupo-${id}`)
        idSelect.classList.add('formulario-incorrecto')
        idSelect.classList.remove('formulario-correcto')
        idError.classList.add('input-error-activo')
    } else {
        let idSelect = document.getElementById(`grupo-${id}`)
        idSelect.classList.remove('formulario-incorrecto')
        idSelect.classList.add('formulario-correcto')
        idSelect.classList.add('formulario-correcto')
        idError.classList.remove('input-error-activo')
    }
}

const validarCamposInput = (expresion, input, campo, idError) => {
    if (expresion.test(input.value)) {
        let id = document.getElementById(`grupo-${campo}`)
        id.classList.remove('formulario-incorrecto')
        id.classList.add('formulario-correcto')
        idError.classList.remove('input-error-activo')
        campos[campo] = true
    } else {
        let id = document.getElementById(`grupo-${campo}`)
        id.classList.add('formulario-incorrecto')
        idError.classList.add('input-error-activo')
        campos[campo] = false
    }

}
const selectError = (id, idError, inputError) => {
    if (id.value == 0) {
        let t = document.getElementById(`grupo-${idError}`)
        t.classList.add('formulario-incorrecto')
        t.classList.remove('formulario-correcto')
        inputError.classList.add('input-error-activo')
    }
}
const inputError = (idError, inputError) => {
    let t = document.getElementById(`grupo-${idError}`)
    t.classList.add('formulario-incorrecto')
    t.classList.remove('formulario-correcto')
    inputError.classList.add('input-error-activo')
    campos[idError] = false
}

inputs.forEach(input => {
    input.addEventListener('keyup', validarEncuestaInput)
    input.addEventListener('blur', validarEncuestaInput)
})

selects.forEach(select => {
    select.addEventListener('change', validarEncuestaSelect)
})

formPoll.addEventListener('submit', e => {
    if (campos.favorite_social && campos.email && age.value != 0 && gender.value != 0 && time_day_facebook != 0 && time_day_whatsapp.value != 0 && time_day_twitter.value != 0 && time_day_instagram.value != 0 && time_day_tiktok.value != 0) {
        const formSucceful = document.querySelector('.form-succeful')
        formSucceful.classList.add('form-succeful-activo')
        setTimeout(() => {
            formSucceful.classList.remove('form-succeful-activo')
        }, 5000)
    } else {
        e.preventDefault()
        inputs.forEach(input => {
            if (input.value == '' || input.value == ' ') {
                switch (input.name) {
                    case 'email':
                        inputError('email', emailError)
                        break;
                    case 'favorite_social':
                        inputError('favorite_social', socialError)
                        break;
                }
            }
        })
        selects.forEach(select => {
            switch (select.name) {
                case "age":
                    selectError(age, 'age', ageError)
                    break;
                case "gender":
                    selectError(gender, 'gender', genderError)
                    break;
                case "time_day_facebook":
                    selectError(time_day_facebook, 'social-facebook', facebookError)
                    break;
                case "time_day_whatsapp":
                    selectError(time_day_whatsapp, 'social-whatsapp', whatsappError)
                    break;
                case "time_day_twitter":
                    selectError(time_day_twitter, 'social-twitter', twitterError)
                    break;
                case "time_day_instagram":
                    selectError(time_day_instagram, 'social-instagram', instagramError)
                    break;
                case "time_day_tiktok":
                    selectError(time_day_tiktok, 'social-tiktok', tiktokError)
            }
        })
    }

})

