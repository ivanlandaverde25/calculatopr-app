window.addEventListener('DOMContentLoaded', () => {
    
    let cantidades = [];
    let opcion = [];
    let a = 0;
    let res = 0;
    let valor1 = 0;
    let valor2 = 0;


    // BOTONES NUMERICOS
    const btn1 = document.querySelector('.btn1');
    const btn2 = document.querySelector('.btn2');
    const btn3 = document.querySelector('.btn3');
    const btn4 = document.querySelector('.btn4');
    const btn5 = document.querySelector('.btn5');
    const btn6 = document.querySelector('.btn6');
    const btn7 = document.querySelector('.btn7');
    const btn8 = document.querySelector('.btn8');
    const btn9 = document.querySelector('.btn9');
    const btn0 = document.querySelector('.btn0');

    // BOTON PARA DECIMALES
    const point = document.querySelector('.btn-punto');

    // BOTONES DE OPERACION
    const btnSuma = document.querySelector('.btnSuma');
    const btnResta = document.querySelector('.btnResta');
    const btnMultiply = document.querySelector('.btnMultiply');
    const btnDivision = document.querySelector('.btnDivision');
    const btnReset = document.querySelector('.btn-reset');
    const btnEquals = document.querySelector('.btn-equals');
    const btnDelete = document.querySelector('.btn-del');

    //INPUT DONDE SE MUESTRAN LAS OPERACIONES
    const view = document.querySelector('.calculator-view');

    //INPUTS DE TEMAS
    const theme2 = document.querySelector('.theme2');

    const alerta =  () => {
        Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: 'No puede ingresar un numero mayor a 10 digitos!',
            toast: true,
            position: 'top-end',
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
        });
    }

    const validarCero = ( views ) => {
        views == "0" ? view.value = "" : null;
    }

    const addNummber = ( views, value ) => {
        if ( views.length >= 10 ) {
            alerta();
        } else {
            view.value += JSON.parse( value );
        }
    }

    // EVENTOS DE BOTONES PARA AGREGAR NUMEROS
    btn7.addEventListener('click', () => {
        validarCero( view.value );
        addNummber( view.value, btn7.value );
    });
    
    btn8.addEventListener('click', () => {
        validarCero( view.value );
        addNummber( view.value, btn8.value );
        // if (view.value.length >= 10) {
        //     alerta();
        // } else {
        //     view.value += JSON.parse( btn8.value );
        // }
    });

    //OPERACION DE BOTON PUNTO DECIMAL
    point.addEventListener( 'click', () => {
        view.value += '.';
        const valor = view.value;
        console.log({valor});
    });

    //BOTON PARA ELIMINAR EL ULTIMO VALOR DEL INPUT
    btnDelete.addEventListener( 'click', () => {
        let valorActual = view.value;
        valorActual = valorActual.substring(0, valorActual.length -1);

        valorActual !== '' ? view.value = valorActual : view.value = 0;
    });

    // #BOTONES PARA OPERACIONES
    
    // BOTON SUMA
    btnSuma.addEventListener( 'click', () => {
        cantidades.push( JSON.parse( view.value ) );
        valor2 = JSON.parse( view.value );
        opcion.push('+');
        view.value = "";
        if(opcion.length > 0) {
            if(valor1 !== undefined) {
                res = valor1 + valor2;
                view.value = res;
                valor1 = undefined;
            }else{
                res += valor2;
                view.value = res;
            }
        }

        // NO MUESTRA EL ULTIMO VALOR
        // view.value = "";

        // MUESTRA EL ULTIMO VALOR
        // let indice = cantidades.length - 1;
        // let lastValue = (cantidades[ indice ]);
        // view.value = lastValue;

    });
    
    // BOTON RESTA
    btnResta.addEventListener( 'click', () => {
        cantidades.push( JSON.parse( view.value ) );
        console.log(cantidades);
        opcion.push('-');

        view.value = "";
    });
    
    //BOTON MULTIPLICACION
    btnMultiply.addEventListener( 'click', () => {
        cantidades.push( JSON.parse( view.value ) );
        console.log(cantidades);
        opcion.push('x');

        view.value = "";
    });
    
    // BOTON DIVISION
    btnDivision.addEventListener( 'click', () => {
        cantidades.push( JSON.parse( view.value ) );
        console.log(cantidades);
        opcion.push('/');

        view.value = "";
    })
    
    // BOTON RESET
    btnReset.addEventListener( 'click', () => {
        view.value = 0;
        cantidades.splice(0, cantidades.length);
        opcion.splice(0, opcion.length);
        a = 0;
    });



    // BOTON IGUAL
    btnEquals.addEventListener( 'click', () => {
        
        if (cantidades.length == 0 ) {
            Swal.fire({
                icon: "warning",
                title: "AVISO",
                text: "Debe ingresar valores previamente.",
                timer: 2000,
                timerProgressBar: true,
                showCancelButton: false,
                showCloseButton: false,
                showConfirmButton: false,
                toast: true,
                position: "bottom-start",
            });
        }else{

            // cantidades.push( JSON.parse( view.value ) );

            // valor1 = cantidades[0];
            // valor2 = JSON.parse( view.value );

            // if ( cantidades[0] !== undefined ) {

            //     if (opcion[a] == "+"){
            //         res = valor1 + valor2;
            //         console.log("Esto es una suma")
            //     }else if (opcion[a] == "-"){
            //         res = valor1 - valor2;
            //         console.log("Esto es una resta")
            //     }else if (opcion[a] == "x"){
            //         res = valor1 * valor2;
            //         console.log("Esto es una multiplicacion")
            //     }else if (opcion[a] == "/"){
            //         res = valor1 / valor2;
            //         console.log("Esto es una division")
            //     }
            //     cantidades[0] = undefined;

            // } else {

            //     if (opcion[a] == "+"){
            //         res += valor2;
            //         console.log("Esto es una suma")
            //     }else if (opcion[a] == "-"){
            //         res -= valor2;
            //         console.log("Esto es una resta")
            //     }else if (opcion[a] == "x"){
            //         res *= valor2;
            //         console.log("Esto es una multiplicacion")
            //     }else if (opcion[a] == "/"){
            //         res /= valor2;
            //         console.log("Esto es una division")
            //     }
            // }
            
            // a++;
            calcularRes();
            Math.round(res * 100) / 100;
            view.value = res;
        }
    });

    const calcularRes = () => {
        cantidades.push( JSON.parse( view.value ) );

            valor1 = cantidades[0];
            valor2 = JSON.parse( view.value );

            if ( cantidades[0] !== undefined ) {

                if (opcion[a] == "+"){
                    res = valor1 + valor2;
                    console.log("Esto es una suma")
                }else if (opcion[a] == "-"){
                    res = valor1 - valor2;
                    console.log("Esto es una resta")
                }else if (opcion[a] == "x"){
                    res = valor1 * valor2;
                    console.log("Esto es una multiplicacion")
                }else if (opcion[a] == "/"){
                    res = valor1 / valor2;
                    console.log("Esto es una division")
                }
                cantidades[0] = undefined;

            } else {

                if (opcion[a] == "+"){
                    res += valor2;
                    console.log("Esto es una suma")
                }else if (opcion[a] == "-"){
                    res -= valor2;
                    console.log("Esto es una resta")
                }else if (opcion[a] == "x"){
                    res *= valor2;
                    console.log("Esto es una multiplicacion")
                }else if (opcion[a] == "/"){
                    res /= valor2;
                    console.log("Esto es una division")
                }
            }
            
            a++;
    }


    // theme2.setAttribute('checked', true);

});