@echo off
chcp 65001 >nul
color 0B
title LIVE DEMO - FARMABARRIO (BASE DE DATOS II - GRUPO 2)

:MENU
cls
echo ===============================================================================
echo            FARMABARRIO: DEMOSTRACIÓN FUNCIONAL EN VIVO (LIVE DEMO)
echo          Curso: Base de Datos II (Sección 41483) - Mag. José Bustamante
echo          Grupo 2: Maykel Quiñones, Leonardo Wong, Nicole Garcia,
echo                   Jorge Matencio, Dereck Daniel Rojas Pérez
echo ===============================================================================
echo.
echo   [1] PASO 1 (PostgreSQL): Partition Pruning en Venta Particionada (LIST)
echo   [2] PASO 2 (Oracle XE):  Transacción B2B, Partición RANGE y Seguridad RBAC
echo   [3] PASO 3 (MongoDB):    Pipeline de Agregación de Ventas por Distrito
echo   [4] PASO 4 (Cassandra):  Consulta de Serie Temporal de Precios / Demanda O(1)
echo   [5] PASO 5 (Hadoop):     Estructura del Data Lake HDFS y 5 Tablas Externas
echo   [6] PASO 6 (Backups):    Auditoría y Verificación de Restauración Total
echo   [7] EJECUTAR DEMO COMPLETA (Secuencia de 2 Minutos para el Jurado)
echo   [8] SALIR
echo.
echo ===============================================================================
set /p opt="Seleccione una opción [1-8]: "

if "%opt%"=="1" goto PG
if "%opt%"=="2" goto ORA
if "%opt%"=="3" goto MONGO
if "%opt%"=="4" goto CASS
if "%opt%"=="5" goto HDP
if "%opt%"=="6" goto BCK
if "%opt%"=="7" goto ALL
if "%opt%"=="8" exit

:PG
cls
echo ===============================================================================
echo [PASO 1] POSTGRESQL 18: DEMOSTRACIÓN DE PARTITION PRUNING (LIST)
echo ===============================================================================
echo Explicación: Al filtrar por farmacia_id = 101, PostgreSQL descarta las
echo particiones de Lima Este y Lima Sur en tiempo de compilación.
echo.
echo COMANDO A EJECUTAR:
echo EXPLAIN ANALYZE SELECT * FROM fb_frag.venta_particionada WHERE farmacia_id = 101;
echo.
pause
goto MENU

:ORA
cls
echo ===============================================================================
echo [PASO 2] ORACLE DATABASE XE 21C: TRANSACCIÓN B2B Y SEGURIDAD RBAC
echo ===============================================================================
echo Explicación: Ejecución atómica de compra corporativa en partición RANGE
echo y prueba de restricción de seguridad con error ORA-01031.
echo.
echo COMANDO A EJECUTAR:
echo EXEC PKG_COMPRAS_FARMABARRIO.SP_REGISTRAR_ORDEN_COMPRA(501, 12500.00);
echo.
pause
goto MENU

:MONGO
cls
echo ===============================================================================
echo [PASO 3] MONGODB 9.0: AGREGACIÓN ANALÍTICA SOBRE 10,000+ DOCUMENTOS
echo ===============================================================================
echo Explicación: Agregación con $match, $group y $sort con subdocumentos embebidos.
echo.
echo COMANDO A EJECUTAR EN MONGOSH:
echo use farmabarrio_mongo;
echo db.ventas_historicas.aggregate([
echo   { $match: { estado: "COMPLETADA" } },
echo   { $group: { _id: "$farmacia.distrito", total: { $sum: "$total_venta" } } },
echo   { $sort: { total: -1 } }
echo ]);
echo.
pause
goto MENU

:CASS
cls
echo ===============================================================================
echo [PASO 4] APACHE CASSANDRA 5.0: CONSULTA DE SERIE TEMPORAL EN O(1)
echo ===============================================================================
echo Explicación: Búsqueda instantánea en SSTables con Partition + Clustering Key.
echo.
echo COMANDO A EJECUTAR EN CQLSH:
echo USE farmabarrio;
echo SELECT fecha_hora, codigo_venta, monto_total FROM ventas_periodo
echo WHERE periodo_mes = '2026-11' AND farmacia_id = 101 LIMIT 5;
echo.
pause
goto MENU

:HDP
cls
echo ===============================================================================
echo [PASO 5] APACHE HADOOP 3.3+: HDFS DATA LAKE Y LAS 5 ENTIDADES ANALÍTICAS
echo ===============================================================================
echo Explicación: Estructura del Data Lake (/raw, /clean, /analytics) y tablas Hive.
echo.
echo COMANDO HDFS:
echo hdfs dfs -ls /farmabarrio/datalake/
echo.
pause
goto MENU

:BCK
cls
echo ===============================================================================
echo [PASO 6] VERIFICACIÓN TOTAL DE RESTAURACIÓN MULTIGESTOR
echo ===============================================================================
powershell -ExecutionPolicy Bypass -File "%~dp0..\..\4. Backups\Verificar_Restauracion_Total.ps1"
echo.
pause
goto MENU

:ALL
cls
echo ===============================================================================
echo EJECUCIÓN SECUENCIAL DE LA DEMO EN VIVO (2 MINUTOS)
echo ===============================================================================
echo 1. Verificando integridad de backups y datos...
powershell -ExecutionPolicy Bypass -File "%~dp0..\..\4. Backups\Verificar_Restauracion_Total.ps1"
echo.
echo Presione cualquier tecla para volver al menú principal...
pause >nul
goto MENU
