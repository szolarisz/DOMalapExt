SELECT város, COUNT(Város) FROM eladók GROUP BY város;

SELECT dátum, SUM(darab*darabár) FROM eladások GROUP BY dátum;

SELECT termék FROM eladások ORDER BY darab DESC LIMIT 1;

SELECT vezetéknév, keresztnév FROM eladók WHERE fizetés BETWEEN 110000 AND 120000 AND város <> "Debrecen";

SELECT AVG(fizetés) FROM eladók WHERE keresztnév LIKE "J%";

SELECT SUM(darab*darabár) FROM eladások WHERE dátum = "2021.03.03";

SELECT város FROM eladók GROUP BY város HAVING AVG(fizetes) > 105000;

SELECT COUNT(*) FROM eladások WHERE dátum = "2003.12.01";

SELECT eladókód, vezetéknév FROM eladókód WHERE keresztnév IS NULL;

SELECT DISTINCTROW dátum FROM eladások WHERE darab > 1 AND termék = 'esernyő';