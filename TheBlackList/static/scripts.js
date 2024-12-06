// Validación básica para formularios
document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            const inputs = form.querySelectorAll('input[required]');
            let valid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    alert(`El campo "${input.placeholder}" es obligatorio.`);
                    valid = false;
                    e.preventDefault();
                }
            });

            if (!valid) {
                e.preventDefault();
            }
        });
    });
});
