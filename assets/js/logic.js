document.write('<p>ESTADISTICAS CENTRO MEDICO ÑUÑOA</p>');

var radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

var traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

var dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];

//Agregar código para el desafio 2 aquí
document.write("--------------------------------------------------------------"+ "<br>" + "<br>");

//Punto 1
traumatologia.push(
    {hora: '9:00',  especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA',     rut: '13123329-7', prevision: 'ISAPRE'},
    {hora: '9:30',  especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE',     rut: '12221451-K', prevision: 'FONASA'},
    {hora: '10:00',  especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA',     rut: '10112348-3', prevision: 'ISAPRE'},
    {hora: '10:30',  especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA',     rut: '13453234-1', prevision: 'ISAPRE'},
    {hora: '12:00',  especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE',     rut: '14345656-6', prevision: 'FONASA'}
);


//Punto 2
radiologia.shift();
radiologia.pop();

//Punto 3
document.write("CONSULTAS MEDICAS DENTAL" + "<br>" + "<br>");

for (var i = 0; i < dental.length; i++) {
    var consDental = dental[i];
    document.write(consDental.hora + " - " + consDental.especialista + " - " + consDental.paciente + " - " + consDental.rut + " - " + consDental.prevision + "<br>" + "<br>");
}
//
document.write("--------------------------------------------------------------"+ "<br>" + "<br>");

//Punto 4

document.write("PACIENTES ATENDIDOS EN EL CENTRO MEDICO" + "<br>" + "<br>");

for(var i = 0; i < radiologia.length; i++){
    var PacRadio = radiologia[i];
    document.write(PacRadio.paciente + "<br>");
}
for(var i = 0; i < traumatologia.length; i++){
    var PacTraum = traumatologia[i];
    document.write(PacTraum.paciente + "<br>");
}
for(var i = 0; i < dental.length; i++){
    var PacDen = dental[i];
    document.write(PacDen.paciente + "<br>");
}
//
document.write("--------------------------------------------------------------"+ "<br>" + "<br>");

//  Punto 5
document.write("PACIENTES ISAPRE" + "<br>" + "<br>");

var pacientesIsapre = dental.filter(function(PacISAPRE) {
    return PacISAPRE.prevision === 'ISAPRE';
});
pacientesIsapre.forEach(function(PacISAPRE) {
    document.write(PacISAPRE.paciente + " - " + PacISAPRE.prevision + "<br>");
});
//
document.write("--------------------------------------------------------------"+ "<br>" + "<br>");

//Punto 6

document.write("PACIENTES FONASA" + "<br>" + "<br>");

var pacientesFonasa = traumatologia.filter(function(PacFONASA) {
    return PacFONASA.prevision === 'FONASA';
});
pacientesFonasa.forEach(function(PacFONASA) {
    document.write(PacFONASA.paciente + " - " + PacFONASA.prevision + "<br>");
});
//
document.write("--------------------------------------------------------------"+ "<br>" + "<br>");

//Agregar código para el desafio 2 aquí

document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


document.write(`<p>Primera atencion RADIOLOGIA: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención RADIOLOGIA: ${radiologia[radiologia.length -1].paciente} - ${radiologia[radiologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion TRAUMATOLOGIA: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención TRAUMATOLOGIA: ${traumatologia[traumatologia.length -1].paciente} - ${traumatologia[traumatologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion DENTAL: ${dental[0].paciente} - ${dental[0].prevision} | Última atención DENTAL: ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</p>`);
