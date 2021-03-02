use ventas;
/* ELiminar las tabla tb1 tb2*/
DROP TABLE tb1;
DROP TABLE tb2;
/* A contnuación se crea un tabla  con restricciones NOT NULL.
   La restriccion NOT NULL se utiliza para forzar durante la inserción de datos 
   a no dejar una columna deterninada vacio es decir NULL. por defecto toda columna 
   tiene una restricción NULL, es decir que permite dejar vacia esta columna.
 */
CREATE TABLE producto(
	cod_Proct  	char(5) NOT NULL, /* Con la restricción NOT NULL la base de datos 
                                    forza al usuario a propocionar un valor para esta columna  */
    nombre		varchar(50) NOT NULL, /*Otro campo necesario para introducir una nueva fila en la tabla*/
    precio 		double(12,2) /*esta columna puede no proporcionar un valor*/
);
DESCRIBE producto;
/*introducir un registro en la tabla Producto*/
INsert INTO producto value(null, 'DELL', null); /*Al Intertar introducir este registro muestra un erro  debido a que no se ha especificado valor para la columna cod_proct*/
INSERT INTO producto value('P0001', 'DELL', null); /*a diferencia que la sentencias anterior no muestra erro ya que esta instruccción proporciona registro para la columna cod_proct*/

CREATE TABLE proveedor(
	idProveedor 	int UNIQUE, /*Las restricion UNIQUE permite tener valores null*/
    nomb_Provee  	VARCHAR(60) NOT NULL,
    direccion 		text
);
INSERT INTO proveedor value(1, 'DELL', null);
INSERT INTO proveedor value(1, 'DELL', null);      /*no introduce a la tabla*/

DROP TABLE producto; 

CREATE TABLE producto(
	cod_Proct  	char(5) PRIMARY KEY, /*no permite valores vacion y solo puede existir un llave primaria en una tabla*/
    nombre		varchar(50) UNIQUE,
    precio 		double(12,2) NULL
);
DESCRIBE producto;
/*AGREGAR UN RESTRICCION DE VALOR POR DEFECTO A LA COLUMNA PRECION 
DE LA TABLA PRODUCTO*/
ALTER TABLE producto
    CHANGE precio precio DOUBLE(12,2) DEFAULT 0.0;

ALTER TABLE producto 
	ADD UNIQUE KEY (nombre);

DROP TABLE producto;

CREATE TABLE producto(
	cod_Proct  	char(5) PRIMARY KEY,
    nombre		varchar(50) NOT NULL,
    precio 		double(12,2) NULL
);



