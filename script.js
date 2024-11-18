function calcularRiesgo() {
    const edad = parseInt(document.getElementById('edad').value);
    const colesterol = parseInt(document.getElementById('colesterol').value);
    const presion = parseInt(document.getElementById('presion').value);
    const fumador = document.getElementById('fumador').checked;
    const diabetes = document.getElementById('diabetes').checked;
    const enfermedadCorazon = document.getElementById('enfermedad-corazon').checked;
    const enfermedadRenal = document.getElementById('enfermedad-renal').checked;
    const estres = document.getElementById('estres').checked;
    const actividadFisica = parseInt(document.getElementById('actividad-fisica').value);
    const historialFamiliar = document.getElementById('historial-familiar').checked;
    const imc = parseFloat(document.getElementById('imc').value);
    
    let riesgo = 0;

    // Factores de riesgo
    if (edad >= 45) riesgo += 15;
    if (colesterol > 240) riesgo += 25;
    if (presion > 140) riesgo += 20;
    if (fumador) riesgo += 15;
    if (diabetes) riesgo += 10;
    if (enfermedadCorazon) riesgo += 20;
    if (enfermedadRenal) riesgo += 15;
    if (estres) riesgo += 10;
    if (historialFamiliar) riesgo += 10;

    // Factores de protección
    if (actividadFisica >= 3) riesgo -= 10;
    if (imc >= 25) riesgo += 10;

    riesgo = Math.min(Math.max(riesgo, 0), 100);

    Swal.fire({
        title: 'Resultado',
        text: `Tu riesgo de ataque al corazón es de ${riesgo}%`,
        icon: 'info'
    });
}