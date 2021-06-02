SELECT
    fonoke.nev AS 'a fonok neve',
    beosztott.nev AS 'A beosztott neve'
FROM
    dolgozo AS fonoke
    INNER JOIN dolgozo AS beosztott ON fonoke.wid = beosztott.fonok
ORDER BY
    fonoke.nev;